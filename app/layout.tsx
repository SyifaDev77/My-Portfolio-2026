import type { Metadata } from "next";
import { Cinzel, MedievalSharp } from "next/font/google";
import "./globals.css";
import Navbar from "./components/header";

const cinzel = Cinzel({
  variable: "--font-body",
  subsets: ["latin"],
});

const medievalSharp = MedievalSharp({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "SYIFA' | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${medievalSharp.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="app-shell">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
