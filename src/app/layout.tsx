import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fast React Pizza CO.",
  description: "teste feito para Editora Opet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className="bg-soft-yellow pb-[6rem] border-b-[1.6rem] border-light-yellow " >        
        {children}        
        </body>        
    </html>
  );
}
