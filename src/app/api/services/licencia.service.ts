import { prisma } from '@/lib/prisma';
import { Licencia } from '@/types';

function generateRandomCode(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  // Generar un código de 6 o 7 caracteres (aleatorio entre 6 y 7)
  const length = Math.floor(Math.random() * 2) + 6;
  let code = '';
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

export const licenciaService = {
  async create(licenciaData: Omit<Licencia, 'id' | 'createdAt' | 'updatedAt' | 'usuarios' | 'codigo'>) {
    const codigo = generateRandomCode();
    
    return prisma.licencia.create({
      data: {
        ...licenciaData,
        codigo
      },
    });
  },

  async getAll() {
    const licencias = await prisma.licencia.findMany({
      include: {
        usuarios: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Añadir un código generado para cada licencia que no lo tenga
    return licencias.map(licencia => {
      // @ts-ignore - Añadimos el campo código simulado si no existe
      if (!licencia.codigo) {
        // @ts-ignore
        licencia.codigo = generateRandomCode();
      }
      return licencia;
    });
  },

  async getById(id: string) {
    const licencia = await prisma.licencia.findUnique({
      where: { id },
      include: {
        usuarios: true,
      },
    });

    if (licencia) {
      // @ts-ignore - Añadimos el campo código simulado si no existe
      if (!licencia.codigo) {
        // @ts-ignore
        licencia.codigo = generateRandomCode();
      }
    }

    return licencia;
  },

  async getByTipo(tipo: string) {
    return prisma.licencia.findMany({
      where: { tipo },
      include: {
        usuarios: true,
      },
    });
  },

  async getActivas() {
    return prisma.licencia.findMany({
      where: { activa: true },
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

  async exists(tipo: string, fechaInicio: Date, fechaFin: Date, excludeId?: string) {
    const where: any = {
      AND: [
        { tipo },
        { fechaInicio },
        { fechaFin }
      ]
    };
    
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

    const ahora = new Date();
    return licencia.activa && 
           licencia.fechaInicio <= ahora && 
           licencia.fechaFin >= ahora;
  },
}; 