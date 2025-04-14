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
  devices?: Device[];
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
  id: string;
  dark: boolean;
  userId: string;
}

export interface Device {
  id: string;
  nombre: string;
  ipPublica: string;
  registrado: boolean;
  usuarioId: string | null;
  usuario?: Usuario;
  createdAt: Date;
  updatedAt: Date;
} 