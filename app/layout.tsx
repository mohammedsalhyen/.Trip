
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import AOS from "aos";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ".Trip",
  description: "Go now and explore the world",
  icons: "/travel-svgrepo-com.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        </Head>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <script src="bower_components/aos/dist/aos.js"></script>
      </body>
    </html>
  );
}
