"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Gestion des erreurs
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Appel à NextAuth pour la connexion avec l'option de callbackUrl
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/dashboard", // Redirection après connexion
    });

    if (result?.error) {
      setErrorMessage("Échec de connexion : Vérifie tes identifiants"); // Affichage d'une erreur
    } else {
      router.push("/dashboard"); // Redirection manuelle (optionnel si callbackUrl est utilisé)
    }
  };

  return (
    <main className="bg-[#161950] ">
      <div className="container p-4 lg:p-0 bg-[#] ">
        <div className="h-screen flex justify-center items-center">
          <div className="w-[400px] ">
            <div className="bg-white custom-shadaw p-5">
              <div>
                <h3 className="mb-2 font-bold text-gray-800 text-xl dark:text-white/90 text-center">
                  Connexion
                </h3>
              </div>
              <form onSubmit={onSubmit}>
                {/* Champ pour l'email */}
                <div className="mb-4">
                  <label
                    htmlFor="mail"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    Adresse mail
                  </label>
                  <input
                    type="email"
                    id="mail"
                    placeholder="ex : joe.mayinzi@linked-solution.com"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                {/* Champ pour le mot de passe */}
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Entrez votre mot de passe"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                {/* Affichage du message d'erreur */}
                {errorMessage && (
                  <div className="mb-4 text-red-500 text-sm">
                    {errorMessage}
                  </div>
                )}

                {/* Bouton de connexion */}
                <div>
                  <button
                    type="submit"
                    className="cursor-pointer flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600 bg-[#465fff]"
                  >
                    Se connecter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
