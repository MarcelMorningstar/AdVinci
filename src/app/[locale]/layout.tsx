import type { Metadata } from 'next'
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {routing} from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Navbar from '../components/Navbar'
import { Nunito_Sans, Reenie_Beanie, Babylonica } from "next/font/google";
import "../styles/globals.css";


export const metadata: Metadata = {
  title: 'AdVinci',
  description: '',
  icons: {
    icon: '/assets/logo.svg',
  },
}

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const reenie_beanie = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--reenie_beanie",
});

const babylonica = Babylonica({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--babylonica",
});

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${nunitoSans.variable} ${reenie_beanie.variable} ${babylonica.variable}`}>
        <NextIntlClientProvider>
          <Navbar />

          <main>
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
