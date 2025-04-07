"use client"; // Directive indiquant que ce composant doit être exécuté côté client

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/images/png final blanc0001.png";
import { IoHomeOutline, IoServerOutline } from "react-icons/io5";
import { GiLaptop } from "react-icons/gi";
import { MdPhoneAndroid } from "react-icons/md";
import { FaServer, FaUser } from "react-icons/fa";
import { JSX } from "react";
import { useTheme } from "@/context/ThemeContext";

/**
 * Composant Sidebar
 * Ce composant représente une barre latérale de navigation pour une application Next.js.
 * Il affiche un menu avec plusieurs liens et met en évidence le lien actif.
 *
 * @component
 * @returns {JSX.Element} Élément JSX représentant la barre latérale.
 */
export default function Sidebar(): JSX.Element {
  // Récupère l'URL actuelle pour gérer l'état actif des liens
  const pathname = usePathname();
  const { theme } = useTheme();

  /**
   * Liste des éléments du menu.
   * Chaque objet contient un nom, un chemin (URL) et une icône associée.
   *
   * @type {Array<{name: string, path: string, icon: JSX.Element}>}
   */
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <IoHomeOutline size={23} />,
    },
    { name: "Web", path: "/web", icon: <GiLaptop size={23} /> },
    { name: "Mobile", path: "/mobile", icon: <MdPhoneAndroid size={23} /> },
    { name: "Backend", path: "/backend", icon: <IoServerOutline size={23} /> },
    { name: "Déploiement", path: "/deploiement", icon: <FaServer size={22} /> },
    { name: "Utilisateurs", path: "/users", icon: <FaUser size={22} /> },
  ];

  return (
    /**
     * Conteneur principal de la barre latérale
     * Fixé à gauche et occupe toute la hauteur de l'écran
     */
    <aside className="sidebar fixed  z-999  flex h-screen w-[290px] flex-col  border-r border-gray-200 bg-white px-5 transition-all duration-300 lg:static lg:translate-x-0 dark:border-gray-800 dark:bg-black -translate-x-full shadow-2xs">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image src={logo} width={150} height={32} alt="logo" />
        </Link>
      </div>

      {/* Contenu de la barre latérale */}
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav>
          {/* Titre du menu */}
          <h3
            className={`mb-4 text-sm leading-[20px] ${
              theme === "light" ? "text-gray-400" : "text-white"
            } uppercase`}
          >
            MENU
          </h3>

          {/* Liste des liens de navigation */}
          <ul className="mb-6 flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`flex items-center p-2 mb-1 text-sm font-semibold ${
                    theme === "light" ? "text-[#000]" : "text-white"
                  } rounded transition-all duration-200 ${
                    pathname === item.path
                      ? "bg-gray-800 text-white"
                      : "text-[#000] hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {/* Icône du menu */}
                  <span className="mr-2">{item.icon}</span>
                  {/* Nom du menu */}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
