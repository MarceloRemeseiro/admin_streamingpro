import { NextResponse } from 'next/server';
import { deviceService } from '../../../services/device.service';
import { usuarioService } from '../../../services/usuario.service';

// GET /api/usuarios/[id]/devices - Obtener dispositivos de un usuario
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    
    // Verificar que el usuario existe
    const usuario = await usuarioService.getById(id);
    if (!usuario) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }
    
    // Obtener los dispositivos del usuario
    const devices = await deviceService.getByUsuarioId(id);
    
    return NextResponse.json(devices);
  } catch (error) {
    console.error('Error al obtener dispositivos del usuario:', error);
    return NextResponse.json(
      { error: 'Error al obtener dispositivos del usuario' },
      { status: 500 }
    );
  }
} 