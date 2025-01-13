import React from 'react';
import Header from "../app/components/shared/header/header";
import Footer from "../app/components/shared/footer/footer";
import StyledComponentsRegistry from "../app/lib/registry";
import { CartProvider } from "../app/contexts/cardContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ecommerce",
  description: "Sua loja online de confiança",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

