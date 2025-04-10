"use client";

import { LayoutWithSidebar } from "@/components/layout-with-sidebar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Usuario } from "@/types";
import { useRouter } from "next/navigation";

export default function UsuariosPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    setMounted(true);
    fetchUsuarios();
  }, []);
  
  const fetchUsuarios = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/usuarios');
      
      if (!response.ok) {
        throw new Error('Error al cargar los usuarios');
      }
      
      const data = await response.json();
      
      // Usar los usuarios directamente sin generar nuevos códigos
      setUsuarios(data);
      setError(null);
    } catch (err) {
      console.error('Error al cargar usuarios:', err);
      setError('No se pudieron cargar los usuarios. Intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleDelete = async (id: string) => {
    if (!confirm('¿Está seguro que desea eliminar este usuario?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/usuarios/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Error al eliminar el usuario');
      }
      
      // Actualizar la lista de usuarios
      fetchUsuarios();
    } catch (err) {
      console.error('Error al eliminar el usuario:', err);
      setError('No se pudo eliminar el usuario. Intente nuevamente.');
    }
  };
  
  const handleToggleActive = async (id: string) => {
    try {
      const response = await fetch(`/api/usuarios/${id}/toggle-active`, {
        method: 'PUT',
      });
      
      if (!response.ok) {
        throw new Error('Error al cambiar el estado del usuario');
      }
      
      // Actualizar la lista de usuarios
      fetchUsuarios();
    } catch (err) {
      console.error('Error al cambiar el estado:', err);
      setError('No se pudo cambiar el estado del usuario. Intente nuevamente.');
    }
  };
  
  // Si no está montado, mostrar una versión estática
  if (!mounted) {
    return (
      <LayoutWithSidebar>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Usuarios</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Nuevo Usuario
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
          <h1 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Usuarios</h1>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={() => router.push('/usuarios/nuevo')}
          >
            Nuevo Usuario
          </button>
        </div>

        {error && (
          <div className={`p-4 rounded-md ${theme === "dark" ? "bg-red-900 text-red-200" : "bg-red-100 text-red-800"}`}>
            {error}
          </div>
        )}

        {loading ? (
          <div className={`shadow-md rounded-lg overflow-hidden p-6 text-center ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}>
            Cargando usuarios...
          </div>
        ) : usuarios.length === 0 ? (
          <div className={`shadow-md rounded-lg overflow-hidden p-6 text-center ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"}`}>
            No hay usuarios registrados. ¡Crea uno nuevo!
          </div>
        ) : (
          <div className={`shadow-md rounded-lg overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <table className={`min-w-full divide-y ${theme === "dark" ? "divide-gray-700" : "divide-gray-200"}`}>
              <thead className={theme === "dark" ? "bg-gray-700" : "bg-gray-50"}>
                <tr>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Username</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Código</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Estado</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Email</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Teléfono</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Ciudad</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Subdominio</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Licencia</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Fecha Inicio</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Fecha Fin</th>
                  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Acciones</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${theme === "dark" ? "divide-gray-700 bg-gray-800" : "divide-gray-200 bg-white"}`}>
                {usuarios.map((usuario) => (
                  <tr key={usuario.id} className={theme === "dark" ? "bg-gray-800" : "bg-white"}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>{usuario.username}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-mono ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                      {usuario.codigo || "N/A"}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm`}>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        usuario.activo
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {usuario.activo ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>{usuario.email}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>{usuario.telefono || "-"}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>{usuario.ciudad || "-"}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>{usuario.subdominio}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      {usuario.licencia?.tipo || "Sin licencia"}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      {usuario.fechaInicio 
                        ? new Date(usuario.fechaInicio).toLocaleDateString() 
                        : "-"}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      {usuario.fechaFin 
                        ? new Date(usuario.fechaFin).toLocaleDateString() 
                        : "-"}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
                      <button 
                        className={theme === "dark" ? "text-blue-400 hover:text-blue-300 mr-3" : "text-blue-600 hover:text-blue-900 mr-3"}
                        onClick={() => router.push(`/usuarios/editar/${usuario.id}`)}
                      >
                        Editar
                      </button>
                      <button 
                        className={theme === "dark" ? "text-orange-400 hover:text-orange-300 mr-3" : "text-orange-600 hover:text-orange-900 mr-3"}
                        onClick={() => handleToggleActive(usuario.id)}
                      >
                        {usuario.activo ? 'Desactivar' : 'Activar'}
                      </button>
                      <button 
                        className={theme === "dark" ? "text-red-400 hover:text-red-300" : "text-red-600 hover:text-red-900"}
                        onClick={() => handleDelete(usuario.id)}
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