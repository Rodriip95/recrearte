import type { Metadata } from "next";
import { Playfair_Display, Bokor, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const libre = Libre_Baskerville({ 
  subsets: ['latin'],
  variable: '--font-libre',
  display: 'swap',
  weight: '400',
})


export const metadata: Metadata = {
  title: 'Natura - Naturaleza que respira',
  description: 'Piezas botánicas artesanales que capturan la magia de lo efímero',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${libre.variable}`}>
      <body className={libre.className}>
        {children}
      </body>
    </html>
  );
}
