import { NextRequest, NextResponse } from 'next/server';
import { deviceService } from '../../services/device.service';

// POST /api/devices/register - Endpoint para que los Raspberry Pi se registren
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Aceptar formato antiguo o nuevo para MAC e IP
    const id = body.mac || body.id;
    const ipPublica = body.ipPublica || body.ip;
    
    // Validar campos obligatorios
    if (!id) {
      return NextResponse.json(
        { error: 'Se requiere la MAC del dispositivo (id)' },
        { status: 400 }
      );
    }
    
    if (!ipPublica) {
      return NextResponse.json(
        { error: 'Se requiere la IP pública del dispositivo' },
        { status: 400 }
      );
    }
    
    // Registrar o actualizar el dispositivo
    const device = await deviceService.registerDevice({ id, ipPublica });
    
    // Preparar la respuesta
    const esNuevo = !body.mac && !body.ip;
    const mensaje = esNuevo ? 'Dispositivo registrado correctamente' : 'Dispositivo actualizado correctamente';
    
    // Construir la respuesta
    const respuesta: any = {
      mensaje,
      id: device.id,
      status: device.registrado ? 'assigned' : 'unassigned'
    };
    
    // Si el dispositivo está asignado a un usuario, incluir información de streaming
    if (device.registrado && device.usuario) {
      respuesta.subdominio = device.usuario.subdominio;
      
      // Construir URL basada en el subdominio (para desarrollo o producción)
      const isProduction = process.env.NODE_ENV === 'production';
      if (isProduction) {
        respuesta.streamingUrl = `https://${device.usuario.subdominio}.streamingpro.es/api/devices/register`;
        console.log(`[PRODUCCIÓN] Dispositivo ${id} asignado a URL: ${respuesta.streamingUrl}`);
      } else {
        respuesta.streamingUrl = `http://192.168.1.51:3001`;
        console.log(`[DESARROLLO] Dispositivo ${id} asignado a URL: ${respuesta.streamingUrl}`);
      }
    } else {
      respuesta.mensaje = 'Dispositivo no asignado. Debe asignarse desde el panel de administración.';
      console.log(`Dispositivo ${id} no asignado a ningún usuario`);
    }
    
    return NextResponse.json(respuesta);
  } catch (error: any) {
    console.error('Error al registrar el dispositivo:', error);
    return NextResponse.json(
      { error: `Error al registrar el dispositivo: ${error.message}` },
      { status: 500 }
    );
  }
}