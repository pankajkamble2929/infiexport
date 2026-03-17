'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import QuoteModal from './QuoteModal'; 

export default function RiceNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/rice" className="flex items-center">
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
          <Link
            href="/rice"
            className="text-emerald-800 hover:text-[#2E7D32] transition"
          >
            HOME
          </Link>

          <Link
            href="/rice/basmati"
            className="text-emerald-800 hover:text-[#2E7D32] transition"
          >
            BASMATI
          </Link>

          <Link
            href="/rice/non-basmati"
            className="text-emerald-800 hover:text-[#2E7D32] transition"
          >
            NON-BASMATI
          </Link>

          <Link
            href="/rice/about/"
            className="text-emerald-800 hover:text-[#2E7D32] transition"
          >
            ABOUT
          </Link>

          <Link
            href="/rice/certifications/"
            className="text-emerald-800 hover:text-[#2E7D32] transition"
          >
            CERTIFICATIONS
          </Link>

          <Link
            href="/rice/contact"
            className="text-emerald-800 hover:text-[#2E7D32] transition"
          >
            CONTACT
          </Link>

          {/* CTA Button triggers modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer ml-4 bg-[#F4B400] text-black px-5 py-2 rounded-lg font-semibold shadow hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              Get Quote
            </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col px-6 py-6 space-y-4 text-gray-700 font-medium">
            <Link href="/rice" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link href="/rice/basmati/" onClick={() => setIsOpen(false)}>
              Basmati
            </Link>

            <Link href="/rice/non-basmati/" onClick={() => setIsOpen(false)}>
              Non-Basmati
            </Link>

            <Link href="/rice/about/" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link href="/rice/certifications/" onClick={() => setIsOpen(false)}>
              Certifications
            </Link>

            <Link href="/rice/contact/" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

           <button
                onClick={() => { setIsModalOpen(true); setIsOpen(false); }}
                className="bg-[#F4B400] text-black px-5 py-3 rounded-lg text-center font-semibold mt-4"
              >
                Get Quote
              </button>
          </div>
        </div>
      )}
    </header>
    {/* Modal Component */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
