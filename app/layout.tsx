import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FavoritesGoodsProvider } from "@/context/FavoritesGoodsContext/FavoritesGoodsContext";
import { CompareGoodsProvider } from "@/context/CompareGoodsContext/CompareGoodsContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mugunghwa Blooms & Roots",
  description: "Інтернет-магазин товарів з Південної Кореї та не тільки",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CompareGoodsProvider>
          <FavoritesGoodsProvider>
            {children}
          </FavoritesGoodsProvider>
        </CompareGoodsProvider>
      </body>
    </html>
  );
}