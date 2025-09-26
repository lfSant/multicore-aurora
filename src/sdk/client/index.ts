import { CheckClientActiveUseCase } from '../../core/application/use-cases/CheckClientActive.usecase';
import type { CheckClientActiveCommand } from '../../core/application/dto/commands/CheckClientActive.command';
import type { ProviderCallConfig } from '../../core/shared/http';
import type { CanonicalResponse } from '../../core/shared/envelope';
import type { ClientActiveStatus } from '../../core/application/dto/results/ClientActiveStatus.result';
import type { FacadeOptions } from '../common/types';
import { getClientStatusAdapter } from '../providers/client';

export async function checkClientActive(
  command: CheckClientActiveCommand,
  http: ProviderCallConfig,
  opts?: FacadeOptions
): Promise<CanonicalResponse<ClientActiveStatus>> {
  const adapter = getClientStatusAdapter(opts?.provider);
  const uc = new CheckClientActiveUseCase(adapter);
  return uc.execute(command, http);
}
