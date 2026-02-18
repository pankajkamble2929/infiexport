import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Droplet,
  ShieldCheck,
  Ship,
  Globe,
  ArrowRight,
  PackageCheck,
  Settings,
  CheckCircle,
  Gauge,
  Package,
  Truck,
  MapPin,
  Container,
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.infiexport.com'),
  title:
    'Industrial & Automotive Grease Exporter from India | Bulk Lubricant Supplier | INFI EXPORT',
  description:
    'INFI EXPORT is a leading exporter of industrial and automotive greases from India. We supply high-performance lithium, calcium, and multipurpose greases to global markets with guaranteed quality and export reliability.',
  keywords: [
    'industrial grease exporter India',
    'automotive grease supplier India',
    'lithium grease exporter',
    'calcium grease supplier',
    'bulk grease export company',
    'multipurpose grease manufacturer India',
  ],
  alternates: {
    canonical: '/lubricants/grease/',
  },
  openGraph: {
    title: 'Industrial & Automotive Grease Exporter | INFI EXPORT',
    description:
      'Bulk exporter of premium industrial and automotive greases including lithium, calcium, and multipurpose types. Reliable international supply with quality assurance.',
    url: 'https://www.infiexport.com/lubricants/grease',
    siteName: 'INFI EXPORT',
    type: 'website',
    images: [
      {
        url: 'https://www.infiexport.com/images/lubricants/grease-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Industrial and Automotive Grease Export from India',
      },
    ],
  },
};

export default function GreasePage() {
  return (
    <>
      {/* ================= SCHEMA MARKUP ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Industrial & Automotive Grease Exporter',
            description:
              'High-performance industrial and automotive greases exported globally in bulk packaging, including lithium, calcium, and multipurpose greases.',
            url: 'https://www.infiexport.com/lubricants/grease',
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
          src="/images/lubricants/grease.jpg"
          alt="Industrial and Automotive Grease Exporter from India"
          fill
          className="object-cover opacity-20"
          priority
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-[#283593] px-5 py-2 rounded-full text-sm font-medium text-blue-200">
              <PackageCheck size={18} />
              Industrial & Automotive Grease Exporter
            </div>
          </div>

          {/* Main SEO Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Premium Industrial & Automotive Greases
            <span className="block text-yellow-400 mt-2">
              {' '}
              Bulk Supply for Global Industrial Applications
            </span>
          </h1>

          {/* Supporting Content */}
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            INFI EXPORT offers high-performance greases including lithium,
            calcium, and multipurpose variants, formulated for heavy machinery,
            automotive bearings, and industrial equipment. All products meet
            international quality standards and are available in bulk export
            packaging for seamless global distribution.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-blue-200 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              Certified Quality & Performance
            </div>

            <div className="flex items-center gap-2">
              <Ship size={18} />
              Bulk Export Packaging
            </div>

            <div className="flex items-center gap-2">
              <Globe size={18} />
              Worldwide Supply & Logistics
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
              href="#grease-types"
              className="flex items-center justify-center gap-2 border border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1A237E] transition"
            >
              Explore Grease Types
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIAL & AUTOMOTIVE GREASE PRODUCTS SECTION ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-[#1A237E] font-semibold tracking-wide uppercase text-sm mb-4">
              <Droplet size={18} />
              Industrial & Automotive Grease Range
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              Premium <span className="text-[#1A237E]">Grease Solutions</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our greases are engineered for industrial machinery, automotive
              bearings, and heavy-duty equipment. They provide superior
              lubrication, anti-wear protection, and excellent performance under
              extreme temperatures.
            </p>
          </div>

          {/* ================= PRODUCT GRID ================= */}
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: 'Lithium Base Grease NLGI 2',
                desc: 'Multipurpose lithium grease suitable for automotive, industrial, and general machinery applications providing excellent mechanical stability and water resistance.',
                specs: [
                  'NLGI Grade: 2',
                  'Temperature Range: -20°C to 120°C',
                  'Good oxidation resistance',
                  'High mechanical stability',
                ],
              },
              {
                name: 'Calcium Base Grease',
                desc: 'Corrosion-resistant grease designed for industrial and automotive applications where moisture and humidity are a concern, providing smooth lubrication.',
                specs: [
                  'Excellent water resistance',
                  'Temperature Range: -10°C to 100°C',
                  'Corrosion protection for metal surfaces',
                  'Suitable for bearings and chassis',
                ],
              },
              {
                name: 'High Temperature Grease',
                desc: 'Specially formulated grease for high-temperature applications, ideal for ovens, furnaces, and automotive parts exposed to heat.',
                specs: [
                  'Temperature Range: -20°C to 250°C',
                  'Maintains viscosity under extreme heat',
                  'Anti-oxidation additives',
                  'Protects against wear in high heat',
                ],
              },
              {
                name: 'Automotive Chassis Grease',
                desc: 'Premium grease for vehicle chassis, suspension, and steering components, ensuring smooth operation and extended service life.',
                specs: [
                  'Water-resistant',
                  'Reduces friction and wear',
                  'Suitable for ball joints and bushings',
                  'Protects under harsh driving conditions',
                ],
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:scale-110 transition">
                  <PackageCheck className="w-7 h-7 text-[#1A237E]" />
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
                'We export all types of industrial and automotive greases worldwide.',
                'Bulk supply, OEM support, and private labeling options available.',
                'Products meet international lubrication standards.',
                'Custom packaging solutions according to buyer requirements.',
                'Other specialized greases can be arranged and exported on request.',
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
                  desc: 'Formulated to meet international lubrication specifications and industrial standards.',
                },
                {
                  icon: <Gauge className="text-[#1A237E] mb-4" size={28} />,
                  title: 'Performance Tested',
                  desc: 'Tested for mechanical stability, water resistance, and thermal performance.',
                },
                {
                  icon: <Ship className="text-[#1A237E] mb-4" size={28} />,
                  title: 'Bulk Export Ready',
                  desc: 'Available in drums, pails, and bulk containers for seamless international shipping.',
                },
                {
                  icon: <Globe className="text-[#1A237E] mb-4" size={28} />,
                  title: 'Global Distribution',
                  desc: 'Exporting industrial and automotive greases to worldwide markets.',
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

      {/* ================= EXPORT PACKAGING SECTION – GREASE ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-[#1A237E] font-semibold tracking-wide uppercase text-sm mb-4">
              <Package size={18} />
              Export-Ready Grease Packaging
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              Safe &{' '}
              <span className="text-[#1A237E]">Bulk Grease Packaging</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We provide heavy-duty, export-grade packaging for industrial and
              automotive greases, ensuring safe storage, compliance with
              international standards, and smooth global shipping.
            </p>
          </div>

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* ===== Card 1 - Bulk Drums / Pails ===== */}
            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:scale-110 transition">
                <Package className="w-7 h-7 text-[#1A237E]" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Bulk Grease Packaging
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Heavy-duty export packaging designed specifically for industrial
                and automotive greases, ensuring safe handling and international
                shipment.
              </p>

              {/* Sizes / Types */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  '1kg Tub',
                  '5kg Pail',
                  '18kg Drum',
                  '50kg Drum',
                  'IBC Tank',
                ].map((size, idx) => (
                  <span
                    key={idx}
                    className="bg-[#E3F2FD] text-[#1A237E] px-4 py-1 rounded-full text-sm font-medium shadow-sm"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* ===== Card 2 - Custom Packaging ===== */}
            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:scale-110 transition">
                <Truck className="w-7 h-7 text-[#1A237E]" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Custom Grease Packaging
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Tailored packaging solutions for industrial and automotive
                greases based on buyer specifications, destination regulations,
                and safe export handling.
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Tailored Sizes',
                  'Regulatory Compliant',
                  'Leak-Proof Design',
                  'Destination Specific',
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
                All grease export packaging is leak-proof, durable, and
                compliant with international shipping standards, ensuring your
                products arrive safely and maintain quality.
              </p>

              {/* Certifications */}
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
              Request Custom Grease Packaging Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= EXPORT & SHIPPING INFORMATION – GREASE ================= */}
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
              international shipping of industrial and automotive greases.
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
                bulk grease handling:
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
                Standard MOQ for industrial and automotive grease export orders:
              </p>
              <div className="mt-4 text-[#1A237E] font-medium">
                1 x 20ft Container (approx. 18–20 MT)
              </div>
            </div>

            {/* ===== Container Capacity ===== */}
            <div className="bg-[#E3F2FD] rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <Container className="text-[#1A237E] mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Container Loading
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Approximate loading capacity per container for industrial and
                automotive greases:
              </p>
              <div className="mt-4 space-y-2 text-[#1A237E] font-medium">
                <div>20ft Container: 18–20 MT</div>
                <div>40ft Container: 20–22 MT</div>
              </div>
            </div>
          </div>

          {/* ===== CTA BUTTON ===== */}
          <div className="mt-16 text-center">
            <Link
              href="/lubricants/contact/"
              className="inline-block bg-[#1A237E] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0D144D] transition duration-300"
            >
              Request Grease Export Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE OUR GREASE ================= */}
      <section className="py-28 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-[#1A237E] font-semibold tracking-wide uppercase text-sm">
              Premium Export Advantage
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Our{' '}
              <span className="text-[#1A237E]">
                Industrial & Automotive Greases?
              </span>
            </h2>

            <div className="w-24 h-1 bg-[#1A237E] mx-auto mt-6 rounded-full"></div>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              We deliver high-performance greases with excellent thermal
              stability, water resistance, and long-lasting lubrication for
              industrial machinery and automotive applications worldwide.
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
                Superior Wear Protection
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Our greases reduce friction and wear in high-load machinery and
                automotive components, ensuring smooth operation and extended
                equipment life.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-blue-100 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#1A237E] rounded-l-3xl"></div>

              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-[#1A237E]/10 group-hover:bg-[#1A237E] transition">
                <PackageCheck className="w-7 h-7 text-[#1A237E] group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Strict Quality Assurance
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Every batch is tested for consistency, high-temperature
                stability, and contamination-free performance to meet
                international grease standards.
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
                We supply industrial and automotive greases worldwide with full
                export documentation, timely delivery, and dependable logistics
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION – INDUSTRIAL & AUTOMOTIVE GREASE ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Answers to common queries from our international grease buyers.
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
                Our standard MOQ for industrial and automotive grease export
                orders is one 20ft container. Smaller trial shipments may be
                discussed based on product availability and destination.
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
                Yes, sample packs of our greases (Lithium, Calcium, High
                Temperature, or Chassis Grease) can be supplied for quality
                evaluation. Courier charges may apply and are usually adjusted
                in confirmed bulk orders.
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
                Orders are generally dispatched within 7–12 working days after
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
                Yes, we provide custom packaging options for greases, including
                drums, pails, and cartridges, while ensuring compliance with
                international shipping and safety standards.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= FINAL EXPORT CTA – GREASE ================= */}
      <section className="relative py-28 px-6 bg-[#1A237E] text-white overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Import Premium Industrial & Automotive Greases?
          </h2>

          {/* Supporting Text */}
          <p className="mt-6 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            Access competitive export pricing, container loading details, and
            full logistics support for your destination country. Our greases are
            compliant with international standards, ensuring safe and reliable
            shipping.
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
            Bulk Orders • 20ft / 40ft Containers • Global Grease Shipping
          </p>
        </div>
      </section>
    </>
  );
}
