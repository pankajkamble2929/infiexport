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

export default function QuoteModal({
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
    variety: '',
    quantity: '',
    packaging: '',
    destination: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const productOptions = ['Basmati', 'Non-Basmati'];
  const varietyOptions: { [key: string]: string[] } = {
    Basmati: ['1121 Steam', 'Pusa', 'Traditional Basmati'],
    'Non-Basmati': ['Sella', 'Raw', 'Parboiled'],
  };
  const quantityOptions = ['1 Ton', '5 Ton', '10 Ton', '20 Ton', 'Other'];
  const packagingOptions = ['50 Kg Bag', '25 Kg Bag', 'Custom Packaging'];
  const destinationOptions = [
    'Middle East',
    'Europe',
    'Asia',
    'Africa',
    'Other',
  ];

  // Validation
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
          variety: '',
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
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-6 relative animate-fade-in">
        {/* Close Button */}
        <button
          className="cursor-pointer absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {!success ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-emerald-800 text-center">
              Get a Quote
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Desktop two-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="flex flex-col gap-4">
                  {/* Name */}
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
                      className={`border rounded-lg px-10 py-3 w-full focus:ring-emerald-500 focus:border-emerald-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
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
                      className={`border rounded-lg px-10 py-3 w-full focus:ring-emerald-500 focus:border-emerald-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
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
                      className={`border rounded-lg px-10 py-3 w-full focus:ring-emerald-500 focus:border-emerald-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4">
                  {/* Product Type */}
                  <div className="relative">
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className={`cursor-pointer border rounded-lg px-4 py-3 w-full appearance-none focus:ring-emerald-500 focus:border-emerald-500 ${
                        errors.product ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Product Type*</option>
                      {productOptions.map((prod) => (
                        <option key={prod} value={prod}>
                          {prod}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                      size={20}
                    />
                    {errors.product && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.product}
                      </p>
                    )}
                  </div>

                  {/* Quantity */}
                  <div className="relative">
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className={`cursor-pointer border rounded-lg px-4 py-3 w-full appearance-none focus:ring-emerald-500 focus:border-emerald-500 ${
                        errors.quantity ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Quantity*</option>
                      {quantityOptions.map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                      size={20}
                    />
                    {errors.quantity && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.quantity}
                      </p>
                    )}
                  </div>

                  {/* Packaging */}
                  <div className="relative">
                    <select
                      name="packaging"
                      value={formData.packaging}
                      onChange={handleChange}
                      className={`cursor-pointer border rounded-lg px-4 py-3 w-full appearance-none focus:ring-emerald-500 focus:border-emerald-500 ${
                        errors.packaging ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Packaging*</option>
                      {packagingOptions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                      size={20}
                    />
                    {errors.packaging && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.packaging}
                      </p>
                    )}
                  </div>

                  {/* Destination */}
                  <div className="relative">
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={`cursor-pointer border rounded-lg px-4 py-3 w-full appearance-none focus:ring-emerald-500 focus:border-emerald-500 ${
                        errors.destination
                          ? 'border-red-500'
                          : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select Destination*</option>
                      {destinationOptions.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                      size={20}
                    />
                    {errors.destination && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.destination}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Optional Message */}
              <div className="relative mt-4">
                <MessageCircle
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional Message (optional)"
                  className="border border-gray-300 rounded-lg px-10 py-3 w-full focus:ring-emerald-500 focus:border-emerald-500 resize-none h-24"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`cursor-pointer bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 gap-4">
            <CheckCircle2
              size={48}
              className="text-emerald-500 animate-bounce"
            />
            <h3 className="text-xl font-semibold text-emerald-700">
              Thank you!
            </h3>
            <p className="text-gray-600 text-center">
              Your request has been submitted successfully.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
