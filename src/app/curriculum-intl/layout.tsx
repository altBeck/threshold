import React from "react";
import NavBar from "@/component/NavBar";

export default function CurriculumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="curriculum-layout-wrapper">
      <NavBar />
      {children}
    </div>
  );
}
