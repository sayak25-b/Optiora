import {
  FileText,
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  Copyright,
  AlertTriangle,
  Scale,
  RefreshCw,
  Mail,
  ArrowLeft,
  CreditCard,
} from "lucide-react";
import { Link } from "react-router-dom";

const termsSections = [
  {
    number: "01",
    icon: CheckCircle2,
    title: "Acceptance of Terms",
    content:
      "By creating an account, accessing or using Optiora, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use our services.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Account & User Responsibilities",
    content:
      "You are responsible for providing accurate information when creating your account and for keeping your login credentials confidential. You are also responsible for activities carried out through your account.",
    points: [
      "Provide accurate registration information",
      "Maintain the confidentiality of your password",
      "Notify us of unauthorized account access",
      "Use the platform only for lawful purposes",
    ],
  },
  {
    number: "03",
    icon: FileText,
    title: "Use of Our Services",
    content:
      "Optiora provides business analytics, dashboards, predictive insights and related functionality. Features may change or be improved over time as the platform develops.",
    points: [
      "Use Optiora for legitimate business purposes",
      "Do not attempt to disrupt or damage the platform",
      "Do not access another user's account without authorization",
      "Do not use the platform for unlawful activities",
    ],
  },
  {
    number: "04",
    icon: Copyright,
    title: "Intellectual Property",
    content:
      "The Optiora name, branding, interface, software, visual design and original content are protected by applicable intellectual property laws. You may not copy, modify, distribute or reproduce protected parts of the platform without appropriate permission.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Your Business Data",
    content:
      "You retain responsibility for the business information and data that you enter into Optiora. You should ensure that you have the necessary rights and permissions to provide such information to the platform.",
    points: [
      "You are responsible for the accuracy of your data",
      "You should maintain appropriate backups",
      "You must have permission to upload third-party information",
      "You should avoid entering information that you are not authorized to use",
    ],
  },
  {
    number: "06",
    icon: AlertTriangle,
    title: "AI & Predictive Insights",
    content:
      "Optiora may provide forecasts, predictions, recommendations and other analytical outputs using statistical or machine-learning techniques. These outputs are intended to support decision-making and should not be treated as guaranteed results.",
    points: [
      "Predictions are estimates based on available data",
      "Results may change as new information becomes available",
      "Users should review insights before making important decisions",
      "Optiora does not guarantee a particular business outcome",
    ],
  },
  {
    number: "07",
    icon: CreditCard,
    title: "Trials, Subscriptions & Payments",
    content:
      "Certain Optiora features may be offered through trials or paid subscription plans. Pricing, billing periods, trial conditions and available features will be displayed before purchase or activation. Any commercial payment and refund policy should be specified by Optiora before public launch.",
  },
  {
    number: "08",
    icon: Scale,
    title: "Disclaimer & Limitation of Liability",
    content:
      "Optiora is provided to help users understand and analyze business information. To the extent permitted by applicable law, we do not guarantee uninterrupted availability, absolute accuracy of predictions, or specific business results from using the platform.",
  },
  {
    number: "09",
    icon: AlertTriangle,
    title: "Prohibited Activities",
    content:
      "Users must not misuse the platform or attempt to interfere with its operation.",
    points: [
      "Attempt to gain unauthorized access",
      "Upload malicious software or harmful code",
      "Reverse engineer protected parts of the platform where prohibited",
      "Use Optiora to violate applicable laws",
      "Abuse or disrupt platform infrastructure",
    ],
  },
  {
    number: "10",
    icon: RefreshCw,
    title: "Termination",
    content:
      "We may suspend or terminate access where necessary, including in cases of serious misuse, security risks, unlawful activity or violation of these Terms. Users may also stop using the service at any time.",
  },
  {
    number: "11",
    icon: FileText,
    title: "Changes to These Terms",
    content:
      "We may update these Terms & Conditions from time to time. Updated terms will be published on this page with a revised date. Continued use of Optiora after an update may constitute acceptance of the updated terms where legally applicable.",
  },
];

function Terms() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      {/* Navbar */}
      <header className="border-b border-white/10 bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-cyan-400">◉</span> Optiora.
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <a href="/#product" className="hover:text-white">
              Features
            </a>
            <a href="/#how-it-works" className="hover:text-white">
              How It Works
            </a>
            <a href="/#pricing" className="hover:text-white">
              Pricing
            </a>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>
          </nav>

          <Link
            to="/"
            className="rounded-full border border-cyan-400/60 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/10"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute right-1/4 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Terms & Conditions
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Terms &
              <span className="block text-cyan-400">Conditions</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Please read these terms carefully before accessing or using
              Optiora and its services.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
              <FileText size={18} className="text-cyan-400" />
              Last updated: September 18, 2026
            </div>
          </div>

          {/* Terms Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.03] p-3">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
                alt="Terms and conditions document"
                className="h-[320px] w-full rounded-2xl object-cover opacity-80 sm:h-[400px]"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-cyan-400/20 bg-[#030712]/85 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-400/10 p-3">
                    <Scale className="text-cyan-400" />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Clear. Fair. Transparent.
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Understanding the rules helps everyone use Optiora
                      responsibly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-sm leading-7 text-slate-400">
          By accessing or using Optiora, you acknowledge that you have read
          and understood these Terms & Conditions. These terms are intended to
          describe the general rules governing use of the platform.
        </div>

        <div className="space-y-5">
          {termsSections.map((section) => {
            const Icon = section.icon;

            return (
              <section
                key={section.number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-400/20 sm:p-8"
              >
                <div className="flex gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-[#030712]">
                    {section.number}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="text-cyan-400" />

                      <h2 className="text-xl font-semibold text-white">
                        {section.title}
                      </h2>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {section.content}
                    </p>

                    {section.points && (
                      <ul className="mt-4 space-y-2">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm text-slate-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Agreement Card */}
        <div className="mt-8 rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.04] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-cyan-400/10 p-4">
              <ShieldCheck size={32} className="text-cyan-400" />
            </div>

            <div>
              <h3 className="font-semibold text-cyan-300">
                Let’s Build a Better Future Together
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                By using Optiora responsibly, you help us create a safer,
                smarter and more useful business analytics platform.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center">
          <Mail className="mx-auto text-cyan-400" size={30} />

          <h2 className="mt-4 text-2xl font-bold">
            Questions About These Terms?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            If you have questions about these Terms & Conditions, please
            contact the Optiora team.
          </p>

          <a
            href="mailto:hello@optiora.com"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            hello@optiora.com
          </a>
        </div>

        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
        >
          <ArrowLeft size={16} />
          Back to Optiora
        </Link>
      </main>

      <LegalFooter />
    </div>
  );
}

function LegalFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#02050c]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <div>
            <div className="text-lg font-bold">
              <span className="text-cyan-400">◉</span> Optiora.
            </div>

            <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
              Intelligent Business Growth & Predictive Analytics Platform
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500">
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>

            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>

            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/terms" className="text-cyan-400">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-600">
          © 2026 Optiora. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Terms;