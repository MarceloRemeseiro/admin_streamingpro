"use client";

import { LayoutWithSidebar } from "@/components/layout-with-sidebar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Licencia } from "@/types";

export default function NuevoUsuarioPage() {
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
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setMounted(true);
    fetchLicencias();
  }, []);
  
  const fetchLicencias = async () => {
    try {
      const response = await fetch('/api/licencias');
      if (!response.ok) throw new Error('Error al cargar licencias');
      const data = await response.json();
      setLicencias(data);
    } catch (err) {
      console.error('Error al cargar licencias:', err);
      setError('No se pudieron cargar las licencias');
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
    
    try {
      setLoading(true);
      const response = await fetch('/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Error al crear el usuario');
      }
      
      // Redirigir a la lista de usuarios después de crear
      router.push('/usuarios');
    } catch (err) {
      console.error('Error al crear usuario:', err);
      setError(err instanceof Error ? err.message : 'Error al crear usuario');
    } finally {
      setLoading(false);
    }
  };
  
  // Si no está montado, mostrar una versión estática
  if (!mounted) {
    return (
      <LayoutWithSidebar>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Nuevo Usuario</h1>
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
          <h1 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Nuevo Usuario
          </h1>
          <button
            onClick={() => router.push('/usuarios')}
            className={`px-4 py-2 rounded-md ${
              theme === "dark"
                ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Volver
          </button>
        </div>
        
        {error && (
          <div className={`p-4 rounded-md ${theme === "dark" ? "bg-red-900 text-red-200" : "bg-red-100 text-red-800"}`}>
            {error}
          </div>
        )}
        
        <div className={`shadow-md rounded-lg p-6 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label 
                  htmlFor="username" 
                  className={`block text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Username *
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
                    theme === "dark" 
                      ? "bg-gray-700 border-gray-600 text-white" 
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
                    theme === "dark" 
                      ? "bg-gray-700 border-gray-600 text-white" 
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="telefono" 
                  className={`block text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Teléfono
                </label>
                <input
                  type="text"
                  name="telefono"
                  id="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
                    theme === "dark" 
                      ? "bg-gray-700 border-gray-600 text-white" 
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="ciudad" 
                  className={`block text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Ciudad
                </label>
                <input
                  type="text"
                  name="ciudad"
                  id="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
                    theme === "dark" 
                      ? "bg-gray-700 border-gray-600 text-white" 
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="subdominio" 
                  className={`block text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Subdominio *
                </label>
                <input
                  type="text"
                  name="subdominio"
                  id="subdominio"
                  required
                  value={formData.subdominio}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
                    theme === "dark" 
                      ? "bg-gray-700 border-gray-600 text-white" 
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="licenciaId" 
                  className={`block text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Licencia *
                </label>
                <select
                  name="licenciaId"
                  id="licenciaId"
                  required
                  value={formData.licenciaId}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
                    theme === "dark" 
                      ? "bg-gray-700 border-gray-600 text-white" 
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                >
                  <option value="">Seleccione una licencia</option>
                  {licencias.map((licencia) => (
                    <option key={licencia.id} value={licencia.id}>
                      {licencia.tipo} - {new Date(licencia.fechaInicio).toLocaleDateString()} a {new Date(licencia.fechaFin).toLocaleDateString()}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => router.push('/usuarios')}
                  className={`px-4 py-2 rounded-md ${
                    theme === "dark"
                      ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                  disabled={loading}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Guardando..." : "Guardar Usuario"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </LayoutWithSidebar>
  );
} 