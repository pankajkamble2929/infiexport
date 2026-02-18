import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Droplet,
  ShieldCheck,
  Ship,
  Globe,
  ArrowRight,
  Settings,
  CheckCircle,
  Gauge,
  Package,
  Truck,
  MapPin,
  Container,
  PackageCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://infiexport.com'),
  title:
    'Industrial Oil Exporter from India | Bulk Lubricants Supplier | INFI EXPORT',
  description:
    'INFI EXPORT is a trusted industrial oil exporter from India, supplying high-performance lubricants, hydraulic oils, gear oils, and specialty industrial oils to global markets with strict quality standards and reliable export logistics.',
  keywords: [
    'industrial oil exporter India',
    'bulk lubricants supplier',
    'hydraulic oil exporter',
    'gear oil supplier',
    'industrial lubricant exporter',
    'bulk industrial oils India',
  ],
  alternates: {
    canonical: '/lubricants/industrial-oil/',
  },
  openGraph: {
    title: 'Industrial Oil Exporter | INFI EXPORT',
    description:
      'Bulk exporter of industrial oils and lubricants including hydraulic, gear, and specialty oils with global shipping support and quality assurance.',
    url: 'https://infiexport.com/lubricants/industrial-oil',
    siteName: 'INFI EXPORT',
    type: 'website',
    images: [
      {
        url: 'https://infiexport.com/images/lubricants/industrial-oil-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Industrial Oil Export from India',
      },
    ],
  },
};

export default function IndustrialOilPage() {
  return (
    <>
      {/* ================= SCHEMA MARKUP ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Industrial Oil Exporter',
            description:
              'High-performance industrial oils and lubricants exported globally in bulk packaging including hydraulic oils, gear oils, and specialty industrial lubricants.',
            url: 'https://infiexport.com/lubricants/industrial-oil',
            mainEntity: {
              '@type': 'Organization',
              name: 'INFI EXPORT',
              url: 'https://infiexport.com',
            },
          }),
        }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-28 px-6 text-center bg-[#0D133D] text-white overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D133D] via-[#1A237E] to-[#283593] opacity-95" />

        <Image
          src="/images/lubricants/industrial-oil.jpeg"
          alt="Industrial Oil Exporter from India"
          fill
          className="object-cover opacity-20"
          priority
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-[#1A237E] px-5 py-2 rounded-full text-sm font-medium text-blue-200">
              <Droplet size={18} />
              Industrial Oil Exporter
            </div>
          </div>

          {/* Main SEO Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Leading Industrial Oil Exporter from India
            <span className="block text-yellow-400 mt-2">
              {' '}
              Bulk Lubricants Supply for Global Industries
            </span>
          </h1>

          {/* Supporting Content */}
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-10">
            INFI EXPORT provides high-quality industrial oils including
            hydraulic oils, gear oils, compressor oils, and specialty
            lubricants. All products meet international performance standards
            and are shipped in bulk with reliable export logistics to serve
            manufacturing, automotive, and heavy industries worldwide.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-blue-200 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              API & ISO Certified Lubricants
            </div>

            <div className="flex items-center gap-2">
              <Ship size={18} />
              Bulk Export Packaging
            </div>

            <div className="flex items-center gap-2">
              <Globe size={18} />
              Global Industrial Supply
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
              href="#industrial-types"
              className="flex items-center justify-center gap-2 border border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0D133D] transition"
            >
              Explore Industrial Oils
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIAL OIL PRODUCTS SECTION ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-[#1A237E] font-semibold tracking-wide uppercase text-sm mb-4">
              <Droplet size={18} />
              Industrial Oil Range
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              High-Performance{' '}
              <span className="text-[#1A237E]">Lubricant Solutions</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our industrial oils and lubricants are formulated to deliver
              superior performance, reduce equipment wear, and enhance
              operational efficiency across manufacturing, heavy machinery, and
              power generation industries worldwide.
            </p>
          </div>

          {/* ================= PRODUCT GRID ================= */}
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: 'Hydraulic Oil ISO VG 46',
                desc: 'High-quality hydraulic oil providing excellent viscosity stability and anti-wear properties for industrial hydraulic systems and mobile equipment.',
                specs: [
                  'ISO Viscosity Grade: 46',
                  'Anti-Wear Additives',
                  'Excellent Oxidation Stability',
                  'Thermal and Mechanical Stability',
                ],
              },
              {
                name: 'Gear Oil SAE 90',
                desc: 'Premium gear oil suitable for industrial gearboxes, ensuring smooth operation, reduced wear, and extended service intervals under heavy load conditions.',
                specs: [
                  'SAE Grade: 90',
                  'EP (Extreme Pressure) Additives',
                  'Corrosion Protection',
                  'High Load Carrying Capacity',
                ],
              },
              {
                name: 'Compressor Oil',
                desc: 'Specially designed compressor lubricant offering superior thermal stability, oxidation resistance, and long service life for rotary and reciprocating compressors.',
                specs: [
                  'High Oxidation Stability',
                  'Low Carbon Deposits',
                  'Excellent Anti-Foam Properties',
                  'Extended Drain Intervals',
                ],
              },
              {
                name: 'Turbine Oil',
                desc: 'Premium turbine oil for steam, gas, and hydraulic turbines, providing oxidation resistance, rust protection, and optimum lubrication under high-temperature conditions.',
                specs: [
                  'ISO VG 32 / 46 / 68',
                  'Anti-Oxidation Additives',
                  'Excellent Demulsibility',
                  'Corrosion Protection',
                ],
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:scale-110 transition">
                  <Droplet className="w-7 h-7 text-[#1A237E]" />
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
              Global Industrial Export Capabilities
            </h2>
            <div className="space-y-5">
              {[
                'We export a wide range of industrial oils and lubricants worldwide.',
                'Bulk supply and custom packaging solutions to meet buyer requirements.',
                'Products comply with API, ISO, and international industrial standards.',
                'Specialty lubricants for hydraulic, gear, compressor, and turbine applications.',
                'If your required industrial oil or lubricant is not listed, we can arrange export based on specifications.',
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
                  desc: 'Manufactured to meet ISO, API, and international industrial lubrication standards.',
                },
                {
                  icon: <Gauge className="text-[#1A237E] mb-4" size={28} />,
                  title: 'Performance Tested',
                  desc: 'Tested for viscosity stability, wear protection, and thermal oxidation control.',
                },
                {
                  icon: <Ship className="text-[#1A237E] mb-4" size={28} />,
                  title: 'Bulk Export Ready',
                  desc: 'Available in drums, barrels, and bulk containers for industrial export.',
                },
                {
                  icon: <Globe className="text-[#1A237E] mb-4" size={28} />,
                  title: 'Global Distribution',
                  desc: 'Exporting industrial lubricants to manufacturing, automotive, and heavy industries worldwide.',
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
              Industrial Oil Packaging
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              Robust{' '}
              <span className="text-[#1A237E]">Bulk Packaging Solutions</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our industrial oils are packaged in heavy-duty, export-ready
              containers designed to withstand long-distance shipping, handling,
              and storage. Each package ensures product integrity and safety for
              international delivery.
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
                Standard Bulk Drums & Barrels
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                High-strength drums, barrels, and IBC tanks suitable for
                hydraulic oils, gear oils, and other industrial lubricants.
                Designed to prevent leaks and maintain oil quality.
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
                Tailored Industrial Packaging
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Customized container solutions based on oil type, volume, and
                export requirements. Ensures safe transportation and easy
                handling at destination facilities.
              </p>

              {/* Chips for features */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Custom Volumes',
                  'Hazard-Compliant',
                  'Destination-Specific',
                  'Spill-Resistant',
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
                Certified & Safe Handling
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Packaging meets international safety and quality certifications,
                providing spill-proof, durable containers to ensure oils arrive
                intact and ready for industrial use.
              </p>

              {/* Chips for certifications / safety */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'ISO Certified',
                  'UN Approved',
                  'Spill-Resistant',
                  'High-Strength Material',
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
              Get Industrial Packaging Quote
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
              Industrial Oil Logistics
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              Export & <span className="text-[#1A237E]">Shipping Details</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              INFI EXPORT ensures secure, compliant, and timely shipment of
              industrial oils worldwide. Our structured export process
              guarantees product integrity and smooth delivery for bulk
              lubricants and specialty oils.
            </p>
          </div>

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* ===== Export Terms ===== */}
            <div className="bg-[#E3F2FD] rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <Ship className="text-[#1A237E] mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Global Trade Terms
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We follow globally recognized export and trade standards to
                ensure safe and transparent transactions:
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
                Primary Export Ports
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bulk industrial oils are shipped from strategically located
                ports in India equipped to handle large-scale lubricant exports:
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
                Standard bulk orders for industrial oils are optimized for
                international logistics while providing flexibility for smaller
                trial shipments:
              </p>
              <div className="mt-4 text-[#1A237E] font-medium">
                1 x 20ft Container (~24–26 MT)
              </div>
            </div>

            {/* ===== Container Capacity ===== */}
            <div className="bg-[#E3F2FD] rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <Container className="text-[#1A237E] mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Container Loading Capacity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Approximate bulk loading capacity for industrial lubricants per
                container:
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
              Request Industrial Oil Export Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE OUR INDUSTRIAL OILS ================= */}
      <section className="py-28 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-[#1A237E] font-semibold tracking-wide uppercase text-sm">
              Premium Export Advantage
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Our{' '}
              <span className="text-[#1A237E]">Industrial Oils?</span>
            </h2>

            <div className="w-24 h-1 bg-[#1A237E] mx-auto mt-6 rounded-full"></div>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              We supply high-performance industrial oils, including hydraulic,
              turbine, gear, and compressor oils, manufactured under strict
              quality control for reliable global export.
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
                Maximum Equipment Protection
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Our industrial oils are formulated to protect machinery against
                wear, corrosion, and thermal stress, ensuring reliable
                performance in heavy-duty industrial operations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-blue-100 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#1A237E] rounded-l-3xl"></div>

              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-[#1A237E]/10 group-hover:bg-[#1A237E] transition">
                <PackageCheck className="w-7 h-7 text-[#1A237E] group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rigorous Quality Assurance
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Every batch is tested for viscosity, additive performance, and
                contamination-free compliance, meeting international industrial
                lubrication standards for bulk export.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-blue-100 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#1A237E] rounded-l-3xl"></div>

              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-[#1A237E]/10 group-hover:bg-[#1A237E] transition">
                <Globe className="w-7 h-7 text-[#1A237E] group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Trusted Global Exporter
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Supplying industrial oils worldwide with reliable logistics,
                accurate export documentation, and timely bulk shipments to keep
                your operations running smoothly.
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
              Answers to common queries from our international industrial oil
              buyers.
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
                Our standard MOQ for industrial oil export orders is one 20ft
                container. Smaller trial shipments may be considered depending
                on product type and destination country.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-[#E3F2FD] p-6 rounded-2xl border border-blue-100 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                Can we receive samples before bulk orders?
                <span className="ml-4 text-[#1A237E] group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, sample bottles or small packs of hydraulic, turbine, gear,
                or compressor oils can be provided for quality testing. Courier
                charges may apply and are usually adjusted in confirmed bulk
                orders.
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
                Industrial oil orders are typically dispatched within 7–10
                working days after confirmation and advance payment. Transit
                times vary by region: Middle East (10–15 days), Europe/Africa
                (20–30 days), USA (25–35 days).
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-[#E3F2FD] p-6 rounded-2xl border border-blue-100 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                Do you provide custom export packaging?
                <span className="ml-4 text-[#1A237E] group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, we offer custom export packaging for industrial oils,
                including drums, barrels, IBC tanks, or pails. All packaging is
                compliant with international shipping, safety, and UN transport
                regulations.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= FINAL EXPORT CTA – INDUSTRIAL OILS ================= */}
      <section className="relative py-28 px-6 bg-[#1A237E] text-white overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Import Premium Industrial Oils?
          </h2>

          {/* Supporting Text */}
          <p className="mt-6 text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">
            Get competitive export pricing, container loading guidance, and
            complete logistics support for hydraulic oils, turbine oils, gear
            oils, and other industrial lubricants. All products meet
            international quality standards for safe and reliable shipping
            worldwide.
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
            Bulk Orders • 20ft / 40ft Containers • Global Industrial Oils Export
          </p>
        </div>
      </section>
    </>
  );
}
