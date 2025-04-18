import { NextRequest, NextResponse } from 'next/server';
import { licenciaService } from '../../services/licencia.service';

// GET /api/licencias/[id] - Obtener una licencia por ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const licencia = await licenciaService.getById(id);
    
    if (!licencia) {
      return NextResponse.json(
        { error: 'Licencia no encontrada' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(licencia);
  } catch (error) {
    console.error('Error al obtener licencia:', error);
    return NextResponse.json(
      { error: 'Error al obtener licencia' },
      { status: 500 }
    );
  }
}

// PUT /api/licencias/[id] - Actualizar una licencia
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.tipo) {
      return NextResponse.json(
        { error: 'El campo tipo es obligatorio' },
        { status: 400 }
      );
    }
    
    const licencia = await licenciaService.update(id, {
      tipo: body.tipo
    });
    
    return NextResponse.json(licencia);
  } catch (error) {
    console.error('Error al actualizar licencia:', error);
    return NextResponse.json(
      { error: 'Error al actualizar licencia' },
      { status: 500 }
    );
  }
}

// DELETE /api/licencias/[id] - Eliminar una licencia
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await licenciaService.delete(id);
    return NextResponse.json({ message: 'Licencia eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar licencia:', error);
    return NextResponse.json(
      { error: 'Error al eliminar licencia' },
      { status: 500 }
    );
  }
} 