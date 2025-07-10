import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { containers } from '@/lib/premium-design';
import Logo from '@/components/Logo';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MedDrive AI - Transform Medical Research',
  description: 'Next-generation platform for medical research teams. Collaborate seamlessly, analyze data intelligently, and accelerate breakthroughs in healthcare.',
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
      <div className={`${containers.outer} flex items-center justify-between h-16`}>
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className={`${containers.outer} py-8`}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MedDrive AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
