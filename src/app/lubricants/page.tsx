import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Droplet,
  ShieldCheck,
  Ship,
  Globe,
  ArrowRight,
  Building2,
  Award,
  PackageCheck,
  TrendingUp,
  Settings,
  CheckCircle2,
  Handshake,
  Package,
  BadgeCheck,
  FileCheck,
  FileCheck2,
  ClipboardCheck,
  Globe2,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.infiexport.com'),
  title: 'Automotive & Industrial Lubricant Exporter from India | INFI EXPORT',
  description:
    'INFI EXPORT supplies premium automotive oils, industrial lubricants, and grease to global markets with international quality standards, bulk packaging, and reliable export logistics.',
  keywords: [
    'Lubricant exporter India',
    'Automotive oil supplier',
    'Industrial oil exporter',
    'Grease manufacturer India',
    'Engine oil export company',
    'Bulk lubricant supplier',
  ],
  alternates: {
    canonical: '/lubricants/',
  },
  openGraph: {
    title: 'Automotive & Industrial Lubricant Exporter | INFI EXPORT',
    description:
      'Trusted exporter of high-performance automotive oils, industrial lubricants, and grease serving global markets.',
    url: 'https://www.infiexport.com/lubricants/',
    siteName: 'INFI EXPORT',
    type: 'website',
  },
};

export default function LubricantsHome() {
  return (
    <>
      {/* ================= SCHEMA MARKUP ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'INFI EXPORT - Lubricant Exporter',
            url: 'https://www.infiexport.com/lubricants/',
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Corporation',
            name: 'INFI EXPORT - Lubricant Export Division',
            url: 'https://www.infiexport.com/lubricants/',
            logo: 'https://www.infiexport.com/infiexport-logo.png',
          }),
        }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-28 px-6 text-center bg-[#1A237E] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] via-[#1A237E] to-[#0D133D] opacity-95" />

        <Image
          src="/images/lubricants/home-hero.png"
          alt="Automotive and Industrial Lubricant Exporter from India"
          fill
          className="object-cover opacity-20"
          priority
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-[#283593] px-5 py-2 rounded-full text-sm font-medium text-blue-200">
              <Droplet size={18} />
              Global Lubricant Exporter
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            High-Performance Automotive & Industrial Lubricants
            <span className="text-4xl block text-yellow-400 mt-2">
              {' '}
              Export Quality Oil & Grease Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            INFI EXPORT supplies premium engine oils, industrial lubricants, and
            grease with strict quality standards, competitive pricing, and
            reliable international shipping.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12 text-blue-200 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              International Quality Standards
            </div>
            <div className="flex items-center gap-2">
              <Ship size={18} />
              Bulk Export Support
            </div>
            <div className="flex items-center gap-2">
              <Globe size={18} />
              Worldwide Distribution
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/lubricants/contact/"
              className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Request Bulk Quotation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#lubricant-categories"
              className="flex items-center justify-center gap-2 border border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1A237E] transition"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION - MODERN UI (Image Right) ================= */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-white to-blue-50 text-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT - CONTENT ================= */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Heading Tag */}
            <div className="flex justify-center lg:justify-start items-center gap-3 mb-4 text-[#1A237E] font-semibold tracking-wide uppercase text-sm">
              <Building2 size={18} />
              About INFI EXPORT
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Reliable Lubricant Export Partner for
              <span className="text-[#1A237E]"> Global Markets</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              INFI EXPORT supplies automotive oils, industrial lubricants, and
              grease suitable for various industrial and commercial
              applications. We ensure consistent quality, performance, and
              export-compliant packaging.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed">
              Our commitment to timely delivery, competitive pricing, and
              quality assurance makes us a trusted lubricant supplier for
              importers, distributors, and wholesalers worldwide.
            </p>

            <Link
              href="/lubricants/contact/"
              className="inline-flex items-center gap-2 bg-[#1A237E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0D133D] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Our Export Team
            </Link>
          </div>

          {/* ================= RIGHT - IMAGE ================= */}
          <div className="relative order-1 lg:order-2 h-[450px] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full w-full">
              <Image
                src="/images/lubricants/home-about.jpg"
                alt="Lubricant Export from India"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#1A237E]/10"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl px-6 py-4 border">
              <p className="text-3xl font-bold text-[#1A237E]">Global</p>
              <p className="text-sm text-gray-600">Lubricant Supply Network</p>
            </div>
          </div>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="max-w-7xl mx-auto mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300 group">
            <Award
              className="text-[#1A237E] mb-4 group-hover:scale-110 transition"
              size={28}
            />
            <h3 className="font-semibold text-lg mb-2">
              Premium Quality Assurance
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Rigorous testing ensures lubricants meet international performance
              standards and maintain consistency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300 group">
            <PackageCheck
              className="text-[#1A237E] mb-4 group-hover:scale-110 transition"
              size={28}
            />
            <h3 className="font-semibold text-lg mb-2">
              Export-Grade Packaging
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Secure and compliant packaging suitable for bulk export and
              long-distance shipping.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300 group">
            <TrendingUp
              className="text-[#1A237E] mb-4 group-hover:scale-110 transition"
              size={28}
            />
            <h3 className="font-semibold text-lg mb-2">
              Competitive Bulk Pricing
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Direct sourcing and optimized logistics allow us to offer
              cost-effective export solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300 group">
            <Building2
              className="text-[#1A237E] mb-4 group-hover:scale-110 transition"
              size={28}
            />
            <h3 className="font-semibold text-lg mb-2">
              Trusted Export Partner
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dependable supply chain management ensures timely delivery to
              international clients.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LUBRICANT CATEGORIES SECTION ================= */}
      <section
        className="py-24 px-6 bg-gradient-to-b from-white to-blue-50"
        id="lubricant-categories"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <div className="flex justify-center items-center gap-3 text-[#1A237E] font-semibold mb-4">
            <Settings size={20} />
            Our Product Categories
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Automotive Oil, Industrial Oil & Grease
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            We export premium-grade lubricants and greases, catering to
            automotive and industrial sectors worldwide. Each category includes
            India’s most exported products for focused supply.
          </p>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {/* ================= AUTOMOTIVE ENGINE OILS ================= */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border p-8">
              {/* Heading */}
              <h3 className="text-2xl font-semibold mb-6 text-[#1A237E]">
                Automotive Engine Oils
              </h3>

              {/* Image */}
              <div className="relative h-[220px] w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/lubricants/automotive-oil.jpg"
                  alt="Automotive Engine Oils"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">
                High-performance engine oils for passenger vehicles, commercial
                fleets, and heavy-duty engines.
              </p>

              {/* Top 4 Products */}
              <ul className="space-y-4 mb-8">
                {[
                  'Mineral Engine Oil SAE 20W-40',
                  'Synthetic Engine Oil SAE 5W-30',
                  'Semi-Synthetic Engine Oil SAE 10W-40',
                  'High Mileage Engine Oil',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-sm"
                  >
                    <CheckCircle2
                      className="text-[#1A237E] mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/lubricants/automotive-oil/"
                className="inline-flex items-center gap-2 text-[#1A237E] font-semibold hover:gap-3 transition-all"
              >
                Explore Automotive Oils
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* ================= INDUSTRIAL LUBRICANT OILS ================= */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#1A237E]">
                Industrial Lubricant Oils
              </h3>

              <div className="relative h-[220px] w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/lubricants/industrial-oil.jpeg"
                  alt="Industrial Lubricant Oils"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <p className="text-gray-600 mb-6">
                Hydraulic oils, gear oils, compressor oils, and specialty
                lubricants for industrial machinery and applications.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Hydraulic Oil ISO VG 46',
                  'Gear Oil SAE 90',
                  'Compressor Oil',
                  'Turbine Oil',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-sm"
                  >
                    <CheckCircle2
                      className="text-[#1A237E] mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/lubricants/industrial-oil/"
                className="inline-flex items-center gap-2 text-[#1A237E] font-semibold hover:gap-3 transition-all"
              >
                Discover Industrial Oils
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* ================= GREASE PRODUCTS ================= */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border p-8">
              <h3 className="text-2xl font-semibold mb-6 text-[#1A237E]">
                Grease Products
              </h3>

              <div className="relative h-[220px] w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/lubricants/grease.jpg"
                  alt="Grease Products"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <p className="text-gray-600 mb-6">
                Multipurpose grease, lithium grease, and industrial grease for
                machinery and automotive use.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Lithium Base Grease NLGI 2',
                  'Calcium Base Grease',
                  'High Temperature Grease',
                  'Automotive Chassis Grease',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-sm"
                  >
                    <CheckCircle2
                      className="text-[#1A237E] mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/lubricants/grease/"
                className="inline-flex items-center gap-2 text-[#1A237E] font-semibold hover:gap-3 transition-all"
              >
                View Grease Products
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUPPLY & EXPORT PROCESS SECTION - LUBRICANTS ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <div className="flex justify-center items-center gap-3 text-[#1A237E] font-semibold mb-4">
            <Handshake size={20} />
            Our Supply & Export Process
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sourcing from Certified Manufacturers with Strict Quality Control
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            INFI EXPORT sources lubricants and greases from ISO-certified
            manufacturers and trusted suppliers across India to ensure
            consistent quality, performance, and reliable international
            shipments.
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <Handshake className="text-[#1A237E] mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Manufacturer Partnerships</h3>
              <p className="text-sm text-gray-600">
                Collaborating with ISO-certified and quality-approved lubricant
                manufacturers across India for premium sourcing.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <BadgeCheck className="text-[#1A237E] mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Quality Inspection</h3>
              <p className="text-sm text-gray-600">
                Each batch undergoes rigorous testing for viscosity, additives,
                and performance standards to meet international quality
                requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <FileCheck className="text-[#1A237E] mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">
                Certification & Documentation
              </h3>
              <p className="text-sm text-gray-600">
                Complete export documentation including ISO certificates, MSDS,
                invoices, and compliance paperwork for seamless international
                trade.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <Package className="text-[#1A237E] mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Custom Export Packaging</h3>
              <p className="text-sm text-gray-600">
                Bulk, drum, or private label packaging tailored to client
                requirements for safe and efficient transport.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <Ship className="text-[#1A237E] mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Global Shipping</h3>
              <p className="text-sm text-gray-600">
                Coordinated container loading, logistics, and freight forwarding
                to ensure timely delivery to international buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GLOBAL EXPORT - LUBRICANTS ================= */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <div className="flex justify-center items-center gap-3 text-[#1A237E] font-semibold mb-4">
            <Globe2 size={20} />
            Global Distribution Network
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Exporting Lubricants Worldwide
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            INFI EXPORT supplies high-quality automotive and industrial
            lubricants to distributors, wholesalers, and importers across
            Africa, Europe, and other international markets.
          </p>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-5xl mx-auto">
            {[
              'United Arab Emirates',
              'United Kingdom',
              'Netherlands',
              'United States',
              'South Africa',
              'Kenya',
              'Nigeria',
              'Ghana',
              'Oman',
              'Qatar',
              'Malaysia',
              'Singapore',
            ].map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border hover:shadow-md transition"
              >
                <MapPin className="text-[#1A237E]" size={18} />
                <span className="text-gray-700 text-sm font-medium">
                  {country}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-12">
            <p className="text-gray-600 mb-6">
              Looking to import premium Indian lubricants in your country?
            </p>

            <Link
              href="/lubricants/contact/"
              className="inline-block bg-[#1A237E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0D133D] transition"
            >
              Become an Import Partner
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS & COMPLIANCE - LUBRICANTS ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <div className="flex justify-center items-center gap-3 text-[#1A237E] font-semibold mb-4">
            <ShieldCheck size={20} />
            Certifications & Compliance
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            International Export Standards You Can Trust
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            We source lubricants and greases from ISO-certified manufacturers
            and ensure all exports meet international quality, safety, and
            environmental compliance standards for global markets.
          </p>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {/* ISO Certification */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <Award className="text-[#1A237E] mb-4" size={32} />
              <h3 className="font-semibold mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600">
                Certified manufacturers follow internationally recognized
                quality management systems for consistent product performance.
              </p>
            </div>

            {/* API Certification */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <ClipboardCheck className="text-[#1A237E] mb-4" size={32} />
              <h3 className="font-semibold mb-2">API Standards</h3>
              <p className="text-sm text-gray-600">
                Engine oils comply with American Petroleum Institute (API)
                classifications ensuring automotive performance and reliability.
              </p>
            </div>

            {/* BIS Certification */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <FileCheck2 className="text-[#1A237E] mb-4" size={32} />
              <h3 className="font-semibold mb-2">BIS Certification</h3>
              <p className="text-sm text-gray-600">
                Indian Standards (BIS) certified products ensuring safety,
                performance, and adherence to domestic industrial regulations.
              </p>
            </div>

            {/* MSDS / Safety Compliance */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <ShieldCheck className="text-[#1A237E] mb-4" size={32} />
              <h3 className="font-semibold mb-2">MSDS & Safety Compliance</h3>
              <p className="text-sm text-gray-600">
                Material Safety Data Sheets and pre-shipment inspections
                guarantee handling safety and compliance with international
                transport regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA – GET IN TOUCH - LUBRICANTS ================= */}
      <section className="relative py-28 px-6 bg-[#1A237E] text-white overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] via-[#0D133D] to-[#0A0F2A] opacity-70" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Small Tagline */}
          <div className="inline-flex items-center gap-2 bg-[#0D133D] text-blue-200 px-5 py-2 rounded-full text-sm font-medium mb-8">
            <Globe size={16} />
            Supplying Premium Lubricants Worldwide
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Looking for a Reliable Indian Lubricants Export Partner?
          </h2>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-[#F4B400] max-w-3xl mx-auto mb-12">
            Connect with INFI EXPORT for bulk automotive oils, industrial
            lubricants, and grease. Competitive pricing, verified ISO-quality,
            and dependable international shipping.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/lubricants/contact/"
              className="inline-flex items-center justify-center gap-2 px-10 py-2 bg-[#F4B400] text-black font-semibold rounded-xl text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              Request Quotation
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="mailto:info@infiexport.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-2 border border-white/70 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#1A237E] transition duration-300"
            >
              Email Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
