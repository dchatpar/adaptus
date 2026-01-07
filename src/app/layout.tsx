import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Navigation } from '@/components/layout/navigation';
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
  title: 'AdaptUs Group - Engineering the Digital Spine',
  description: 'Enterprise AI, Security, and Digital Transformation Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MegaMenu />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
