import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

function Footer({ onContactClick }) {
  return (
    <footer className="bg-[#030712] text-slate-400">

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Logo />

            <p className="mt-5 max-w-xs text-sm leading-6">
              Intelligent Business Growth &
              Predictive Analytics Platform
            </p>

          </div>

          {/* Product */}
          <div>

            <h3 className="mb-4 text-sm font-semibold text-white">
              Product
            </h3>

            <div className="space-y-3 text-xs">

              <a
                href="#product"
                className="block hover:text-white"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="block hover:text-white"
              >
                How It Works
              </a>

              <a
                href="#intelligence"
                className="block hover:text-white"
              >
                AI Intelligence
              </a>

              <a
                href="#pricing"
                className="block hover:text-white"
              >
                Pricing
              </a>

            </div>

          </div>

          {/* Company */}
          <div>

            <h3 className="mb-4 text-sm font-semibold text-white">
              Company
            </h3>

            <div className="space-y-3 text-xs">

              <Link
                to="/about"
                className="block hover:text-white"
              >
                About Us
              </Link>

              <a
                href="#"
                className="block hover:text-white"
              >
                Careers
              </a>

              {/* Contact Us */}
              <button
                onClick={onContactClick}
                className="block text-left hover:text-cyan-400 transition"
              >
                Contact Us
              </button>

              <a
                href="#"
                className="block hover:text-white"
              >
                Blog
              </a>

            </div>

          </div>

          {/* Resources */}
          <div>

            <h3 className="mb-4 text-sm font-semibold text-white">
              Resources
            </h3>

            <div className="space-y-3 text-xs">

              <a
                href="#"
                className="block hover:text-white"
              >
                Documentation
              </a>

              <a
                href="#"
                className="block hover:text-white"
              >
                Guides
              </a>

              <a
                href="#"
                className="block hover:text-white"
              >
                FAQs
              </a>

              <a
                href="#"
                className="block hover:text-white"
              >
                Support
              </a>

            </div>

          </div>

        </div>

        {/* Newsletter */}
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">

          <div>
            <h3 className="text-sm font-semibold text-white">
              Stay Updated
            </h3>

            <p className="mt-1 text-xs">
              Subscribe to our newsletter
            </p>
          </div>

          <div className="flex max-w-sm">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-lg border border-white/10 bg-slate-900 px-4 py-3 text-xs text-white outline-none focus:border-violet-500"
            />

            <button
              className="rounded-r-lg bg-violet-600 px-4 text-white"
            >
              <ArrowRight size={16} />
            </button>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-xs sm:flex-row">

          <p>
            © 2026 Optiora. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;