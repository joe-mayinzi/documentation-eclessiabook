"use client";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useTheme } from "@/context/ThemeContext";

export default function DashboardPage() {
  const { theme } = useTheme();
  return (
    <DashboardLayout>
      <div
        className={`container mx-auto p-4 h-screen ${
          theme === "light" ? "bg-white" : "bg-black"
        } `}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim vitae
        debitis, harum ad consectetur distinctio architecto quo, dignissimos
        quidem, aliquid id! Aliquid vero cum numquam, odio quam adipisci harum
        amet?
      </div>
    </DashboardLayout>
  );
}
