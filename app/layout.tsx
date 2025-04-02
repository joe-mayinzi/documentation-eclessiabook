"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { HeroUIProvider } from "@heroui/react";

import "../public/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HeroUIProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SessionProvider>{children}</SessionProvider>
        </body>
      </html>
    </HeroUIProvider>
  );
}
