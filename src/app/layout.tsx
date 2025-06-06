import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import { Toaster } from '@/components/ui/sonner';
import { NavbarTours } from '@/components/nav-bar-tours';
import { CookiesConsent } from '@/components/cookies-consent';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Optimal Travel Services',
  description: 'Find the cheapest tour in palawan with our service offers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarTours />
        <main className=''>{children}</main>
        <ScrollToTop />
        <Footer />
        <Toaster richColors />
        <CookiesConsent />
      </body>
    </html>
  );
}
