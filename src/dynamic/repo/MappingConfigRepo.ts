import { MappingConfig } from "../mapping-config";

export interface MappingConfigRepo {
  getActive(
    provider: string,
    operation: string,
    tenant?: string,
    environment?: string
  ): Promise<MappingConfig | null>;
}
