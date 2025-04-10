import { NextResponse } from 'next/server';
import { licenciaService } from '../services/licencia.service';

// GET /api/licencias - Obtener todas las licencias
export async function GET() {
  try {
    const licencias = await licenciaService.getAll();
    return NextResponse.json(licencias);
  } catch (error) {
    console.error('Error al obtener licencias:', error);
    return NextResponse.json(
      { error: 'Error al obtener licencias' },
      { status: 500 }
    );
  }
}

// POST /api/licencias - Crear una nueva licencia
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.tipo || !body.fechaInicio || !body.fechaFin) {
      return NextResponse.json(
        { error: 'Los campos tipo, fechaInicio y fechaFin son obligatorios' },
        { status: 400 }
      );
    }
    
    // El servicio generará el código aleatorio automáticamente
    const licencia = await licenciaService.create({
      tipo: body.tipo,
      fechaInicio: new Date(body.fechaInicio),
      fechaFin: new Date(body.fechaFin),
      activa: body.activa ?? true,
    });
    
    return NextResponse.json(licencia, { status: 201 });
  } catch (error) {
    console.error('Error al crear licencia:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || 'Error al crear licencia' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Error al crear licencia' },
      { status: 500 }
    );
  }
} 