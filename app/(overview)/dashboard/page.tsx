"use client";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useTheme } from "@/context/ThemeContext";

export default function DashboardPage() {
  const { theme } = useTheme();


  return (
    <DashboardLayout>
      <div
        className={`container mx-auto p-4 flex gap-3 min-h-screen ${
          theme === "light" ? "bg-[#f5f7fa]" : "bg-black"
        }`}
      >
      <div className={`${theme === "light" ? "bg-white" : "bg-black text-white"} shadow-lg rounded-lg w-full p-6`}>
        <div className="prose max-w-full">
          <h1 className="font-bold mb-4">Bienvenue sur la Documentation du Projet EcclesiaBook</h1>

          <h2>Historique du Projet</h2>
          <p className="mb-4">
            Le projet <strong>EcclesiaBook</strong> a vu le jour dans un contexte où l&apos;équipe de développement a dû relever le défi de travailler sur un projet complexe sans disposer de documentation ou de ressources claires. Lors de notre prise en charge du projet, nous avons rapidement constaté que l&apos;absence de documentation centralisée rendait difficile la compréhension du code et l&apos;ajout de nouvelles fonctionnalités. De plus, l&apos;équipe dépendait fortement des anciens développeurs, ce qui ralentissait le processus et créait des points de fragilité.
          </p>
          <p className="mb-4">
            Face à ce défi, nous avons décidé de changer d&apos;approche. Au lieu de continuer à dépendre des connaissances des individus, nous avons choisi de mettre en place <strong>un système de documentation solide et accessible</strong> à tous les futurs développeurs qui travailleront sur EcclesiaBook. Cette documentation est conçue pour être un véritable <strong>point de référence</strong>, une ressource fiable et pérenne, permettant à toute l&apos;équipe, actuelle ou future, de gagner en autonomie et en efficacité.
          </p>

          <h2>Pourquoi cette Documentation ?</h2>
          <ul className="mb-4">
            <li><strong>Faciliter l&apos;intégration des nouveaux développeurs</strong> : En fournissant des informations claires et structurées, cette documentation permet à chaque membre de l&apos;équipe de rapidement comprendre les fondamentaux du projet.</li>
            <li><strong>Assurer la pérennité du projet</strong> : En centralisant les connaissances, nous minimisons les risques liés à la perte de savoir-faire et garantissons que les décisions prises lors de l&apos;évolution du projet sont toujours comprises.</li>
            <li><strong>Optimiser le développement continu</strong> : Grâce à une documentation complète, les développeurs peuvent facilement trouver des solutions à leurs problèmes, ce qui accélère le temps de développement et améliore la qualité du code.</li>
          </ul>

          <h2>Structure de la Documentation</h2>
          <p className="mb-4">
            La documentation d&apos;EcclesiaBook est structurée de manière à vous guider à travers les différentes étapes du développement du projet. Voici un aperçu de ce que vous y trouverez :
          </p>
          <ol className="mb-4">
            <li><strong>Introduction au Projet</strong> : Présentation générale d&apos;EcclesiaBook, de ses objectifs et de son architecture.</li>
            <li><strong>Installation et Configuration</strong> : Guide détaillé sur la mise en place de l&apos;environnement de développement, ainsi que les étapes pour commencer à travailler sur le projet.</li>
            <li><strong>Architecture du Code</strong> : Une explication claire de la structure du code, de la base de données, des principales librairies et technologies utilisées.</li>
            <li><strong>Guides de Développement</strong> : Des bonnes pratiques de développement, des exemples de code et des tutoriels pour vous aider à ajouter de nouvelles fonctionnalités ou à corriger des bugs.</li>
            <li><strong>Questions Fréquentes (FAQ)</strong> : Une section dédiée aux problèmes courants rencontrés par les développeurs et à leurs solutions.</li>
            <li><strong>Références API</strong> : Des informations complètes sur les différentes API utilisées dans le projet, avec des exemples d&apos;appels et de réponses.</li>
          </ol>

          <h2>Un Outil pour Tous</h2>
          <p className="mb-4">
            Ce projet n&apos;est pas simplement une documentation technique, mais un véritable <strong>outil d&apos;entraide</strong> pour toute l&apos;équipe. À travers cette ressource, nous espérons :
          </p>
          <ul className="mb-4">
            <li><strong>Faciliter la collaboration</strong> entre les membres de l&apos;équipe, qu&apos;ils soient nouveaux ou anciens, en leur offrant un accès rapide à des informations précises et pertinentes.</li>
            <li><strong>Assurer la qualité du code</strong> en suivant des normes de développement partagées et validées par l&apos;équipe.</li>
            <li><strong>Permettre l&apos;évolution du projet</strong> en permettant à tout développeur de prendre le relais facilement, en comprenant rapidement les choix faits par l&apos;équipe précédente et en poursuivant le travail de manière fluide.</li>
          </ul>

          <h2>À qui s&apos;adresse cette Documentation ?</h2>
          <p className="mb-4">
            Cette documentation est avant tout destinée aux <strong>développeurs</strong> travaillant sur <strong>EcclesiaBook</strong>, qu&apos;ils soient déjà membres de l&apos;équipe ou qu&apos;ils rejoignent le projet à tout moment. Elle est également utile pour :
          </p>
          <ul className="mb-4">
            <li><strong>Les managers et chefs de projet</strong> qui souhaitent comprendre le fonctionnement du projet.</li>
            <li><strong>Les nouveaux contributeurs</strong> qui désirent participer au projet en contribuant à la base de code.</li>
          </ul>

          <h2>Conclusion</h2>
          <p className="mb-4">
            Le projet EcclesiaBook a évolué grâce à une vision commune : celle d&apos;établir un système fiable et accessible pour toute l&apos;équipe. Nous croyons fermement que cette documentation jouera un rôle clé dans le développement continu et l&apos;essor du projet. Notre objectif est que chaque développeur, en rejoignant le projet, puisse y trouver une source d&apos;inspiration, une aide et une référence fiable pour avancer dans son travail.
          </p>
          <p>
            Bienvenue dans cette aventure ! Nous espérons que cette documentation vous sera utile et vous permettra de faire évoluer EcclesiaBook de manière efficace et durable.
          </p>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}
