import React from "react";

export default function BoardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="boarding-layout-wrapper">
      {/* Optional: you can have a specific header/banner/nav for the Boarding section */}
      {children}
    </div>
  );
}