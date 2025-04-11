import { NextResponse } from 'next/server';
import { deviceService } from '../../services/device.service';

// GET /api/devices/[id] - Obtener un dispositivo por ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const device = await deviceService.getById(id);
    
    if (!device) {
      return NextResponse.json(
        { error: 'Dispositivo no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(device);
  } catch (error) {
    console.error('Error al obtener dispositivo:', error);
    return NextResponse.json(
      { error: 'Error al obtener dispositivo' },
      { status: 500 }
    );
  }
}

// PUT /api/devices/[id] - Actualizar nombre del dispositivo
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    if (!body.nombre) {
      return NextResponse.json(
        { error: 'El campo nombre es obligatorio' },
        { status: 400 }
      );
    }
    
    const device = await deviceService.updateNombre(id, body.nombre);
    
    return NextResponse.json(device);
  } catch (error) {
    console.error('Error al actualizar dispositivo:', error);
    return NextResponse.json(
      { error: 'Error al actualizar dispositivo' },
      { status: 500 }
    );
  }
}

// DELETE /api/devices/[id] - Eliminar un dispositivo
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    await deviceService.delete(id);
    
    return NextResponse.json(
      { message: 'Dispositivo eliminado correctamente' }
    );
  } catch (error) {
    console.error('Error al eliminar dispositivo:', error);
    return NextResponse.json(
      { error: 'Error al eliminar dispositivo' },
      { status: 500 }
    );
  }
} 