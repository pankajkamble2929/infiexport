import Link from 'next/link';
import Image from 'next/image';
import { Ship, Wheat, Droplet, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leading Exporter in India | INFI EXPORT Global Trade Company',
  description:
    'INFI EXPORT is a leading exporter in India delivering high-quality products to global markets with trusted logistics, strict quality standards, and long-term international partnerships.',
  authors: [{ name: 'INFI EXPORT' }],
  creator: 'INFI EXPORT',
  publisher: 'INFI EXPORT',
  metadataBase: new URL('https://infiexport.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Leading Exporter in India | INFI EXPORT',
    description:
      'INFI EXPORT is a leading exporter in India delivering high-quality products to global markets with trusted logistics, strict quality standards, and long-term international partnerships.',
    url: 'https://infiexport.com',
    siteName: 'INFI EXPORT',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leading Exporter in India | INFI EXPORT',
    description:
      'INFI EXPORT is a leading exporter in India delivering high-quality products to global markets with trusted logistics, strict quality standards, and long-term international partnerships.',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                name: 'INFI EXPORT',
                url: 'https://infiexport.com',
                logo: 'https://infiexport.com/infiexport-logo.png',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'IN',
                },
                description:
                  'INFI EXPORT is a leading exporter in India delivering high-quality products to global markets with trusted logistics, strict quality standards, and long-term international partnerships.',
              },
              {
                '@type': 'WebSite',
                name: 'INFI EXPORT',
                url: 'https://infiexport.com',
              },
            ],
          }),
        }}
      />

      <main className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* ================= Decorative Background ================= */}

        {/* Gradient Blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-emerald-300/30 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-blue-300/30 blur-2xl" />

        {/* Subtle Grid Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

        {/* ================= CONTENT WRAPPER ================= */}
        <div className="relative z-10 flex h-full flex-col justify-center px-6">
          {/* ================= HERO SECTION ================= */}
          <section className="text-center">
            <div className="mx-auto max-w-5xl">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 shadow-md backdrop-blur-xl">
                <Ship className="h-4 w-4 text-blue-600" />
                Global Export Company
              </div>

              {/* Logo */}
              <div className="mb-6 flex justify-center">
                <Image
                  src="/infiexport-logo.png"
                  alt="INFI EXPORT Logo"
                  width={240}
                  height={80}
                  priority
                  className="drop-shadow-lg"
                />
              </div>

              {/* Tagline */}
              <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
                Delivering{' '}
                <span className="font-semibold text-gray-900">
                  Premium Indian Rice
                </span>{' '}
                and{' '}
                <span className="font-semibold text-gray-900">
                  High-Performance Lubricants
                </span>{' '}
                to international markets with quality assurance, trusted
                logistics, and long-term global partnerships.
              </p>
            </div>
          </section>

          {/* ================= CATEGORY SECTION ================= */}
          <section>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
              {/* ================= RICE CARD ================= */}
              <Link href="/rice/" className="group">
                <div className="relative rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-700 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                  {/* Soft Overlay Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Subtle Radial Highlight */}
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                      <Wheat className="h-7 w-7 text-emerald-200" />
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 text-2xl font-bold text-white">
                      Rice Export Division
                    </h2>

                    {/* Description */}
                    <p className="mb-8 text-sm leading-relaxed text-emerald-100 md:text-base">
                      Premium Basmati & Non-Basmati rice varieties sourced from
                      certified Indian mills and exported worldwide.
                    </p>

                    {/* CTA Button */}
                    <div className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] px-5 py-2.5 text-sm font-semibold text-black shadow-md transition-all duration-300 hover:bg-[#e0a800] hover:shadow-lg hover:gap-3">
                      Explore Rice
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* ================= LUBRICANTS CARD ================= */}
              <Link href="/lubricants/" className="group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1a5a] via-[#1A237E] to-[#283593] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Soft Hover Overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Subtle Radial Industrial Glow */}
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-indigo-400/20 blur-2xl" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md">
                      <Droplet className="h-7 w-7 text-indigo-200" />
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 text-2xl font-bold text-white">
                      Lubricants Division
                    </h2>

                    {/* Description */}
                    <p className="mb-8 text-sm leading-relaxed text-indigo-100 md:text-base">
                      Automotive oils, industrial lubricants and grease
                      solutions engineered for durability, efficiency, and
                      global standards.
                    </p>

                    {/* CTA Button */}
                    <div className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] px-5 py-2.5 text-sm font-semibold text-black shadow-md transition-all duration-300 hover:bg-[#e0a800] hover:shadow-lg hover:gap-3">
                      Explore Lubricants
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
