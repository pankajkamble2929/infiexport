import Link from 'next/link';
import Image from 'next/image';
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Apple,
  Carrot,
  Leaf,
  CheckCircle2,
} from 'lucide-react';

export default function AgroFooter() {
  return (
    <footer className="bg-gray-50 border-t">
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* ================= COMPANY ================= */}
        <div>
          <Image
            src="/infiexport-logo.png"
            alt="INFI EXPORT Logo"
            width={150}
            height={45}
          />

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            INFI EXPORT supplies fresh fruits, vegetables, and spices sourced
            from trusted farms across India with export-grade quality,
            packaging, and global delivery support.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            {[Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="https://www.linkedin.com/company/infi-export/"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 text-white transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* ================= FRUITS ================= */}
        <div>
          <h4 className="font-semibold text-emerald-700 mb-4 text-lg flex items-center gap-2">
            <Apple size={18} /> Fresh Fruits
          </h4>

          <ul className="space-y-3 text-sm text-gray-600">
            {['Mango', 'Banana', 'Grapes', 'Pomegranate'].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= VEGETABLES ================= */}
        <div>
          <h4 className="font-semibold text-emerald-700 mb-4 text-lg flex items-center gap-2">
            <Carrot size={18} /> Fresh Vegetables
          </h4>

          <ul className="space-y-3 text-sm text-gray-600">
            {['Onion', 'Potato', 'Tomato'].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>

          {/* ================= SPICES (MERGED FOR BALANCE) ================= */}
          <h4 className="font-semibold text-emerald-700 mt-8 mb-4 text-lg flex items-center gap-2">
            <Leaf size={18} /> Spices
          </h4>

          <ul className="space-y-3 text-sm text-gray-600">
            {['Turmeric', 'Red Chilli', 'Cumin Seeds'].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h4 className="font-semibold text-emerald-700 mb-4 text-lg">
            Contact
          </h4>

          {/* Email */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Mail size={16} className="text-emerald-600" />
            <a
              href="mailto:info@infiexport.com"
              className="hover:text-emerald-600 transition"
            >
              info@infiexport.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <MessageCircle size={16} className="text-emerald-600" />
            <a
              href="https://wa.me/917977387942"
              target="_blank"
              className="hover:text-emerald-600 transition"
            >
              +91 7977387942
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <MapPin size={16} className="text-emerald-600" />
            <span>Mumbai, Maharashtra, India</span>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden border">
            <iframe
              src="https://www.google.com/maps?q=Mumbai,India&output=embed"
              width="100%"
              height="150"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} INFI EXPORT. All rights reserved.</p>

          {/* Anchor Links */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#home" className="hover:text-emerald-600 transition">
              Home
            </a>
            <a href="#products" className="hover:text-emerald-600 transition">
              Products
            </a>
            <a
              href="#certifications"
              className="hover:text-emerald-600 transition"
            >
              Certifications
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
