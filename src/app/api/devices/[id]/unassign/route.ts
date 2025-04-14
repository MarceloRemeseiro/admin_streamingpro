import { NextRequest, NextResponse } from 'next/server';
import { deviceService } from '../../../services/device.service';

// POST /api/devices/[id]/unassign - Desasignar dispositivo de un usuario
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Verificar que el dispositivo existe
    const device = await deviceService.getById(id);
    if (!device) {
      return NextResponse.json(
        { error: 'Dispositivo no encontrado' },
        { status: 404 }
      );
    }
    
    // Comprobar que el dispositivo está asignado
    if (!device.usuarioId) {
      return NextResponse.json(
        { error: 'El dispositivo no está asignado a ningún usuario' },
        { status: 400 }
      );
    }
    
    // Desasignar el dispositivo
    const updatedDevice = await deviceService.unassignFromUser(id);
    
    return NextResponse.json({
      message: 'Dispositivo desasignado correctamente',
      device: updatedDevice
    });
  } catch (error) {
    console.error('Error al desasignar dispositivo:', error);
    return NextResponse.json(
      { error: 'Error al desasignar dispositivo' },
      { status: 500 }
    );
  }
} 