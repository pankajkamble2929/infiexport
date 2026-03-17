import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ISO, FSSAI, APEDA Certified Rice Exporter | INFI EXPORT',
  description:
    'INFI EXPORT holds key certifications including IEC, GST, APEDA, FSSAI, HACCP, and ISO 22000 ensuring global quality and compliance.',
};

export default function CertificationsPage() {
  const certifications = [
    { name: 'IEC', image: '/images/certifications/dgft-logo.jpg' },
    { name: 'GST', image: '/images/certifications/gst.avif' },
    { name: 'APEDA', image: '/images/certifications/apeda.png' },
    { name: 'FSSAI', image: '/images/certifications/FSSAI-logo.png' },
    { name: 'HACCP', image: '/images/certifications/haccp-logo.avif' },
    { name: 'ISO 22000', image: '/images/certifications/iso-22000-logo.avif' },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-emerald-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Certifications & Compliance
        </h1>
        <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
          We follow globally recognized standards to ensure premium quality,
          food safety, and smooth international trade.
        </p>
      </section>

      {/* ================= CERTIFICATION GRID ================= */}
      <section className="py-24 px-6 bg-emerald-50">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
            >
              <div className="relative w-full h-28 mb-6">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-emerald-800">
                {cert.name}
              </h3>

              <div className="flex justify-center mt-3 text-green-600 text-sm">
                <CheckCircle2 size={16} className="mr-2" />
                Verified & Approved
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-emerald-900 mb-6">
            Why Certifications Matter for Importers?
          </h2>

          <p className="text-gray-700 text-lg mb-12">
            Our certifications ensure that every shipment meets international
            food safety, export compliance, and quality benchmarks — giving you
            complete confidence in sourcing from INFI EXPORT.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-emerald-50 rounded-2xl">
              <ShieldCheck className="mx-auto mb-4 text-emerald-800" />
              <h3 className="font-semibold mb-2">Food Safety</h3>
              <p className="text-sm text-gray-600">
                HACCP & FSSAI ensure hygienic processing and safe consumption.
              </p>
            </div>

            <div className="p-6 bg-emerald-50 rounded-2xl">
              <Globe className="mx-auto mb-4 text-emerald-800" />
              <h3 className="font-semibold mb-2">Global Compliance</h3>
              <p className="text-sm text-gray-600">
                APEDA & IEC enable smooth international trade operations.
              </p>
            </div>

            <div className="p-6 bg-emerald-50 rounded-2xl">
              <CheckCircle2 className="mx-auto mb-4 text-emerald-800" />
              <h3 className="font-semibold mb-2">Consistent Quality</h3>
              <p className="text-sm text-gray-600">
                ISO 22000 ensures standardized quality across all shipments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="py-16 px-6 bg-emerald-900 text-white text-center">
        <p className="text-xl max-w-3xl mx-auto">
          Every shipment is backed by proper documentation, inspection, and
          globally accepted certifications — ensuring hassle-free imports.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-emerald-900 mb-6">
          Looking for Certified Rice Supplier?
        </h2>

        <p className="text-gray-700 mb-10">
          Get in touch for export-ready rice with complete documentation support.
        </p>

        <Link
          href="/rice/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#F4B400] text-black font-semibold rounded-lg text-lg hover:opacity-90 transition"
        >
          Request Documents / Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </>
  );
}