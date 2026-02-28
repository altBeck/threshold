import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://threshold-pb22.vercel.app/"),
  title: "Threshold Schools",
  description: "Fostering Academic Excellence...",
  openGraph: {
    title: "Threshold Schools",
    description: "Fostering Academic Excellence...",
    images: ["/images/college-logo.png"],
    siteName: "Threshold Schools",
  },
  twitter: {
    card: "summary_large_image",
    title: "Threshold Schools",
    description: "Fostering Academic Excellence...",
    images: ["/images/college-logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${plusJakarta.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
