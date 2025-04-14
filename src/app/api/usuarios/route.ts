import { NextRequest, NextResponse } from 'next/server';
import { usuarioService } from '../services/usuario.service';

// GET /api/usuarios - Obtener todos los usuarios
export async function GET(request: NextRequest) {
  try {
    const usuarios = await usuarioService.getAll();
    return NextResponse.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    return NextResponse.json(
      { error: 'Error al obtener usuarios' },
      { status: 500 }
    );
  }
}

// POST /api/usuarios - Crear un nuevo usuario
export async function POST(request: NextRequest) {
  try {
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
    
    // Verificar si el usuario ya existe
    const exists = await usuarioService.exists(body.username, body.email, body.subdominio);
    
    if (exists) {
      return NextResponse.json(
        { error: 'El username, email o subdominio ya está en uso' },
        { status: 400 }
      );
    }
    
    // Crear usuario (el código y el estado activo se generan automáticamente)
    const usuario = await usuarioService.create({
      username: body.username,
      email: body.email,
      telefono: body.telefono || null,
      ciudad: body.ciudad || null,
      subdominio: body.subdominio,
      licenciaId: body.licenciaId,
      fechaInicio,
      fechaFin,
    });
    
    return NextResponse.json(usuario, { status: 201 });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || 'Error al crear usuario' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Error al crear usuario' },
      { status: 500 }
    );
  }
} 