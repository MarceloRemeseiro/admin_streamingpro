"use client";

import { LayoutWithSidebar } from "@/components/layout-with-sidebar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NuevaLicenciaPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    tipo: '',
    fechaInicio: '',
    fechaFin: '',
    activa: true,
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const response = await fetch('/api/licencias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Error al crear la licencia');
      }
      
      // Redirigir a la lista de licencias después de crear
      router.push('/licencias');
    } catch (err) {
      console.error('Error al crear licencia:', err);
      setError(err instanceof Error ? err.message : 'Error al crear licencia');
    } finally {
      setLoading(false);
    }
  };
  
  // Si no está montado, mostrar una versión estática
  if (!mounted) {
    return (
      <LayoutWithSidebar>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Nueva Licencia</h1>
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
            Nueva Licencia
          </h1>
          <button
            onClick={() => router.push('/licencias')}
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
                  htmlFor="tipo" 
                  className={`block text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Tipo de Licencia *
                </label>
                <select
                  name="tipo"
                  id="tipo"
                  required
                  value={formData.tipo}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
                    theme === "dark" 
                      ? "bg-gray-700 border-gray-600 text-white" 
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                >
                  <option value="">Seleccione un tipo</option>
                  <option value="basic">Basic</option>
                 <option value="device">Device</option>
                </select>
              </div>
              
              <div>
                <label 
                  htmlFor="fechaInicio" 
                  className={`block text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Fecha de Inicio *
                </label>
                <input
                  type="date"
                  name="fechaInicio"
                  id="fechaInicio"
                  required
                  value={formData.fechaInicio}
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
                  htmlFor="fechaFin" 
                  className={`block text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Fecha de Fin *
                </label>
                <input
                  type="date"
                  name="fechaFin"
                  id="fechaFin"
                  required
                  value={formData.fechaFin}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md shadow-sm p-2 ${
                    theme === "dark" 
                      ? "bg-gray-700 border-gray-600 text-white" 
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="activa"
                  id="activa"
                  checked={formData.activa}
                  onChange={handleChange}
                  className="h-4 w-4 rounded"
                />
                <label 
                  htmlFor="activa" 
                  className={`ml-2 block text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Licencia Activa
                </label>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => router.push('/licencias')}
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
                  {loading ? "Guardando..." : "Guardar Licencia"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </LayoutWithSidebar>
  );
} 