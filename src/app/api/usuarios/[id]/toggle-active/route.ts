import { NextResponse } from 'next/server';
import { usuarioService } from '../../../services/usuario.service';

// PUT /api/usuarios/[id]/toggle-active - Activar/desactivar un usuario
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const usuario = await usuarioService.toggleActive(id);
    
    return NextResponse.json(usuario);
  } catch (error) {
    console.error('Error al cambiar estado del usuario:', error);
    return NextResponse.json(
      { error: 'Error al cambiar estado del usuario' },
      { status: 500 }
    );
  }
} 