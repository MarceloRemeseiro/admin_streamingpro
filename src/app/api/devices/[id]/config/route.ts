import { NextResponse } from 'next/server';
import { deviceService } from '../../../services/device.service';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
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
    // URL de desarrollo
    const configUrl = `http://192.168.1.51:3001`;
    // URL de producción (comentada)
    // const configUrl = `http://${subdominio}.streamingpro.es:3000`;
    
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