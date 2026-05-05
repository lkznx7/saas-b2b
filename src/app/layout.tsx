import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaaS B2B",
  description: "Plataforma B2B para gestão empresarial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}