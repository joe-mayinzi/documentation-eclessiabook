"use client";

import CodeBlock from "@/components/CodeBlock/CodeBlock";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useTheme } from "@/context/ThemeContext";

export default function Web() {
  const { theme } = useTheme();

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
        className={`container mx-auto p-4 flex flex-col lg:flex-row gap-6 min-h-screen ${
          theme === "light" ? "bg-[#f5f7fa] text-[#000]" : "bg-black text-white"
        }`}
      >
        {/* Table des matières - Mobile en haut, Desktop à droite */}
        <div
          className={`lg:hidden order-1 mb-4 ${
            theme === "light" ? "bg-white text-black" : "bg-zinc-900 text-white"
          } rounded-lg p-4 shadow-md`}
        >
          <h2 className="text-xl font-semibold mb-4">Table des matières</h2>
          <ul className="space-y-2 text-sm">
            {[
              "1. Introduction",
              "2. Installation",
              "3. Structure des dossiers",
              "4. Fonctionnalités principales",
              "5. Commentaire du code",
            ].map((title, i) => (
              <li key={i}>
                <a href={`#section${i + 1}`} className="hover:underline">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contenu principal */}
        <div
          className={`order-2 w-full lg:w-3/4 p-6 rounded-lg shadow-lg ${
            theme === "light" ? "bg-white text-black" : "bg-zinc-900 text-white"
          }`}
        >
          <h1 className="text-2xl font-bold mb-6">
            Documentation de l&apos;application EcclesiaBook
          </h1>
          <p className="mb-6">
            Voici la documentation complète pour le projet EcclesiaBook. Vous
            trouverez ci-dessous les étapes d&apos;installation, la structure du
            code, et bien plus encore.
          </p>

          {/* Sections documentées */}
          <section id="section1" className="mb-12">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <h3 className="font-medium">1.1 Définition</h3>
            <p className="mb-2">
              EcclesiaBook est une plateforme combinant un réseau social pour
              les fidèles des églises et une solution de gestion pour les
              églises.
            </p>
            <h3 className="font-medium">1.2 Technologies utilisées</h3>
            <p className="mb-2">
              Frontend : React, Next.js
              <br />
              Authentification : NextAuth
              <br />
              Backend : API REST (Node.js, NestJS, etc.)
              <br />
              Base de données : PostgreSQL/MongoDB
            </p>
            <h3 className="font-medium">1.3 Architecture générale</h3>
            <p>
              Architecture MVC :
              <br />
              Modèle : Données et DB
              <br />
              Vue : Interface avec React/Next.js
              <br />
              Contrôleur : Logique métier via API
            </p>
          </section>

          <section id="section2" className="mb-12">
            <h2 className="text-xl font-semibold mb-4">2. Installation</h2>
            <h3 className="font-medium">2.1 Prérequis</h3>
            <p className="mb-4">Node.js, Git, npm ou yarn</p>

            <h3 className="font-medium">
              2.2 Installation de l’environnement de développement
            </h3>
            <CodeBlock code={gitCloneCode} />
            <p className="mb-4">Clonez le projet :</p>

            <h3 className="font-medium">2.3 Installation des dépendances</h3>
            <CodeBlock code={installDependenciesCode} />
            <p className="mb-4">Installez les dépendances :</p>

            <h3 className="font-medium">2.4 Démarrage du serveur local</h3>
            <CodeBlock code={startServerCode} />
            <p>Lancez le serveur local :</p>
          </section>

          <section id="section3" className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              3. Structure des dossiers
            </h2>
            <h3 className="font-medium">3.1 Dossier /app</h3>
            <p className="mb-2">
              Contient les pages principales et les routes de l&apos;app.
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>/admin : Gestion CRUD</li>
              <li>/admin/create : Création admin</li>
              <li>layout.tsx : Layout global</li>
              <li>not-found.tsx : 404</li>
              <li>page.tsx : Page principale</li>
            </ul>
            <h3 className="font-medium">3.2 Dossier /api</h3>
            <p>Contient les routes backend Next.js</p>
          </section>

          <section id="section4" className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              4. Fonctionnalités principales
            </h2>
            <h3 className="font-medium">
              4.1 Fonctionnalités du réseau social
            </h3>
            <ul className="list-disc ml-6 mb-4">
              <li>Bibliothèque numérique</li>
              <li>Bible & Plan de lecture</li>
              <li>Forum, Sondages</li>
              <li>Mur de prière</li>
              <li>Événements, Suggestions</li>
            </ul>
            <h3 className="font-medium">
              4.2 Fonctionnalités de gestion des églises
            </h3>
            <ul className="list-disc ml-6">
              <li>Gestion des membres</li>
              <li>Gestion financière</li>
              <li>Archivage & administration</li>
            </ul>
          </section>

          <section id="section5" className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              5. Commentaire du code
            </h2>
            <p className="mb-4">
              Le projet utilise JSDoc pour documenter les fonctions :
            </p>
            <CodeBlock
              code={`/**
* Ajoute un nouvel administrateur.
* @param {string} name - Nom
* @param {string} email - E-mail
* @returns {Promise<boolean>}
*/`}
            />
          </section>
        </div>

        {/* Table des matières Desktop */}
        <aside
          className={`order-3 hidden lg:block w-full lg:w-1/4 sticky top-4 h-fit max-h-screen overflow-y-auto p-6 shadow-lg rounded-lg ${
            theme === "light"
              ? "bg-white text-[#000]"
              : "bg-zinc-900 text-white"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Table des matières</h2>
          <ul className="space-y-2 text-sm">
            {[
              "1. Introduction",
              "2. Installation",
              "3. Structure des dossiers",
              "4. Fonctionnalités principales",
              "5. Commentaire du code",
            ].map((title, i) => (
              <li key={i}>
                <a href={`#section${i + 1}`} className="hover:underline">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </DashboardLayout>
  );
}
