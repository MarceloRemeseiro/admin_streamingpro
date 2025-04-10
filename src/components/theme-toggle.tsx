"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Solo renderiza el botón después de la hidratación del cliente
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Renderiza un placeholder durante la hidratación para evitar errores
  if (!mounted) {
    return <button className="w-full p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">Cargando...</button>;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-full p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      {theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    </button>
  );
} 