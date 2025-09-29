export class ProviderHttpError extends Error {
  constructor(
    public message: string,
    public status: number,
    public provider: string,
    public raw?: { headersCore: any; dataCore: any },
    public codeHint?: string
  ) { super(message); }
}

export class MappingConfigError extends Error {
  constructor(public details: string) { super(`MappingConfigError: ${details}`); }
}
