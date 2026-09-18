import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

function Footer({ onContactClick }) {
  return (
    <footer className="bg-[#030712] text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />

            <p className="mt-5 max-w-xs text-sm leading-6">
              Intelligent Business Growth &
              Predictive Analytics Platform
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Company
            </h3>

            <div className="space-y-3 text-xs">
              <Link
                to="/about"
                className="block transition hover:text-white"
              >
                About Us
              </Link>

              <a
                href="#"
                className="block transition hover:text-white"
              >
                Careers
              </a>

              <button
                onClick={onContactClick}
                className="block text-left transition hover:text-cyan-400"
              >
                Contact Us
              </button>

              <Link
                to="/blog"
                className="block transition hover:text-white"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Resources
            </h3>

            <div className="space-y-3 text-xs">
              <a
            href="/Documentation/Optiora_Documentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition hover:text-white"
>
  Documentation
</a>
             <Link
              to="/guides"
              className="block transition hover:text-white"
            >
            Guides
              </Link>

              <Link
                to="/faq"
                className="block transition hover:text-white"
              >
                FAQs
              </Link>

              <a
                href="#"
                className="block transition hover:text-white"
              >
                Support
              </a>
            </div>
          </div>

        </div>

        {/* Newsletter */}
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">

          <div>
            <h3 className="text-sm font-semibold text-white">
              Stay Updated
            </h3>

            <p className="mt-1 text-xs">
              Subscribe to our newsletter
            </p>
          </div>

          <div className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-l-lg border border-white/10 bg-slate-900 px-4 py-3 text-xs text-white outline-none placeholder:text-slate-600 focus:border-violet-500"
            />

            <button
              className="rounded-r-lg bg-violet-600 px-4 text-white transition hover:bg-violet-500"
            >
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p className="text-xs">
            © 2026 Optiora. All rights reserved.
          </p>

          {/* Right Side */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

            {/* Legal Links */}
            <div className="flex gap-6 text-xs">
              <Link
                to="/privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="transition hover:text-white"
              >
                Terms of Service
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 sm:border-l sm:border-white/10 sm:pl-6">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                <FaLinkedinIn size={15} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                <FaInstagram size={16} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                <FaGithub size={16} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;