
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function Footer({ onContactClick, onSupportClick }) {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { label: "About Us", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "FAQs", to: "/faq" },
  ];

  const resourceLinks = [

    { label: "Guides", to: "/guides" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/sayak25-b/Optiora",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: Linkedin,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: Instagram,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* CTA */}
        <div className="border-b border-slate-200 py-12 md:py-16">
          <div className="flex flex-col gap-7 rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-violet-50 p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3 py-1.5 text-xs font-semibold text-cyan-800">
                <Sparkles size={14} />
                Make smarter business decisions
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Ready to understand your business better?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Explore a smarter way to understand your data, predict trends,
                and discover opportunities for growth with Optiora.
              </p>
            </div>

            <Link
              to="/register"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-cyan-700"
            >
              Get Started
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Optiora logo"
                className="h-11 w-11 rounded-xl object-contain"
              />
              <div>
                <span className="block text-2xl font-bold tracking-tight text-slate-900">
                  Optiora
                </span>
                <span className="block text-xs font-medium tracking-wide text-slate-500">
                  Intelligent Business Growth
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              An intelligent business growth and predictive analytics platform
              designed to help businesses turn their data into meaningful
              insights and more informed decisions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                AI-powered insights
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                Predictive analytics
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Company</h3>

            <ul className="mt-5 space-y-4">
              {companyLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1 text-sm text-slate-600 transition hover:text-cyan-700"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onContactClick}
                  className="text-sm text-slate-600 transition hover:text-cyan-700"
                >
                  Contact Us
                </button>
              </li>
              
<li>
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSdsrzZ0UY6VmlmAbjgdOFSx7XcfLwYtXalTimn7dduxVJmfCA/viewform?usp=dialog"
    target="_blank"
    rel="noreferrer"
    className="text-sm text-slate-600 transition hover:text-cyan-700"
  >
    Give Feedback
  </a>
</li>

            </ul>
          </div>

          {/* Resources and support */}
          

          <div>
            <h3 className="text-sm font-bold text-slate-900">Resources</h3>

            

            <ul className="mt-5 space-y-4">
              <li>
  <a
    href="/Documentation/Optiora_Documentation.pdf"
    target="_blank"
    rel="noreferrer"
    className="text-sm text-slate-600 transition hover:text-cyan-700"
  >
    Documentation
  </a>
</li>
              {resourceLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-600 transition hover:text-cyan-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              

              <li>
                <button
                  type="button"
                  onClick={onSupportClick}
                  className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-cyan-700"
                >
                  <MessageCircle size={15} />
                  Support Center
                </button>
              </li>
            </ul>

            <button
              type="button"
              onClick={onContactClick}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900"
            >
              <Mail size={16} />
              Get in touch
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-slate-200 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-500">
            © {currentYear} Optiora. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              to="/privacy-policy"
              className="text-xs text-slate-500 transition hover:text-cyan-700"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-slate-500 transition hover:text-cyan-700"
            >
              Terms
            </Link>

            <button
              type="button"
              onClick={onSupportClick}
              className="text-xs text-slate-500 transition hover:text-cyan-700"
            >
              Help & Support
            </button>

            <a
              href="mailto:contact@optiora.com"
              className="inline-flex items-center gap-1 text-xs text-slate-500 transition hover:text-cyan-700"
            >
              <MapPin size={12} />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
