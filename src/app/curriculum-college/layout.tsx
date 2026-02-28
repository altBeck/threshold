import React from "react";
import NavbarCollege from "@/component/NavbarCollege";

export default function CurriculumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="curriculum-layout-wrapper">
      <NavbarCollege />
      {children}
    </div>
  );
}
