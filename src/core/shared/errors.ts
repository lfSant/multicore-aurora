export class ProviderHttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly provider?: string,
    public readonly raw?: { headersCore: any; dataCore: any; timeResponseMs?: number, urlRequest?: string, bodyRequest?: any },
    public readonly codeHint?: string,
    public readonly clientMessage?: string
  ) {
    super(message);
    this.name = 'ProviderHttpError';
  }
}

export class MappingConfigError extends Error {
  constructor(public details: string) { super(`MappingConfigError: ${details}`); }
}
