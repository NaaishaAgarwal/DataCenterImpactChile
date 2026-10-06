import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://precio-inteligencia-chile.naaishaagarwal.chatgpt.site'),
  title: 'El precio de la inteligencia',
  description: 'Los costos ocultos de la infraestructura de IA en Chile',
  openGraph: {
    title: 'El precio de la inteligencia',
    description: 'Los costos ocultos de la infraestructura de IA en Chile',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El precio de la inteligencia',
    description: 'Los costos ocultos de la infraestructura de IA en Chile',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
