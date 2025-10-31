import { createBaseDynamicAdapter, AdapterFactoryOptions } from "../common/factories";
import type { ProviderCallConfig } from "../../core/shared/http";
import type { CanonicalResponse } from "../../core/shared/types";
import { GetClientLoansCommand } from "../../core/application/dto/commands/GetClientLoans.command";
import { ClientLoan } from "../../core/application/dto/results/ClientLoan.result";
import { GetClientLoansUseCase } from "../../core/application/use-cases/GetClientLoans.usecase";
import { DynamicClientLoansAdapter } from "../../providers/loan/DynamicClientLoansAdapter";

export function createClientLoansUseCase(
  providerKey: string,
  operationKey = "getClientLoans",
  adapterOptions?: AdapterFactoryOptions
) {
  const base = createBaseDynamicAdapter<ClientLoan[]>(providerKey, operationKey, adapterOptions);
  const port = new DynamicClientLoansAdapter(base);
  return new GetClientLoansUseCase(port);
}

export async function getClientLoans(
  command: GetClientLoansCommand,
  http: ProviderCallConfig,
  opts: { provider: string; operation?: string; adapterOptions?: AdapterFactoryOptions }
): Promise<CanonicalResponse<ClientLoan[]>> {
  const uc = createClientLoansUseCase(
    opts.provider,
    opts.operation ?? "getClientLoans",
    opts.adapterOptions
  );
  return uc.execute(command, http);
}
