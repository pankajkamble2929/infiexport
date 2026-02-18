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
  title: 'Long Grain White Rice Exporter | Premium Non-Basmati Rice Supplier',
  description:
    'Exporter of high-quality Long Grain White Rice. Non-Basmati, long grain, moisture-controlled, export-ready for bulk international supply.',
  keywords: [
    'Long Grain White Rice Exporter',
    'Non-Basmati Rice Supplier',
    'Indian Long Grain Rice Bulk Export',
    'Export Ready White Rice FOB',
    'Premium White Rice Supplier',
  ],
  openGraph: {
    title: 'Long Grain White Rice Exporter | Premium Non-Basmati',
    description:
      'Premium export-quality Long Grain White Rice. Non-Basmati, moisture-controlled, long grain, and bulk supply ready for global buyers.',
    type: 'website',
  },
};

export default function LongGrainWhitePage() {
  return (
    <>
      {/* ================= LONG GRAIN WHITE RICE HERO ================= */}
      <section className="relative bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-900 to-green-800 opacity-95" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
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
                      href="/rice/non-basmati/"
                      className="hover:text-white transition"
                    >
                      Non-Basmati Rice
                    </Link>
                  </li>
                  <li className="opacity-60">/</li>
                  <li className="text-[#F4B400] font-medium">
                    Long Grain White
                  </li>
                </ol>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-800 text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Wheat size={18} />
                Premium Export-Grade Quality
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Long Grain White Non-Basmati Rice
              </h1>

              <p className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#F4B400] mt-3">
                Long Grain, Consistent & Export-Ready
              </p>

              {/* Description */}
              <p className="text-lg md:text-xl text-green-100 mb-8 max-w-xl mx-auto lg:mx-0">
                INFI EXPORT provides premium Long Grain White Rice, a
                Non-Basmati variety prized for its consistent grain, non-sticky
                texture, and superior cooking quality. Ideal for international
                distributors, bulk buyers, and food brands.
              </p>

              {/* Key Specifications */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-green-200 text-sm md:text-base mb-10">
                <div className="flex items-center gap-2">
                  <Ruler size={18} />
                  6.5–7.0 mm Grain Length
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} />
                  Moisture Controlled
                </div>

                <div className="flex items-center gap-2">
                  <Ship size={18} />
                  Worldwide Bulk Export
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link
                  href="/rice/contact/"
                  className="flex items-center justify-center gap-2 bg-[#F4B400] text-black px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition"
                >
                  Get Bulk Price Quote
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
                src="/images/rice/non-basmati/long-grain-white-rice.jpg"
                alt="Long Grain White Non-Basmati Rice Export Quality"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <p className="text-sm text-green-200">Export Grade</p>
                <p className="text-xl font-semibold text-white">
                  Premium Long Grain White Quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT OVERVIEW + SPECIFICATIONS ================= */}
      <section className="py-24 px-6 bg-emerald-50" id="specifications">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">
              Long Grain White Rice Overview
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Long Grain White Rice is a premium Non-Basmati variety with
              consistently long grains, excellent cooking performance, and
              minimal broken rice. It is suitable for international importers,
              food processors, and bulk buyers seeking reliable quality.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Consistent Long Grain',
                  desc: '6.5–7.0 mm uniform grains for perfect plate presentation and cooking.',
                },
                {
                  title: 'High-Quality Non-Basmati',
                  desc: 'Non-sticky, firm texture with consistent quality for global buyers.',
                },
                {
                  title: 'Export-Grade',
                  desc: 'Moisture controlled, low broken percentage, and bulk-ready packaging.',
                },
                {
                  title: 'Flexible Bulk Supply',
                  desc: 'Custom packaging options for international distributors and importers.',
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
              Key Specifications
            </h2>

            <div className="space-y-6">
              {[
                { label: 'Average Grain Length', value: '6.5–7.0mm' },
                { label: 'Moisture Content', value: 'Max 12-13%' },
                { label: 'Broken Percentage', value: '1-2% Max' },
                { label: 'Packing Options', value: '25kg, 50kg, 100kg Bags' },
                { label: 'FOB Port', value: 'Mumbai / Nhava Sheva' },
                { label: 'Shelf Life', value: '12 Months from Production' },
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
                Request Export Quotation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUPPLY & EXPORT PROCESS ================= */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">
              Our Supply & Export Process
            </h2>
            <p className="text-gray-600 text-lg">
              INFI EXPORT ensures strict quality checks and certified sourcing
              for Long Grain White Rice from India, maintaining international
              export standards at every stage.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-10">
            <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-1 h-[70%] bg-emerald-100"></div>

            {[
              {
                icon: ShieldCheck,
                title: 'Certified Sourcing',
                desc: 'Sourced from trusted, export-certified mills ensuring consistent long grain quality.',
              },
              {
                icon: PackageCheck,
                title: 'Inspection & Packaging',
                desc: 'Batch-wise quality checks with export-ready bulk or retail packaging.',
              },
              {
                icon: Ship,
                title: 'Global Shipping',
                desc: 'Efficient container loading and international shipping ensure timely worldwide delivery.',
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
            Supplying Long Grain White Rice Worldwide
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Looking for a Trusted Rice Export Partner?
            <span className="block text-[#F4B400] mt-3">
              Start Your Long Grain White Rice Import Today
            </span>
          </h2>

          <p className="text-lg md:text-xl text-green-100 max-w-4xl mx-auto mb-10">
            Partner with INFI EXPORT for premium Long Grain White Non-Basmati
            rice. Competitive bulk pricing, verified export quality, and
            reliable global shipping you can trust.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-green-200 text-sm md:text-base mb-12">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} />
              Quality Inspected Shipments
            </div>
            <div className="flex items-center gap-2">
              <PackageCheck size={18} />
              Flexible Bulk Packaging
            </div>
            <div className="flex items-center gap-2">
              <Ship size={18} />
              Timely Global Delivery
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/rice/contact/"
              className="inline-flex items-center justify-center gap-2 px-10 py-2 bg-[#F4B400] text-black font-semibold rounded-xl text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              Request Bulk Price Quote
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="mailto:info@infiexport.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-2 border border-white/70 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-900 transition duration-300"
            >
              Email Our Export Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
