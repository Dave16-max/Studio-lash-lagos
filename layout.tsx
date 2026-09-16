import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Lash Lagos | Luxury Lash Extensions in Lagos",
  description: "Lagos' premier lash studio. Classic, Hybrid, Volume lashes, Microblading & more. Book your appointment today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
