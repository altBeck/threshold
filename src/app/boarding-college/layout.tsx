import React from "react";

export default function BoardingCollegeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="boarding-college-layout-wrapper">
      {children}
    </div>
  );
}
