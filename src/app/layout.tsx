import "./globals.css";
import { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dziabaka Marek – Tatuaże",
  description: "Strona tatuażysty z mrocznym klimatem",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-gray-900 text-gray-100 flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
