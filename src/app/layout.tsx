import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import { Search } from 'lucide-react';
import Link from 'next/link';
import { ThemeProvider } from "@/components/theme-provider";

// Since Geist isn't available in Google Fonts, we should use Inter as fallback
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${inter.variable} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-slate-200 dark:text-slate-100">TempleRenew</span>
                </Link>
                
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  <Link 
                    href="/protocols" 
                    className="text-slate-200 transition-colors hover:text-slate-200 dark:text-slate-200 dark:hover:text-slate-100"
                  >
                    Protocols
                  </Link>
                </nav>
              </div>
            </header>

            <main className="flex-1">
              {children}
            </main>

            <footer className="border-t bg-muted">
              <div className="container py-6">
                <div className="flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row md:py-0">
                  <p className="text-sm text-slate-200 dark:text-slate-400">
                    © {new Date().getFullYear()} TempleRenew. Your journey to holistic health starts here.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}