export interface Usuario {
  id: string;
  username: string;
  email: string;
  telefono: string | null;
  ciudad: string | null;
  subdominio: string;
  codigo: string;
  activo: boolean;
  fechaInicio: Date;
  fechaFin: Date;
  licenciaId: string;
  licencia?: Licencia;
  createdAt: Date;
  updatedAt: Date;
}

export interface Licencia {
  id: string;
  tipo: string;
  usuarios?: Usuario[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Config {
  id: number;
  dark: boolean;
  userId: string;
} 