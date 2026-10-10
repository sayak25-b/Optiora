
import { useState } from "react";
import { X, Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

const createCaptcha = () => ({
  num1: Math.floor(Math.random() * 10) + 1,
  num2: Math.floor(Math.random() * 10) + 1,
});

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactPanel({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialForm);
  const [captcha, setCaptcha] = useState(createCaptcha);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(captchaAnswer) !== captcha.num1 + captcha.num2) {
      setError("Incorrect answer. Please solve the math question.");
      setCaptcha(createCaptcha());
      setCaptchaAnswer("");
      return;
    }

    // UI-only submission. Connect your backend/API here to send messages.
    setSuccess(
      "Thank you for contacting Optiora! The form is validated, but message delivery is not configured yet."
    );

    setFormData(initialForm);
    setCaptchaAnswer("");
    setCaptcha(createCaptcha());
  };

  const handleClose = () => {
    setError("");
    setSuccess("");
    onClose();
  };

  if (!isOpen) return null;

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "optioraofficial@gmail.com",
      href: "mailto:optioraofficial@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 53698 21345",
      href: "tel:+915369821345",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "West Bengal, India",
    },
  ];

  return (
    <>
      {/* Background overlay */}
      <button
        type="button"
        aria-label="Close contact panel"
        onClick={handleClose}
        className="fixed inset-0 z-40 cursor-default bg-slate-950/30 backdrop-blur-sm"
      />

      {/* Contact side panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-heading"
        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l border-slate-200 bg-[#F8FAFC] shadow-2xl sm:w-[85%] lg:w-[650px]"
      >
        {/* Decorative accent */}
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-1/3 h-56 w-56 rounded-full bg-violet-100/50 blur-3xl" />

        <div className="relative min-h-full p-5 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50">
                <span className="text-xl font-bold text-cyan-700">O</span>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  Optiora<span className="text-cyan-600">.</span>
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  Intelligent Business Growth
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close contact panel"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Heading */}
          <div className="mt-9">
            <span className="section-label">
              <Mail size={14} />
              Get in touch
            </span>

            <h1
              id="contact-heading"
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl"
            >
              Let's talk about
              <span className="block text-cyan-700">
                your business.
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
              Have a question, suggestion, or want to learn more about
              Optiora? We'd love to hear from you.
            </p>
          </div>

          {/* Contact information */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              const content = (
                <>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                    <Icon size={18} />
                  </div>

                  <p className="mt-3 text-xs font-medium text-slate-500">
                    {item.label}
                  </p>

                  <p className="mt-1 break-words text-xs font-semibold leading-5 text-slate-800">
                    {item.value}
                  </p>
                </>
              );

              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-cyan-200 hover:shadow-md hover:shadow-slate-900/[0.03]"
                >
                  {item.href ? (
                    <a href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full Name <span className="text-cyan-700">*</span>
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="form-input"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address <span className="text-cyan-700">*</span>
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone Number
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Your Message <span className="text-cyan-700">*</span>
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                required
                rows={5}
                className="form-input resize-y"
              />
            </div>

            {/* Math verification */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <label
                htmlFor="contact-captcha"
                className="mb-3 block text-sm font-semibold text-slate-700"
              >
                Quick verification
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex min-h-12 items-center gap-2 rounded-xl border border-cyan-100 bg-cyan-50 px-4 text-sm font-semibold text-cyan-800">
                  What is {captcha.num1} + {captcha.num2}?
                </div>

                <input
                  id="contact-captcha"
                  type="number"
                  inputMode="numeric"
                  value={captchaAnswer}
                  onChange={(e) => {
                    setCaptchaAnswer(e.target.value);
                    setError("");
                  }}
                  placeholder="Your answer"
                  required
                  className="form-input sm:max-w-36"
                />
              </div>
            </div>

            {/* Feedback messages */}
            {error && (
              <p
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            {success && (
              <p
                role="status"
                className="rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm leading-6 text-cyan-900"
              >
                {success}
              </p>
            )}

            {/* Submit button */}
            <button type="submit" className="primary-button w-full py-3.5">
              Send Message
              <Send size={17} />
            </button>

            <p className="text-center text-xs leading-5 text-slate-500">
              Optiora — Intelligent Business Growth & Predictive Analytics
            </p>
          </form>

          {/* Bottom note */}
          <div className="mt-8 border-t border-slate-200 pt-5">
            <button
              type="button"
              onClick={handleClose}
              className="mx-auto flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-cyan-700"
            >
              Back to Optiora
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
