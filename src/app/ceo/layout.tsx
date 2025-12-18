import React from "react";

export default function CEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ceo-layout-wrapper">
      {children}
    </div>
  );
}