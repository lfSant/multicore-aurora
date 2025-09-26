// Respuesta del core dy-23 (desconocida exacta). Definimos variantes típicas.
export interface Dy23ExistsActiveResponseVariantA { activo: boolean; }
export interface Dy23ExistsActiveResponseVariantB { data: { activo: boolean } }
export interface Dy23ExistsActiveResponseVariantC { isActive: boolean; }

export type Dy23ExistsActiveResponse =
  | Dy23ExistsActiveResponseVariantA
  | Dy23ExistsActiveResponseVariantB
  | Dy23ExistsActiveResponseVariantC;
