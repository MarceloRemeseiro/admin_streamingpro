"use client";

import { LayoutWithSidebar } from "@/components/layout-with-sidebar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Licencia } from "@/types";
import * as React from 'react';

interface PageParams {
  id: string;
}

export default function EditarLicenciaPage({ params }: { params: PageParams }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    tipo: '',
    fechaInicio: '',
    fechaFin: '',
    activa: true,
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { id } = React.use(params as unknown as Promise<PageParams>);
  
  useEffect(() => {
    setMounted(true);
    fetchLicencia();
  }, [id]);
  
  const fetchLicencia = async () => {
    try {
      const response = await fetch(`/api/licencias/${id}`);
      if (!response.ok) throw new Error('Error al obtener licencia');
      const data = await response.json();
      setFormData({
        tipo: data.tipo,
        fechaInicio: new Date(data.fechaInicio).toISOString().split('T')[0],
        fechaFin: new Date(data.fechaFin).toISOString().split('T')[0],
        activa: data.activa,
      });
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setError('Error al cargar la licencia');
      setLoading(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/licencias/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar licencia');
      }

      router.push('/licencias');
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Error al actualizar licencia');
      setLoading(false);
    }
  };
  
  if (!mounted) {
    return null;
  }
  
  if (loading) {
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
          <h1 className="text-2xl font-bold mb-6">Editar Licencia</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tipo</label>
              <input
                type="text"
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-md ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Fecha Inicio</label>
              <input
                type="date"
                name="fechaInicio"
                value={formData.fechaInicio}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-md ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Fecha Fin</label>
              <input
                type="date"
                name="fechaFin"
                value={formData.fechaFin}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-md ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="activa"
                checked={formData.activa}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm font-medium">Activa</label>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => router.push('/licencias')}
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
                className={`px-4 py-2 rounded-md ${
                  theme === 'dark' 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {loading ? 'Guardando...' : 'Guardar Cambios'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutWithSidebar>
  );
} 