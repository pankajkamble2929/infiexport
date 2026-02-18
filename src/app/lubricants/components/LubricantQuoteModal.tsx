'use client';

import { useState } from 'react';
import {
  X,
  User,
  Mail,
  Phone,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';

export default function LubricantQuoteModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    grade: '',
    quantity: '',
    packaging: '',
    destination: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const productOptions = ['Automotive Oil', 'Industrial Oil', 'Grease'];

  const gradeOptions: { [key: string]: string[] } = {
    'Automotive Oil': [
      'Engine Oil 5W30',
      'Engine Oil 10W40',
      'Gear Oil 80W90',
      'Transmission Fluid',
    ],
    'Industrial Oil': [
      'Hydraulic Oil',
      'Compressor Oil',
      'Turbine Oil',
      'Transformer Oil',
    ],
    Grease: [
      'Lithium Grease',
      'Calcium Grease',
      'High Temperature Grease',
      'Multipurpose Grease',
    ],
  };

  const quantityOptions = [
    '200 Liters',
    '500 Liters',
    '1000 Liters',
    '5 MT',
    '10 MT',
    'Other',
  ];

  const packagingOptions = [
    '1L Bottle',
    '5L Can',
    '20L Bucket',
    '210L Drum',
    'IBC Tank',
  ];

  const destinationOptions = [
    'Middle East',
    'Africa',
    'Asia',
    'Europe',
    'South America',
    'Other',
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{7,15}$/.test(formData.phone.replace(/\D/g, '')))
      newErrors.phone = 'Invalid phone number';
    if (!formData.product) newErrors.product = 'Select product type';
    if (!formData.quantity) newErrors.quantity = 'Select quantity';
    if (!formData.packaging) newErrors.packaging = 'Select packaging';
    if (!formData.destination) newErrors.destination = 'Select destination';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const res = await fetch('/api/send-quote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error('Email sending failed');

        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          product: '',
          grade: '',
          quantity: '',
          packaging: '',
          destination: '',
          message: '',
        });

        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 2500);
      } catch (err) {
        console.error(err);
        alert('Failed to send email. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-6 relative">
        <button
          className="cursor-pointer absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {!success ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-[#1A237E] text-center">
              Get Lubricant Quote
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <User
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name*"
                      className={`border rounded-lg px-10 py-3 w-full focus:ring-[#1A237E] focus:border-[#1A237E] ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email*"
                      className={`border rounded-lg px-10 py-3 w-full focus:ring-[#1A237E] focus:border-[#1A237E] ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number*"
                      className={`border rounded-lg px-10 py-3 w-full focus:ring-[#1A237E] focus:border-[#1A237E] ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="cursor-pointer appearance-none border rounded-lg px-4 py-3 w-full focus:ring-[#1A237E] focus:border-[#1A237E]"
                    >
                      <option value="">Select Product Type*</option>
                      {productOptions.map((prod) => (
                        <option key={prod} value={prod}>
                          {prod}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-400"
                      size={20}
                    />
                  </div>

                  <div className="relative">
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="cursor-pointer appearance-none border rounded-lg px-4 py-3 w-full focus:ring-[#1A237E] focus:border-[#1A237E]"
                    >
                      <option value="">Select Quantity*</option>
                      {quantityOptions.map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-400"
                      size={20}
                    />
                  </div>

                  <div className="relative">
                    <select
                      name="packaging"
                      value={formData.packaging}
                      onChange={handleChange}
                      className="cursor-pointer appearance-none border rounded-lg px-4 py-3 w-full focus:ring-[#1A237E] focus:border-[#1A237E]"
                    >
                      <option value="">Select Packaging*</option>
                      {packagingOptions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-400"
                      size={20}
                    />
                  </div>

                  <div className="relative">
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="cursor-pointer appearance-none border rounded-lg px-4 py-3 w-full focus:ring-[#1A237E] focus:border-[#1A237E]"
                    >
                      <option value="">Select Destination*</option>
                      {destinationOptions.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-400"
                      size={20}
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <MessageCircle
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional Message (optional)"
                  className="border border-gray-300 rounded-lg px-10 py-3 w-full focus:ring-[#1A237E] focus:border-[#1A237E] resize-none h-24"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer bg-[#1A237E] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#0D154F] transition-all"
              >
                {loading ? 'Submitting...' : 'Submit Quote'}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 gap-4">
            <CheckCircle2 size={48} className="text-[#1A237E]" />
            <h3 className="text-xl font-semibold text-[#1A237E]">Thank you!</h3>
            <p className="text-gray-600 text-center">
              Your lubricant inquiry has been submitted successfully.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
