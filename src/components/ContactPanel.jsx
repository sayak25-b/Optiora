import { useState } from "react";
import { X, Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPanel({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Human verification numbers
  const [captcha, setCaptcha] = useState({
    num1: Math.floor(Math.random() * 10) + 1,
    num2: Math.floor(Math.random() * 10) + 1,
  });

  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check human verification
    const correctAnswer = captcha.num1 + captcha.num2;

    if (Number(captchaAnswer) !== correctAnswer) {
      alert("Incorrect answer. Please solve the math question correctly.");
      return;
    }

    alert("Thank you! Your message has been submitted.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Reset captcha
    setCaptchaAnswer("");

    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1,
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Background Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      />

      {/* Contact Side Panel */}
      <div className="fixed right-0 top-0 z-50 h-full w-full overflow-y-auto border-l border-white/10 bg-[#030712] shadow-2xl sm:w-[75%] lg:w-[50%]">

        {/* Glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative min-h-full p-6 sm:p-8 lg:p-10">

          {/* Header */}
          <div className="flex items-start justify-between">

            <div className="flex items-center gap-3">

              {/* Logo */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                <span className="text-xl font-bold text-cyan-400">
                  O
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Optiora<span className="text-cyan-400">.</span>
                </h2>

                <p className="text-xs text-gray-500">
                  Intelligent Business Growth
                </p>
              </div>

            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <X size={20} />
            </button>

          </div>

          {/* Contact Heading */}
          <div className="mt-12">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Get In Touch
            </p>

            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Let's talk about your business.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
              Have a question, suggestion, or want to learn more about
              Optiora? Send us a message and our team will get back to you.
            </p>

          </div>

          {/* Contact Information */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">

            {/* Email */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Mail size={18} className="text-cyan-400" />

              <p className="mt-3 text-xs text-gray-500">
                Email
              </p>

              <p className="mt-1 text-xs text-gray-300">
                hello@optiora.com
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Phone size={18} className="text-cyan-400" />

              <p className="mt-3 text-xs text-gray-500">
                Phone
              </p>

              <p className="mt-1 text-xs text-gray-300">
                +91 00000 00000
              </p>
            </div>

            {/* Location */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <MapPin size={18} className="text-cyan-400" />

              <p className="mt-3 text-xs text-gray-500">
                Location
              </p>

              <p className="mt-1 text-xs text-gray-300">
                India
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50 focus:bg-white/[0.06]"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50 focus:bg-white/[0.06]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50 focus:bg-white/[0.06]"
                />
              </div>

            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                required
                rows="5"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50 focus:bg-white/[0.06]"
              />
            </div>

            {/* Human Verification */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Answer This Question
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                {/* Math Question */}
                <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-3 text-sm font-semibold text-cyan-400">
                  What is {captcha.num1} + {captcha.num2}?
                </div>

                {/* Answer */}
                <input
                  type="number"
                  value={captchaAnswer}
                  onChange={(e) => setCaptchaAnswer(e.target.value)}
                  placeholder="Your answer"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50 focus:bg-white/[0.06] sm:w-36"
                />

              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Send Message
              <Send size={17} />
            </button>

          </form>

          {/* Bottom Text */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-center text-xs text-gray-600">
              Optiora — Intelligent Business Growth & Predictive Analytics
            </p>
          </div>

        </div>
      </div>
    </>
  );
}