import { AuthLoginUseCase } from '../../core/application/use-cases/AuthLogin.usecase';
import type { LoginCommand } from '../../core/application/dto/commands/Login.command';
import type { ProviderCallConfig } from '../../core/shared/http';
import type { CanonicalResponse } from '../../core/shared/envelope';
import type { LoginResult } from '../../core/application/dto/results/Login.result';
import type { FacadeOptions } from '../common/types';
import { getAuthLoginAdapter } from '../providers/auth';

export async function authLogin(
  command: LoginCommand,
  http: ProviderCallConfig,
  opts?: FacadeOptions
): Promise<CanonicalResponse<LoginResult>> {
  const adapter = getAuthLoginAdapter(opts?.provider);
  const uc = new AuthLoginUseCase(adapter);
  return uc.execute(command, http);
}
