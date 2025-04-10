export interface Usuario {
  id: string;
  username: string;
  email: string;
  telefono: string | null;
  ciudad: string | null;
  subdominio: string;
  licenciaId: string;
  licencia?: Licencia;
  createdAt: Date;
  updatedAt: Date;
  codigoGenerado?: string;
}

export interface Licencia {
  id: string;
  tipo: string;
  fechaInicio: Date;
  fechaFin: Date;
  activa: boolean;
  codigo: string;
  usuarios?: Usuario[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Config {
  id: number;
  dark: boolean;
  userId: string;
} 