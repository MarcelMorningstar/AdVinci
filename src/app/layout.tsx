import Head from "next/head";
import { Nunito_Sans, Vibur } from "next/font/google";
import "./styles/globals.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const vibur = Vibur({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--vibur",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>AdVinci</title>
        <meta name="description" content="" />
        <link rel="icon" href="/assets/logo.svg" sizes="any" />
      </Head>
      <body className={`${nunitoSans.variable} ${vibur.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
