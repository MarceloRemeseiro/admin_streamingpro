import { NextRequest, NextResponse } from 'next/server';
import { deviceService } from '../../../services/device.service';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    // Verificar que el dispositivo existe
    const device = await deviceService.getById(id);
    if (!device) {
      return NextResponse.json(
        { error: 'Dispositivo no encontrado' },
        { status: 404 }
      );
    }
    
    // Verificar si el dispositivo está asignado a un usuario
    if (!device.registrado || !device.usuarioId) {
      return NextResponse.json(
        { error: 'El dispositivo no está asignado a ningún usuario' },
        { status: 400 }
      );
    }
    
    // Obtener el subdominio del usuario (asumiendo que el usuario tiene un subdominio)
    const subdominio = device.usuario?.subdominio;
    if (!subdominio) {
      return NextResponse.json(
        { error: 'El usuario no tiene un subdominio configurado' },
        { status: 400 }
      );
    }
    
    // Construir la URL basada en el subdominio del usuario
    const isProduction = process.env.NODE_ENV === 'production';
    let configUrl;
    
    if (isProduction) {
      configUrl = `https://${subdominio}.streamingpro.es/api/devices/register`;
      console.log(`[PRODUCCIÓN] Configuración para dispositivo ${id}: ${configUrl}`);
    } else {
      configUrl = `http://192.168.1.51:3001`;
      console.log(`[DESARROLLO] Configuración para dispositivo ${id}: ${configUrl}`);
    }
    
    console.log('Entorno:', process.env.NODE_ENV || 'no definido');
    console.log('Configuración completa de dispositivo:', {
      config_url: configUrl,
      device_id: id,
      subdominio,
      registrado: device.registrado,
      usuarioId: device.usuarioId
    });
    
    return NextResponse.json({
      config_url: configUrl,
      device_id: id
    });
    
  } catch (error) {
    console.error('Error al obtener configuración:', error);
    return NextResponse.json(
      { error: 'Error al obtener configuración del dispositivo' },
      { status: 500 }
    );
  }
}