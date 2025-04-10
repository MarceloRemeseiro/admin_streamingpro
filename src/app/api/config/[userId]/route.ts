import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
  params: {
    userId: string;
  };
}

// GET /api/config/[userId] - Obtener configuración específica
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { userId } = params;
    
    if (!userId) {
      return NextResponse.json(
        { error: 'ID de usuario inválido' },
        { status: 400 }
      );
    }
    
    // Buscar la configuración del usuario
    const config = await prisma.config.findUnique({
      where: { userId },
    });
    
    if (!config) {
      return NextResponse.json(
        { error: 'Configuración no encontrada' },
        { status: 404 }
      );
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

// PUT /api/config/[userId] - Actualizar configuración
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const { userId } = params;
    
    if (!userId) {
      return NextResponse.json(
        { error: 'ID de usuario inválido' },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    
    if (body.dark === undefined) {
      return NextResponse.json(
        { error: 'Se requiere el campo dark' },
        { status: 400 }
      );
    }
    
    // Verificar si existe la configuración
    const configExistente = await prisma.config.findUnique({
      where: { userId },
    });
    
    if (!configExistente) {
      // Si no existe, crear una nueva
      const newConfig = await prisma.config.create({
        data: {
          userId,
          dark: body.dark,
        },
      });
      
      return NextResponse.json(newConfig);
    }
    
    // Actualizar la configuración existente
    const configActualizada = await prisma.config.update({
      where: { userId },
      data: { dark: body.dark },
    });
    
    return NextResponse.json(configActualizada);
  } catch (error) {
    console.error('Error al actualizar configuración:', error);
    return NextResponse.json(
      { error: 'Error al actualizar la configuración' },
      { status: 500 }
    );
  }
}

// DELETE /api/config/[userId] - Eliminar configuración
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const { userId } = params;
    
    if (!userId) {
      return NextResponse.json(
        { error: 'ID de usuario inválido' },
        { status: 400 }
      );
    }
    
    // Verificar si existe la configuración
    const configExistente = await prisma.config.findUnique({
      where: { userId },
    });
    
    if (!configExistente) {
      return NextResponse.json(
        { error: 'Configuración no encontrada' },
        { status: 404 }
      );
    }
    
    // Eliminar la configuración
    await prisma.config.delete({
      where: { userId },
    });
    
    return NextResponse.json(
      { message: 'Configuración eliminada correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al eliminar configuración:', error);
    return NextResponse.json(
      { error: 'Error al eliminar la configuración' },
      { status: 500 }
    );
  }
} 