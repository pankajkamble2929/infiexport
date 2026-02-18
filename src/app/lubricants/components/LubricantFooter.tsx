import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

export default function LubricantFooter() {
  return (
    <footer className="bg-gray-50 border-t">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* 1. Company Info */}
        <div>
          <Image
            src="/infiexport-logo.png"
            alt="INFI EXPORT Logo"
            width={150}
            height={45}
          />
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            INFI EXPORT is a trusted global supplier of high-performance
            automotive lubricants, industrial oils, and premium greases,
            delivering quality, reliability, and timely export solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1A237E] hover:bg-[#0D154F] text-white transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* 2. Products */}
        <div>
          <h4 className="font-semibold text-[#1A237E] mb-4 text-lg">
            Products
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            {/* Automotive Oil */}
            <li>
              <Link
                href="/lubricants/automotive-oil"
                className="hover:text-[#1A237E] transition"
              >
                Automotive Oil
              </Link>
            </li>
            {/* Industrial Oil */}
            <li>
              <Link
                href="/lubricants/industrial-oil"
                className="hover:text-[#1A237E] transition"
              >
                Industrial Oil
              </Link>
            </li>
            {/* Grease */}
            <li>
              <Link
                href="/lubricants/grease"
                className="hover:text-[#1A237E] transition"
              >
                Grease
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Contact */}
        <div>
          <h4 className="font-semibold text-[#1A237E] mb-4 text-lg">Contact</h4>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Mail size={16} className="text-[#1A237E]" />
            <a
              href="mailto:info@infiexport.com"
              className="hover:text-[#1A237E] transition"
            >
              info@infiexport.com
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <MapPin size={16} className="text-[#1A237E]" />
            <span>Mumbai, Maharashtra, India</span>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden border cursor-pointer">
            <iframe
              src="https://www.google.com/maps?q=Mumbai,India&output=embed"
              width="100%"
              height="150"
              loading="lazy"
              className="transition duration-500"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} INFI EXPORT. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/lubricants/policies/privacy"
              className="hover:text-[#1A237E] transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/lubricants/policies/terms"
              className="hover:text-[#1A237E] transition"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/lubricants/policies/disclaimer"
              className="hover:text-[#1A237E] transition"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
