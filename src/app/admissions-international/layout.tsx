import React from "react";

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admissions-layout-wrapper">
      {/* Optional: you can have a specific header/banner/nav for the Admissions section */}
      {children}
    </div>
  );
}