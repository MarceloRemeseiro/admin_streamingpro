"use client";

import { LayoutWithSidebar } from "@/components/layout-with-sidebar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Montaje para evitar problemas de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Si no está montado, mostrar una versión estática
  if (!mounted) {
    return (
      <LayoutWithSidebar>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-700 dark:text-gray-300">
            Bienvenido al panel de administración de StreamingPro
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Cargando...</h2>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
    );
  }

  return (
    <LayoutWithSidebar>
      <div className="space-y-6">
        <h1 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Dashboard</h1>
        
        <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
          Bienvenido al panel de administración de StreamingPro
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className={`p-6 rounded-lg shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <h2 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Estadísticas</h2>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>Visualiza tus métricas clave</p>
          </div>
          
          <div className={`p-6 rounded-lg shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <h2 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Usuarios</h2>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>Gestiona tus usuarios</p>
          </div>
          
          <div className={`p-6 rounded-lg shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <h2 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Contenido</h2>
            <p className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>Administra tu contenido</p>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
