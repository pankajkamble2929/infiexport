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
    'Premium Indian Non-Basmati Rice Exporter | Bulk Non-Basmati Supplier | INFI EXPORT',
  description:
    'INFI EXPORT exports high-quality Non-Basmati rice varieties including IR64, Sona Masoori, PR11 Parboiled, and Long Grain White to global markets with strict quality control and competitive pricing.',
  keywords: [
    'Indian non-basmati rice exporter',
    'non-basmati rice supplier India',
    'bulk non-basmati rice exporter',
    'long grain non-basmati rice export',
    'non-basmati rice export company',
    'non-basmati rice wholesale supplier',
  ],
  alternates: {
    canonical: '/rice/non-basmati',
  },
  openGraph: {
    title: 'Premium Indian Non-Basmati Rice Exporter | INFI EXPORT',
    description:
      'Exporter and bulk supplier of premium Indian Non-Basmati rice varieties for international markets with assured quality and export-grade packaging.',
    url: 'https://infiexport.com/rice/non-basmati',
    siteName: 'INFI EXPORT',
    type: 'website',
    images: [
      {
        url: 'https://infiexport.com/images/rice/non-basmati-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Indian Non-Basmati Rice Export from India',
      },
    ],
  },
};

export default function NonBasmatiPage() {
  return (
    <>
      {/* ================= SCHEMA MARKUP ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Indian Non-Basmati Rice Exporter',
            description:
              'High-quality Indian Non-Basmati rice exported worldwide including IR64, Sona Masoori, PR11 Parboiled, and Long Grain White varieties.',
            url: 'https://infiexport.com/rice/non-basmati',
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-900 to-green-800 opacity-95" />
        <Image
          src="/images/rice/non-basmati.jpg"
          alt="Premium Indian Non-Basmati Rice Export from India"
          fill
          className="object-cover opacity-20"
          priority
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-emerald-800 px-5 py-2 rounded-full text-sm font-medium text-green-200">
              <Wheat size={18} />
              Premium Non-Basmati Rice Exporter
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Leading Indian Non-Basmati Rice Exporter
            <span className="block text-[#F4B400] mt-2">
              Bulk Supply for Global Markets
            </span>
          </h1>

          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-10">
            INFI EXPORT supplies high-quality long and medium grain Non-Basmati rice
            sourced from certified Indian mills, ensuring uniform grain quality,
            consistent cooking, export-grade packaging, and reliable worldwide shipping.
          </p>

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
              Explore Non-Basmati Varieties
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= NON-BASMATI VARIETIES ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-emerald-50 overflow-hidden" id="varieties">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-4">
              <Package size={18} />
              Our Non-Basmati Portfolio
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              <span className="text-emerald-700">Non-Basmati Rice</span> Varieties
              We Export
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Premium Non-Basmati rice varieties processed under strict export standards for international bulk buyers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: 'IR64 Rice',
                link: '/rice/non-basmati/ir64',
                image: '/images/rice/non-basmati/ir64-rice.jpg',
                length: '7.5mm+',
                moisture: '12–13%',
                broken: '2% Max',
              },
              {
                title: 'Sona Masoori Rice',
                link: '/rice/non-basmati/sona-masoori',
                image: '/images/rice/non-basmati/sona-masoori-rice.jpg',
                length: '6.8mm+',
                moisture: '12–13%',
                broken: '2% Max',
              },
              {
                title: 'PR11 Parboiled Rice',
                link: '/rice/non-basmati/pr11-parboiled',
                image: '/images/rice/non-basmati/pr11-parboiled-rice.jpg',
                length: '7.2mm+',
                moisture: '12–13%',
                broken: '2% Max',
              },
              {
                title: 'Long Grain White Rice',
                link: '/rice/non-basmati/long-grain-white',
                image: '/images/rice/non-basmati/long-grain-white-rice.jpg',
                length: '6.9mm+',
                moisture: '12–13%',
                broken: '3% Max',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="p-6 pb-4">
                  <h3 className="text-xl font-semibold text-emerald-700">
                    {item.title}
                  </h3>
                </div>

                <div className="relative h-48 mx-6 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

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

      {/* ================= EXPORT PACKAGING ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-4">
              <Package size={18} />
              Export Ready Packaging
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              Flexible <span className="text-emerald-700">Export Packaging Options</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our Non-Basmati rice packaging ensures safe transportation with customizable bulk and buyer-specified options for international markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 mb-6 group-hover:scale-110 transition">
                <Box className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Standard Packaging Sizes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Available in multiple weight options to meet diverse international market requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-emerald-700">
                <span className="bg-emerald-50 px-3 py-1 rounded-full">1kg</span>
                <span className="bg-emerald-50 px-3 py-1 rounded-full">5kg</span>
                <span className="bg-emerald-50 px-3 py-1 rounded-full">10kg</span>
                <span className="bg-emerald-50 px-3 py-1 rounded-full">25kg</span>
                <span className="bg-emerald-50 px-3 py-1 rounded-full">50kg</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 mb-6 group-hover:scale-110 transition">
                <Package className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Durable Bag Types
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Strong, export-grade materials suitable for bulk Non-Basmati rice shipments worldwide.
              </p>
              <div className="space-y-2 text-emerald-700 font-medium">
                <div>PP Bags</div>
                <div>Non-Woven Bags</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 mb-6 group-hover:scale-110 transition">
                <Truck className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Buyer-Specified Packaging
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Custom packaging solutions for Non-Basmati rice to meet export regulations and buyer preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPORT & SHIPPING INFORMATION ================= */}
      <section className="relative py-28 px-6 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-4">
              <Ship size={18} />
              Logistics & Export Details
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              Export & <span className="text-emerald-700">Shipping Information</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Clear and reliable export terms with structured logistics for smooth shipment of Non-Basmati rice worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-emerald-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <Ship className="text-emerald-700 mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Export Terms</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We operate under internationally recognized trade terms including:
              </p>
              <div className="mt-4 space-y-2 text-emerald-700 font-medium">
                <div>EXW (Ex-Factory)</div>
                <div>FOB (Free On Board)</div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <MapPin className="text-emerald-700 mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Major Port</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Shipments are primarily dispatched from:
              </p>
              <div className="mt-4 text-emerald-700 font-medium">
                Nhava Sheva Port (JNPT), India
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <PackageCheck className="text-emerald-700 mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Minimum Order Quantity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Standard MOQ for Non-Basmati rice export orders:
              </p>
              <div className="mt-4 text-emerald-700 font-medium">
                1 x 20ft Container
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <Container className="text-emerald-700 mb-5" size={30} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Container Loading</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Approximate loading capacity:
              </p>
              <div className="mt-4 space-y-2 text-emerald-700 font-medium">
                <div>20ft Container: 18–20 MT</div>
                <div>40ft Container: 36–38 MT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE OUR NON-BASMATI ================= */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-4">
              <Award size={18} />
              Why Choose INFI EXPORT
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-gray-900">
              <span className="text-emerald-700">Trusted Non-Basmati Rice</span> Supplier
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Quality, reliability, and global reach make INFI EXPORT your preferred partner for Non-Basmati rice export.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center">
              <ShieldCheck className="text-emerald-700 mb-4 mx-auto" size={28} />
              <h3 className="text-xl font-semibold mb-2">Strict Quality Control</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each Non-Basmati rice batch is inspected to meet international export standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center">
              <Globe className="text-emerald-700 mb-4 mx-auto" size={28} />
              <h3 className="text-xl font-semibold mb-2">Global Export Network</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We ship Non-Basmati rice to all major international markets reliably and on time.
              </p>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-center">
              <Truck className="text-emerald-700 mb-4 mx-auto" size={28} />
              <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our logistic partners ensure Non-Basmati rice reaches you fresh and in excellent condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="relative py-28 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                What are the Non-Basmati rice varieties you export?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We export IR64, Sona Masoori, PR11 Parboiled, and Long Grain White rice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                What is the minimum order quantity (MOQ) for Non-Basmati rice export?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our standard MOQ is 1 x 20ft container.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                What packaging options are available for Non-Basmati rice?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer customizable packaging from 1kg to 50kg in PP and non-woven bags, suitable for export.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                Can you ship Non-Basmati rice worldwide?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes, we ship globally and handle all logistics from India.
              </p>
            </div>
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
            Ready to Import Non Basmati Rice?
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
