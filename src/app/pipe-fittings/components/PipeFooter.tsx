import Image from 'next/image';
import {
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Wrench,
  Layers,
  Circle,
  Linkedin,
} from 'lucide-react';

export default function PipeFooter() {
  return (
    <footer className="bg-gray-50 border-t">
      {/* ================= MAIN ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* Company */}
        <div>
          <Image
            src="/infiexport-logo.png"
            alt="INFI EXPORT Logo"
            width={150}
            height={45}
          />

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            INFI EXPORT supplies industrial pipe fittings including butt weld,
            forged fittings, and flanges for oil & gas, petrochemical, and
            infrastructure projects worldwide.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/company/infi-export/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1A237E] hover:bg-[#0d133d] text-white transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold text-[#1A237E] mb-4 text-lg flex items-center gap-2">
            <Wrench size={18} /> Pipe Fittings
          </h4>

          <ul className="space-y-3 text-sm text-gray-600">
            {['Elbow', 'Tee', 'Reducer', 'End Cap'].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#1A237E]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold text-[#1A237E] mb-4 text-lg flex items-center gap-2">
            <Layers size={18} /> Categories
          </h4>

          <ul className="space-y-3 text-sm text-gray-600">
            {['Butt Weld Fittings', 'Forged Fittings', 'Flanges'].map(
              (item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#1A237E]" />
                  {item}
                </li>
              ),
            )}
          </ul>

          <h4 className="font-semibold text-[#1A237E] mt-8 mb-4 text-lg flex items-center gap-2">
            <Circle size={18} /> Materials
          </h4>

          <ul className="space-y-3 text-sm text-gray-600">
            {['Carbon Steel', 'Stainless Steel', 'Alloy Steel'].map(
              (item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#1A237E]" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact */}
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

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <MessageCircle size={16} className="text-[#1A237E]" />
            <a
              href="https://wa.me/917977387942"
              target="_blank"
              className="hover:text-[#1A237E] transition"
            >
              +91 7977387942
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <MapPin size={16} className="text-[#1A237E]" />
            <span>Mumbai, India</span>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} INFI EXPORT. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#home" className="hover:text-[#1A237E]">
              Home
            </a>
            <a href="#products" className="hover:text-[#1A237E]">
              Products
            </a>
            <a href="#certifications" className="hover:text-[#1A237E]">
              Certifications
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
