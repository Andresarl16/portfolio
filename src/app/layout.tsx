import type { Metadata } from 'next';
import { Archivo, Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: 'Portfolio - Andrés Rojas',
  description:
    'Welcome to my personal portfolio! I am a passionate software engineer with experience in building web applications using modern technologies. Explore my projects, skills, and experience to learn more about me and my work.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${archivo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
