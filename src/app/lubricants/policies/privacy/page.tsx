import { Metadata } from 'next';
import {
  ShieldCheck,
  Database,
  FileText,
  Lock,
  Globe,
  Cookie,
  Scale,
  Mail,
  Building2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - INFI EXPORT | Lubricants & Industrial Oils',
  description:
    'INFI EXPORT Privacy Policy for lubricants, automotive oils, industrial oils, and greases. We prioritize your data protection and comply with DPDP and international export business standards.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A237E] to-[#0D144D] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl">
            At <strong>INFI EXPORT</strong>, we are committed to protecting your
            personal and business data and maintaining transparency in how we
            collect, use, and safeguard information related to lubricants,
            automotive oils, industrial oils, and greases in compliance with
            Indian DPDP laws and international export standards.
          </p>
          <p className="mt-4 text-sm text-blue-100">
            Last Updated: February 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-14 space-y-8">
        {/* Information We Collect */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
          </div>
          <p className="text-gray-700">
            We collect personal and business information such as your name,
            email address, phone number, company name, shipping details, and
            product inquiries when voluntarily submitted via our website, email,
            or contact forms for lubricants, oils, and grease products.
          </p>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">
              How We Use Your Information
            </h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Respond to inquiries and provide lubricant and oil export
              services.
            </li>
            <li>Process orders, shipments, and business transactions.</li>
            <li>Improve website functionality and customer experience.</li>
            <li>
              Send important updates, product information, or regulatory notices
              (with consent).
            </li>
            <li>
              Comply with Indian DPDP laws and international trade regulations.
            </li>
          </ul>
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">
              Data Protection & Compliance
            </h2>
          </div>
          <p className="text-gray-700">
            We implement appropriate technical and organizational safeguards to
            protect your data against unauthorized access, alteration,
            disclosure, or destruction. All personal data handling complies with
            Indian DPDP Rules, the IT Act, and international export standards
            applicable to lubricants, oils, and industrial grease exports.
          </p>
        </div>

        {/* Third-Party Services */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Third-Party Services</h2>
          </div>
          <p className="text-gray-700">
            We may use trusted third-party service providers for analytics,
            communication, logistics, or payment processing related to our
            lubricants and oils. These providers process information only as
            necessary and must adhere to strict privacy and data protection
            standards.
          </p>
        </div>

        {/* Cookies */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">
              Cookies & Tracking Technologies
            </h2>
          </div>
          <p className="text-gray-700">
            Our website uses cookies and similar technologies to enhance user
            experience, track performance, and improve our lubricant export
            services. You may control or disable cookies via your browser
            settings; some features may not function fully if cookies are
            disabled.
          </p>
        </div>

        {/* Agreements */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">
              Agreements & Export Policy
            </h2>
          </div>
          <p className="text-gray-700">
            All lubricant and oil export transactions are governed by separate
            commercial agreements or purchase orders. This Privacy Policy
            complements but does not replace contractual terms related to export
            compliance and business obligations.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow-md border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Contact Us</h2>
          </div>
          <p className="mb-4">
            If you have questions regarding this Privacy Policy or data
            protection practices for lubricants and oils, please reach out:
          </p>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Email:</strong> info@infiexport.com
            </p>
            <p className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Mumbai, Maharashtra, India
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
