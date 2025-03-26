import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../public/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Documentation",
  description: "Documentation officielle de Eclaisiabook",
  icons: {
    icon: [
      { url: "/favicon.png" }, // Format standard
      { url: "/favicon.png", type: "image/png" }, // Optionnel : version 32x32
      { url: "/favicon.png", type: "image/png" }, // Optionnel : version 16x16
    ],
    apple: "/favicon.png", // Version pour iOS
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
