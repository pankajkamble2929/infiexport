import { Metadata } from 'next';
import {
  AlertTriangle,
  Image,
  Package,
  Lock,
  Mail,
  Building2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer - INFI EXPORT | Lubricants & Industrial Oils',
  description:
    'INFI EXPORT Disclaimer for lubricants, automotive oils, industrial oils, and greases. Covers representative images, product variations, and liability limitations for website content and export services.',
};

export default function DisclaimerPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A237E] to-[#0D144D] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <AlertTriangle className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Disclaimer</h1>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl">
            The content on INFI EXPORT’s website is provided for general
            information purposes related to lubricants, automotive oils,
            industrial oils, and greases. While we strive for accuracy, we
            cannot guarantee that all information is complete, current, or
            applicable to every situation.
          </p>
          <p className="mt-4 text-sm text-blue-100">
            Last Updated: February 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-14 space-y-8">
        {/* Representative Images */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Image className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Representative Images</h2>
          </div>
          <p className="text-gray-700">
            All images on this website are for illustrative purposes only.
            Actual products, packaging, labels, and appearance may vary. Please
            refer to official product specifications and agreements for exact
            details.
          </p>
        </div>

        {/* Product Information Accuracy */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Package className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">
              Product Information Accuracy
            </h2>
          </div>
          <p className="text-gray-700">
            While we strive to provide accurate descriptions, specifications,
            and technical details for all lubricants, oils, and greases, INFI
            EXPORT does not guarantee that all information is entirely accurate
            or up-to-date. Customers should verify details before making any
            purchasing or contractual decisions.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          </div>
          <p className="text-gray-700">
            INFI EXPORT shall not be held liable for any direct, indirect,
            incidental, or consequential damages resulting from the use of
            website information, images, or product specifications. All
            transactions are governed by separate agreements and contractual
            obligations.
          </p>
        </div>

        {/* Future Products */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Future Products</h2>
          </div>
          <p className="text-gray-700">
            INFI EXPORT may expand its product offerings in the future to
            include additional automotive, industrial, and specialty lubricants.
            This Disclaimer applies to all current and future products,
            services, and website content.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow-md border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-[#1A237E]" />
            <h2 className="text-2xl font-semibold">Contact Us</h2>
          </div>
          <p className="mb-4">
            For questions regarding this Disclaimer or our lubricant products
            and export services, please contact us:
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
