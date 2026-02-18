import Image from 'next/image';
import Link from 'next/link';
import {
  Globe,
  ShieldCheck,
  PackageCheck,
  Ship,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About INFI EXPORT | Premium Lubricants Exporter from India',
  description:
    'INFI EXPORT is a trusted exporter of high-quality industrial and automotive lubricants from India, providing superior greases, oils, and specialty lubricants with reliable global delivery.',
  keywords: [
    'Lubricants Exporter India',
    'Industrial Grease Export',
    'Automotive Oil Supplier',
    'Bulk Lubricants Export India',
    'Premium Grease & Oil Exporter',
  ],
  openGraph: {
    title: 'About INFI EXPORT',
    description:
      'Learn about INFI EXPORT, a leading exporter of industrial and automotive lubricants from India offering high-quality greases and oils for global buyers.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#1A237E] text-white overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] via-[#283593] to-[#0D133D] opacity-95" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left lg:max-w-xl">
            {/* Breadcrumb */}
            <nav className="flex justify-center lg:justify-start mb-6 text-sm text-blue-200">
              <ol className="flex items-center gap-2">
                <li>
                  <Link
                    href="/lubricants/"
                    className="hover:text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li className="opacity-60">/</li>
                <li className="text-[#F4B400] font-medium">About</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              About INFI EXPORT
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8">
              INFI EXPORT is committed to supplying premium industrial and
              automotive lubricants, including greases and oils, from India to
              global buyers. We focus on superior quality, secure packaging, and
              timely delivery to meet international standards and customer
              expectations.
            </p>

            {/* Highlight Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-blue-200 text-sm md:text-base mb-10">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                Quality-Assured Lubricants
              </div>
              <div className="flex items-center gap-2">
                <Globe size={18} />
                Worldwide Export
              </div>
              <div className="flex items-center gap-2">
                <PackageCheck size={18} />
                Secure Bulk Packaging
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/lubricants/contact/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#F4B400] text-black font-semibold rounded-lg text-lg hover:opacity-90 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full lg:w-1/2 h-[360px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/lubricants/home-about.jpg"
              alt="INFI EXPORT Premium Industrial & Automotive Lubricants from India"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW & MISSION ================= */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="relative w-full h-[360px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/lubricants/about-hero.jpg"
              alt="INFI EXPORT Lubricants Company Overview"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-[#1A237E] mb-6">
              Company Overview
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              INFI EXPORT is a leading exporter of high-quality industrial and
              automotive lubricants from India, including premium greases,
              engine oils, and specialty lubricants. We serve importers,
              distributors, and manufacturers worldwide with products that meet
              international performance standards.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our focus is on delivering consistent quality, secure packaging,
              and reliable global shipping, ensuring that businesses receive
              superior lubricants ready for industrial or automotive use.
            </p>

            {/* Mission */}
            <h3 className="text-3xl font-semibold text-[#1A237E] mb-4">
              Our Mission
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To supply premium Indian lubricants to international buyers with
              complete reliability, ensuring top-notch performance, safe
              packaging, and timely delivery, while fostering trust and
              long-term partnerships.
            </p>

            {/* Mission Highlights */}
            <div className="flex flex-wrap gap-6 text-[#1A237E] text-sm md:text-base mt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                Consistent Premium Quality
              </div>
              <div className="flex items-center gap-2">
                <Globe size={18} />
                Global Export Reach
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                Secure Packaging & Timely Delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE INFI EXPORT ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A237E] mb-4">
            Why Choose INFI EXPORT?
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Delivering premium automotive and industrial lubricants with
            unmatched performance, secure logistics, and global reach.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {[
            {
              icon: ShieldCheck,
              title: 'Premium Quality Lubricants',
              desc: 'All products meet international standards for performance, viscosity, and engine protection.',
              color: 'bg-blue-100 text-[#1A237E]',
            },
            {
              icon: PackageCheck,
              title: 'Secure Packaging',
              desc: 'Leak-proof and export-ready packaging ensures safe delivery to any destination.',
              color: 'bg-blue-50 text-[#1A237E]',
            },
            {
              icon: Ship,
              title: 'Timely Delivery',
              desc: 'Efficient export and logistics processes ensure on-time shipment worldwide.',
              color: 'bg-blue-100 text-[#1A237E]',
            },
            {
              icon: Globe,
              title: 'Global Export Focus',
              desc: 'Serving importers, distributors, and industries across multiple continents.',
              color: 'bg-blue-50 text-[#1A237E]',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 ${item.color}`}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mb-5 group-hover:bg-white/30 transition">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= OUR CORE VALUES & COMMITMENT ================= */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A237E] mb-4">
            Our Core Values & Commitment
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Consistency, reliability, and excellence define our relationship
            with global lubricant partners.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto relative">
          {[
            {
              icon: CheckCircle2,
              title: 'Quality Assurance',
              desc: 'Every batch of lubricants undergoes strict testing to meet international performance and export standards.',
            },
            {
              icon: ShieldCheck,
              title: 'Trust & Transparency',
              desc: 'Clear communication, reliable processes, and technical support for smooth transactions worldwide.',
            },
            {
              icon: PackageCheck,
              title: 'Secure Packaging',
              desc: 'Leak-proof, export-ready packaging to preserve lubricant integrity during shipment.',
            },
            {
              icon: Globe,
              title: 'Global Reach',
              desc: 'Delivering premium automotive and industrial lubricants to importers, distributors, and industries across the world.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-[#1A237E]/20 group-hover:bg-[#1A237E] transition">
                  <Icon className="w-8 h-8 text-[#1A237E]" />
                </div>
                <div className="mt-12 text-center">
                  <h3 className="text-xl font-semibold text-[#1A237E] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CERTIFICATIONS & QUALITY STANDARDS ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A237E] mb-4">
            Certifications & Quality Standards
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our automotive and industrial lubricants meet international quality
            standards and carry globally recognized certifications for
            performance and safety.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {[
            {
              icon: ShieldCheck,
              title: 'ISO Certified',
              desc: 'Lubricants are manufactured under ISO standards ensuring consistent high performance and reliability.',
            },
            {
              icon: CheckCircle2,
              title: 'API & SAE Standards',
              desc: 'Formulated to meet API and SAE classifications for automotive and industrial applications.',
            },
            {
              icon: PackageCheck,
              title: 'UN & Export Compliance',
              desc: 'Packaging adheres to international shipping regulations for safe and leak-proof transport.',
            },
            {
              icon: Globe,
              title: 'Global Recognition',
              desc: 'Certifications trusted by international buyers for safety, quality, and export readiness.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl shadow-lg bg-blue-50 hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1A237E]/20 mb-5 group-hover:bg-[#1A237E] transition">
                  <Icon className="w-8 h-8 text-[#1A237E]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A237E] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= LOGISTICS & GLOBAL REACH ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A237E] mb-4">
            Logistics & Global Reach
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Efficient logistics and secure delivery ensure your lubricant
            shipments reach destinations worldwide safely and on time.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {[
            {
              icon: Ship,
              title: 'Worldwide Shipping',
              desc: 'Delivering automotive and industrial lubricants to distributors, service centers, and manufacturers globally.',
            },
            {
              icon: PackageCheck,
              title: 'Secure Packaging',
              desc: 'Leak-proof, export-ready packaging to maintain product integrity during transit.',
            },
            {
              icon: Globe,
              title: 'Global Compliance',
              desc: 'All shipments comply with international shipping and safety regulations for lubricants.',
            },
            {
              icon: ArrowRight,
              title: 'Timely Delivery',
              desc: 'Optimized supply chain ensures your orders arrive on schedule, every time.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl shadow-lg bg-blue-50 hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1A237E]/20 mb-5 group-hover:bg-[#1A237E] transition">
                  <Icon className="w-8 h-8 text-[#1A237E]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A237E] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FINAL CTA – GET IN TOUCH ================= */}
      <section className="relative py-28 px-6 bg-[#1A237E] text-white overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] via-blue-900 to-blue-800 opacity-90" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Small Tagline */}
          <div className="inline-flex items-center gap-2 bg-blue-900 text-blue-200 px-5 py-2 rounded-full text-sm font-medium mb-8">
            <Globe size={16} />
            Supplying Premium Lubricants Worldwide
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Ready to Partner with a Reliable Lubricant Supplier?
            <span className="block text-[#F4B400] mt-3">
              Get High-Quality Automotive & Industrial Oils Today
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-12">
            Contact us for competitive pricing, export-quality lubricants, and
            seamless international shipping. Receive expert support for bulk
            orders, custom packaging, and safe delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/lubricants/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-3 bg-[#F4B400] text-black font-semibold rounded-xl text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              Request Bulk Quote
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="mailto:info@infiexport.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-3 border border-white/70 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#1A237E] transition duration-300"
            >
              Email Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
