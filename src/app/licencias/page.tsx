"use client";

import { LayoutWithSidebar } from "@/components/layout-with-sidebar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Licencia } from "@/types";
import { useRouter } from "next/navigation";

export default function LicenciasPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [licencias, setLicencias] = useState<Licencia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    setMounted(true);
    fetchLicencias();
  }, []);
  
  const fetchLicencias = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/licencias');
      
      if (!response.ok) {
        throw new Error('Error al cargar las licencias');
      }
      
      const data = await response.json();
      setLicencias(data);
      setError(null);
    } catch (err) {
      console.error('Error al cargar licencias:', err);
      setError('No se pudieron cargar las licencias. Intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleDelete = async (id: string) => {
    if (!confirm('¿Está seguro que desea eliminar esta licencia?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/licencias/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Error al eliminar la licencia');
      }
      
      // Actualizar la lista de licencias
      fetchLicencias();
    } catch (err) {
      console.error('Error al eliminar la licencia:', err);
      setError('No se pudo eliminar la licencia. Intente nuevamente.');
    }
  };
  
  // Si no está montado, mostrar una versión estática
  if (!mounted) {
    return (
      <LayoutWithSidebar>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Licencias</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Nueva Licencia
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
          <h1 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Licencias</h1>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={() => router.push('/licencias/nuevo')}
          >
            Nueva Licencia
          </button>
        </div>

        {error && (
          <div className={`p-4 rounded-md ${theme === "dark" ? "bg-red-900 text-red-200" : "bg-red-100 text-red-800"}`}>
            {error}
          </div>
        )}

        {loading ? (
          <div className={`shadow-md rounded-lg overflow-hidden p-6 text-center ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}>
            Cargando licencias...
          </div>
        ) : licencias.length === 0 ? (
          <div className={`shadow-md rounded-lg overflow-hidden p-6 text-center ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}>
            No hay licencias registradas. ¡Crea una nueva!
          </div>
        ) : (
          <div className={`shadow-md rounded-lg overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <table className={`min-w-full divide-y ${theme === "dark" ? "divide-gray-700" : "divide-gray-200"}`}>
              <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-50"}>
                <tr>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Tipo</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Usuarios</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Acciones</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${theme === "dark" ? "divide-gray-700 bg-gray-800" : "divide-gray-200 bg-white"}`}>
                {licencias.map((licencia) => (
                  <tr key={licencia.id} className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>{licencia.tipo}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      {licencia.usuarios?.length || 0}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      <button 
                        className={theme === "dark" ? "text-red-400 hover:text-red-300" : "text-red-600 hover:text-red-900"}
                        onClick={() => handleDelete(licencia.id)}
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