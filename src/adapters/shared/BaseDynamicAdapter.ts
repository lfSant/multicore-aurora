import { MappingConfigRepo } from "../../dynamic/repo/MappingConfigRepo";
import { KVCache } from "../../dynamic/cache/KVCache";
import { MappingConfig } from "../../dynamic/mapping-config";
import { mapRequest, mapResponse, evaluateBusinessError } from "../../dynamic/engine";
import { ProviderCallConfig } from "../../core/shared/http";
import { executeHttp } from "../http/axios-executor";
import { ProviderHttpError } from "../../core/shared/errors";

export class BaseDynamicAdapter<TItem> {
  constructor(
    private readonly repo: MappingConfigRepo,
    private readonly cache: KVCache,
    private readonly providerKey: string,
    private readonly operationKey: string,
    private readonly cacheTTL = 60
  ) {}

  private cacheKey(tenant?: string, env?: string) {
    return `${tenant || '_'}/${env || '_'}/${this.providerKey}/${this.operationKey}`;
  }

  async run(stdInput: any, http: ProviderCallConfig, options?: { tenant?: string; environment?: string }) {
    const ck = this.cacheKey(options?.tenant, options?.environment);

    let cfg: MappingConfig | null = await this.cache.get<MappingConfig>(ck);
    if (!cfg) {
      cfg = await this.repo.getActive(this.providerKey, this.operationKey, options?.tenant, options?.environment);
      if (!cfg) throw new ProviderHttpError("Config de mapeo no disponible", 500, this.providerKey);
      await this.cache.set(ck, cfg, this.cacheTTL);
    }

    const req = mapRequest(stdInput, cfg);
    const res = await executeHttp({
      url: http.url,
      method: http.method ?? 'POST',
      headers: { ...(http.headers || {}), ...(req.headers || {}) },
      params: { ...(http.params || {}), ...(req.params || {}) },
      timeoutMs: http.timeoutMs,
      data: req.body,
    });

    if (res.status < 200 || res.status >= 300) {
      throw new ProviderHttpError(
        `Proveedor ${this.providerKey} (${this.operationKey}) HTTP ${res.status}`,
        res.status,
        this.providerKey,
        { headersCore: res.headers, dataCore: res.data }
      );
    }

    const biz = evaluateBusinessError(200, res.data, (cfg as any).error_rules_json || []);
    if (biz) {
      throw new ProviderHttpError(
        biz.server,
        biz.status,
        this.providerKey,
        { headersCore: res.headers, dataCore: res.data },
        biz.codeHint
      );
    }

    const mapped = mapResponse(res.data, cfg);
    return {
      items: (mapped.items as TItem[]) ?? [],
      status: res.status,
      provider: this.providerKey,
      raw: cfg.response_raw ? { headersCore: res.headers, dataCore: res.data } : undefined
    };
  }
}
