"use client";

import { LayoutWithSidebar } from "@/components/layout-with-sidebar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Licencia, Usuario } from "@/types";
import * as React from 'react';

interface PageParams {
  id: string;
}

export default function EditarUsuarioPage({ params }: { params: PageParams }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [licencias, setLicencias] = useState<Licencia[]>([]);
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    telefono: '',
    ciudad: '',
    subdominio: '',
    licenciaId: '',
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { id } = React.use(params as unknown as Promise<PageParams>);
  
  useEffect(() => {
    setMounted(true);
    fetchLicencias();
    fetchUsuario();
  }, [id]);
  
  const fetchLicencias = async () => {
    try {
      const response = await fetch('/api/licencias');
      if (!response.ok) throw new Error('Error al obtener licencias');
      const data = await response.json();
      setLicencias(data);
    } catch (error) {
      console.error('Error:', error);
      setError('Error al cargar las licencias');
    }
  };
  
  const fetchUsuario = async () => {
    try {
      const response = await fetch(`/api/usuarios/${id}`);
      if (!response.ok) throw new Error('Error al obtener usuario');
      const data = await response.json();
      setFormData({
        username: data.username,
        email: data.email,
        telefono: data.telefono || '',
        ciudad: data.ciudad || '',
        subdominio: data.subdominio,
        licenciaId: data.licenciaId,
      });
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setError('Error al cargar el usuario');
      setLoading(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      const response = await fetch(`/api/usuarios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar usuario');
      }
      
      router.push('/usuarios');
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Error al actualizar usuario');
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
          <h1 className="text-2xl font-bold mb-6">Editar Usuario</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
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
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
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
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Ciudad</label>
              <input
                type="text"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Subdominio</label>
              <input
                type="text"
                name="subdominio"
                value={formData.subdominio}
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
              <label className="block text-sm font-medium mb-1">Licencia</label>
              <select
                name="licenciaId"
                value={formData.licenciaId}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-md ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="">Seleccionar licencia</option>
                {licencias.map((licencia: any) => (
                  <option key={licencia.id} value={licencia.id}>
                    {licencia.tipo} - {new Date(licencia.fechaInicio).toLocaleDateString()} a {new Date(licencia.fechaFin).toLocaleDateString()}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => router.push('/usuarios')}
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