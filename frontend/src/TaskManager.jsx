import React from "react";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { ProjectTable } from "../components/ProjectTable";
import { Card, CardContent } from "@/components/ui";

export default function TaskManager() {
  const projects = [
    {
      id: 1,
      name: "Managers Meeting Q1",
      startDate: "16/07/2024",
      deadline: "24/10/2024",
      currency: "$$$",
      status: "Active",
      people: ["H"],
      priority: "High",
    },
    {
      id: 2,
      name: "Homepage Video",
      startDate: "16/07/2024",
      deadline: "24/10/2024",
      currency: "---",
      status: "Design",
      people: ["J", "A"],
      priority: "Low",
    },
  ];

  return (
    <div className="p-4">
      <Header />
      <SearchBar />
      <Card>
        <CardContent>
          <ProjectTable projects={projects} />
        </CardContent>
      </Card>
    </div>
  );
}