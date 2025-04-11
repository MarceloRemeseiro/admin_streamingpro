import { NextResponse } from 'next/server';
import { deviceService } from '../services/device.service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validar campos requeridos
    if (!body.device_id || !body.public_ip) {
      return NextResponse.json(
        { error: 'Los campos device_id y public_ip son obligatorios' },
        { status: 400 }
      );
    }
    
    // Registrar o actualizar el dispositivo
    await deviceService.registerDevice({
      id: body.device_id,
      ipPublica: body.public_ip,
    });
    
    console.log(`Dispositivo ${body.device_id} conectado desde IP ${body.public_ip}`);
    
    // Decidir a qué servidor debe conectarse el dispositivo
    // Por ahora, simplemente devolvemos la URL base de tu aplicación
    // Esto podría ser más complejo en el futuro (equilibrio de carga, etc.)
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    
    return NextResponse.json({
      server_url: baseUrl,
      message: `Configuración enviada a ${body.device_id}`
    });
    
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}