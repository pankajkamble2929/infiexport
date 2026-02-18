import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Wheat,
  Ship,
  ShieldCheck,
  Globe,
  ArrowRight,
  Building2,
  Award,
  PackageCheck,
  TrendingUp,
  Globe2,
  CheckCircle2,
  Package,
  BadgeCheck,
  Handshake,
  FileCheck,
  MapPin,
  FileCheck2,
  ClipboardCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.infiexport.com'),
  title: 'Premium Indian Rice Exporter from India | INFI EXPORT',
  description:
    'INFI EXPORT is a leading Indian rice exporter supplying premium Basmati and Non-Basmati rice worldwide with strict quality control, competitive pricing, and global shipping support.',
  keywords: [
    'Indian rice exporter',
    'Basmati rice exporter India',
    'Non-Basmati rice supplier',
    '1121 basmati rice exporter',
    'Rice export company India',
    'Bulk rice supplier',
  ],
  alternates: {
    canonical: '/rice/',
  },
  openGraph: {
    title: 'Premium Indian Rice Exporter | INFI EXPORT',
    description:
      'Trusted exporter of premium quality Indian rice serving global markets with assured quality and competitive pricing.',
    url: 'https://www.infiexport.com/rice/',
    siteName: 'INFI EXPORT',
    type: 'website',
  },
};

export default function RiceHome() {
  return (
    <>
      {/* ================= SCHEMA MARKUP ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'INFI EXPORT - Rice Exporter',
            url: 'https://www.infiexport.com/rice/',
            potentialAction: {
              '@type': 'SearchAction',
              target:
                'https://www.infiexport.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Corporation',
            name: 'INFI EXPORT - Rice Exporter',
            url: 'https://www.infiexport.com/rice/',
            logo: 'https://www.infiexport.com/infiexport-logo.png',
          }),
        }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-28 px-6 text-center bg-emerald-900 text-white overflow-hidden">
        {/* Subtle Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-900 to-green-800 opacity-95" />

        <Image
          src="/images/rice/home-hero.jpg"
          alt="Premium Indian Basmati Rice Export from India"
          fill
          className="object-cover opacity-20"
          priority
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Icon Badge */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-emerald-800 px-5 py-2 rounded-full text-sm font-medium text-green-200">
              <Wheat size={18} />
              Trusted Indian Agro Exporter
            </div>
          </div>

          {/* Main SEO Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Leading Indian Rice Exporter
            <span className="block text-[#F4B400] mt-2">
              {' '}
              Premium Basmati & Non-Basmati Rice
            </span>
          </h1>

          {/* Supporting Content */}
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-10">
            INFI EXPORT supplies high-quality Indian rice to global markets with
            strict moisture control, international packaging standards, and
            reliable worldwide shipping solutions.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-green-200 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              Quality Assured
            </div>

            <div className="flex items-center gap-2">
              <Ship size={18} />
              Global Export Support
            </div>

            <div className="flex items-center gap-2">
              <Globe size={18} />
              Serving International Markets
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/rice/contact/"
              className="flex items-center justify-center gap-2 bg-[#F4B400] text-black px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Request Bulk Quotation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#rice-variety"
              className="flex items-center justify-center gap-2 border border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-900 transition"
            >
              Explore Rice Varieties
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION - MODERN UI (Image Right) ================= */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-white to-emerald-50 text-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT - CONTENT ================= */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Heading Tag */}
            <div className="flex justify-center lg:justify-start items-center gap-3 mb-4 text-emerald-700 font-semibold tracking-wide uppercase text-sm">
              <Building2 size={18} />
              About INFI EXPORT
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Reliable Indian Rice Exporter Supplying
              <span className="text-emerald-700"> Global Markets</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              INFI EXPORT is a trusted Indian rice exporter specializing in
              premium quality Basmati and Non-Basmati rice varieties. We supply
              bulk rice shipments to international buyers with strict quality
              control, moisture management, and export-grade packaging
              standards.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed">
              Our commitment to consistency, competitive pricing, and timely
              deliveries has made us a preferred rice supplier for importers,
              distributors, and wholesalers worldwide.
            </p>

            <Link
              href="/rice/contact/"
              className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Our Export Team
            </Link>
          </div>

          {/* ================= RIGHT - IMAGE ================= */}
          <div className="relative order-1 lg:order-2 h-[450px] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full w-full">
              <Image
                src="/images/rice/home-about.jpg"
                alt="Rice Export from India"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-emerald-900/10"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl px-6 py-4 border">
              <p className="text-3xl font-bold text-emerald-700">Global</p>
              <p className="text-sm text-gray-600">Export Supply Network</p>
            </div>
          </div>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="max-w-7xl mx-auto mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300 group">
            <Award
              className="text-emerald-700 mb-4 group-hover:scale-110 transition"
              size={28}
            />
            <h3 className="font-semibold text-lg mb-2">
              Premium Quality Standards
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Strict quality checks and international compliance ensure superior
              grain length, aroma, and purity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300 group">
            <PackageCheck
              className="text-emerald-700 mb-4 group-hover:scale-110 transition"
              size={28}
            />
            <h3 className="font-semibold text-lg mb-2">
              Export-Grade Packaging
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Customized bulk packaging options suitable for global shipping and
              long-distance transport.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300 group">
            <TrendingUp
              className="text-emerald-700 mb-4 group-hover:scale-110 transition"
              size={28}
            />
            <h3 className="font-semibold text-lg mb-2">
              Competitive Bulk Pricing
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Direct sourcing and optimized logistics allow us to offer
              competitive export pricing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300 group">
            <Building2
              className="text-emerald-700 mb-4 group-hover:scale-110 transition"
              size={28}
            />
            <h3 className="font-semibold text-lg mb-2">
              Trusted Export Partner
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Reliable supply chain management ensuring timely delivery to
              international destinations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= RICE CATEGORIES SECTION ================= */}
      <section
        className="py-24 px-6 bg-gradient-to-b from-white to-gray-50"
        id="rice-variety"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <div className="flex justify-center items-center gap-3 text-emerald-700 font-semibold mb-4">
            <Wheat size={20} />
            Our Rice Varieties
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Export Quality Basmati & Non-Basmati Rice
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            We supply a wide range of premium Indian rice varieties suitable for
            wholesale buyers, importers, and international distributors with
            customizable bulk packaging options.
          </p>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 gap-12 text-left">
            {/* ================= BASMATI CARD ================= */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border p-8">
              {/* Heading FIRST */}
              <h3 className="text-2xl font-semibold mb-6 text-emerald-800">
                Basmati Rice Exporter
              </h3>

              {/* Image SECOND */}
              <div className="relative h-[220px] w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/rice/basmati.jpg"
                  alt="Basmati Rice Export"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6">
                Premium long-grain aromatic Basmati rice varieties including
                1121 Steam, 1121 Sella, Traditional Basmati, and Golden Sella.
                Known for extra-long grain length, rich aroma, and superior
                cooking quality.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  '1121 Steam Basmati Rice',
                  '1121 Sella (Parboiled) Rice',
                  'Traditional Basmati Rice',
                  'Golden Sella Basmati',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-sm"
                  >
                    <CheckCircle2
                      className="text-emerald-600 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/rice/basmati/"
                className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:gap-3 transition-all"
              >
                View Basmati Varieties
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* ================= NON-BASMATI CARD ================= */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border p-8">
              {/* Heading FIRST */}
              <h3 className="text-2xl font-semibold mb-6 text-emerald-800">
                Non-Basmati Rice Exporter
              </h3>

              {/* Image SECOND */}
              <div className="relative h-[220px] w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/images/rice/non-basmati.jpg"
                  alt="Non-Basmati Rice Exporter"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6">
                High-quality non-basmati rice varieties exported in bulk
                including IR64, Sona Masoori, PR11, and Long Grain rice. Ideal
                for large-scale commercial distribution and retail packaging.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'IR64 Rice',
                  'Sona Masoori Rice',
                  'PR11 Parboiled Rice',
                  'Long Grain White Rice',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-sm"
                  >
                    <CheckCircle2
                      className="text-emerald-600 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/rice/non-basmati/"
                className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:gap-3 transition-all"
              >
                Explore Non-Basmati Rice
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUPPLY & EXPORT PROCESS SECTION ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 text-emerald-700 font-semibold mb-4">
            <Handshake size={20} />
            Our Supply & Export Process
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reliable Sourcing with Strict Quality Supervision
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            INFI EXPORT works closely with certified rice mills and trusted
            suppliers across India to ensure consistent quality, competitive
            pricing, and reliable international shipments.
          </p>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <Handshake className="text-emerald-700 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Mill Partnerships</h3>
              <p className="text-sm text-gray-600">
                We collaborate with trusted and export-certified rice mills
                across major rice-producing regions in India.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <BadgeCheck className="text-emerald-700 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Quality Supervision</h3>
              <p className="text-sm text-gray-600">
                Each batch is supervised and verified for grain length, moisture
                content, and broken percentage.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <FileCheck className="text-emerald-700 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Export Documentation</h3>
              <p className="text-sm text-gray-600">
                Complete export documentation including invoices, certificates,
                and compliance paperwork.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <Package className="text-emerald-700 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Custom Packaging</h3>
              <p className="text-sm text-gray-600">
                Flexible bulk and private label packaging options tailored to
                buyer requirements.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <Ship className="text-emerald-700 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Global Shipping</h3>
              <p className="text-sm text-gray-600">
                Coordinated container loading and international freight
                forwarding to ensure timely delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COUNTRIES WE EXPORT TO ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <div className="flex justify-center items-center gap-3 text-emerald-700 font-semibold mb-4">
            <Globe2 size={20} />
            Global Presence
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Exporting Indian Rice to International Markets
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            INFI EXPORT supplies premium Basmati and Non-Basmati rice to
            importers, wholesalers, and distributors across multiple
            international destinations.
          </p>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-5xl mx-auto">
            {[
              'United Arab Emirates',
              'Saudi Arabia',
              'Qatar',
              'Kuwait',
              'Oman',
              'United Kingdom',
              'United States',
              'Canada',
              'Australia',
              'Singapore',
              'Malaysia',
              'South Africa',
            ].map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg border hover:shadow-md transition"
              >
                <MapPin className="text-emerald-600" size={18} />
                <span className="text-gray-700 text-sm font-medium">
                  {country}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-12">
            <p className="text-gray-600 mb-6">
              Looking to import premium Indian rice in your country?
            </p>

            <Link
              href="/rice/contact/"
              className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition"
            >
              Become an Import Partner
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS & COMPLIANCE ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <div className="flex justify-center items-center gap-3 text-emerald-700 font-semibold mb-4">
            <ShieldCheck size={20} />
            Certifications & Compliance
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            International Export Standards You Can Trust
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            We work with certified rice mills and ensure all export shipments
            comply with international quality regulations and documentation
            requirements for smooth customs clearance.
          </p>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-4 gap-8 text-left">
            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <FileCheck2 className="text-emerald-700 mb-4" size={32} />
              <h3 className="font-semibold mb-2">FSSAI Compliance</h3>
              <p className="text-sm text-gray-600">
                Products sourced from FSSAI-registered facilities ensuring food
                safety and hygiene standards.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <Award className="text-emerald-700 mb-4" size={32} />
              <h3 className="font-semibold mb-2">ISO Standards</h3>
              <p className="text-sm text-gray-600">
                Partner mills follow internationally recognized ISO quality
                management systems.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <ClipboardCheck className="text-emerald-700 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Export Documentation</h3>
              <p className="text-sm text-gray-600">
                Complete export paperwork including Invoice, Packing List, COO,
                and Phytosanitary Certificate.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <ShieldCheck className="text-emerald-700 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Quality Inspection</h3>
              <p className="text-sm text-gray-600">
                Pre-shipment inspection for moisture, broken percentage, and
                grain length verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA – GET IN TOUCH ================= */}
      <section className="relative py-28 px-6 bg-emerald-900 text-white overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 opacity-95" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Small Tagline */}
          <div className="inline-flex items-center gap-2 bg-emerald-800 text-green-200 px-5 py-2 rounded-full text-sm font-medium mb-8">
            <Globe size={16} />
            Supplying Premium Rice Worldwide
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Looking for a Reliable Indian Rice Export Partner?
          </h2>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-[#F4B400] max-w-3xl mx-auto mb-12">
            Connect with INFI EXPORT for bulk Basmati and Non-Basmati rice
            supply. Competitive pricing, verified quality, and dependable
            international shipping.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/rice/contact/"
              className="inline-flex items-center justify-center gap-2 px-10 py-2 bg-[#F4B400] text-black font-semibold rounded-xl text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              Request Quotation
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="mailto:info@infiexport.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-2 border border-white/70 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-900 transition duration-300"
            >
              Email Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
