'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Target, Menu, X, Crown } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  const links = [
    { href: '/', label: 'Início' },
    { href: '/curso', label: 'Curso' },
    { href: '/biblioteca', label: 'Biblioteca' },
  ];

  return (
    <nav className="bg-black border-b border-[#d4af37]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Target className="w-8 h-8 text-[#d4af37] group-hover:rotate-90 transition-transform duration-300" />
              <div className="absolute inset-0 bg-[#d4af37] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
            <span className="text-xl font-bold text-[#d4af37] hidden sm:block">
              Gatilhos de Ouro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-[#d4af37]'
                    : 'text-gray-300 hover:text-[#d4af37]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {user?.tier === 'free' && (
              <Link
                href="/upgrade"
                className="flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#d4af37]/50 transition-all"
              >
                <Crown className="w-4 h-4" />
                Seja Prime
              </Link>
            )}
            
            {user?.tier === 'prime' && (
              <div className="flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37] text-[#d4af37] px-4 py-2 rounded-lg">
                <Crown className="w-4 h-4" />
                <span className="text-sm font-semibold">Membro Prime</span>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#d4af37] hover:text-[#f4d03f] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-[#d4af37]/20">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'bg-[#d4af37]/10 text-[#d4af37]'
                    : 'text-gray-300 hover:bg-[#d4af37]/5 hover:text-[#d4af37]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {user?.tier === 'free' && (
              <Link
                href="/upgrade"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-4 py-3 rounded-lg font-semibold mx-4"
              >
                <Crown className="w-4 h-4" />
                Seja Prime
              </Link>
            )}
            
            {user?.tier === 'prime' && (
              <div className="flex items-center justify-center gap-2 bg-[#d4af37]/10 border border-[#d4af37] text-[#d4af37] px-4 py-3 rounded-lg mx-4">
                <Crown className="w-4 h-4" />
                <span className="text-sm font-semibold">Membro Prime</span>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
