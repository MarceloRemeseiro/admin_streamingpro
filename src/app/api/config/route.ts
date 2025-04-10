import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/config - Obtener configuración por userId
export async function GET(request: NextRequest) {
  try {
    // Obtener el userId de la query
    const userId = request.nextUrl.searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Se requiere userId' },
        { status: 400 }
      );
    }
    
    // Buscar la configuración del usuario
    const config = await prisma.config.findUnique({
      where: { userId },
    });
    
    // Si no existe config para este usuario, crear una por defecto
    if (!config) {
      const defaultConfig = await prisma.config.create({
        data: {
          userId,
          dark: false,
        },
      });
      
      return NextResponse.json(defaultConfig);
    }
    
    return NextResponse.json(config);
  } catch (error) {
    console.error('Error al obtener configuración:', error);
    return NextResponse.json(
      { error: 'Error al obtener la configuración' },
      { status: 500 }
    );
  }
}

// POST /api/config - Crear o actualizar configuración
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.userId) {
      return NextResponse.json(
        { error: 'Se requiere userId' },
        { status: 400 }
      );
    }
    
    if (body.dark === undefined) {
      return NextResponse.json(
        { error: 'Se requiere el campo dark' },
        { status: 400 }
      );
    }
    
    // Verificar si ya existe una configuración para este usuario
    const config = await prisma.config.findUnique({
      where: { userId: body.userId },
    });
    
    let result;
    
    if (config) {
      // Actualizar configuración existente
      result = await prisma.config.update({
        where: { userId: body.userId },
        data: { dark: body.dark },
      });
    } else {
      // Crear nueva configuración
      result = await prisma.config.create({
        data: {
          userId: body.userId,
          dark: body.dark,
        },
      });
    }
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error al crear/actualizar configuración:', error);
    return NextResponse.json(
      { error: 'Error al crear/actualizar la configuración' },
      { status: 500 }
    );
  }
} 