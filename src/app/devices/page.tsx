"use client";

import { LayoutWithSidebar } from "@/components/layout-with-sidebar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Device } from "@/types";
import { useRouter } from "next/navigation";

export default function DevicesPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    setMounted(true);
    fetchDevices();
  }, []);
  
  const fetchDevices = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/devices');
      
      if (!response.ok) {
        throw new Error('Error al cargar los dispositivos');
      }
      
      const data = await response.json();
      console.log("Dispositivos recibidos:", data);
      setDevices(data);
      setError(null);
    } catch (err) {
      console.error('Error al cargar dispositivos:', err);
      setError('No se pudieron cargar los dispositivos. Intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleDelete = async (id: string) => {
    if (!confirm('¿Está seguro que desea eliminar este dispositivo?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/devices/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Error al eliminar el dispositivo');
      }
      
      // Actualizar la lista de dispositivos
      fetchDevices();
    } catch (err) {
      console.error('Error al eliminar el dispositivo:', err);
      setError('No se pudo eliminar el dispositivo. Intente nuevamente.');
    }
  };
  
  const handleUnassign = async (id: string) => {
    if (!confirm('¿Está seguro que desea desasignar este dispositivo?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/devices/${id}/unassign`, {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Error al desasignar el dispositivo');
      }
      
      // Actualizar la lista de dispositivos
      fetchDevices();
    } catch (err) {
      console.error('Error al desasignar el dispositivo:', err);
      setError('No se pudo desasignar el dispositivo. Intente nuevamente.');
    }
  };
  
  // Si no está montado, mostrar una versión estática
  if (!mounted) {
    return (
      <LayoutWithSidebar>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Dispositivos</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Asignar Dispositivo
            </button>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden p-6">
            Cargando...
          </div>
        </div>
      </LayoutWithSidebar>
    );
  }

  return (
    <LayoutWithSidebar>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Dispositivos</h1>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={() => router.push('/devices/assign')}
          >
            Asignar Dispositivo
          </button>
        </div>

        {error && (
          <div className={`p-4 rounded-md ${theme === "dark" ? "bg-red-900 text-red-200" : "bg-red-100 text-red-800"}`}>
            {error}
          </div>
        )}

        {loading ? (
          <div className={`shadow-md rounded-lg overflow-hidden p-6 text-center ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}>
            Cargando dispositivos...
          </div>
        ) : devices.length === 0 ? (
          <div className={`shadow-md rounded-lg overflow-hidden p-6 text-center ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}>
            No hay dispositivos registrados. Los dispositivos se registrarán automáticamente cuando se conecten.
          </div>
        ) : (
          <div className={`shadow-md rounded-lg overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <table className={`min-w-full divide-y ${theme === "dark" ? "divide-gray-700" : "divide-gray-200"}`}>
              <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-50"}>
                <tr>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>ID (MAC)</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Nombre</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>IP Pública</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Estado</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Usuario</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Subdominio</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Última conexión</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Acciones</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${theme === "dark" ? "divide-gray-700 bg-gray-800" : "divide-gray-200 bg-white"}`}>
                {devices.map((device) => (
                  <tr key={device.id} className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-mono ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      {device.id}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      {device.nombre}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      {device.ipPublica}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm`}>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        device.registrado
                          ? theme === "dark" ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                          : theme === "dark" ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {device.registrado ? 'Asignado' : 'Pendiente'}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      {device.usuario ? device.usuario.username : '-'}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      {device.usuario ? device.usuario.subdominio : '-'}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      {new Date(device.updatedAt).toLocaleString()}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      <button 
                        className={theme === "dark" ? "text-blue-400 hover:text-blue-300 mr-3" : "text-blue-600 hover:text-blue-900 mr-3"}
                        onClick={() => router.push(`/devices/edit/${device.id}`)}
                      >
                        Editar
                      </button>
                      {device.registrado && (
                        <button 
                          className={theme === "dark" ? "text-orange-400 hover:text-orange-300 mr-3" : "text-orange-600 hover:text-orange-900 mr-3"}
                          onClick={() => handleUnassign(device.id)}
                        >
                          Desasignar
                        </button>
                      )}
                      <button 
                        className={theme === "dark" ? "text-red-400 hover:text-red-300" : "text-red-600 hover:text-red-900"}
                        onClick={() => handleDelete(device.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </LayoutWithSidebar>
  );
} 