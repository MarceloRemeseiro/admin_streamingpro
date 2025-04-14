import { NextRequest, NextResponse } from 'next/server';
import { deviceService } from '../../../services/device.service';
import { usuarioService } from '../../../services/usuario.service';

// POST /api/devices/[id]/assign - Asignar dispositivo a usuario
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    if (!body.usuarioId) {
      return NextResponse.json(
        { error: 'El campo usuarioId es obligatorio' },
        { status: 400 }
      );
    }
    
    // Verificar que el dispositivo existe
    const device = await deviceService.getById(id);
    if (!device) {
      return NextResponse.json(
        { error: 'Dispositivo no encontrado' },
        { status: 404 }
      );
    }
    
    // Verificar que el usuario existe
    const usuario = await usuarioService.getById(body.usuarioId);
    if (!usuario) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }
    
    // Comprobar que el usuario está activo
    if (!usuario.activo) {
      return NextResponse.json(
        { error: 'No se puede asignar un dispositivo a un usuario inactivo' },
        { status: 400 }
      );
    }
    
    // Asignar el dispositivo al usuario
    const updatedDevice = await deviceService.assignToUser(id, body.usuarioId);
    
    return NextResponse.json({
      message: 'Dispositivo asignado correctamente',
      device: updatedDevice
    });
  } catch (error) {
    console.error('Error al asignar dispositivo:', error);
    return NextResponse.json(
      { error: 'Error al asignar dispositivo' },
      { status: 500 }
    );
  }
}