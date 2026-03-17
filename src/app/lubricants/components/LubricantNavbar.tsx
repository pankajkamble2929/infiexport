'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import LubricantQuoteModal from './LubricantQuoteModal';

export default function LubricantNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <Link href="/lubricants" className="flex items-center">
            <Image
              src="/infiexport-logo.png"
              alt="INFI EXPORT Logo"
              width={150}
              height={45}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700 tracking-wide">
            
            <Link
              href="/lubricants/"
              className="text-[#1A237E] hover:text-[#0D154F] transition"
            >
              HOME
            </Link>

            <Link
              href="/lubricants/automotive-oil/"
              className="text-[#1A237E] hover:text-[#0D154F] transition"
            >
              AUTOMOTIVE OIL
            </Link>

            <Link
              href="/lubricants/industrial-oil/"
              className="text-[#1A237E] hover:text-[#0D154F] transition"
            >
              INDUSTRIAL OIL
            </Link>

            <Link
              href="/lubricants/grease/"
              className="text-[#1A237E] hover:text-[#0D154F] transition"
            >
              GREASE
            </Link>

            <Link
              href="/lubricants/about/"
              className="text-[#1A237E] hover:text-[#0D154F] transition"
            >
              ABOUT
            </Link>

            <Link
              href="/lubricants/certifications/"
              className="text-[#1A237E] hover:text-[#0D154F] transition"
            >
              CERTIFICATIONS
            </Link>


            <Link
              href="/lubricants/contact/"
              className="text-[#1A237E] hover:text-[#0D154F] transition"
            >
              CONTACT
            </Link>

            {/* CTA Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer ml-4 bg-[#F4B400] text-[#1A237E] px-5 py-2 rounded-lg font-semibold shadow hover:bg-[#0D154F] hover:scale-105 transition-all duration-200"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1A237E]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">
            <div className="flex flex-col px-6 py-6 space-y-4 text-[#1A237E] font-semibold">
              
              <Link href="/lubricants/" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <Link
                href="/lubricants/automotive-oil/"
                onClick={() => setIsOpen(false)}
              >
                Automotive Oil
              </Link>

              <Link
                href="/lubricants/industrial-oil/"
                onClick={() => setIsOpen(false)}
              >
                Industrial Oil
              </Link>

              <Link
                href="/lubricants/grease/"
                onClick={() => setIsOpen(false)}
              >
                Grease
              </Link>

              <Link
                href="/lubricants/about/"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/lubricants/certifications/"
                onClick={() => setIsOpen(false)}
              >
                Certifications
              </Link>

              <Link
                href="/lubricants/contact/"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="bg-[#1A237E] text-white px-5 py-3 rounded-lg text-center font-semibold mt-4 hover:bg-[#0D154F] transition"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modal */}
      <LubricantQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
