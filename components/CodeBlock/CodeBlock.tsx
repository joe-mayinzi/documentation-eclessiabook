"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Fonction pour copier dans le presse-papier
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      // Réinitialiser l'état après 2 secondes
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative mb-6">
      <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
        <code>{code}</code>
      </pre>

      {/* Bouton pour copier */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
      >
        {copied ? "Copié!" : "Copier"}
      </button>
    </div>
  );
}
