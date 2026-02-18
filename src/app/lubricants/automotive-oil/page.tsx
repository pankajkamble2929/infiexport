import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Droplet,
  ShieldCheck,
  Ship,
  Globe,
  ArrowRight,
  Car,
  Settings,
  CheckCircle,
  Gauge,
  Truck,
  Package,
  MapPin,
  Container,
  PackageCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.infiexport.com'),
  title:
    'Automotive Engine Oil Exporter from India | Bulk Motor Oil Supplier | INFI EXPORT',
  description:
    'INFI EXPORT is a trusted automotive engine oil exporter from India supplying high-performance motor oils, diesel engine oils, and lubricants to global markets with strict quality standards and reliable export logistics.',
  keywords: [
    'automotive oil exporter India',
    'engine oil supplier India',
    'motor oil export company',
    'diesel engine oil exporter',
    'bulk automotive lubricant supplier',
    'car engine oil wholesale exporter',
  ],
  alternates: {
    canonical: '/lubricants/automotive-oil/',
  },
  openGraph: {
    title: 'Automotive Engine Oil Exporter | INFI EXPORT',
    description:
      'Bulk exporter of high-performance automotive engine oils and motor lubricants serving international markets with competitive pricing and quality assurance.',
    url: 'https://www.infiexport.com/lubricants/automotive-oil',
    siteName: 'INFI EXPORT',
    type: 'website',
    images: [
      {
        url: 'https://www.infiexport.com/images/lubricants/automotive-oil-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Automotive Engine Oil Export from India',
      },
    ],
  },
};

export default function AutomotiveOilPage() {
  return (
    <>
      {/* ================= SCHEMA MARKUP ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Automotive Engine Oil Exporter',
            description:
              'High-performance automotive engine oils and motor lubricants exported globally in bulk packaging.',
            url: 'https://www.infiexport.com/lubricants/automotive-oil',
            mainEntity: {
              '@type': 'Organization',
              name: 'INFI EXPORT',
              url: 'https://www.infiexport.com',
            },
          }),
        }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-28 px-6 text-center bg-[#1A237E] text-white overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] via-[#1A237E] to-[#0D133D] opacity-95" />

        <Image
          src="/images/lubricants/automotive-oil.jpg"
          alt="Automotive Engine Oil Exporter from India"
          fill
          className="object-cover opacity-20"
          priority
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-[#283593] px-5 py-2 rounded-full text-sm font-medium text-blue-200">
              <Car size={18} />
              Automotive Engine Oil Exporter
            </div>
          </div>

          {/* Main SEO Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Leading Automotive Engine Oil Exporter
            <span className="block text-yellow-400 mt-2">
              {' '}
              Bulk Motor Oil Supply for Global Markets
            </span>
          </h1>

          {/* Supporting Content */}
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            INFI EXPORT supplies high-performance automotive engine oils,
            including petrol engine oil, diesel engine oil, and synthetic motor
            oils manufactured to international quality standards with reliable
            bulk export logistics.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-blue-200 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              International Quality Standards
            </div>

            <div className="flex items-center gap-2">
              <Ship size={18} />
              Bulk Export Packaging
            </div>

            <div className="flex items-center gap-2">
              <Globe size={18} />
              Worldwide Distribution
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/lubricants/contact/"
              className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Request Bulk Quotation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#automotive-types"
              className="flex items-center justify-center gap-2 border border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1A237E] transition"
            >
              Explore Oil Types
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= AUTOMOTIVE OIL PRODUCTS SECTION ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-[#1A237E] font-semibold tracking-wide uppercase text-sm mb-4">
              <Droplet size={18} />
              Automotive Oil Range
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              High-Performance{' '}
              <span className="text-[#1A237E]">Engine Oil Solutions</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our automotive engine oils are formulated to meet international
              performance standards, offering superior engine protection,
              thermal stability, and long service life across diverse driving
              conditions.
            </p>
          </div>

          {/* ================= PRODUCT GRID ================= */}
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: 'Mineral Engine Oil SAE 20W-40',
                desc: 'Reliable mineral-based engine oil suitable for petrol and diesel engines requiring stable viscosity and protection under standard operating conditions.',
                specs: [
                  'SAE Grade: 20W-40',
                  'API: SL / CF (or equivalent)',
                  'Base Oil: Mineral',
                  'Excellent oxidation stability',
                ],
              },
              {
                name: 'Synthetic Engine Oil SAE 5W-30',
                desc: 'Fully synthetic high-performance oil designed for modern engines requiring superior cold start protection and fuel efficiency.',
                specs: [
                  'SAE Grade: 5W-30',
                  'API: SN / SP',
                  'Base Oil: Full Synthetic',
                  'Improved fuel economy',
                ],
              },
              {
                name: 'Semi-Synthetic Engine Oil SAE 10W-40',
                desc: 'Balanced formulation combining mineral and synthetic base oils for enhanced protection and extended drain intervals.',
                specs: [
                  'SAE Grade: 10W-40',
                  'API: SL / SN',
                  'Base Oil: Semi-Synthetic',
                  'Enhanced thermal stability',
                ],
              },
              {
                name: 'High Mileage Engine Oil',
                desc: 'Specially formulated for vehicles with higher mileage to reduce oil consumption and protect aging engine components.',
                specs: [
                  'Recommended for 75,000+ km engines',
                  'Seal conditioning additives',
                  'Reduced oil burn-off',
                  'Improved wear protection',
                ],
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:scale-110 transition">
                  <Car className="w-7 h-7 text-[#1A237E]" />
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {product.name}
                </h3>

                {/* Overview */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.desc}
                </p>

                {/* Key Specs */}
                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  <div className="flex items-center gap-2 font-medium text-[#1A237E] mb-2">
                    <Settings size={16} />
                    Key Specifications
                  </div>
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-green-600" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ================= GLOBAL EXPORT CAPABILITIES ================= */}
          <div className="mt-10 bg-white rounded-2xl border shadow-sm p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Global Export Capabilities
            </h2>
            <div className="space-y-5">
              {[
                'We export all varieties of automotive lubricants and oils worldwide.',
                'Bulk supply, OEM support, and private labeling options available.',
                'Products comply with international automotive standards.',
                'Custom packaging solutions as per buyer requirements.',
                'If you require any other automotive oil or lubricant product not listed, we can arrange and facilitate export accordingly.',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <Link
                href="/lubricants/contact/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#1A237E] text-white font-semibold rounded-lg hover:bg-[#0D133D] transition"
              >
                Contact Our Export Team
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* ================= EXPORT & TECHNICAL HIGHLIGHTS ================= */}
          <div className="mt-10 bg-white rounded-2xl border shadow-sm p-10">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
              Export & Technical Highlights
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                {
                  icon: (
                    <ShieldCheck className="text-[#1A237E] mb-4" size={28} />
                  ),
                  title: 'Quality Standards',
                  desc: 'Manufactured to meet API and international lubrication standards.',
                },
                {
                  icon: <Gauge className="text-[#1A237E] mb-4" size={28} />,
                  title: 'Performance Tested',
                  desc: 'Tested for viscosity stability, wear resistance, and oxidation control.',
                },
                {
                  icon: <Ship className="text-[#1A237E] mb-4" size={28} />,
                  title: 'Bulk Export Ready',
                  desc: 'Available in drums, barrels, and bulk containers for international supply.',
                },
                {
                  icon: <Globe className="text-[#1A237E] mb-4" size={28} />,
                  title: 'Global Distribution',
                  desc: 'Exporting automotive lubricants to multiple international markets.',
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  {item.icon}
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <Link
                href="/lubricants/contact/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#F4B400] text-black font-semibold rounded-lg hover:bg-[#FFC107] transition"
              >
                Request Bulk Supply
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPORT PACKAGING SECTION ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-[#1A237E] font-semibold tracking-wide uppercase text-sm mb-4">
              <Package size={18} />
              Export Ready Packaging
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              Secure{' '}
              <span className="text-[#1A237E]">Bulk Lubricant Packaging</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We provide heavy-duty, export-grade packaging for automotive oils
              and lubricants, ensuring safe storage, compliance, and smooth
              international shipping.
            </p>
          </div>

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* ===== Card 1 - Bulk Drums ===== */}
            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:scale-110 transition">
                <Package className="w-7 h-7 text-[#1A237E]" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Bulk Packaging for Automotive Oils
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Heavy-duty export packaging designed specifically for bulk
                automotive oils, ensuring safe handling and international
                shipment.
              </p>

              {/* Chips for sizes */}
              <div className="flex flex-wrap justify-center gap-3">
                {['20L Drum', '50L Drum', '210L Barrel', 'IBC Tank'].map(
                  (size, idx) => (
                    <span
                      key={idx}
                      className="bg-[#E3F2FD] text-[#1A237E] px-4 py-1 rounded-full text-sm font-medium shadow-sm"
                    >
                      {size}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* ===== Card 2 - Custom Packaging ===== */}
            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:scale-110 transition">
                <Truck className="w-7 h-7 text-[#1A237E]" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Custom Export Packaging
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Packaging solutions tailored to buyer specifications, regulatory
                compliance, and destination market requirements for safe
                international shipping.
              </p>

              {/* Chips for features */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Tailored Sizes',
                  'Regulatory Compliant',
                  'Destination Specific',
                  'Leak-Proof Design',
                ].map((chip, idx) => (
                  <span
                    key={idx}
                    className="bg-[#E3F2FD] text-[#1A237E] px-4 py-1 rounded-full text-sm font-medium shadow-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* ===== Card 3 - Sealing & Safety ===== */}
            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:scale-110 transition">
                <ShieldCheck className="w-7 h-7 text-[#1A237E]" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Secure & Certified
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                All export packaging is leak-proof, sturdy, and compliant with
                international shipping standards to ensure your lubricants
                arrive safely.
              </p>

              {/* Chips for certifications / safety */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'ISO Certified',
                  'UN Certified',
                  'Leak-Proof',
                  'Durable Material',
                ].map((chip, idx) => (
                  <span
                    key={idx}
                    className="bg-[#E3F2FD] text-[#1A237E] px-4 py-1 rounded-full text-sm font-medium shadow-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ================= CTA BUTTON ================= */}
          <div className="mt-12 text-center">
            <Link
              href="/lubricants/contact/"
              className="inline-flex items-center gap-2 px-10 py-3 bg-[#1A237E] text-white font-semibold rounded-lg hover:bg-[#0D133D] transition"
            >
              Request Custom Packaging Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= EXPORT & SHIPPING INFORMATION ================= */}
      <section className="relative py-28 px-6 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-[#1A237E] font-semibold tracking-wide uppercase text-sm mb-4">
              <Ship size={18} />
              Logistics & Export Details
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              Export &{' '}
              <span className="text-[#1A237E]">Shipping Information</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Transparent export terms and structured logistics for smooth
              international shipping of automotive lubricants and oils.
            </p>
          </div>

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* ===== Export Terms ===== */}
            <div className="bg-[#E3F2FD] rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <Ship className="text-[#1A237E] mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Export Terms
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We operate under internationally recognized trade terms
                including:
              </p>
              <div className="mt-4 space-y-2 text-[#1A237E] font-medium">
                <div>EXW (Ex-Factory)</div>
                <div>FOB (Free On Board)</div>
              </div>
            </div>

            {/* ===== Major Port ===== */}
            <div className="bg-[#E3F2FD] rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <MapPin className="text-[#1A237E] mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Major Port
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Shipments are dispatched from major Indian ports equipped for
                bulk lubricants:
              </p>
              <div className="mt-4 text-[#1A237E] font-medium">
                Nhava Sheva Port (JNPT), India
              </div>
            </div>

            {/* ===== Minimum Order Quantity ===== */}
            <div className="bg-[#E3F2FD] rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <PackageCheck className="text-[#1A237E] mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Minimum Order Quantity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Standard MOQ for automotive oil export orders:
              </p>
              <div className="mt-4 text-[#1A237E] font-medium">
                1 x 20ft Container (approx. 24–26 MT)
              </div>
            </div>

            {/* ===== Container Capacity ===== */}
            <div className="bg-[#E3F2FD] rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <Container className="text-[#1A237E] mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Container Loading
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Approximate loading capacity per container for automotive oils:
              </p>
              <div className="mt-4 space-y-2 text-[#1A237E] font-medium">
                <div>20ft Container: 24–26 MT</div>
                <div>40ft Container: 26–28 MT</div>
              </div>
            </div>
          </div>

          {/* ===== CTA BUTTON ===== */}
          <div className="mt-16 text-center">
            <Link
              href="/lubricants/contact/"
              className="inline-block bg-[#1A237E] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0D144D] transition duration-300"
            >
              Request Export Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE OUR LUBRICANTS ================= */}
      <section className="py-28 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-[#1A237E] font-semibold tracking-wide uppercase text-sm">
              Premium Export Advantage
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Our{' '}
              <span className="text-[#1A237E]">Automotive Lubricants?</span>
            </h2>

            <div className="w-24 h-1 bg-[#1A237E] mx-auto mt-6 rounded-full"></div>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              We deliver high-performance automotive oils with strict quality
              control, consistent supply, and global shipping expertise.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-blue-100 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#1A237E] rounded-l-3xl"></div>

              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-[#1A237E]/10 group-hover:bg-[#1A237E] transition">
                <Droplet className="w-7 h-7 text-[#1A237E] group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Superior Engine Protection
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Formulated to reduce engine wear, control oxidation, and
                maintain optimal viscosity across all driving conditions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-blue-100 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#1A237E] rounded-l-3xl"></div>

              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-[#1A237E]/10 group-hover:bg-[#1A237E] transition">
                <PackageCheck className="w-7 h-7 text-[#1A237E] group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Stringent Quality Checks
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Each batch undergoes thorough testing for viscosity, additives
                composition, and contamination-free assurance to meet
                international export standards.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-blue-100 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#1A237E] rounded-l-3xl"></div>

              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-[#1A237E]/10 group-hover:bg-[#1A237E] transition">
                <Globe className="w-7 h-7 text-[#1A237E] group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Reliable Global Supply
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Supplying automotive oils and lubricants worldwide with complete
                export documentation, efficient logistics, and timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Answers to common queries from our international lubricant buyers.
            </p>
            <div className="w-24 h-1 bg-[#1A237E] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="group bg-[#E3F2FD] p-6 rounded-2xl border border-blue-100 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                What is your minimum order quantity (MOQ)?
                <span className="ml-4 text-[#1A237E] group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our standard MOQ for automotive oil export orders is one 20ft
                container. Smaller trial shipments may be discussed based on
                product availability and destination.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-[#E3F2FD] p-6 rounded-2xl border border-blue-100 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                Can we receive samples before placing bulk orders?
                <span className="ml-4 text-[#1A237E] group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, sample bottles or small packs of our automotive oils can be
                supplied for quality evaluation. Courier charges may apply and
                are usually adjusted in confirmed bulk orders.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-[#E3F2FD] p-6 rounded-2xl border border-blue-100 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                What is the typical delivery time?
                <span className="ml-4 text-[#1A237E] group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Orders are generally dispatched within 7–10 working days after
                confirmation and advance payment. Transit times vary by region:
                Middle East (10–15 days), Europe/Africa (20–30 days), USA (25–35
                days).
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-[#E3F2FD] p-6 rounded-2xl border border-blue-100 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                Do you offer custom export packaging?
                <span className="ml-4 text-[#1A237E] group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, we provide custom packaging options for automotive oils,
                including different drum sizes, bottles, or pails, while
                ensuring compliance with international shipping and safety
                standards.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= FINAL EXPORT CTA – AUTOMOTIVE OILS ================= */}
      <section className="relative py-28 px-6 bg-[#1A237E] text-white overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Import Premium Automotive Oils?
          </h2>

          {/* Supporting Text */}
          <p className="mt-6 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            Access competitive export pricing, container loading details, and
            full logistics support for your destination country. Our automotive
            oils are compliant with international standards, ensuring safe and
            reliable shipping.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary Button */}
            <Link
              href="/lubricants/contact/"
              className="px-8 py-4 bg-blue-200 text-[#1A237E] font-semibold rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Request Export Quotation
            </Link>

            {/* Secondary Button */}
            <Link
              href="mailto:info@infiexport.com"
              className="px-8 py-4 border border-white/70 text-white font-semibold rounded-full hover:bg-white hover:text-[#1A237E] transition-all duration-300"
            >
              Email Export Team
            </Link>
          </div>

          {/* Trust Line */}
          <p className="mt-8 text-sm text-blue-200">
            Bulk Orders • 20ft / 40ft Containers • Global Automotive Oils
            Shipping
          </p>
        </div>
      </section>
    </>
  );
}
