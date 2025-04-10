import { prisma } from '@/lib/prisma';
import { Usuario } from '@/types';

export const usuarioService = {
  async create(usuarioData: Omit<Usuario, 'id' | 'createdAt' | 'updatedAt' | 'licencia'>) {
    return prisma.usuario.create({
      data: usuarioData,
    });
  },

  async getAll() {
    return prisma.usuario.findMany({
      include: {
        licencia: true,
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

  async update(id: string, usuarioData: Partial<Omit<Usuario, 'id' | 'createdAt' | 'updatedAt' | 'licencia'>>) {
    return prisma.usuario.update({
      where: { id },
      data: usuarioData,
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
}; 