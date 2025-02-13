import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Search } from 'lucide-react';
import Link from 'next/link';

// Since Geist isn't available in Google Fonts, we should use Inter as fallback
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TempleRenew - Holistic Health Encyclopedia",
  description: "Your gateway to natural healing and holistic health knowledge",
  keywords: "health, holistic, natural healing, protocols, wellness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                {/* Add your navigation items here */}
              </nav>
            </div>
          </header>
          <main className="flex-1">
            <div className="container py-6">
              {children}
            </div>
          </main>
          <footer className="border-t">
            <div className="container flex h-14 items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Your Company. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}