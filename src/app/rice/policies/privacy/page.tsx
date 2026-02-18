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
  title: 'Privacy Policy - INFI EXPORT | Rice & Agro Products Export',
  description:
    'INFI EXPORT Privacy Policy for rice and agro products exports. We prioritize your data protection and compliance with DPDP and international export business standards.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <ShieldCheck className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-lg text-green-100 max-w-3xl">
            At <strong>INFI EXPORT</strong>, we are committed to protecting your
            personal data and maintaining transparency in how we collect, use,
            and safeguard your information in compliance with Indian DPDP laws
            and international export standards.
          </p>
          <p className="mt-4 text-sm text-green-100">
            Last Updated: February 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-14 space-y-8">
        {/* Information We Collect */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold">Information We Collect</h2>
          </div>
          <p className="text-gray-700">
            We collect personal and business information such as your name,
            email address, phone number, company name, shipping details, and
            inquiry information when voluntarily submitted via our website,
            email, or communication forms.
          </p>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold">
              How We Use Your Information
            </h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Respond to inquiries and provide export services.</li>
            <li>Process orders, shipping, and business transactions.</li>
            <li>Improve website functionality and customer experience.</li>
            <li>
              Send important updates or regulatory information (with consent).
            </li>
            <li>
              Comply with Indian DPDP laws and international trade regulations.
            </li>
          </ul>
        </div>

        {/* Data Protection */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold">
              Data Protection & Compliance
            </h2>
          </div>
          <p className="text-gray-700">
            We implement appropriate technical and organizational safeguards to
            protect your data against unauthorized access, alteration,
            disclosure, or destruction. All personal data handling complies with
            Indian DPDP Rules, the IT Act, and international export standards.
          </p>
        </div>

        {/* Third-Party Services */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold">Third-Party Services</h2>
          </div>
          <p className="text-gray-700">
            We may engage trusted third-party service providers for analytics,
            communication, logistics, or payment processing. These providers
            process information only as necessary and are required to maintain
            strict privacy and data protection standards.
          </p>
        </div>

        {/* Cookies */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold">
              Cookies & Tracking Technologies
            </h2>
          </div>
          <p className="text-gray-700">
            Our website uses cookies and similar technologies to enhance user
            experience and analyze website performance. You may control or
            disable cookies through your browser settings; however, some
            features may not function properly if disabled.
          </p>
        </div>

        {/* Agreements */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold">
              Agreements & Export Policy
            </h2>
          </div>
          <p className="text-gray-700">
            All export transactions are governed by separate commercial
            agreements or purchase orders. This Privacy Policy complements but
            does not replace contractual terms related to export compliance and
            business obligations.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow-md border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold">Contact Us</h2>
          </div>
          <p className="mb-4">
            If you have questions regarding this Privacy Policy or data
            protection practices, please reach out:
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
