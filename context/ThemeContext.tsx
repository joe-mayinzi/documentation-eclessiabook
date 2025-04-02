"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Fournisseur de contexte pour la gestion du thème (clair/sombre).
 *
 * @component
 * @param {object} props - Les propriétés du composant.
 * @param {React.ReactNode} props.children - Les enfants du composant.
 * @returns {JSX.Element} Le fournisseur de contexte du thème.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  /**
   * Bascule le thème entre "light" et "dark".
   */
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook personnalisé pour utiliser le contexte du thème.
 *
 * @throws {Error} Si le hook est utilisé en dehors de `ThemeProvider`.
 * @returns {ThemeContextType} L'objet contenant le thème actuel et la fonction `toggleTheme`.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
