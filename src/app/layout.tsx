import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MegaMenu } from '@/components/navigation/MegaMenu';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { COMPANY_INFO } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`,
  description: COMPANY_INFO.description,
  keywords: [
    'enterprise technology',
    'AI automation',
    'cybersecurity',
    'software development',
    'digital marketing',
    'talent solutions',
    'logistics',
    'Vancouver',
    'Dubai',
    'Mumbai',
  ],
  authors: [{ name: COMPANY_INFO.name }],
  openGraph: {
    title: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="cursor-none">
        <CustomCursor />
        <MegaMenu />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
