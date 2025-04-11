"use client";

import { LayoutWithSidebar } from "@/components/layout-with-sidebar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Device, Usuario } from "@/types";

export default function AssignDevicePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  const [devices, setDevices] = useState<Device[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  
  const [formData, setFormData] = useState({
    deviceId: '',
    usuarioId: '',
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  
  useEffect(() => {
    setMounted(true);
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Obtener dispositivos no asignados
      const devicesResponse = await fetch('/api/devices?unassigned=true');
      if (!devicesResponse.ok) throw new Error('Error al obtener dispositivos');
      const devicesData = await devicesResponse.json();
      
      // Obtener usuarios activos
      const usuariosResponse = await fetch('/api/usuarios');
      if (!usuariosResponse.ok) throw new Error('Error al obtener usuarios');
      const usuariosData = await usuariosResponse.json();
      const usuariosActivos = usuariosData.filter((usuario: Usuario) => usuario.activo);
      
      setDevices(devicesData);
      setUsuarios(usuariosActivos);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setError('Error al cargar los datos');
      setLoading(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    if (!formData.deviceId || !formData.usuarioId) {
      setError('Debe seleccionar un dispositivo y un usuario');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/devices/${formData.deviceId}/assign`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuarioId: formData.usuarioId }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al asignar dispositivo');
      }
      
      setMessage('Dispositivo asignado correctamente');
      
      // Redirigir a la página de dispositivos después de 2 segundos
      setTimeout(() => {
        router.push('/devices');
      }, 2000);
      
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Error al asignar dispositivo');
      setLoading(false);
    }
  };
  
  // Si no está montado
  if (!mounted) {
    return null;
  }
  
  return (
    <LayoutWithSidebar>
      <div className="max-w-2xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Asignar Dispositivo
          </h1>
          <button
            onClick={() => router.push('/devices')}
            className={`px-4 py-2 rounded-md ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-900"
            }`}
          >
            Volver
          </button>
        </div>
        
        {error && (
          <div className={`p-4 mb-6 rounded-md ${theme === "dark" ? "bg-red-900 text-red-200" : "bg-red-100 text-red-800"}`}>
            {error}
          </div>
        )}
        
        {message && (
          <div className={`p-4 mb-6 rounded-md ${theme === "dark" ? "bg-green-900 text-green-200" : "bg-green-100 text-green-800"}`}>
            {message}
          </div>
        )}
        
        {loading && !devices.length && !usuarios.length ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : devices.length === 0 ? (
          <div className={`p-6 rounded-md text-center ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"} shadow-md`}>
            No hay dispositivos sin asignar disponibles.
          </div>
        ) : usuarios.length === 0 ? (
          <div className={`p-6 rounded-md text-center ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"} shadow-md`}>
            No hay usuarios activos disponibles para asignar dispositivos.
          </div>
        ) : (
          <div className={`p-6 rounded-md shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="deviceId" className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  Dispositivo
                </label>
                <select
                  id="deviceId"
                  name="deviceId"
                  value={formData.deviceId}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                >
                  <option value="">Seleccione un dispositivo</option>
                  {devices.map((device) => (
                    <option key={device.id} value={device.id}>
                      {device.nombre} ({device.id}) - {device.ipPublica}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="usuarioId" className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  Usuario
                </label>
                <select
                  id="usuarioId"
                  name="usuarioId"
                  value={formData.usuarioId}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-md ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                >
                  <option value="">Seleccione un usuario</option>
                  {usuarios.map((usuario) => (
                    <option key={usuario.id} value={usuario.id}>
                      {usuario.username}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Procesando..." : "Asignar Dispositivo"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </LayoutWithSidebar>
  );
} 