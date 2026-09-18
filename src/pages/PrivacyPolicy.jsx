import {
  ShieldCheck,
  LockKeyhole,
  Database,
  Eye,
  Users,
  Cookie,
  UserCheck,
  RefreshCw,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "01",
    icon: Database,
    title: "Information We Collect",
    content:
      "We may collect information that you provide directly when you create an account, contact us, or use Optiora. This may include your name, email address, mobile number, organization information, and information entered into the platform.",
    points: [
      "Account and profile information",
      "Business and organization information",
      "Product, customer, sales and inventory data",
      "Messages and support requests",
      "Basic technical and device information",
    ],
  },
  {
    number: "02",
    icon: Eye,
    title: "How We Use Your Information",
    content:
      "We use collected information to provide, maintain, improve and personalize Optiora's services. Business data may also be processed to generate analytics, forecasts and insights requested by the user.",
    points: [
      "Provide and operate our platform",
      "Generate analytics and business insights",
      "Provide sales and demand predictions",
      "Improve platform performance and user experience",
      "Communicate important service updates",
      "Prevent misuse, fraud and security threats",
    ],
  },
  {
    number: "03",
    icon: Users,
    title: "Data Sharing & Disclosure",
    content:
      "We do not sell your personal information. We may share limited information with trusted service providers when necessary to operate our platform, provide technical services, maintain infrastructure, or comply with legal obligations.",
    points: [
      "Service providers supporting our infrastructure",
      "Analytics and technology providers where applicable",
      "Legal authorities when required by law",
      "Other parties with your explicit consent",
    ],
  },
  {
    number: "04",
    icon: LockKeyhole,
    title: "Data Security",
    content:
      "We take reasonable technical and organizational measures to protect information against unauthorized access, alteration, disclosure or destruction. However, no internet-based service can guarantee absolute security.",
    points: [
      "Secure authentication practices",
      "Access controls",
      "Protected data transmission where applicable",
      "Regular monitoring and security improvements",
    ],
  },
  {
    number: "05",
    icon: Cookie,
    title: "Cookies & Analytics",
    content:
      "Optiora may use cookies or similar technologies to maintain sessions, remember preferences, understand platform usage and improve our services. You may be able to control cookies through your browser settings.",
  },
  {
    number: "06",
    icon: UserCheck,
    title: "Your Rights",
    content:
      "Depending on applicable law, you may have rights regarding your personal information. These may include requesting access, correction or deletion of certain information.",
    points: [
      "Request access to your information",
      "Request correction of inaccurate information",
      "Request deletion where legally applicable",
      "Withdraw certain permissions or consent",
      "Contact us with privacy-related questions",
    ],
  },
  {
    number: "07",
    icon: RefreshCw,
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy when our services, technology or legal requirements change. Updated versions will be published on this page with a revised 'Last Updated' date.",
  },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      {/* Navbar */}
      <header className="border-b border-white/10 bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-cyan-400">◉</span> Optiora.
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <a href="/#product" className="transition hover:text-white">
              Features
            </a>
            <a href="/#how-it-works" className="transition hover:text-white">
              How It Works
            </a>
            <a href="/#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <Link to="/about" className="transition hover:text-white">
              About
            </Link>
            <Link to="/blog" className="transition hover:text-white">
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
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Privacy Policy
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Your Privacy
              <span className="block text-cyan-400">Matters to Us</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              At Optiora, we are committed to protecting your personal
              information and being transparent about how we collect, use and
              safeguard your data.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
              <ShieldCheck size={18} className="text-cyan-400" />
              Last updated: September 18, 2026
            </div>
          </div>

          {/* Privacy Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.03] p-3">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
                alt="Privacy and data security"
                className="h-[320px] w-full rounded-2xl object-cover opacity-80 sm:h-[400px]"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-cyan-400/20 bg-[#030712]/85 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-400/10 p-3">
                    <LockKeyhole className="text-cyan-400" />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Your Data. Your Trust.
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Security and privacy are important to us.
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
        <div className="space-y-5">
          {sections.map((section) => {
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

        {/* Trust Card */}
        <div className="mt-8 rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.04] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-cyan-400/10 p-4">
              <ShieldCheck size={32} className="text-cyan-400" />
            </div>

            <div>
              <h3 className="font-semibold text-cyan-300">
                Your Trust Drives Us
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                We are committed to keeping your information safe, secure and
                handled responsibly while you use Optiora.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.025] p-8 text-center">
          <Mail className="mx-auto text-cyan-400" size={30} />

          <h2 className="mt-4 text-2xl font-bold">
            Have a Privacy Question?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            If you have questions about this Privacy Policy or how Optiora
            handles information, please contact our team.
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
            <Link to="/privacy-policy" className="text-cyan-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
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

export default PrivacyPolicy;