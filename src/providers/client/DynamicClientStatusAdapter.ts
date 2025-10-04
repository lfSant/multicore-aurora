import { BaseDynamicAdapter } from "../../adapters/shared/BaseDynamicAdapter";
import { ClientStatusProviderPort } from "../../core/application/ports/outbound/ClientStatusProviderPort";
import { CheckClientActiveCommand } from "../../core/application/dto/commands/CheckClientActive.command";
import { ClientActiveStatus } from "../../core/application/dto/results/ClientActiveStatus.result";
import { ProviderCallConfig } from "../../core/shared/http";
import { ProviderResult } from "../../core/shared/types";

export class ClientStatusDynamicAdapter implements ClientStatusProviderPort {
  constructor(private readonly base: BaseDynamicAdapter<ClientActiveStatus>) {}

  existsActive(
    cmd: CheckClientActiveCommand,
    http: ProviderCallConfig,
    options?: { tenant?: string; environment?: string }
  ): Promise<ProviderResult<ClientActiveStatus>> {
    return this.base.run(cmd, http, options);
  }
}
