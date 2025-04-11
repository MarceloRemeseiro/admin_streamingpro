import { NextRequest, NextResponse } from 'next/server';
import { deviceService } from '../services/device.service';

// GET /api/devices - Obtener todos los dispositivos
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const unassigned = searchParams.get('unassigned');
    
    if (unassigned === 'true') {
      const devices = await deviceService.getUnassignedDevices();
      return NextResponse.json(devices);
    } else {
      const devices = await deviceService.getAll();
      return NextResponse.json(devices);
    }
  } catch (error: any) {
    console.error('Error al obtener dispositivos:', error);
    return NextResponse.json(
      { error: 'Error al obtener dispositivos', message: error.message },
      { status: 500 }
    );
  }
} 