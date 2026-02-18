import { Metadata } from 'next';
import { AlertTriangle, Image, Package, Lock, Mail, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer - INFI EXPORT | Rice & Agro Products Export',
  description:
    'INFI EXPORT Disclaimer for rice and agro products exports. Covers representative images, product variations, and liability limitations for website content and export services.',
};

export default function DisclaimerPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <AlertTriangle className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Disclaimer</h1>
          </div>
          <p className="text-lg text-green-100 max-w-3xl">
            The content on INFI EXPORT’s website is provided for general information purposes related to rice and agro products exports. We aim for accuracy but cannot guarantee that all information is complete, current, or applicable to every situation.
          </p>
          <p className="mt-4 text-sm text-green-100">Last Updated: February 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-14 space-y-8">
        {/* Representative Images */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Image className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold">Representative Images</h2>
          </div>
          <p className="text-gray-700">
            All images displayed on this website are for illustrative purposes only.
            Actual products, packaging, color, and appearance may vary. Please
            refer to official documentation or agreements for exact product details.
          </p>
        </div>

        {/* Product Information Accuracy */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Package className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold">Product Information Accuracy</h2>
          </div>
          <p className="text-gray-700">
            While we strive to ensure the accuracy of product descriptions, specifications, and details, INFI EXPORT does not guarantee that all information is completely accurate or up-to-date. Buyers should verify all details before entering any commercial agreements.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          </div>
          <p className="text-gray-700">
            INFI EXPORT shall not be liable for any direct, indirect, incidental, or
            consequential damages arising from the use of website information, images,
            or export-related communications. All transactions are subject to separate
            agreements and contractual obligations.
          </p>
        </div>

        {/* Future Products */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold">Future Products</h2>
          </div>
          <p className="text-gray-700">
            INFI EXPORT may expand its offerings to other agro products, fruits, or vegetables
            in the future. This Disclaimer applies to all current and future products and
            services.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow-md border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-semibold">Contact Us</h2>
          </div>
          <p className="mb-4">
            For questions regarding this Disclaimer or export services, please reach out:
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
