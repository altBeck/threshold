import React from "react";

export default function InternationalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="international-layout-wrapper">
      {/* Optional: you can have a specific header/banner/nav for the International section */}
      {children}
    </div>
  );
}