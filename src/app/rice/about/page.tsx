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
  title: 'About INFI EXPORT | Premium Rice Exporter from India',
  description:
    'INFI EXPORT is a trusted exporter of high-quality Basmati and Non-Basmati rice from India. We ensure premium grain, reliable packaging, and global delivery for importers worldwide.',
  keywords: [
    'Rice Exporter India',
    'Basmati Rice Export',
    'Non-Basmati Rice Supplier',
    'Premium Rice Export India',
    'Bulk Rice Exporter',
  ],
  openGraph: {
    title: 'About INFI EXPORT',
    description:
      'Learn about INFI EXPORT, a premium rice exporter from India providing top-quality Basmati and Non-Basmati rice for international buyers.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-emerald-900 text-white overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 opacity-95" />

        <div className="relative max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left lg:max-w-xl">
            {/* Breadcrumb */}
            <nav className="flex justify-center lg:justify-start mb-6 text-sm text-green-200">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/rice/" className="hover:text-white transition">
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

            <p className="text-lg md:text-xl text-green-100 mb-8">
              INFI EXPORT is committed to supplying premium Basmati and
              Non-Basmati rice from India to importers worldwide. We focus on
              consistent quality, proper packaging, and reliable global delivery
              to ensure our customers receive the best rice for their business
              needs.
            </p>

            {/* Highlight Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-green-200 text-sm md:text-base mb-10">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                Quality-Assured Rice
              </div>
              <div className="flex items-center gap-2">
                <Globe size={18} />
                Worldwide Export
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                Secure Packaging
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/rice/contact/"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#F4B400] text-black font-semibold rounded-lg text-lg hover:opacity-90 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full lg:w-1/2 h-[360px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/rice/home-about.jpg"
              alt="INFI EXPORT Premium Rice Export from India"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW & MISSION ================= */}
      <section className="py-24 px-6 bg-emerald-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="relative w-full h-[360px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/rice/about-overview.png"
              alt="INFI EXPORT Company Overview"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-emerald-800 mb-6">
              Company Overview
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              INFI EXPORT is dedicated to supplying premium Basmati and
              Non-Basmati rice from India to importers, wholesalers, and food
              brands worldwide. We ensure that every grain meets international
              quality standards, from sourcing to packaging and shipping.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our focus is on maintaining consistency, reliability, and customer
              satisfaction in every export shipment, making it simple for
              businesses to receive the best rice directly from India.
            </p>

            {/* Mission */}
            <h3 className="text-3xl font-semibold text-emerald-800 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To provide high-quality Indian rice to global buyers with utmost
              reliability, ensuring premium grain, secure packaging, and timely
              delivery, while building long-lasting customer trust.
            </p>

            {/* Mission Highlights */}
            <div className="flex flex-wrap gap-6 text-green-700 text-sm md:text-base mt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                Consistent Premium Quality
              </div>
              <div className="flex items-center gap-2">
                <Globe size={18} />
                Global Export Focus
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                Reliable Packaging & Delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE INFI EXPORT ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Why Choose INFI EXPORT?
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Delivering premium Basmati and Non-Basmati rice with unmatched
            quality, secure logistics, and global reach.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {[
            {
              icon: ShieldCheck,
              title: 'Premium Quality Rice',
              desc: 'All grains meet strict international standards for aroma, length, and cooking performance.',
              color: 'bg-emerald-100 text-emerald-800',
            },
            {
              icon: PackageCheck,
              title: 'Secure Packaging',
              desc: 'Moisture-proof and export-ready packaging for safe delivery worldwide.',
              color: 'bg-emerald-50 text-emerald-900',
            },
            {
              icon: Ship,
              title: 'Timely Delivery',
              desc: 'Efficient export process ensures your orders reach on time, every time.',
              color: 'bg-green-100 text-emerald-900',
            },
            {
              icon: Globe,
              title: 'Global Export Focus',
              desc: 'Serving importers, wholesalers, and food brands across multiple continents.',
              color: 'bg-emerald-50 text-emerald-800',
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
      <section className="py-24 px-6 bg-emerald-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Our Core Values & Commitment
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Consistency, transparency, and excellence define our relationship
            with global partners.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto relative">
          {[
            {
              icon: CheckCircle2,
              title: 'Quality Assurance',
              desc: 'Every batch is carefully inspected to meet international export standards.',
            },
            {
              icon: ShieldCheck,
              title: 'Trust & Transparency',
              desc: 'Clear communication and reliable processes for smooth transactions.',
            },
            {
              icon: PackageCheck,
              title: 'Secure Packaging',
              desc: 'Export-ready, moisture-proof packaging to maintain rice quality.',
            },
            {
              icon: Globe,
              title: 'Global Reach',
              desc: 'Delivering premium rice to buyers and distributors worldwide.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-emerald-700/20 group-hover:bg-emerald-700 transition">
                  <Icon className="w-8 h-8 text-emerald-900" />
                </div>
                <div className="mt-12 text-center">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">
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
      <section className="py-24 px-6 bg--white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Certifications & Quality Standards
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Our rice meets international quality standards with globally
            recognized certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {[
            {
              icon: ShieldCheck,
              title: 'FSSAI Certified',
              desc: 'All batches are FSSAI approved for food safety and compliance.',
            },
            {
              icon: CheckCircle2,
              title: 'ISO Certified',
              desc: 'ISO standards ensure consistent premium rice for international buyers.',
            },
            {
              icon: PackageCheck,
              title: 'HACCP Standards',
              desc: 'Hygienic processing and export-ready packaging guaranteed.',
            },
            {
              icon: Globe,
              title: 'Global Compliance',
              desc: 'Internationally recognized certifications for buyer confidence.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl shadow-lg bg-emerald-50 hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-700/20 mb-5 group-hover:bg-emerald-700 transition">
                  <Icon className="w-8 h-8 text-emerald-900" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= LOGISTICS & GLOBAL REACH ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Logistics & Global Reach
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Efficient logistics and reliable delivery ensure your orders reach
            worldwide safely and on time.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {[
            {
              icon: Ship,
              title: 'Worldwide Shipping',
              desc: 'Delivering rice to importers, distributors, and brands globally.',
            },
            {
              icon: PackageCheck,
              title: 'Secure Packaging',
              desc: 'Export-ready packaging preserves quality during transit.',
            },
            {
              icon: Globe,
              title: 'Global Compliance',
              desc: 'All shipments comply with international export regulations.',
            },
            {
              icon: ArrowRight,
              title: 'Timely Delivery',
              desc: 'Orders arrive on schedule thanks to precise supply chain planning.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl shadow-lg bg-emerald-50 hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-700/20 mb-5 group-hover:bg-emerald-700 transition">
                  <Icon className="w-8 h-8 text-emerald-900" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            );
          })}
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
            Ready to Partner with a Reliable Rice Supplier?
            <span className="block text-[#F4B400] mt-3">
              Let’s Start Your Import Process Today
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-12">
            Contact INFI EXPORT for competitive pricing, export-quality rice,
            and seamless international shipping. Get personalized support for
            your bulk orders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/rice/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-2 bg-[#F4B400] text-black font-semibold rounded-xl text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              Request Bulk Price Quote
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
