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
  title: '1121 Steam Basmati Rice Exporter | Premium Long Grain Supplier',
  description:
    'Leading exporter of 1121 Steam Basmati Rice with 8.3mm+ grain length, low moisture, and export-grade quality. Bulk supply available with FOB shipping from India.',
  keywords: [
    '1121 Steam Basmati Rice Exporter',
    '1121 Steam Rice Supplier',
    'Long Grain Basmati Rice Export',
    'Indian Basmati Rice FOB',
    'Bulk Basmati Rice Supplier',
  ],
  openGraph: {
    title: '1121 Steam Basmati Rice Exporter',
    description:
      'Premium export-quality 1121 Steam Basmati Rice with long grain and global bulk supply.',
    type: 'website',
  },
};

export default function Steam1121Page() {
  return (
    <>
      {/* ================= 1121 STEAM BASMATI RICE HERO ================= */}
      <section className="relative bg-emerald-900 text-white overflow-hidden">
        {/* Background Gradient */}
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
                  <li className="text-[#F4B400] font-medium">1121 Steam</li>
                </ol>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-800 text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Wheat size={18} />
                Premium Long Grain Export Quality
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                1121 Steam Basmati Rice
              </h1>

              <p className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#F4B400] mt-3">
                Extra Long Grain, High Aroma, Global Export
              </p>

              {/* Description */}
              <p className="text-lg md:text-xl text-green-100 mb-8 max-w-xl mx-auto lg:mx-0">
                INFI EXPORT supplies premium 1121 Steam Basmati Rice known for
                its exceptional grain length, rich aroma, non-sticky texture,
                and superior cooking performance. Ideal for bulk importers,
                distributors, and international food brands.
              </p>

              {/* Key Specifications */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-green-200 text-sm md:text-base mb-10">
                <div className="flex items-center gap-2">
                  <Ruler size={18} />
                  8.30+ mm Grain Length
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

                <a
                  href="#specifications"
                  className="flex items-center justify-center gap-2 border border-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-900 transition"
                >
                  View Specifications
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative w-full h-[420px] lg:h-[540px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/rice/basmati/1121-basmati-steam-rice.jpg"
                alt="1121 Steam Basmati Rice Long Grain Export Quality"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              {/* Floating Info Card */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <p className="text-sm text-green-200">Export Grade</p>
                <p className="text-xl font-semibold text-white">
                  Premium 1121 Steam Quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT OVERVIEW + SPECIFICATIONS ================= */}
      <section className="py-24 px-6 bg-emerald-50" id="specifications">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* ================= LEFT SIDE – PRODUCT OVERVIEW ================= */}
          <div>
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">
              1121 Steam Basmati Rice Overview
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              1121 Steam Basmati Rice is the premium choice for global
              importers, wholesalers, and food brands. Known for its extra-long
              grain, rich aroma, and consistent cooking performance, it delivers
              superior plate presentation and excellent elongation after
              cooking.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Extra Long Grain',
                  desc: '8.3mm+ average grain length with excellent elongation after cooking.',
                },
                {
                  title: 'Premium Aroma',
                  desc: 'Naturally aromatic basmati with authentic Indian flavor.',
                },
                {
                  title: 'Export Grade Quality',
                  desc: 'Moisture controlled and low broken percentage for international standards.',
                },
                {
                  title: 'Bulk Supply Ready',
                  desc: 'Flexible packaging options for large-scale global buyers.',
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

          {/* ================= RIGHT SIDE – KEY SPECIFICATIONS ================= */}
          <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-10">
            <h2 className="text-3xl font-bold text-emerald-800 mb-8">
              Key Specifications
            </h2>

            <div className="space-y-6">
              {[
                { label: 'Average Grain Length', value: '8.3mm+' },
                { label: 'Moisture Content', value: 'Max 12-13%' },
                { label: 'Broken Percentage', value: '1% / 2% / 5% Options' },
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

            {/* CTA */}
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
          {/* ================= SECTION HEADER ================= */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">
              Our Supply & Export Process
            </h2>
            <p className="text-gray-600 text-lg">
              From certified sourcing to global delivery, we maintain strict
              quality control and international export standards at every stage.
            </p>
          </div>

          {/* ================= PROCESS STEPS ================= */}
          <div className="relative grid md:grid-cols-3 gap-10">
            {/* Vertical Line (Desktop) */}
            <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-1 h-[70%] bg-emerald-100"></div>

            {[
              {
                icon: ShieldCheck,
                title: 'Certified Mills & Sourcing',
                desc: 'We procure 1121 Steam Basmati Rice from trusted, export-certified mills ensuring purity, grain length, and moisture compliance.',
              },
              {
                icon: PackageCheck,
                title: 'Quality Inspection & Packaging',
                desc: 'Each batch undergoes strict inspection before bulk or private-label packaging tailored to international buyer specifications.',
              },
              {
                icon: Ship,
                title: 'Container Loading & Global Shipping',
                desc: 'Efficient container loading, documentation, and international freight forwarding ensure timely worldwide delivery.',
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-emerald-50 p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300"
                >
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {idx + 1}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center md:justify-start mt-6 mb-6">
                    <div className="w-14 h-14 rounded-full bg-emerald-800/10 flex items-center justify-center">
                      <Icon className="text-emerald-800" size={28} />
                    </div>
                  </div>

                  {/* Content */}
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

      {/* ================= PREMIUM FINAL CTA ================= */}
      <section className="relative py-28 px-6 bg-emerald-900 text-white overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 opacity-95" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Small Tagline */}
          <div className="inline-flex items-center gap-2 bg-emerald-800 text-green-200 px-5 py-2 rounded-full text-sm font-medium mb-8">
            <Globe size={16} />
            Supplying 1121 Steam Basmati Rice Worldwide
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Looking for a Trusted Rice Export Partner?
            <span className="block text-[#F4B400] mt-3">
              Let’s Start Your Import Process Today
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-10">
            Partner with INFI EXPORT for premium 1121 Steam Basmati Rice.
            Competitive bulk pricing, verified export quality, and reliable
            international shipping you can depend on.
          </p>

          {/* Highlight Points */}
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

          {/* CTA Buttons */}
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
