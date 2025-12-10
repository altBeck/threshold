import React from "react";

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="founder-layout-wrapper">
      {/* Optional: header/banner/nav for the College section */}
      {children}
    </div>
  );
}