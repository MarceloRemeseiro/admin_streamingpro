"use client";

import React from "react";
import { Sidebar } from "./sidebar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LayoutWithSidebarProps {
  children: React.ReactNode;
}

export function LayoutWithSidebar({ children }: LayoutWithSidebarProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Montaje para evitar problemas de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Si no está montado, mostrar una versión estática
  if (!mounted) {
    return (
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    );
  }
  
  return (
    <div className={`flex min-h-screen ${theme === "dark" ? "bg-gray-950" : "bg-gray-50"}`}>
      <Sidebar />
      <main className={`flex-1 p-6 overflow-y-auto ${theme === "dark" ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>
        {children}
      </main>
    </div>
  );
} 