import Image from 'next/image';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Ship,
  ShieldCheck,
  Settings,
  RotateCw,
  GitBranch,
  ArrowDownUp,
  ArrowRightLeft,
  Circle,
  Package,
  Zap,
  Wrench,
  Link,
  GitMerge,
  DollarSign,
  Lock,
  Award,
  FileCheck,
  CheckCircle2,
  MessageCircle,
  Mail,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://infiexport.com'),
  title: 'Pipe Fittings Exporter from India | Oil & Gas Industry | INFI EXPORT',
  description:
    'INFI EXPORT supplies industrial pipe fittings including butt weld fittings, forged fittings, and flanges as per ASTM and ASME standards for oil & gas, petrochemical, and industrial applications worldwide.',
  keywords: [
    'Pipe fittings exporter India',
    'Butt weld fittings supplier',
    'Forged fittings exporter',
    'Flanges manufacturer India',
    'ASTM pipe fittings',
    'ASME pipe fittings',
    'Oil and gas pipe fittings supplier',
    'HSN 7307 pipe fittings India',
  ],
  alternates: {
    canonical: '/pipe-fittings/',
  },
  openGraph: {
    title: 'Industrial Pipe Fittings Exporter | INFI EXPORT',
    description:
      'Exporting high-quality pipe fittings for oil & gas industry including flanges, butt weld and forged fittings with global shipping support.',
    url: 'https://infiexport.com/pipe-fittings/',
    siteName: 'INFI EXPORT',
    type: 'website',
  },
};

export default function PipeFittingsHome() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative py-28 px-6 text-center bg-[#1A237E] text-white overflow-hidden"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] via-[#151c60] to-[#0d133d] opacity-95" />

        {/* Background Image */}
        <Image
          src="/images/pipe/pipe-hero.jpg"
          alt="Industrial Pipe Fittings Oil and Gas"
          fill
          className="object-cover opacity-20"
          priority
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full text-sm text-gray-200 backdrop-blur">
              <Settings size={16} />
              Industrial Pipe Fittings Exporter
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Pipe Fittings for
            <span className="block text-[#F4B400] mt-2">
              Oil & Gas Industry
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            INFI EXPORT supplies butt weld fittings, forged fittings, and
            flanges manufactured as per ASTM / ASME standards with export-grade
            quality, precision, and reliable global delivery.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              ASTM / ASME Compliant
            </div>

            <div className="flex items-center gap-2">
              <Settings size={18} />
              Precision Engineered
            </div>

            <div className="flex items-center gap-2">
              <Ship size={18} />
              Global Export Supply
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917977387942"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#F4B400] text-black px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Get Quote on WhatsApp
              <ArrowRight size={18} />
            </a>

            {/* Scroll to Products */}
            <a
              href="#products"
              className="flex items-center justify-center gap-2 border border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1A237E] transition"
            >
              View Products
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="py-24 px-6 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">
            Our Pipe Fittings Range
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            Complete range of industrial pipe fittings manufactured as per ASTM
            / ASME standards for oil & gas, petrochemical, and industrial
            applications.
          </p>

          {/* ================= BUTT WELD ================= */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-[#1A237E] mb-10">
              Butt Weld Fittings
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: 'Elbow',
                  img: '/images/pipe/elbow.jpg',
                  specs: [
                    { icon: RotateCw, text: '90° & 45° Angles' },
                    { icon: Settings, text: 'Long & Short Radius' },
                    { icon: ShieldCheck, text: 'Smooth Flow Design' },
                  ],
                },
                {
                  name: 'Tee',
                  img: '/images/pipe/tee.jpg',
                  specs: [
                    { icon: GitBranch, text: 'Equal & Reducing Tee' },
                    { icon: Settings, text: 'Uniform Thickness' },
                    { icon: ShieldCheck, text: 'Leak-Proof Joint' },
                  ],
                },
                {
                  name: 'Reducer',
                  img: '/images/pipe/reducer.jpg',
                  specs: [
                    { icon: ArrowDownUp, text: 'Concentric Type' },
                    { icon: ArrowRightLeft, text: 'Eccentric Type' },
                    { icon: Settings, text: 'Smooth Transition Flow' },
                  ],
                },
                {
                  name: 'End Caps',
                  img: '/images/pipe/cap.jpg',
                  specs: [
                    { icon: Circle, text: 'Seamless Finish' },
                    { icon: ShieldCheck, text: 'Pressure Resistant' },
                    { icon: Package, text: 'Welded / Seamless' },
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl border shadow-sm hover:shadow-xl transition overflow-hidden"
                >
                  <div className="relative h-[180px] w-full">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="font-semibold text-[#1A237E] mb-3 text-center">
                      {item.name}
                    </h4>

                    <div className="space-y-2 text-xs text-gray-600">
                      {item.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <spec.icon size={14} className="text-[#1A237E]" />
                          {spec.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Materials: Stainless Steel, Carbon Steel, Alloy Steel
            </p>
          </div>

          {/* ================= FORGED ================= */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-[#1A237E] mb-10">
              Forged Fittings
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: 'Socket Weld',
                  img: '/images/pipe/socket-weld.jpg',
                  specs: [
                    { icon: Zap, text: 'High Pressure Use' },
                    { icon: ShieldCheck, text: 'Leak-Proof Joint' },
                    { icon: Settings, text: 'Precision Fit' },
                  ],
                },
                {
                  name: 'Threaded',
                  img: '/images/pipe/threaded.jpg',
                  specs: [
                    { icon: Settings, text: 'Easy Installation' },
                    { icon: Wrench, text: 'No Welding Required' },
                    { icon: ShieldCheck, text: 'Tight Sealing' },
                  ],
                },
                {
                  name: 'Coupling / Union / Plug',
                  img: '/images/pipe/coupling.jpg',
                  specs: [
                    { icon: Link, text: 'Secure Connection' },
                    { icon: Settings, text: 'Compact Design' },
                    { icon: ShieldCheck, text: 'Durable Build' },
                  ],
                },
                {
                  name: 'Cross & Bushings',
                  img: '/images/pipe/cross.jpg',
                  specs: [
                    { icon: GitMerge, text: 'Multi-Direction Flow' },
                    { icon: Settings, text: 'Precision Threads' },
                    { icon: ShieldCheck, text: 'Reliable Joint' },
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl border shadow-sm hover:shadow-xl transition overflow-hidden"
                >
                  <div className="relative h-[180px] w-full">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="font-semibold text-[#1A237E] mb-3 text-center">
                      {item.name}
                    </h4>

                    <div className="space-y-2 text-xs text-gray-600">
                      {item.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <spec.icon size={14} className="text-[#1A237E]" />
                          {spec.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Materials: Stainless Steel, Carbon Steel, Alloy Steel
            </p>
          </div>

          {/* ================= FLANGES ================= */}
          <div>
            <h3 className="text-2xl font-semibold text-[#1A237E] mb-10">
              Flanges
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: 'Weld Neck',
                  img: '/images/pipe/weld-neck.jpg',
                  specs: [
                    { icon: ShieldCheck, text: 'High Pressure Use' },
                    { icon: Settings, text: 'Long Service Life' },
                    { icon: Zap, text: 'Strong Weld Connection' },
                  ],
                },
                {
                  name: 'Slip-On',
                  img: '/images/pipe/slip-on.jpg',
                  specs: [
                    { icon: Settings, text: 'Easy Alignment' },
                    { icon: DollarSign, text: 'Cost Effective' },
                    { icon: ShieldCheck, text: 'Reliable Fit' },
                  ],
                },
                {
                  name: 'Blind',
                  img: '/images/pipe/blind.jpg',
                  specs: [
                    { icon: Circle, text: 'Pipeline Closure' },
                    { icon: ShieldCheck, text: 'Pressure Tested' },
                    { icon: Lock, text: 'Secure Sealing' },
                  ],
                },
                {
                  name: 'Socket / Threaded',
                  img: '/images/pipe/socket-flange.jpg',
                  specs: [
                    { icon: Settings, text: 'Small Diameter Lines' },
                    { icon: Zap, text: 'High Strength' },
                    { icon: ShieldCheck, text: 'Leak-Proof Joint' },
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl border shadow-sm hover:shadow-xl transition overflow-hidden"
                >
                  <div className="relative h-[180px] w-full">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="font-semibold text-[#1A237E] mb-3 text-center">
                      {item.name}
                    </h4>

                    <div className="space-y-2 text-xs text-gray-600">
                      {item.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <spec.icon size={14} className="text-[#1A237E]" />
                          {spec.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Materials: Stainless Steel, Carbon Steel, Alloy Steel
            </p>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">
            Certifications & Compliance
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            All products are manufactured and supplied as per international
            standards ensuring quality, safety, and compliance for global oil &
            gas and industrial applications.
          </p>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: 'ASTM Standards',
                icon: ShieldCheck,
                points: [
                  'ASTM A234 WPB',
                  'ASTM A105 / A182',
                  'Material Traceability',
                ],
              },
              {
                title: 'ASME Compliance',
                icon: Settings,
                points: [
                  'ASME B16.9 (Butt Weld)',
                  'ASME B16.11 (Forged)',
                  'ASME B16.5 (Flanges)',
                ],
              },
              {
                title: 'Quality Assurance',
                icon: Award,
                points: [
                  'ISO Certified Manufacturing',
                  'Third Party Inspection',
                  'Hydro & NDT Testing',
                ],
              },
              {
                title: 'Export Documentation',
                icon: FileCheck,
                points: [
                  'Mill Test Certificate (MTC)',
                  'Inspection Reports',
                  'Packing List & Invoice',
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl border shadow-sm hover:shadow-xl transition text-left"
              >
                <item.icon className="text-[#1A237E] mb-4" size={30} />

                <h3 className="font-semibold text-lg text-[#1A237E] mb-4">
                  {item.title}
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2
                        size={14}
                        className="text-[#1A237E] mt-[2px]"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-16 max-w-3xl mx-auto text-sm text-gray-500">
            <p>
              Additional certifications and custom documentation can be provided
              as per buyer requirements including third-party inspection
              agencies like SGS, BV, and TUV.
            </p>
          </div>
        </div>
      </section>

      <section
        id="logistics"
        className="py-24 px-6 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">
            Packaging & Logistics
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            We ensure safe packaging, proper handling, and efficient logistics
            to deliver industrial pipe fittings securely across global
            destinations.
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Packaging */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition">
              <Package className="text-[#1A237E] mb-4" size={30} />
              <h3 className="font-semibold text-lg text-[#1A237E] mb-3">
                Export Packaging
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Wooden Boxes / Crates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Palletized Cargo
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Bubble Wrap & Protection
                </li>
              </ul>
            </div>

            {/* Protection */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition">
              <ShieldCheck className="text-[#1A237E] mb-4" size={30} />
              <h3 className="font-semibold text-lg text-[#1A237E] mb-3">
                Surface Protection
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Anti-Rust Coating
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Oil / Varnish Finish
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> End Caps Protection
                </li>
              </ul>
            </div>

            {/* Logistics */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition">
              <Ship className="text-[#1A237E] mb-4" size={30} />
              <h3 className="font-semibold text-lg text-[#1A237E] mb-3">
                Global Shipping
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> FCL / LCL Shipments
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Sea & Air Freight
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> On-Time Dispatch
                </li>
              </ul>
            </div>

            {/* Documentation */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition">
              <FileCheck className="text-[#1A237E] mb-4" size={30} />
              <h3 className="font-semibold text-lg text-[#1A237E] mb-3">
                Export Documentation
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Commercial Invoice
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Packing List
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Certificate of Origin
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-16 max-w-3xl mx-auto text-sm text-gray-500">
            <p>
              Customized packaging and documentation available as per client
              requirements and destination country regulations.
            </p>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="relative py-24 px-6 bg-[#1A237E] text-white overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] via-[#151c60] to-[#0d133d] opacity-95" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full text-sm text-gray-200 backdrop-blur mb-8">
            <FileText size={16} />
            Request for Quotation (RFQ)
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Looking for Reliable Pipe Fittings Supplier?
          </h2>

          {/* Subtext */}
          <p className="text-lg text-[#F4B400] max-w-3xl mx-auto mb-12">
            Get high-quality pipe fittings with competitive pricing, certified
            materials, and fast global delivery. Share your requirement and
            receive a detailed quotation within 24 hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917977387942"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-[#25D366] text-black font-semibold rounded-xl text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <MessageCircle size={20} />
              Get Quote on WhatsApp
            </a>

            {/* Email */}
            <a
              href="mailto:info@infiexport.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-3 border border-white/70 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#1A237E] transition"
            >
              <Mail size={20} />
              Email Your Requirement
            </a>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-300">
            <span>✔ ASTM / ASME Certified</span>
            <span>✔ Mill Test Certificate Available</span>
            <span>✔ Global Export Support</span>
          </div>
        </div>
      </section>
    </>
  );
}
