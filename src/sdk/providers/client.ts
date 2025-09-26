import type { ProviderKey } from '../common/types';
import { Dy23ClientStatusAdapter } from '../../adapters/outbound/providers/dy23/Dy23ClientStatusAdapter';

export function getClientStatusAdapter(provider: ProviderKey = 'dy23') {
  switch (provider) {
    case 'dy23': return new Dy23ClientStatusAdapter();
    default: throw new Error(`Provider no soportado para client: ${provider}`);
  }
}
