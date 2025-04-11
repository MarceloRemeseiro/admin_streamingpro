import { prisma } from '@/lib/prisma';
import { Device } from '@/types';

export const deviceService = {
  // Registrar un nuevo dispositivo o actualizar uno existente
  async registerDevice(data: { id: string; ipPublica: string }) {
    const existingDevice = await prisma.device.findUnique({
      where: { id: data.id },
      include: {
        usuario: true
      }
    });

    if (existingDevice) {
      // Actualizar sólo la IP pública
      return await prisma.device.update({
        where: { id: data.id },
        data: { ipPublica: data.ipPublica },
        include: {
          usuario: true
        }
      });
    } else {
      // Crear un nuevo dispositivo
      return await prisma.device.create({
        data: {
          id: data.id,
          nombre: `Dispositivo ${data.id.slice(-6)}`,
          ipPublica: data.ipPublica,
          registrado: false,
        },
        include: {
          usuario: true
        }
      });
    }
  },
  
  // Obtener todos los dispositivos
  async getAll(): Promise<Device[]> {
    const devices = await prisma.device.findMany({
      include: {
        usuario: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return devices.map(device => this.mapToDevice(device));
  },
  
  // Obtener un dispositivo por ID (MAC)
  async getById(id: string): Promise<Device | null> {
    const device = await prisma.device.findUnique({
      where: { id },
      include: {
        usuario: true,
      },
    });
    
    return device ? this.mapToDevice(device) : null;
  },
  
  // Obtener dispositivos por ID de usuario
  async getByUsuarioId(usuarioId: string): Promise<Device[]> {
    const devices = await prisma.device.findMany({
      where: { usuarioId },
      include: {
        usuario: true,
      },
    });
    
    return devices.map(device => this.mapToDevice(device));
  },
  
  // Obtener dispositivos no asignados a ningún usuario
  async getUnassignedDevices(): Promise<Device[]> {
    const devices = await prisma.device.findMany({
      where: { usuarioId: null },
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return devices.map(device => this.mapToDevice(device));
  },
  
  // Actualizar nombre de dispositivo
  async updateNombre(id: string, nombre: string): Promise<Device> {
    const device = await prisma.device.update({
      where: { id },
      data: { nombre },
      include: {
        usuario: true,
      },
    });
    
    return this.mapToDevice(device);
  },
  
  // Asignar dispositivo a un usuario
  async assignToUser(id: string, usuarioId: string): Promise<Device> {
    const device = await prisma.device.update({
      where: { id },
      data: { 
        usuarioId,
        registrado: true,
      },
      include: {
        usuario: true,
      },
    });
    
    return this.mapToDevice(device);
  },
  
  // Desasignar dispositivo de un usuario
  async unassignFromUser(id: string): Promise<Device> {
    const device = await prisma.device.update({
      where: { id },
      data: { 
        usuarioId: null,
        registrado: false,
      },
      include: {
        usuario: true,
      },
    });
    
    return this.mapToDevice(device);
  },
  
  // Eliminar un dispositivo
  async delete(id: string): Promise<void> {
    await prisma.device.delete({
      where: { id },
    });
  },
  
  // Mapear el resultado de Prisma al tipo Device
  mapToDevice(prismaDevice: any): Device {
    // Realizar una comprobación profunda para asegurar que tenemos la información completa del usuario
    const usuario = prismaDevice.usuario ? {
      id: prismaDevice.usuario.id,
      username: prismaDevice.usuario.username,
      email: prismaDevice.usuario.email,
      telefono: prismaDevice.usuario.telefono,
      ciudad: prismaDevice.usuario.ciudad,
      subdominio: prismaDevice.usuario.subdominio,
      codigo: prismaDevice.usuario.codigo,
      activo: prismaDevice.usuario.activo,
      fechaInicio: prismaDevice.usuario.fechaInicio,
      fechaFin: prismaDevice.usuario.fechaFin,
      licenciaId: prismaDevice.usuario.licenciaId,
      createdAt: prismaDevice.usuario.createdAt,
      updatedAt: prismaDevice.usuario.updatedAt,
    } : undefined;
    
    return {
      id: prismaDevice.id,
      nombre: prismaDevice.nombre,
      ipPublica: prismaDevice.ipPublica,
      registrado: prismaDevice.registrado,
      usuarioId: prismaDevice.usuarioId,
      usuario: usuario,
      createdAt: prismaDevice.createdAt,
      updatedAt: prismaDevice.updatedAt,
    };
  }
}; 