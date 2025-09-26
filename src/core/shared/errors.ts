import { CanonicalRaw } from "./envelope";

export class ProviderHttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly provider?: string,
    public readonly raw?: CanonicalRaw,
    public readonly codeHint?: string,
  ) {
    super(message);
  }
}
