"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Sidebar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Montaje para evitar problemas de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Lista de enlaces de navegación
  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Usuarios", href: "/usuarios" },
    { name: "Licencias", href: "/licencias" },
    { name: "Estadísticas", href: "/estadisticas" },
    { name: "Configuración", href: "/configuracion" }
  ];
  
  // Si no está montado, mostrar una versión estática
  if (!mounted) {
    return (
      <div className="h-screen w-64 bg-gray-100 dark:bg-gray-900 p-4 flex flex-col border-r border-gray-200 dark:border-gray-700">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">StreamingPro</h1>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <div className="block p-2 rounded-md">
                  {link.name}
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700"></div>
      </div>
    );
  }
  
  return (
    <div className={`h-screen w-64 p-4 flex flex-col border-r ${
      theme === "dark" 
        ? "bg-gray-900 border-gray-700 text-white" 
        : "bg-gray-100 border-gray-200 text-gray-900"
    }`}>
      <div className="mb-8">
        <h1 className="text-xl font-bold">StreamingPro</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={`block p-2 rounded-md ${
                  pathname === link.href 
                    ? theme === "dark"
                      ? "bg-blue-900 text-blue-300"
                      : "bg-blue-100 text-blue-700"
                    : theme === "dark"
                      ? "text-gray-200 hover:bg-gray-800"
                      : "text-gray-800 hover:bg-gray-200"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
   
    </div>
  );
} 