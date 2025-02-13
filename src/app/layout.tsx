import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Search } from 'lucide-react';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TempleRenew - Holistic Health Encyclopedia",
  description: "Your gateway to natural healing and holistic health knowledge",
  keywords: "health, holistic, natural healing, protocols, wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}>
        {/* Header */}
        <header className="bg-white border-b border-amber-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-3xl font-bold text-amber-600">
                TempleRenew
              </Link>
              <div className="flex items-center space-x-6">
                <nav className="hidden md:flex space-x-6">
                  <Link href="/" className="text-amber-600 hover:text-amber-700">
                    Home
                  </Link>
                  <Link href="/pages/protocols" className="text-amber-600 hover:text-amber-700">
                    Protocols
                  </Link>
                  <Link href="/about" className="text-amber-600 hover:text-amber-700">
                    About
                  </Link>
                </nav>
                <button className="p-2 text-amber-600 hover:text-amber-700">
                  <Search size={24} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-amber-50 py-8">
          <div className="container mx-auto px-4 text-center text-amber-800">
            <p>© 2025 TempleRenew. Your journey to holistic health starts here.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}