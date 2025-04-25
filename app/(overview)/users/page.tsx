"use client";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useTheme } from "@/context/ThemeContext";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Button,
} from "@heroui/react"; // Importation des composants Hero UI

export default function Users() {
  const { theme } = useTheme();

  // Données des utilisateurs en ligne (sans utiliser data.ts)
  const columns = [
    { name: "UUID", uid: "id", sortable: true },
    { name: "EMAIL", uid: "email", sortable: true },
    { name: "TÉLÉPHONE", uid: "telephone" },
    { name: "RÔLE", uid: "role", sortable: true },
    { name: "STATUT", uid: "status", sortable: true },
    { name: "ACTIONS", uid: "actions" },
  ];

  const statusOptions = {
    Actif: "success",
    Inactif: "danger",
  };

  const users = [
    {
      id: "1a2b3c4d",
      email: "admin@example.com",
      telephone: "+243 970 000 111",
      role: "Super Admin",
      status: "Actif",
    },
    {
      id: "5e6f7g8h",
      email: "user@example.com",
      telephone: "+243 970 222 333",
      role: "Modérateur",
      status: "Inactif",
    },
    {
      id: "5e6f7g9h",
      email: "user2@example.com",
      telephone: "+243 970 222 334",
      role: "Modérateur",
      status: "Actif",
    },
    {
      id: "5e6f7g0h",
      email: "user3@example.com",
      telephone: "+243 970 222 335",
      role: "Utilisateur",
      status: "Inactif",
    },
  ];

  const handleOpen = () => {
    // Logique pour ouvrir une modal de confirmation de suppression
    alert("Suppression d'un utilisateur");
  };

  // Fonction pour gérer les valeurs undefined et les remplacer par "-"
  const safeValue = (value: any) =>
    value !== undefined && value !== null ? value : "-";

  return (
    <DashboardLayout>
      <div
        className={`container mx-auto px-4 min-h-screen ${
          theme === "light" ? "bg-[#f5f7fa]" : "bg-black"
        } pt-5`}
      >
        <Table
          aria-label="Liste des Administrateurs"
          removeWrapper
          className={`${theme === "light" ? "bg-white" : "bg-black text-white"} shadow-lg border border-gray-200 rounded-lg overflow-x-auto`}
        >
          <TableHeader>
            {columns.map((column) => (
              <TableColumn
                key={column.uid}
                className="py-2 px-4 text-left font-semibold text-sm"
              >
                {column.name}
              </TableColumn>
            ))} 
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={`${user.id}-${index}`}
                className={`hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? "bg-[#f5f7fa]" : "bg-white"
                }`}
              >
                <TableCell className="py-2 px-4">
                  {safeValue(user.id)}
                </TableCell>
                <TableCell className="py-2 px-4">
                  {safeValue(user.email)}
                </TableCell>
                <TableCell className="py-2 px-4">
                  {safeValue(user.telephone)}
                </TableCell>
                <TableCell className="py-2 px-4">
                  {safeValue(user.role)}
                </TableCell>
                <TableCell className="py-2 px-4">
                  <Chip color={statusOptions[user.status] || "danger"}>
                    {safeValue(user.status)}
                  </Chip>
                </TableCell>
                <TableCell className="py-2 px-4">
                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      color="primary"
                      className="text-white bg-blue-500 hover:bg-blue-600"
                    >
                      Modifier
                    </Button>
                    <Button
                      size="sm"
                      color="danger"
                      className="ml-2 text-white bg-red-500 hover:bg-red-600"
                      onClick={handleOpen}
                    >
                      Supprimer
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
}
