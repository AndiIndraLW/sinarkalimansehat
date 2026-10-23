import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinar Kaliman Sehat | Herbal Alami Berstandar Mutu BPOM & CPOTB",
  description:
    "PT Sinar Kaliman Sehat menghadirkan obat tradisional herbal berkualitas tinggi (Melastoma Brand) seperti Anten 100, Dilong Kapsul Cacing, Hou Tung Pien, dan Kapsuma.",
  keywords: "sinar kaliman sehat, melastoma, obat herbal, jamu, kapsuma, anten 100, hou tung pien, dilong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/assets/logo.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
