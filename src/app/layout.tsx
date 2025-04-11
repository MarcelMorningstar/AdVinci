import type { Metadata } from 'next'
import { Nunito_Sans, Reenie_Beanie } from "next/font/google";
import "./styles/globals.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${reenie_beanie.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
