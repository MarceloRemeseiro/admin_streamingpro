"use client";

import { LayoutWithSidebar } from "@/components/layout-with-sidebar";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ConfiguracionPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [configId, setConfigId] = useState<number | null>(null);
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // ID de usuario mockeado (en una aplicación real vendría de la autenticación)
  const userId = "user-1";
  
  useEffect(() => {
    setMounted(true);
    fetchConfig();
  }, []);
  
  const fetchConfig = async () => {
    try {
      const response = await fetch(`/api/config?userId=${userId}`);
      
      if (!response.ok) {
        throw new Error('Error al cargar la configuración');
      }
      
      const config = await response.json();
      setConfigId(config.id);
      setDark(config.dark);
      
      // También actualizar el tema global
      setTheme(config.dark ? 'dark' : 'light');
    } catch (err) {
      console.error('Error al cargar configuración:', err);
      setError('Error al cargar la configuración. Por favor intente nuevamente.');
    }
  };
  
  const handleToggleDarkMode = async () => {
    const newDarkValue = !dark;
    setDark(newDarkValue);
    
    // Actualizar la UI inmediatamente
    setTheme(newDarkValue ? 'dark' : 'light');
    
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      
      const response = await fetch('/api/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          dark: newDarkValue,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Error al guardar la configuración');
      }
      
      setSuccess('Configuración guardada correctamente');
    } catch (err) {
      console.error('Error al guardar configuración:', err);
      setError('Error al guardar la configuración. Por favor intente nuevamente.');
      
      // Revertir cambios en caso de error
      setDark(!newDarkValue);
      setTheme(!newDarkValue ? 'dark' : 'light');
    } finally {
      setLoading(false);
    }
  };
  
  // Si no está montado, mostrar una versión estática
  if (!mounted) {
    return (
      <LayoutWithSidebar>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Configuración</h1>
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
        <h1 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          Configuración
        </h1>
        
        {error && (
          <div className={`p-4 rounded-md ${theme === "dark" ? "bg-red-900 text-red-200" : "bg-red-100 text-red-800"}`}>
            {error}
          </div>
        )}
        
        {success && (
          <div className={`p-4 rounded-md ${theme === "dark" ? "bg-green-900 text-green-200" : "bg-green-100 text-green-800"}`}>
            {success}
          </div>
        )}
        
        <div className={`shadow-md rounded-lg p-6 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
          <div className="space-y-6">
            <div>
              <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Apariencia
              </h2>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    Modo oscuro
                  </p>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    Cambia entre el tema claro y oscuro
                  </p>
                </div>
                
                <button
                  onClick={handleToggleDarkMode}
                  disabled={loading}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    dark 
                      ? "bg-blue-600" 
                      : theme === "dark" ? "bg-gray-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`${
                      dark ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </button>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                Usuario
              </h2>
              
              <div className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                <p>ID: {userId}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
} 