import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wheat,
  ShieldCheck,
  Ship,
  Globe,
  ArrowRight,
  Award,
  PackageCheck,
  Ruler,
  Droplets,
  Percent,
  Package,
  Box,
  Truck,
  MapPin,
  Container,
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://infiexport.com'),
  title:
    'Premium Indian Basmati Rice Exporter | Bulk Basmati Supplier | INFI EXPORT',
  description:
    'INFI EXPORT is a trusted Indian Basmati rice exporter supplying premium long grain Basmati rice to global markets with strict quality control, competitive pricing, and reliable international shipping.',
  keywords: [
    'Indian basmati rice exporter',
    'basmati rice supplier India',
    'bulk basmati rice exporter',
    'long grain basmati rice export',
    'basmati rice export company',
    'basmati rice wholesale supplier',
  ],
  alternates: {
    canonical: '/rice/basmati',
  },
  openGraph: {
    title: 'Premium Indian Basmati Rice Exporter | INFI EXPORT',
    description:
      'Exporter and bulk supplier of premium quality Indian Basmati rice serving international markets with assured quality and competitive pricing.',
    url: 'https://infiexport.com/rice/basmati',
    siteName: 'INFI EXPORT',
    type: 'website',
    images: [
      {
        url: 'https://infiexport.com/images/rice/basmati-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Indian Basmati Rice Export from India',
      },
    ],
  },
};

export default function BasmatiPage() {
  return (
    <>
      {/* ================= SCHEMA MARKUP ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Indian Basmati Rice Exporter',
            description:
              'Premium quality Indian Basmati rice exported worldwide including multiple long grain varieties.',
            url: 'https://infiexport.com/rice/basmati',
            mainEntity: {
              '@type': 'Organization',
              name: 'INFI EXPORT',
              url: 'https://infiexport.com',
            },
          }),
        }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-28 px-6 text-center bg-emerald-900 text-white overflow-hidden">
        {/* Subtle Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-900 to-green-800 opacity-95" />

        <Image
          src="/images/rice/basmati.jpg"
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
              Premium Basmati Rice Exporter
            </div>
          </div>

          {/* Main SEO Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Leading Indian Basmati Rice Exporter
            <span className="block text-[#F4B400] mt-2">
              Bulk Supply for Global Markets
            </span>
          </h1>

          {/* Supporting Content */}
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-10">
            INFI EXPORT supplies high-quality long grain Basmati rice sourced
            from certified Indian mills, ensuring superior aroma, excellent
            cooking elongation, export-grade packaging, and reliable worldwide
            shipping.
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
              href="#varieties"
              className="flex items-center justify-center gap-2 border border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-900 transition"
            >
              Explore Basmati Varieties
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= BASMATI VARIETIES - MODERN UI ================= */}
      <section
        className="relative py-28 px-6 bg-gradient-to-b from-white to-emerald-50 overflow-hidden"
        id="varieties"
      >
        <div className="relative max-w-7xl mx-auto">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-4">
              <Package size={18} />
              Our Basmati Portfolio
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              <span className="text-emerald-700">Basmati Rice</span> Varieties
              We Export
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Premium 1121 and Traditional Basmati varieties processed under
              strict export standards for international bulk buyers.
            </p>
          </div>

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* CARD COMPONENT STYLE */}
            {[
              {
                title: '1121 Steam Basmati Rice',
                link: '/rice/basmati/1121-steam',
                image: '/images/rice/basmati/1121-basmati-steam-rice.jpg',
                length: '8.3mm+',
                moisture: '12–13%',
                broken: '1% Max',
              },
              {
                title: '1121 Sella (Parboiled)',
                link: '/rice/basmati/1121-sella',
                image:
                  '/images/rice/basmati/1121-sella-parboiled-basmati-rice.jpg',
                length: '8.2mm+',
                moisture: '12–13%',
                broken: '2% Max',
              },
              {
                title: '1121 Golden Sella',
                link: '/rice/basmati/1121-golden-sella',
                image:
                  '/images/rice/basmati/1121-golden-sella-basmati-rice.jpg',
                length: '8.3mm+',
                moisture: '12–13%',
                broken: '2% Max',
              },
              {
                title: 'Traditional Basmati',
                link: '/rice/basmati/traditional',
                image: '/images/rice/basmati/traditional-basmati-rice.jpg',
                length: '7.4mm+',
                moisture: '12–13%',
                broken: '2% Max',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* ===== Heading First ===== */}
                <div className="p-6 pb-4">
                  <h3 className="text-xl font-semibold text-emerald-700">
                    {item.title}
                  </h3>
                </div>

                {/* ===== Image ===== */}
                <div className="relative h-48 mx-6 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* ===== Specs ===== */}
                <div className="p-6 pt-5 space-y-3 text-sm text-gray-700 flex-grow">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-emerald-600" />
                    Grain Length: {item.length}
                  </div>

                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-emerald-600" />
                    Moisture: {item.moisture}
                  </div>

                  <div className="flex items-center gap-2">
                    <Percent className="w-4 h-4 text-emerald-600" />
                    Broken: {item.broken}
                  </div>

                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-emerald-600" />
                    Packaging: 5kg–50kg
                  </div>
                </div>

                {/* ===== CTA ===== */}
                <div className="px-6 pb-6">
                  <Link
                    href={item.link}
                    className="inline-flex items-center justify-center gap-2 w-full bg-emerald-700 text-white py-2 rounded-lg font-semibold hover:bg-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View Product Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPORT PACKAGING SECTION ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-4">
              <Package size={18} />
              Export Ready Packaging
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              Flexible{' '}
              <span className="text-emerald-700">Export Packaging Options</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We offer bulk and buyer-specified packaging solutions designed for
              safe international transport and long-distance exports.
            </p>
          </div>

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* ===== Card 1 - Standard Sizes ===== */}
            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 mb-6 group-hover:scale-110 transition">
                <Box className="w-7 h-7 text-emerald-700" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Standard Packaging Sizes
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Available in multiple weight options to meet different
                international market requirements.
              </p>

              <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-emerald-700">
                <span className="bg-emerald-50 px-3 py-1 rounded-full">
                  1kg
                </span>
                <span className="bg-emerald-50 px-3 py-1 rounded-full">
                  5kg
                </span>
                <span className="bg-emerald-50 px-3 py-1 rounded-full">
                  10kg
                </span>
                <span className="bg-emerald-50 px-3 py-1 rounded-full">
                  25kg
                </span>
                <span className="bg-emerald-50 px-3 py-1 rounded-full">
                  50kg
                </span>
              </div>
            </div>

            {/* ===== Card 2 - Bag Types ===== */}
            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 mb-6 group-hover:scale-110 transition">
                <Package className="w-7 h-7 text-emerald-700" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Durable Bag Types
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Strong and export-grade materials suitable for bulk shipping and
                long-distance transport.
              </p>

              <div className="space-y-2 text-emerald-700 font-medium">
                <div>PP Bags</div>
                <div>Non-Woven Bags</div>
              </div>
            </div>

            {/* ===== Card 3 - Buyer Specified ===== */}
            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 mb-6 group-hover:scale-110 transition">
                <Truck className="w-7 h-7 text-emerald-700" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Buyer-Specified Packaging
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                Packaging can be customized as per buyer’s export and
                destination market requirements to ensure compliance and safe
                shipment handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPORT & SHIPPING INFORMATION ================= */}
      <section className="relative py-28 px-6 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* ================= HEADING ================= */}
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-4">
              <Ship size={18} />
              Logistics & Export Details
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              Export &{' '}
              <span className="text-emerald-700">Shipping Information</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Transparent export terms and structured logistics support for
              smooth international rice shipments.
            </p>
          </div>

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* ===== Export Terms ===== */}
            <div className="bg-emerald-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <Ship className="text-emerald-700 mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Export Terms
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We operate under internationally recognized trade terms
                including:
              </p>
              <div className="mt-4 space-y-2 text-emerald-700 font-medium">
                <div>EXW (Ex-Factory)</div>
                <div>FOB (Free On Board)</div>
              </div>
            </div>

            {/* ===== Major Port ===== */}
            <div className="bg-emerald-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <MapPin className="text-emerald-700 mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Major Port
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Shipments are primarily dispatched from:
              </p>
              <div className="mt-4 text-emerald-700 font-medium">
                Nhava Sheva Port (JNPT), India
              </div>
            </div>

            {/* ===== Minimum Order Quantity ===== */}
            <div className="bg-emerald-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <PackageCheck className="text-emerald-700 mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Minimum Order Quantity
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Standard MOQ for export orders:
              </p>
              <div className="mt-4 text-emerald-700 font-medium">
                1 x 20ft Container
              </div>
            </div>

            {/* ===== Container Capacity ===== */}
            <div className="bg-emerald-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <Container className="text-emerald-700 mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Container Loading
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Approximate loading capacity:
              </p>
              <div className="mt-4 space-y-2 text-emerald-700 font-medium">
                <div>20ft Container: 24–26 MT</div>
                <div>40ft Container: 26–28 MT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE OUR BASMATI ================= */}
      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-emerald-700 font-semibold tracking-wide uppercase text-sm">
              Premium Export Advantage
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Our{' '}
              <span className="text-emerald-700">Basmati Rice?</span>
            </h2>

            <div className="w-24 h-1 bg-emerald-700 mx-auto mt-6 rounded-full"></div>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              We deliver export-grade basmati rice with strict quality control,
              consistent supply, and global shipping expertise.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-emerald-100 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-emerald-700 rounded-l-3xl"></div>

              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-700/10 group-hover:bg-emerald-700 transition">
                <Award className="w-7 h-7 text-emerald-700 group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Extra Long Grain Quality
              </h3>

              <p className="text-gray-600 leading-relaxed">
                1121 variety with 8.3mm+ grain length and excellent elongation
                after cooking, ensuring premium plate presentation and authentic
                aroma.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-emerald-100 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-emerald-700 rounded-l-3xl"></div>

              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-700/10 group-hover:bg-emerald-700 transition">
                <PackageCheck className="w-7 h-7 text-emerald-700 group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Strict Export Inspection
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Every shipment is inspected for moisture, purity, and broken
                percentage to meet international buyer standards.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white/80 backdrop-blur-sm border border-emerald-100 p-10 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-emerald-700 rounded-l-3xl"></div>

              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-700/10 group-hover:bg-emerald-700 transition">
                <Globe className="w-7 h-7 text-emerald-700 group-hover:text-white transition" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Reliable Global Supply
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Supplying bulk orders worldwide with proper export
                documentation, smooth logistics coordination, and timely
                shipment execution.
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
              Common questions from our international buyers.
            </p>
            <div className="w-24 h-1 bg-emerald-700 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="group bg-emerald-50 p-6 rounded-2xl border border-emerald-100 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                What is your minimum order quantity (MOQ)?
                <span className="ml-4 text-emerald-700 group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our minimum order quantity typically starts from one 20ft
                container. However, smaller trial orders may be discussed
                depending on product availability and destination country.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-emerald-50 p-6 rounded-2xl border border-emerald-100 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                Do you provide samples before bulk order?
                <span className="ml-4 text-emerald-700 group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, samples can be provided for quality evaluation. Courier
                charges may apply and are usually adjusted in confirmed bulk
                orders.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-emerald-50 p-6 rounded-2xl border border-emerald-100 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                What is the average delivery time?
                <span className="ml-4 text-emerald-700 group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Orders are generally dispatched within 7–10 working days after
                order confirmation and advance payment. Transit time depends on
                destination: Middle East (15–20 days), Europe/Africa (25–35
                days), USA (30–40 days).
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-emerald-50 p-6 rounded-2xl border border-emerald-100 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-gray-900 text-lg">
                Do you offer buyer-specified or custom packaging?
                <span className="ml-4 text-emerald-700 group-open:rotate-180 transition">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, we support buyer-specified packaging including different
                bag sizes and material options, subject to export regulations
                and certification requirements.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= FINAL EXPORT CTA ================= */}
      <section className="relative py-28 px-6 bg-emerald-900 text-white overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-xxl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-400/20 rounded-full blur-xxl"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Import Premium Basmati Rice?
          </h2>

          <p className="mt-6 text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto">
            Get competitive export pricing, container loading details, and
            complete shipping support for your destination country. Our team
            will respond within 24 hours.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Primary Button */}
            <Link
              href="/rice/contact/"
              className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Request Price Quotation
            </Link>

            {/* Secondary Button */}
            <Link
              href="mailto:info@infiexport.com"
              className="px-8 py-4 border border-white/70 text-white font-semibold rounded-full hover:bg-white hover:text-emerald-700 transition-all duration-300"
            >
              Email Export Team
            </Link>
          </div>

          {/* Trust Line */}
          <p className="mt-8 text-sm text-emerald-200">
            Bulk Orders • 20ft / 40ft Containers • Global Shipping Support
          </p>
        </div>
      </section>
    </>
  );
}
