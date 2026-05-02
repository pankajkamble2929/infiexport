import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  ShieldCheck,
  Ship,
  Apple,
  Carrot,
  Leaf,
  CheckCircle2,
  Package,
  Globe,
  Clock,
  Thermometer,
  Layers,
  Snowflake,
  Droplets,
  Flame,
  Award,
  FileCheck,
  MessageCircle,
  Mail,
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://infiexport.com'),
  title: 'Fresh Agro Commodities Exporter from India | INFI EXPORT',
  description:
    'INFI EXPORT supplies fresh fruits, vegetables, and spices from India to global markets with reliable sourcing, export-grade packaging, and timely delivery.',
  keywords: [
    'Agro exporter India',
    'Fresh fruits export India',
    'Vegetables exporter India',
    'Spices exporter India',
    'Mango export India',
    'Onion export supplier',
  ],
  alternates: {
    canonical: '/agro/',
  },
  openGraph: {
    title: 'Fresh Agro Commodities Exporter | INFI EXPORT',
    description:
      'Exporting fresh fruits, vegetables, and spices from India with quality assurance and global shipping support.',
    url: 'https://infiexport.com/agro/',
    siteName: 'INFI EXPORT',
    type: 'website',
  },
};

export default function AgroHome() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative py-28 px-6 text-center bg-emerald-900 text-white overflow-hidden"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-900 to-green-800 opacity-95" />

        {/* Background Image */}
        <Image
          src="/images/agro/vegetable-hero.jpg"
          alt="Fresh Fruits Vegetables Spices Export from India"
          fill
          className="object-cover opacity-20"
          priority
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-emerald-800 px-5 py-2 rounded-full text-sm font-medium text-green-200">
              <Leaf size={18} />
              Fresh Agro Commodities Exporter
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Exporting Fresh Agro Products
            <span className="block text-[#F4B400] mt-2">
              Fruits, Vegetables & Spices
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-10">
            INFI EXPORT supplies fresh fruits, vegetables, and spices sourced
            directly from farms across India with strict quality checks,
            export-grade packaging, and reliable global delivery.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-green-200 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              Fresh Quality Assured
            </div>

            <div className="flex items-center gap-2">
              <Ship size={18} />
              Fast Global Shipping
            </div>

            <div className="flex items-center gap-2">
              <Globe size={18} />
              Serving International Markets
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/917977387942"
              className="flex items-center justify-center gap-2 bg-[#F4B400] text-black px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Get Quote on WhatsApp
              <ArrowRight size={18} />
            </a>

            <a
              href="#products"
              className="flex items-center justify-center gap-2 border border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-900 transition"
            >
              View Products
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT DETAILS ================= */}
      <section
        id="products"
        className="py-24 px-6 bg-gradient-to-b from-white to-emerald-50"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
            Our Agro Products
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            Export-quality agro commodities with proper grading, sorting,
            packaging, and international compliance for global buyers.
          </p>

          {/* ================= FRUITS ================= */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-10">
              Fresh Fruits
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  name: 'Mango',
                  img: '/images/agro/alphonso.webp',
                  specs: [
                    { icon: Award, text: 'Premium Grades (Alphonso, Kesar)' },
                    { icon: Package, text: '3kg / 5kg Export Cartons' },
                    { icon: Thermometer, text: 'Controlled Ripening' },
                  ],
                },
                {
                  name: 'Banana',
                  img: '/images/agro/banana.jpg',
                  specs: [
                    { icon: Layers, text: 'Hand-Selected Clusters' },
                    { icon: Package, text: '13kg Export Boxes' },
                    { icon: Clock, text: 'Long Shelf Life Variety' },
                  ],
                },
                {
                  name: 'Grapes',
                  img: '/images/agro/grapes.jpg',
                  specs: [
                    { icon: ShieldCheck, text: 'Residue-Free Quality' },
                    { icon: Snowflake, text: 'Pre-Cooling Process' },
                    { icon: Package, text: 'Punnet Packaging' },
                  ],
                },
                {
                  name: 'Pomegranate',
                  img: '/images/agro/pomegranate.jpeg',
                  specs: [
                    { icon: Droplets, text: 'High Aril Density' },
                    { icon: Package, text: '4kg / 5kg Boxes' },
                    { icon: ShieldCheck, text: 'Export Grade Sorting' },
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
                    <h4 className="font-semibold text-emerald-800 mb-3 text-center">
                      {item.name}
                    </h4>

                    <div className="space-y-2 text-xs text-gray-600">
                      {item.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <spec.icon size={14} className="text-emerald-600" />
                          {spec.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= VEGETABLES ================= */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-10">
              Fresh Vegetables
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Onion',
                  img: '/images/agro/onion.jpg',
                  specs: [
                    { icon: Package, text: '25kg / 50kg Mesh Bags' },
                    { icon: ShieldCheck, text: 'A-Grade Sorting' },
                    { icon: Clock, text: 'Long Storage Variety' },
                  ],
                },
                {
                  name: 'Potato',
                  img: '/images/agro/potato.jpg',
                  specs: [
                    { icon: Layers, text: 'Uniform Size Grading' },
                    { icon: Package, text: 'Jute / PP Bags' },
                    { icon: Thermometer, text: 'Cold Storage Supply' },
                  ],
                },
                {
                  name: 'Tomato',
                  img: '/images/agro/tomato.jpg',
                  specs: [
                    { icon: Droplets, text: 'Fresh Harvest Supply' },
                    { icon: Package, text: 'Crate Packaging' },
                    { icon: ShieldCheck, text: 'Damage-Free Sorting' },
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
                    <h4 className="font-semibold text-emerald-800 mb-3 text-center">
                      {item.name}
                    </h4>

                    <div className="space-y-2 text-xs text-gray-600">
                      {item.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <spec.icon size={14} className="text-emerald-600" />
                          {spec.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= SPICES ================= */}
          <div>
            <h3 className="text-2xl font-semibold text-emerald-700 mb-10">
              Spices
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Turmeric',
                  img: '/images/agro/turmeric.jpg',
                  specs: [
                    { icon: ShieldCheck, text: 'High Curcumin Content' },
                    { icon: Package, text: '25kg / 50kg Bags' },
                    { icon: Layers, text: 'Finger / Powder Form' },
                  ],
                },
                {
                  name: 'Red Chilli',
                  img: '/images/agro/red-chilli.jpg',
                  specs: [
                    { icon: Flame, text: 'High ASTA Color Value' },
                    { icon: Package, text: 'Bulk Export Packing' },
                    { icon: ShieldCheck, text: 'Low Moisture Content' },
                  ],
                },
                {
                  name: 'Cumin Seeds',
                  img: '/images/agro/cumin-seeds.jpg',
                  specs: [
                    { icon: Droplets, text: 'Cleaned & Sortex Quality' },
                    { icon: Package, text: '25kg PP Bags' },
                    { icon: ShieldCheck, text: 'Export Grade Seeds' },
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
                    <h4 className="font-semibold text-emerald-800 mb-3 text-center">
                      {item.name}
                    </h4>

                    <div className="space-y-2 text-xs text-gray-600">
                      {item.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <spec.icon size={14} className="text-emerald-600" />
                          {spec.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="py-20 px-6 bg-white" id="certifications">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
            Certifications & Compliance
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-14">
            Recognized certifications ensuring quality, safety, and smooth
            international trade operations.
          </p>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {[
              { name: 'IEC', image: '/images/certifications/dgft-logo.jpg' },
              { name: 'GST', image: '/images/certifications/gst.avif' },
              { name: 'APEDA', image: '/images/certifications/apeda.png' },
              { name: 'FSSAI', image: '/images/certifications/FSSAI-logo.png' },
              {
                name: 'HACCP',
                image: '/images/certifications/haccp-logo.avif',
              },
              {
                name: 'ISO 22000',
                image: '/images/certifications/iso-22000-logo.avif',
              },
            ].map((cert, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-xl border hover:shadow-md transition"
              >
                <div className="relative w-full h-16">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PACKAGING & LOGISTICS ================= */}
      <section
        className="py-24 px-6 bg-gradient-to-b from-emerald-50 to-white"
        id="logistics"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
            Packaging & Logistics
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            We ensure safe packaging and efficient logistics solutions to
            maintain product quality and deliver shipments on time across global
            markets.
          </p>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Packaging */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition">
              <Package className="text-emerald-600 mb-4" size={28} />
              <h3 className="font-semibold text-lg text-emerald-800 mb-3">
                Export Packaging
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Corrugated Boxes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Mesh / PP Bags
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Custom Packaging Options
                </li>
              </ul>
            </div>

            {/* Cold Chain */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition">
              <Snowflake className="text-emerald-600 mb-4" size={28} />
              <h3 className="font-semibold text-lg text-emerald-800 mb-3">
                Cold Chain Handling
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Pre-Cooling Process
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Temperature Control
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} /> Freshness Preservation
                </li>
              </ul>
            </div>

            {/* Logistics */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition">
              <Ship className="text-emerald-600 mb-4" size={28} />
              <h3 className="font-semibold text-lg text-emerald-800 mb-3">
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
                  <CheckCircle2 size={14} /> Timely Dispatch
                </li>
              </ul>
            </div>

            {/* Documentation */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition">
              <FileCheck className="text-emerald-600 mb-4" size={28} />
              <h3 className="font-semibold text-lg text-emerald-800 mb-3">
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
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        className="relative py-24 px-6 bg-emerald-900 text-white overflow-hidden"
        id="contact"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 opacity-95" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Small Tag */}
          <div className="inline-flex items-center gap-2 bg-emerald-800 text-green-200 px-5 py-2 rounded-full text-sm font-medium mb-8">
            <Globe size={16} />
            Supplying Agro Commodities Worldwide
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Looking for a Reliable Agro Export Partner?
          </h2>

          {/* Subtext */}
          <p className="text-lg text-[#F4B400] max-w-3xl mx-auto mb-12">
            Connect with INFI EXPORT for fresh fruits, vegetables, and spices
            with export-grade quality, competitive pricing, and dependable
            global delivery.
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
              Chat on WhatsApp
            </a>

            {/* Email */}
            <a
              href="mailto:info@infiexport.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-3 border border-white/70 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-900 transition"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
