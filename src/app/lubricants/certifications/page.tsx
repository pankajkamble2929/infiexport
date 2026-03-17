import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  CheckCircle2,
  ArrowRight,
  Globe,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certified Lubricant Exporter | MSDS, TDS, COA | INFI EXPORT',
  description:
    'INFI EXPORT provides certified industrial and automotive lubricants with IEC, GST, MSDS, TDS, COA, and ISO 9001 compliance for global buyers.',
};

export default function CertificationsPage() {
  const certifications = [
    { name: 'IEC', image: '/images/certifications/dgft-logo.jpg' },
    { name: 'GST', image: '/images/certifications/gst.avif' },
    { name: 'MSDS', image: '/images/certifications/msds-logo.webp' },
    { name: 'TDS', image: '/images/certifications/tds-logo.png' },
    { name: 'COA', image: '/images/certifications/coa-logo.png' },
    { name: 'ISO 9001', image: '/images/certifications/iso-9001-logo.avif' },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-[#1A237E] text-white py-20 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E] via-[#283593] to-[#0D133D] opacity-95" />

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & Technical Compliance
          </h1>
          <p className="text-lg md:text-xl text-blue-200">
            Our lubricants meet international quality, safety, and performance
            standards with complete technical documentation for global trade.
          </p>
        </div>
      </section>

      {/* ================= CERTIFICATION GRID ================= */}
      <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center"
            >
              <div className="relative w-full h-24 mb-6">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-[#1A237E]">
                {cert.name}
              </h3>

              <div className="flex justify-center mt-3 text-blue-600 text-sm">
                <CheckCircle2 size={16} className="mr-2" />
                Verified & Export Ready
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECHNICAL DOCUMENTS ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A237E] mb-6">
            Technical Documentation Available
          </h2>
          <p className="text-gray-700 text-lg">
            We provide complete documentation required for import clearance,
            safety compliance, and product performance verification.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: 'MSDS (Material Safety Data Sheet)',
              desc: 'Ensures safe handling, storage, and transport of lubricants.',
            },
            {
              title: 'TDS (Technical Data Sheet)',
              desc: 'Detailed specifications including viscosity, performance, and application.',
            },
            {
              title: 'COA (Certificate of Analysis)',
              desc: 'Batch-specific quality report verifying product standards.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-blue-50 rounded-2xl text-center shadow-md hover:shadow-xl transition"
            >
              <FileText className="mx-auto mb-4 text-[#1A237E]" />
              <h3 className="font-semibold text-lg mb-2 text-[#1A237E]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1A237E] mb-6">
            Why Certifications Matter?
          </h2>

          <p className="text-gray-700 text-lg mb-12">
            Our certifications and technical documents ensure smooth import
            clearance, compliance with safety regulations, and confidence in
            product performance.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-2xl">
              <ShieldCheck className="mx-auto mb-4 text-[#1A237E]" />
              <h3 className="font-semibold mb-2">Safety Compliance</h3>
              <p className="text-sm text-gray-600">
                MSDS ensures safe handling and transport compliance.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl">
              <Globe className="mx-auto mb-4 text-[#1A237E]" />
              <h3 className="font-semibold mb-2">Global Trade</h3>
              <p className="text-sm text-gray-600">
                IEC & GST support smooth export documentation.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl">
              <CheckCircle2 className="mx-auto mb-4 text-[#1A237E]" />
              <h3 className="font-semibold mb-2">Performance Assurance</h3>
              <p className="text-sm text-gray-600">
                TDS & COA validate product quality and specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6 bg-[#1A237E] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Need Certified Lubricants with Full Documentation?
        </h2>

        <p className="text-blue-200 mb-10">
          Contact us to receive MSDS, TDS, COA, and complete export documents
          for your lubricant requirements.
        </p>

        <Link
          href="/lubricants/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#F4B400] text-black font-semibold rounded-lg text-lg hover:opacity-90 transition"
        >
          Request Documents / Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </>
  );
}