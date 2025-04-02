"use client";

import { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Content from "../content/Content";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={`flex h-screen `}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* Dynamic Content */}
        <Content>{children}</Content>
      </div>
    </div>
  );
}
