import React from "react";

export default function CollegeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="college-layout-wrapper">
      {/* Optional: header/banner/nav for the College section */}
      {children}
    </div>
  );
}