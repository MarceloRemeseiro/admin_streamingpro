"use client";

import { LayoutWithSidebar } from "@/components/layout-with-sidebar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation"; // <--- Importamos useParams
import { Device } from "@/types";
import * as React from 'react';

export default function EditDevicePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { id } = useParams();              // <--- aquí extraes el valor de [id]

  const [device, setDevice] = useState<Device | null>(null);
  const [formData, setFormData] = useState({ nombre: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    if (id) {
      fetchDevice();
    }
  }, [id]);

  const fetchDevice = async () => {
    try {
      const response = await fetch(`/api/devices/${id}`);
      if (!response.ok) throw new Error('Error al obtener dispositivo');
      const data = await response.json();
      setDevice(data);
      setFormData({ nombre: data.nombre });
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setError('Error al cargar el dispositivo');
      setLoading(false);
    }
  };

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    try {
      const response = await fetch(`/api/devices/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar dispositivo');
      }
      
      router.push('/devices');
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Error al actualizar dispositivo');
      setLoading(false);
    }
  };
  
  if (!mounted) {
    return null;
  }
  
  if (loading && !device) {
    return (
      <LayoutWithSidebar>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </LayoutWithSidebar>
    );
  }
  
  return (
    <LayoutWithSidebar>
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Editar Dispositivo</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="mb-6 p-4 rounded-md bg-gray-100 dark:bg-gray-800">
            <div className="mb-2">
              <span className="text-sm font-semibold">ID (MAC):</span>
              <span className="ml-2 font-mono">{device?.id}</span>
            </div>
            <div className="mb-2">
              <span className="text-sm font-semibold">IP Pública:</span>
              <span className="ml-2">{device?.ipPublica}</span>
            </div>
            <div className="mb-2">
              <span className="text-sm font-semibold">Estado:</span>
              <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                device?.registrado
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
              }`}>
                {device?.registrado ? 'Asignado' : 'Pendiente'}
              </span>
            </div>
            {device?.usuario && (
              <div className="mb-2">
                <span className="text-sm font-semibold">Usuario:</span>
                <span className="ml-2">{device.usuario.username}</span>
              </div>
            )}
            <div>
              <span className="text-sm font-semibold">Última conexión:</span>
              <span className="ml-2">{device?.updatedAt ? new Date(device.updatedAt).toLocaleString() : '-'}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre del dispositivo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-md ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => router.push('/devices')}
                className={`px-4 py-2 rounded-md ${
                  theme === 'dark' 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                }`}
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Guardando...' : 'Guardar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutWithSidebar>
  );
} 