import Image from 'next/image';
import Link from 'next/link';
import {
  Wheat,
  ArrowRight,
  Ruler,
  CheckCircle2,
  ShieldCheck,
  Ship,
  PackageCheck,
  Globe,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Traditional Basmati Rice Exporter from India | Aged Premium Long Grain Supplier',
  description:
    'Exporter of Traditional Basmati Rice from India. Naturally aromatic, aged long grain rice ideal for biryani and premium markets. Bulk FOB supply with global shipping.',
  keywords: [
    'Traditional Basmati Rice Exporter',
    'Aged Basmati Rice Supplier India',
    'Premium Traditional Basmati Rice',
    'Long Grain Traditional Rice Export',
    'Bulk Basmati Rice FOB India',
  ],
  openGraph: {
    title: 'Traditional Basmati Rice Exporter from India',
    description:
      'Premium aged Traditional Basmati Rice with natural aroma and global bulk export supply.',
    type: 'website',
  },
};

export default function TraditionalBasmatiPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-900 to-green-800 opacity-95" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div className="text-center lg:text-left">
              {/* Breadcrumb */}
              <nav className="flex justify-center lg:justify-start mb-6 text-sm text-green-200">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/rice/" className="hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li className="opacity-60">/</li>
                  <li>
                    <Link
                      href="/rice/basmati/"
                      className="hover:text-white transition"
                    >
                      Basmati Rice
                    </Link>
                  </li>
                  <li className="opacity-60">/</li>
                  <li className="text-[#F4B400] font-medium">
                    Traditional Basmati
                  </li>
                </ol>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-800 text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Wheat size={18} />
                Authentic Aged & Naturally Aromatic
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Traditional Basmati Rice
              </h1>

              <p className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#F4B400] mt-3">
                Heritage Long Grain Rice for Premium Markets
              </p>

              {/* Description */}
              <p className="text-lg md:text-xl text-green-100 mb-8 max-w-xl mx-auto lg:mx-0">
                INFI EXPORT supplies premium Traditional Basmati Rice cultivated
                in the Himalayan foothills of India. Known for its natural
                aroma, delicate texture, and authentic taste, this variety is
                aged to enhance flavor and cooking performance for international
                buyers.
              </p>

              {/* Key Specifications */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-green-200 text-sm md:text-base mb-10">
                <div className="flex items-center gap-2">
                  <Ruler size={18} />
                  7.00 – 7.50 mm Long Grain
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} />
                  Naturally Aromatic & Aged
                </div>

                <div className="flex items-center gap-2">
                  <Ship size={18} />
                  20ft / 40ft Container Export
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link
                  href="/rice/contact/"
                  className="flex items-center justify-center gap-2 bg-[#F4B400] text-black px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition"
                >
                  Get Latest Price
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="#specifications"
                  className="flex items-center justify-center gap-2 border border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-900 transition"
                >
                  View Specifications
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[420px] lg:h-[540px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/rice/basmati/traditional-basmati-rice.jpg"
                alt="Traditional Basmati Rice Export Quality"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <p className="text-sm text-green-200">FOB India Supply</p>
                <p className="text-xl font-semibold text-white">
                  Premium Aged Traditional Basmati
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW + SPECIFICATIONS ================= */}
      <section className="py-24 px-6 bg-emerald-50" id="specifications">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">
              Why Choose Traditional Basmati Rice?
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Traditional Basmati Rice is valued for its authentic fragrance,
              soft texture, and rich taste profile. Unlike hybrid varieties,
              this rice maintains its classic characteristics and is preferred
              in premium retail and specialty food markets worldwide.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Natural Aroma',
                  desc: 'Distinct fragrance developed through aging and heritage cultivation.',
                },
                {
                  title: 'Soft & Fluffy Texture',
                  desc: 'Cooks into light, separate grains ideal for fine dining.',
                },
                {
                  title: 'Aged for Better Cooking',
                  desc: 'Aging enhances flavor, elongation, and cooking stability.',
                },
                {
                  title: 'Custom Export Packaging',
                  desc: 'Available in PP bags, BOPP bags, and private label options.',
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-emerald-100"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-700/10 mb-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-10">
            <h2 className="text-3xl font-bold text-emerald-800 mb-8">
              Export Specifications – Traditional Basmati
            </h2>

            <div className="space-y-6">
              {[
                { label: 'Average Grain Length', value: '7.00 – 7.50 mm' },
                { label: 'Moisture Content', value: 'Max 12%' },
                { label: 'Broken Percentage', value: '1% / 2% / 5%' },
                { label: 'Aging Period', value: '12–24 Months (Optional)' },
                { label: 'Packaging Options', value: '25kg & 50kg Bags' },
                { label: 'Loading Capacity', value: '24–26 MT (20ft)' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-start border-b border-emerald-100 pb-4"
                >
                  <span className="text-gray-600 font-medium">
                    {item.label}
                  </span>
                  <span className="text-emerald-800 font-semibold text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/rice/contact/"
                className="flex items-center justify-center gap-2 bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
              >
                Request FOB Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">
              Our Traditional Basmati Export Process
            </h2>
            <p className="text-gray-600 text-lg">
              We maintain strict quality control from sourcing to shipment to
              ensure premium grade rice for global buyers.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-10">
            <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-1 h-[70%] bg-emerald-100"></div>

            {[
              {
                icon: ShieldCheck,
                title: 'Sourcing & Aging',
                desc: 'Carefully sourced from traditional growing regions and aged for optimal aroma.',
              },
              {
                icon: PackageCheck,
                title: 'Milling & Quality Testing',
                desc: 'Processed using modern milling and sortex systems with strict grading.',
              },
              {
                icon: Ship,
                title: 'Export Documentation & Shipping',
                desc: 'Efficient container loading and global freight coordination.',
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-emerald-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {idx + 1}
                  </div>

                  <div className="flex justify-center md:justify-start mt-6 mb-6">
                    <div className="w-14 h-14 rounded-full bg-emerald-800/10 flex items-center justify-center">
                      <Icon className="text-emerald-800" size={28} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-emerald-900 mb-3 text-center md:text-left">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-28 px-6 bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 opacity-95" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-800 text-green-200 px-5 py-2 rounded-full text-sm font-medium mb-8">
            <Globe size={16} />
            Exporting Premium Traditional Basmati Worldwide
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Reliable Traditional Basmati Rice Supplier from India
            <span className="block text-[#F4B400] mt-3">
              Bulk Orders | Aged Quality | Competitive FOB Pricing
            </span>
          </h2>

          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-10">
            Partner with INFI EXPORT for consistent quality, strong aroma, and
            long-term international supply relationships.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/rice/contact/"
              className="inline-flex items-center justify-center gap-2 px-10 py-2 bg-[#F4B400] text-black font-semibold rounded-xl text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              Request Latest Price
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="mailto:info@infiexport.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-2 border border-white/70 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-900 transition duration-300"
            >
              Email Export Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
