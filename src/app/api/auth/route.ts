import { NextResponse } from 'next/server';
import { usuarioService } from '../services/usuario.service';

// POST /api/auth - Autenticar usuario
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.username || !body.codigo) {
      return NextResponse.json(
        { error: 'Los campos username y codigo son obligatorios' },
        { status: 400 }
      );
    }
    
    // Buscar usuario por nombre de usuario
    const usuario = await usuarioService.getByUsername(body.username);
    if (!usuario) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 401 }
      );
    }
    
    // Verificar código de activación
    if (usuario.codigo !== body.codigo) {
      return NextResponse.json(
        { error: 'Código de activación inválido' },
        { status: 401 }
      );
    }
    
    // Verificar si el usuario está activo
    if (!usuario.activo) {
      return NextResponse.json(
        { error: 'La cuenta está desactivada' },
        { status: 403 }
      );
    }
    
    // Verificar si la licencia está vigente
    const ahora = new Date();
    if (!(usuario.fechaInicio <= ahora && usuario.fechaFin >= ahora)) {
      return NextResponse.json(
        { error: 'La licencia ha expirado' },
        { status: 403 }
      );
    }
    
    // Autenticación exitosa
    return NextResponse.json({
      message: 'Autenticación exitosa',
      usuario: {
        id: usuario.id,
        username: usuario.username,
        email: usuario.email,
        subdominio: usuario.subdominio,
        activo: usuario.activo,
        fechaInicio: usuario.fechaInicio,
        fechaFin: usuario.fechaFin,
        licencia: {
          id: usuario.licencia.id,
          tipo: usuario.licencia.tipo
        }
      }
    });
  } catch (error) {
    console.error('Error en autenticación:', error);
    return NextResponse.json(
      { error: 'Error en el servidor durante la autenticación' },
      { status: 500 }
    );
  }
} 