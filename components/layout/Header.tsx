"use client";

import { Link, useRouter, usePathname } from "@/i18n/routing";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLocale } from "next-intl";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const navItems = [
    { name: "홈", href: "/" },
    { name: "카타르시스란?", href: "/#catharsis-types" },
    { name: "명작 분석", href: "/#literary-works" },
    { name: "용어 사전", href: "/glossary" },
    { name: "저자 소개", href: "/about" },
  ];

  const switchLocale = (newLocale: string) => {
    // Create the new path with the new locale
    router.push(pathname, { locale: newLocale as any });
    setIsLangMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-ontological-600 via-axiological-600 to-imaginary-600 bg-clip-text text-transparent">
              카타르시스 연구
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-ontological-600"
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-ontological-600"
                aria-label="Change language"
              >
                <Globe size={18} />
                <span>{locale === 'ko' ? '한국어' : 'English'}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <button
                    onClick={() => switchLocale('ko')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${locale === 'ko' ? 'font-bold text-ontological-600' : ''}`}
                  >
                    한국어
                  </button>
                  <button
                    onClick={() => switchLocale('en')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${locale === 'en' ? 'font-bold text-ontological-600' : ''}`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-ontological-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm font-medium text-gray-500 mb-2">Language</div>
              <button
                onClick={() => {
                  switchLocale('ko');
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-ontological-600 ${locale === 'ko' ? 'text-ontological-600 font-bold' : ''}`}
              >
                한국어
              </button>
              <button
                onClick={() => {
                  switchLocale('en');
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-ontological-600 ${locale === 'en' ? 'text-ontological-600 font-bold' : ''}`}
              >
                English
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
