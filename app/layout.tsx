import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/common/header";
import AuthProvider from "@/app/context/AuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Auth Test",
  description: "Created by codemarns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="min-h-screen w-full pt-16 px-4 sm:px-8">
            <div className="h-auto w-full max-w-7xl mx-auto py-4 flex justify-center">
              {children}
            </div>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
