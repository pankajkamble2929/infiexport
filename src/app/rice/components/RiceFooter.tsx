import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

export default function RiceFooter() {
  return (
    <footer className="bg-gray-50 border-t">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <Image
            src="/infiexport-logo.png"
            alt="INFI EXPORT Logo"
            width={150}
            height={45}
          />
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            INFI EXPORT is a trusted exporter of premium quality Indian rice,
            serving global markets with quality assurance and timely delivery.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 text-white transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Basmati */}
        <div>
          <h4 className="font-semibold text-emerald-700 mb-4 text-lg">
            Basmati
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <Link
                href="/rice/basmati/1121-steam/"
                className="hover:text-emerald-600 transition"
              >
                1121 Steam Basmati Rice
              </Link>
            </li>
            <li>
              <Link
                href="/rice/basmati/1121-sella/"
                className="hover:text-emerald-600 transition"
              >
                1121 Sella (Parboiled) Rice
              </Link>
            </li>
            <li>
              <Link
                href="/rice/basmati/1121-golden-sella/"
                className="hover:text-emerald-600 transition"
              >
                1121 Golden Sella Basmati
              </Link>
            </li>
            <li>
              <Link
                href="/rice/basmati/traditional/"
                className="hover:text-emerald-600 transition"
              >
                Traditional Basmati Rice
              </Link>
            </li>
          </ul>
        </div>

        {/* Non Basmati */}
        <div>
          <h4 className="font-semibold text-emerald-700 mb-4 text-lg">
            Non Basmati
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <Link
                href="/rice/non-basmati/ir64/"
                className="hover:text-emerald-600 transition"
              >
                IR64 Rice
              </Link>
            </li>
            <li>
              <Link
                href="/rice/non-basmati/sona-masoori/"
                className="hover:text-emerald-600 transition"
              >
                Sona Masoori Rice
              </Link>
            </li>
            <li>
              <Link
                href="/rice/non-basmati/pr11-parboiled/"
                className="hover:text-emerald-600 transition"
              >
                PR11 Parboiled Rice
              </Link>
            </li>
            <li>
              <Link
                href="/rice/non-basmati/long-grain-white/"
                className="hover:text-emerald-600 transition"
              >
                Long Grain White Rice
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-emerald-700 mb-4 text-lg">
            Contact
          </h4>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Mail size={16} className="text-emerald-600" />
            <a
              href="mailto:info@infiexport.com"
              className="hover:text-emerald-600 transition"
            >
              info@infiexport.com
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <MapPin size={16} className="text-emerald-600" />
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
              href="/rice/policies/privacy/"
              className="hover:text-emerald-600 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/rice/policies/terms/"
              className="hover:text-emerald-600 transition"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/rice/policies/disclaimer/"
              className="hover:text-emerald-600 transition"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
