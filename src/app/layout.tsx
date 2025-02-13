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
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary">TempleRenew</span>
              </Link>
              
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link 
                  href="/" 
                  className="text-foreground/60 transition-colors hover:text-foreground"
                >
                  Home
                </Link>
                <Link 
                  href="/protocols" 
                  className="text-foreground/60 transition-colors hover:text-foreground"
                >
                  Protocols
                </Link>
                <Link 
                  href="/about" 
                  className="text-foreground/60 transition-colors hover:text-foreground"
                >
                  About
                </Link>
                <button 
                  className="p-2 text-foreground/60 transition-colors hover:text-foreground"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              </nav>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t bg-muted/50">
            <div className="container py-6">
              <div className="flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row md:py-0">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} TempleRenew. Your journey to holistic health starts here.
                </p>
                <nav className="flex items-center space-x-6 text-sm">
                  <Link 
                    href="/privacy" 
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy
                  </Link>
                  <Link 
                    href="/terms" 
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms
                  </Link>
                </nav>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}