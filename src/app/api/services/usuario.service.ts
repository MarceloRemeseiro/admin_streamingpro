import { prisma } from '@/lib/prisma';
import { Usuario } from '@/types';

function generateRandomCode(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const length = Math.floor(Math.random() * 2) + 6; // 6 o 7 caracteres
  let code = '';
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

export const usuarioService = {
  async create(data: Omit<Usuario, 'id' | 'createdAt' | 'updatedAt' | 'licencia' | 'codigo' | 'activo' | 'devices'>) {
    const codigo = generateRandomCode();
    
    const { devices, ...dataWithoutDevices } = data as any;
    
    return prisma.usuario.create({
      data: {
        ...dataWithoutDevices,
        codigo,
        activo: true,
        ...(devices ? {
          devices: {
            connect: devices.map((device: { id: string }) => ({ id: device.id }))
          }
        } : {})
      },
      include: {
        licencia: true,
      },
    });
  },

  async getAll() {
    return prisma.usuario.findMany({
      include: {
        licencia: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  async getById(id: string) {
    return prisma.usuario.findUnique({
      where: { id },
      include: {
        licencia: true,
      },
    });
  },

  async getByUsername(username: string) {
    return prisma.usuario.findUnique({
      where: { username },
      include: {
        licencia: true,
      },
    });
  },

  async getByEmail(email: string) {
    return prisma.usuario.findUnique({
      where: { email },
      include: {
        licencia: true,
      },
    });
  },

  async getBySubdominio(subdominio: string) {
    return prisma.usuario.findUnique({
      where: { subdominio },
      include: {
        licencia: true,
      },
    });
  },

  async update(id: string, data: Partial<Omit<Usuario, 'id' | 'createdAt' | 'updatedAt' | 'licencia' | 'codigo' | 'devices'>>) {
    const { devices, ...dataWithoutDevices } = data as any;
    
    return prisma.usuario.update({
      where: { id },
      data: {
        ...dataWithoutDevices,
        ...(devices ? {
          devices: {
            set: devices.map((device: { id: string }) => ({ id: device.id }))
          }
        } : {})
      },
      include: {
        licencia: true,
      },
    });
  },

  async delete(id: string) {
    return prisma.usuario.delete({
      where: { id },
    });
  },

  async exists(username: string, email: string, subdominio: string, excludeId?: string) {
    const where: any = {
      OR: [
        { username },
        { email },
        { subdominio }
      ]
    };
    
    if (excludeId) {
      where.NOT = { id: excludeId };
    }
    
    const existingUsuario = await prisma.usuario.findFirst({
      where,
    });
    return !!existingUsuario;
  },

  async toggleActive(id: string) {
    const usuario = await prisma.usuario.findUnique({
      where: { id },
    });
    
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    
    return prisma.usuario.update({
      where: { id },
      data: {
        activo: !usuario.activo,
      },
      include: {
        licencia: true,
      },
    });
  },

  isVigente: async (id: string): Promise<boolean> => {
    const usuario = await prisma.usuario.findUnique({
      where: { id },
      include: { licencia: true }
    });

    if (!usuario || !usuario.activo) {
      return false;
    }

    const currentDate = new Date();
    return currentDate >= usuario.fechaInicio && currentDate <= usuario.fechaFin;
  }
}; 