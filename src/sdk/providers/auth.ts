import type { ProviderKey } from '../common/types';
import { Dy23AuthLoginAdapter } from '../../adapters/outbound/providers/dy23/Dy23AuthLoginAdapter';

export function getAuthLoginAdapter(provider: ProviderKey = 'dy23') {
  switch (provider) {
    case 'dy23': return new Dy23AuthLoginAdapter();
    default: throw new Error(`Provider no soportado para auth: ${provider}`);
  }
}
