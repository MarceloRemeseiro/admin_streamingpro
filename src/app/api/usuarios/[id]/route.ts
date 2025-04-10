import { NextResponse } from 'next/server';
import { usuarioService } from '../../services/usuario.service';

// GET /api/usuarios/[id] - Obtener un usuario por ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const usuario = await usuarioService.getById(id);
    
    if (!usuario) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(usuario);
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    return NextResponse.json(
      { error: 'Error al obtener usuario' },
      { status: 500 }
    );
  }
}

// PUT /api/usuarios/[id] - Actualizar un usuario
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.username || !body.email || !body.subdominio || !body.licenciaId || !body.fechaInicio || !body.fechaFin) {
      return NextResponse.json(
        { error: 'Los campos username, email, subdominio, licenciaId, fechaInicio y fechaFin son obligatorios' },
        { status: 400 }
      );
    }
    
    // Validar que la fecha de fin sea posterior a la fecha de inicio
    const fechaInicio = new Date(body.fechaInicio);
    const fechaFin = new Date(body.fechaFin);
    
    if (fechaFin <= fechaInicio) {
      return NextResponse.json(
        { error: 'La fecha de fin debe ser posterior a la fecha de inicio' },
        { status: 400 }
      );
    }
    
    // Verificar si el usuario ya existe (excluyendo el actual)
    const exists = await usuarioService.exists(
      body.username,
      body.email,
      body.subdominio,
      id
    );
    
    if (exists) {
      return NextResponse.json(
        { error: 'El username, email o subdominio ya está en uso' },
        { status: 400 }
      );
    }
    
    const usuario = await usuarioService.update(id, {
      username: body.username,
      email: body.email,
      telefono: body.telefono || null,
      ciudad: body.ciudad || null,
      subdominio: body.subdominio,
      licenciaId: body.licenciaId,
      fechaInicio,
      fechaFin,
    });
    
    return NextResponse.json(usuario);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    return NextResponse.json(
      { error: 'Error al actualizar usuario' },
      { status: 500 }
    );
  }
}

// DELETE /api/usuarios/[id] - Eliminar un usuario
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    await usuarioService.delete(id);
    return NextResponse.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    return NextResponse.json(
      { error: 'Error al eliminar usuario' },
      { status: 500 }
    );
  }
} 