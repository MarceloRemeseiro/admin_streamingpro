import { NextResponse } from 'next/server';
import { usuarioService } from '../services/usuario.service';

// GET /api/usuarios - Obtener todos los usuarios
export async function GET() {
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
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.username || !body.email || !body.subdominio || !body.licenciaId) {
      return NextResponse.json(
        { error: 'Los campos username, email, subdominio y licenciaId son obligatorios' },
        { status: 400 }
      );
    }
    
    // Verificar si el usuario ya existe
    const exists = await usuarioService.exists(
      body.username,
      body.email,
      body.subdominio
    );
    
    if (exists) {
      return NextResponse.json(
        { error: 'El username, email o subdominio ya está en uso' },
        { status: 400 }
      );
    }
    
    const usuario = await usuarioService.create({
      username: body.username,
      email: body.email,
      telefono: body.telefono || null,
      ciudad: body.ciudad || null,
      subdominio: body.subdominio,
      licenciaId: body.licenciaId,
    });
    
    return NextResponse.json(usuario, { status: 201 });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    return NextResponse.json(
      { error: 'Error al crear usuario' },
      { status: 500 }
    );
  }
} 