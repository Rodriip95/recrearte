import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flora Eventos Florales | Momentos que florecen",
  description:
    "Souvenirs, centros de mesa y decoración floral personalizada para comuniones, bautismos, quince años y celebraciones especiales.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
