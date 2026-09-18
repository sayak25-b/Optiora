import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import Logo from "./Logo";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    {
      label: "Product",
      href: "#product",
    },
    {
      label: "How It Works",
      href: "#how-it-works",
    },
    {
      label: "Intelligence",
      href: "#intelligence",
    },
    /**{
      label: "Pricing",
      href: "#pricing",
    },**/
    {
      label: "About",
      href: "#about",
    },
  ];

  return (
    <nav className="absolute left-0 right-0 top-0 z-50">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}

        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-5 md:flex">

          {/* Login */}
          <Link
            to="/login"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Login
          </Link>

          {/* Get Started */}
          <Link
            to="/register"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:scale-105"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
        >
          {mobileOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="text-slate-300"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMobileOpen(false)}
              className="flex w-fit items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 font-semibold text-white"
            >
              Get Started
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;