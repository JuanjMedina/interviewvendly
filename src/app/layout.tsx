import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vendly - Facilitamos las transacciones digitales",
  description: "Vendly es una empresa de transacciones digitales que busca ayudar a los pequeños y medianos empresarios a facilitar sus compras y ventas en línea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
