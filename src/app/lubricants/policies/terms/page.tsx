import { Metadata } from 'next';
import {
  FileText,
  Scale,
  Globe,
  Lock,
  Mail,
  Building2,
  CheckCircle2,
  Package,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions - INFI EXPORT | Lubricants & Industrial Oils',
  description:
    'INFI EXPORT Terms & Conditions for lubricants, automotive oils, industrial oils, and greases exports. Covers agreements, liability, payments, and compliance with DPDP and international export regulations.',
};

export default function TermsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A237E] to-[#0D144D] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Terms & Conditions</h1>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl">
            These Terms & Conditions govern your use of{' '}
            <strong>INFI EXPORT</strong> services for lubricants, automotive
            oils, industrial oils, and greases exports. By accessing our website
            or using our services, you agree to comply with these terms,
            applicable laws, and international export standards.
          </p>
          <p className="mt-4 text-sm text-blue-100">
            Last Updated: February 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-14 space-y-8">
        {/* Acceptance of Terms */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
          </div>
          <p className="text-gray-700">
            By accessing or using INFI EXPORT’s website and services, you accept
            these Terms & Conditions and agree to be bound by them. If you do
            not agree, please do not use our services for lubricants, oils, or
            greases.
          </p>
        </div>

        {/* Services */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Package className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Services</h2>
          </div>
          <p className="text-gray-700">
            INFI EXPORT provides international export services for lubricants,
            automotive oils, industrial oils, and greases. We may update or
            modify our services, pricing, and availability at any time without
            prior notice.
          </p>
        </div>

        {/* Agreements & Orders */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Agreements & Orders</h2>
          </div>
          <p className="text-gray-700">
            All lubricant and oil export transactions are governed by separate
            commercial agreements, purchase orders, or contracts. These Terms &
            Conditions complement but do not replace contractual obligations.
            Buyers and sellers are responsible for ensuring compliance with
            applicable laws and international trade regulations.
          </p>
        </div>

        {/* Payment & Delivery */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Payment & Delivery</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Payments should be made as per the agreed terms in the purchase
              order or contract.
            </li>
            <li>
              Delivery schedules depend on shipping, customs clearance, and
              logistics arrangements.
            </li>
            <li>
              INFI EXPORT is not liable for delays due to force majeure events,
              government regulations, or shipping issues.
            </li>
          </ul>
        </div>

        {/* Liability & Limitation */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Liability & Limitation</h2>
          </div>
          <p className="text-gray-700">
            INFI EXPORT shall not be liable for indirect, incidental, or
            consequential damages arising from the use of our services or
            products. Liability is limited to the value of the goods or services
            supplied under the specific agreement for lubricants, oils, or
            greases.
          </p>
        </div>

        {/* Third-Party Services */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Third-Party Services</h2>
          </div>
          <p className="text-gray-700">
            We may rely on third-party service providers for shipping, payment
            processing, analytics, or communication. All third parties are
            required to comply with strict privacy, data protection, and export
            regulations applicable to lubricants and oils.
          </p>
        </div>

        {/* DPDP & Compliance */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">
              Data Protection & Compliance
            </h2>
          </div>
          <p className="text-gray-700">
            All personal and business data collected in the course of lubricant
            and oil export transactions is handled in compliance with the Indian
            DPDP Rules, IT Act, and international trade standards. Users consent
            to processing of their data as described in our Privacy Policy.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow-md border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Contact Us</h2>
          </div>
          <p className="mb-4">
            For any questions regarding these Terms & Conditions, agreements, or
            compliance related to lubricants, oils, or greases, please contact
            us:
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
