import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import BannerCTA from "@/components/bannerCTA";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Primeira aplicação Next.JS",
  description: "Aprendendo ecossistema React!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>



        {children}



      </body>
    </html>
  );
}
