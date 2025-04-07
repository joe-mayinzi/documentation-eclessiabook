"use client";

import CodeBlock from "@/components/CodeBlock/CodeBlock";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useTheme } from "@/context/ThemeContext";

export default function Web() {
  const { theme } = useTheme();

  // Exemples de code à afficher dans les sections correspondantes
  const installDependenciesCode = `npm install --legacy-peer-deps
# ou
yarn install --skip-integrity-check
`;

  const startServerCode = `npm run dev
`;

  const gitCloneCode = `git clone https://github.com/techniqueLinkedSolution/ecclesiabook-ultimate.git
`;

  return (
    <DashboardLayout>
      <div
        className={`container mx-auto p-4 flex gap-3 min-h-screen ${
          theme === "light" ? "bg-[#f5f7fa]" : "bg-black"
        }`}
      >
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-black"
          } shadow-lg rounded-lg w-full lg:w-3/4 p-6`}
        >
          <h1 className="text-2xl font-bold mb-4">
            Documentation de l&apos;application EcclesiaBook
          </h1>
          <p>
            Voici la documentation complète pour le projet EcclesiaBook. Vous
            trouverez ci-dessous les étapes d&apos;installation, la structure du
            code, et bien plus encore.
          </p>

          {/* Table des matières */}
          <div className="lg:hidden mb-6">
            <h2 className="text-xl font-semibold mb-4">Table des matières</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#section1" className="hover:underline">
                  1. Introduction
                </a>
              </li>
              <li>
                <a href="#section2" className="hover:underline">
                  2. Installation
                </a>
              </li>
              <li>
                <a href="#section3" className="hover:underline">
                  3. Structure des dossiers
                </a>
              </li>
              <li>
                <a href="#section4" className="hover:underline">
                  4. Fonctionnalités principales
                </a>
              </li>
              <li>
                <a href="#section5" className="hover:underline">
                  5. Commentaire du code
                </a>
              </li>
            </ul>
          </div>

          {/* Section 1: Introduction */}
          <section id="section1" className="mb-12">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <h3 className="font-medium">1.1 Définition</h3>
            <p>
              EcclesiaBook est une plateforme combinant un réseau social pour
              les fidèles des églises et une solution de gestion pour les
              églises.
            </p>
            <h3 className="font-medium">1.2 Technologies utilisées</h3>
            <p>
              Frontend : React, Next.js
              <br />
              Authentification : NextAuth
              <br />
              Backend : API REST (Node.js, NestJS, etc.)
              <br />
              Base de données : PostgreSQL/MongoDB (à confirmer selon la
              configuration dans config)
            </p>
            <h3 className="font-medium">1.3 Architecture générale</h3>
            <p>
              Le projet suit une architecture MVC (Modèle - Vue - Contrôleur),
              où :
              <br />
              Modèle : Gestion des données et interactions avec la base de
              données
              <br />
              Vue : Interface utilisateur avec React et Next.js
              <br />
              Contrôleur : Gestion des requêtes et de la logique métier via les
              routes API
            </p>
          </section>

          {/* Section 2: Installation */}
          <section id="section2" className="mb-12">
            <h2 className="text-xl font-semibold mb-4">2. Installation</h2>
            <h3 className="font-medium">2.1 Prérequis</h3>
            <p>Node.js, Git & GitHub, npm ou yarn</p>
            <h3 className="font-medium">
              2.2 Installation de l’environnement de développement
            </h3>
            <CodeBlock code={gitCloneCode} />
            <p>Clonez le projet depuis GitHub :</p>
            <pre>{gitCloneCode}</pre>

            <h3 className="font-medium">2.3 Installation des dépendances</h3>
            <CodeBlock code={installDependenciesCode} />
            <p>Installez les dépendances avec npm ou yarn :</p>
            <pre>{installDependenciesCode}</pre>

            <h3 className="font-medium">2.4 Démarrage du serveur local</h3>
            <CodeBlock code={startServerCode} />
            <p>Ensuite, lancez le serveur local :</p>
            <pre>{startServerCode}</pre>
          </section>

          {/* Section 3: Structure des dossiers */}
          <section id="section3" className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              3. Structure des dossiers
            </h2>
            <h3 className="font-medium">3.1 Dossier /app</h3>
            <p>
              Ce dossier contient les pages principales et les routes de
              l&apos;application.
            </p>
            <ul className="list-disc ml-6">
              <li>/admin : Gestion CRUD des administrateurs</li>
              <li>/admin/create : Page pour la création d’un administrateur</li>
              <li>
                layout.tsx : Gestion de la structure de l’application avec
                Next.js
              </li>
              <li>not-found.tsx : Gestion des pages introuvables</li>
              <li>page.tsx : Page principale</li>
            </ul>
            <h3 className="font-medium">3.2 Dossier /api</h3>
            <p>
              Contient les routes API de Next.js pour gérer les requêtes backend
              côté serveur.
            </p>

            {/* Ajouter les autres sections de la structure des dossiers ici */}
          </section>

          {/* Section 4: Fonctionnalités principales */}
          <section id="section4" className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              4. Fonctionnalités principales
            </h2>
            <h3 className="font-medium">
              4.1 Fonctionnalités du réseau social
            </h3>
            <ul className="list-disc ml-6">
              <li>Bibliothèque numérique</li>
              <li>Bible et Plan de lecture</li>
              <li>Forum, Sondages & Questions</li>
              <li>Mur de prière</li>
              <li>Événements, Avis et Suggestions</li>
            </ul>
            <h3 className="font-medium">
              4.2 Fonctionnalités de gestion des églises
            </h3>
            <ul className="list-disc ml-6">
              <li>Gestion des membres, événements et annonces</li>
              <li>Finances : budget, abonnements</li>
              <li>Archivage et administration</li>
            </ul>
          </section>

          {/* Section 5: Commentaire du code */}
          <section id="section5" className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              5. Commentaire du code
            </h2>
            <p>
              Le projet utilise JSDoc pour documenter le code. Voici un exemple
              de documentation :
            </p>
            <CodeBlock
              code={`/**
 * Ajoute un nouvel administrateur à la base de données.
 * @param {string} name - Nom de l'administrateur.
 * @param {string} email - Adresse e-mail de l'administrateur.
 * @returns {Promise<boolean>} Retourne \`true\` si l'ajout est réussi, sinon \`false\`.
 */`}
            />
          </section>
        </div>

        {/* Table des matières pour grands écrans */}
        <div className="bg-white shadow-lg rounded-lg hidden lg:block w-1/4 border-l p-6 sticky top-0 h-screen overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Table des matières</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#section1" className="hover:underline">
                1. Introduction
              </a>
            </li>
            <li>
              <a href="#section2" className="hover:underline">
                2. Installation
              </a>
            </li>
            <li>
              <a href="#section3" className="hover:underline">
                3. Structure des dossiers
              </a>
            </li>
            <li>
              <a href="#section4" className="hover:underline">
                4. Fonctionnalités principales
              </a>
            </li>
            <li>
              <a href="#section5" className="hover:underline">
                5. Commentaire du code
              </a>
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
