import type { Metadata } from "next";
import { Geist, Geist_Mono, Handjet, Press_Start_2P } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressFont = Press_Start_2P({
  variable: "--font-press",
  subsets: ["latin"],
  weight: "400"
})

const handFont = Handjet({
  variable: "--font-hand",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ZKET",
  description: "Workshop on introductory zero knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressFont.variable} ${handFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
