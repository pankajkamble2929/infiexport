'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function PipeNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Logistics', href: '#logistics' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <Link href="/pipe-fittings" className="flex items-center">
            <Image
              src="/infiexport-logo.png"
              alt="INFI EXPORT Logo"
              width={150}
              height={45}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="hover:text-[#1A237E] transition"
              >
                {link.name}
              </a>
            ))}

            {/* CTA */}
            <a
              href="#cta"
              className="ml-4 flex items-center gap-2 bg-[#1A237E] text-white px-5 py-2.5 rounded-lg font-semibold shadow hover:bg-[#0d164d] hover:scale-105 transition-all duration-200"
            >
              Get Quote
              <ArrowRight size={16} />
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">
            <div className="flex flex-col px-6 py-6 space-y-5 text-gray-700 font-medium">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#1A237E]"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#cta"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#1A237E] text-white px-5 py-3 rounded-lg font-semibold mt-4"
              >
                Get Quote
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}