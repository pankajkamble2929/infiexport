import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact INFI EXPORT | Premium Rice Exporter',
  description:
    'Get in touch with INFI EXPORT for bulk Basmati and Non-Basmati rice export inquiries. Request quotes, shipping details, and more.',
  keywords: [
    'INFI EXPORT Contact',
    'Rice Export Inquiry',
    'Basmati Rice Export Contact',
    'Non-Basmati Rice Export Contact',
    'Bulk Rice Quote',
  ],
  openGraph: {
    title: 'Contact INFI EXPORT',
    description:
      'Reach out for bulk rice export inquiries, quotes, and international shipping.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-emerald-900 text-white overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 opacity-95" />

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div className="text-center lg:text-left">
              {/* Breadcrumb */}
              <nav className="flex justify-center lg:justify-start mb-6 text-sm text-green-200">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/rice/" className="hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li className="opacity-60">/</li>
                  <li className="text-[#F4B400] font-medium">Contact</li>
                </ol>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-800 text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin size={18} />
                Reach Out to INFI EXPORT
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Contact INFI EXPORT
              </h1>
              <p className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-[#F4B400] mt-1">
                Your Premium Rice Export Partner
              </p>

              {/* Description */}
              <p className="text-lg md:text-xl text-green-100 mb-10 max-w-xl mx-auto lg:mx-0">
                Have questions about Basmati or Non-Basmati rice exports? Get in
                touch for bulk pricing, shipment details, and international
                export guidance. I am ready to assist you personally.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-3 bg-emerald-800/20 px-5 py-3 rounded-lg">
                  <Phone className="text-[#F4B400] w-5 h-5" />
                  <span>+91 79773 87942</span>
                </div>
                <div className="flex items-center gap-3 bg-emerald-800/20 px-5 py-3 rounded-lg">
                  <Mail className="text-[#F4B400] w-5 h-5" />
                  <span>info@infiexport.com</span>
                </div>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/rice/home-hero.jpg"
                alt="Contact INFI EXPORT for Rice Export"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Contact Form + Info section ================= */}
      <section className="py-24 px-6 bg-emerald-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* ================= LEFT: Contact Form ================= */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-emerald-100">
            <h2 className="text-3xl font-bold text-emerald-800 mb-6">
              Send Us a Message
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Fill out the form below for bulk rice inquiries, shipment details,
              or export assistance. I’ll personally respond to every message.
            </p>

            <ContactForm />
          </div>

          {/* ================= RIGHT: Contact Info & Map ================= */}
          <div className="space-y-10">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-100">
              <h2 className="text-3xl font-bold text-emerald-800 mb-6">
                Contact Information
              </h2>

              <div className="flex items-start gap-4 mb-4">
                <MapPin className="text-emerald-700 w-6 h-6 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Address</p>
                  <p className="text-gray-600 text-sm">
                    INFI EXPORT, Mumbai, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <Phone className="text-emerald-700 w-6 h-6 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Phone</p>
                  <p className="text-gray-600 text-sm">+91 79773 87942</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-emerald-700 w-6 h-6 mt-1" />
                <div>
                  <p className="text-gray-700 font-medium">Email</p>
                  <p className="text-gray-600 text-sm">info@infiexport.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            {/* ================= LOCATION MAP ================= */}
            <section className="py-2 px-6 bg-emerald-50">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60218.10587019838!2d72.798138!3d19.081183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d2b6a5b11%3A0x7b7f7348d8c49dc1!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="rounded-3xl"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* ================= BULK QUOTE CTA ================= */}
      <section className="py-24 px-6 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 opacity-90" />

        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Import Premium Rice?
            <span className="block text-[#F4B400] mt-3">
              Request Your Bulk Quote Today
            </span>
          </h2>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto mb-10">
            Get competitive pricing and reliable international shipping for
            Basmati and Non-Basmati rice. I personally ensure your order is
            handled efficiently.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="mailto:info@infiexport.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-2 border border-white/70 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-900 transition duration-300"
            >
              Email Our Export Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
