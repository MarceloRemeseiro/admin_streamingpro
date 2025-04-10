import { prisma } from '@/lib/prisma';
import { Licencia } from '@/types';

export const licenciaService = {
  async create(licenciaData: { tipo: string }) {    
    return prisma.licencia.create({
      data: licenciaData,
    });
  },

  async getAll() {
    return prisma.licencia.findMany({
      include: {
        usuarios: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  },

  async getById(id: string) {
    return prisma.licencia.findUnique({
      where: { id },
      include: {
        usuarios: true,
      },
    });
  },

  async getByTipo(tipo: string) {
    return prisma.licencia.findMany({
      where: { tipo },
      include: {
        usuarios: true,
      },
    });
  },

  async getVigentes() {
    return prisma.licencia.findMany({
      include: {
        usuarios: true,
      },
    });
  },

  async update(id: string, licenciaData: Partial<Omit<Licencia, 'id' | 'createdAt' | 'updatedAt' | 'usuarios'>>) {
    return prisma.licencia.update({
      where: { id },
      data: licenciaData,
      include: {
        usuarios: true,
      },
    });
  },

  async delete(id: string) {
    return prisma.licencia.delete({
      where: { id },
    });
  },

  async exists(tipo: string, excludeId?: string) {
    const where: any = { tipo };
    
    if (excludeId) {
      where.NOT = { id: excludeId };
    }
    
    const existingLicencia = await prisma.licencia.findFirst({
      where,
    });
    return !!existingLicencia;
  },

  async verificarVigencia(id: string) {
    const licencia = await prisma.licencia.findUnique({
      where: { id },
    });

    if (!licencia) return false;

    return true;
  },
}; 