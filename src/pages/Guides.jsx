import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Home,
  Info,
  Lightbulb,
  LineChart,
  Package,
  Search,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

function SalesDashboardVisual() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#07111f] p-4 shadow-2xl shadow-cyan-500/5 sm:p-5">

      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-[90px]" />

      {/* Dashboard Header */}
      <div className="relative mb-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-slate-500">Optiora</p>
          <h3 className="text-sm font-semibold text-white">
            Sales Analytics
          </h3>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] text-slate-400">
          Jan 1 – Mar 31
        </div>
      </div>

      {/* Metrics */}
      <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-[9px] text-slate-500">Total Sales</p>
          <p className="mt-1 text-lg font-bold text-white">
            ₹24,680
          </p>
          <p className="mt-1 text-[9px] text-cyan-400">
            ↑ 12.5%
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-[9px] text-slate-500">Total Orders</p>
          <p className="mt-1 text-lg font-bold text-white">
            1,248
          </p>
          <p className="mt-1 text-[9px] text-cyan-400">
            ↑ 8.2%
          </p>
        </div>

        <div className="hidden rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:block">
          <p className="text-[9px] text-slate-500">
            Avg. Order Value
          </p>
          <p className="mt-1 text-lg font-bold text-white">
            ₹19.80
          </p>
          <p className="mt-1 text-[9px] text-cyan-400">
            ↑ 5.6%
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="relative mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">

        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-slate-500">
              Revenue Growth
            </p>
            <p className="text-sm font-semibold text-white">
              ₹24,680
            </p>
          </div>

          <TrendingUp
            size={17}
            className="text-cyan-400"
          />
        </div>

        <div className="relative h-32">

          {/* Grid */}
          <div className="absolute inset-0 flex flex-col justify-between">
            <div className="border-t border-white/5" />
            <div className="border-t border-white/5" />
            <div className="border-t border-white/5" />
            <div className="border-t border-white/5" />
          </div>

          {/* SVG Chart */}
          <svg
            viewBox="0 0 500 130"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="salesGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#22d3ee"
                  stopOpacity="0.25"
                />
                <stop
                  offset="100%"
                  stopColor="#22d3ee"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <path
              d="M0 105 L35 90 L70 96 L105 65 L140 78 L175 58 L210 67 L245 45 L280 54 L315 35 L350 47 L385 30 L420 42 L455 20 L500 28 L500 130 L0 130 Z"
              fill="url(#salesGradient)"
            />

            <path
              d="M0 105 L35 90 L70 96 L105 65 L140 78 L175 58 L210 67 L245 45 L280 54 L315 35 L350 47 L385 30 L420 42 L455 20 L500 28"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="mt-2 flex justify-between text-[8px] text-slate-600">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="relative mt-3 grid grid-cols-2 gap-3">

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-center justify-between">
            <p className="text-[9px] text-slate-500">
              Top Products
            </p>

            <Package
              size={13}
              className="text-cyan-400"
            />
          </div>

          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-[9px]">
              <span className="text-slate-400">
                Electronics
              </span>
              <span className="text-white">42%</span>
            </div>

            <div className="h-1 rounded-full bg-white/5">
              <div className="h-full w-[42%] rounded-full bg-cyan-400" />
            </div>

            <div className="flex items-center justify-between text-[9px]">
              <span className="text-slate-400">
                Clothing
              </span>
              <span className="text-white">24%</span>
            </div>

            <div className="h-1 rounded-full bg-white/5">
              <div className="h-full w-[24%] rounded-full bg-cyan-400/70" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-center justify-between">
            <p className="text-[9px] text-slate-500">
              Conversion Rate
            </p>

            <BarChart3
              size={13}
              className="text-cyan-400"
            />
          </div>

          <p className="mt-3 text-xl font-bold text-white">
            3.4%
          </p>

          <p className="mt-1 text-[9px] text-cyan-400">
            ↑ 2.1% this month
          </p>
        </div>

      </div>
    </div>
  );
}

function Step({ number, icon: Icon, title, children }) {
  return (
    <div className="relative">

      <div className="flex gap-4">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-[#030712] shadow-lg shadow-cyan-400/20">
          {number}
        </div>

        <div className="min-w-0 flex-1">

          <div className="flex items-center gap-2">
            <Icon
              size={17}
              className="text-cyan-400"
            />

            <h3 className="text-lg font-semibold text-white">
              {title}
            </h3>
          </div>

          <div className="mt-3 text-sm leading-7 text-slate-400">
            {children}
          </div>

        </div>

      </div>
    </div>
  );
}

function Guides() {
  const guideSections = [
    "Introduction",
    "Open the Dashboard",
    "Go to Sales Analytics",
    "Select Date Range",
    "Analyze the Results",
    "Key Takeaways",
  ];

  const relatedGuides = [
    "Understanding Sales Trends",
    "Comparing Monthly Sales",
    "Finding Best-Selling Products",
    "Understanding Revenue",
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="Optiora Logo"
              className="h-9 w-9 object-contain"
            />

            <span className="text-xl font-bold tracking-tight">
              Optiora<span className="text-cyan-400">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <Link
              to="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <a
              href="/#product"
              className="transition hover:text-white"
            >
              Product
            </a>

            <a
              href="/#pricing"
              className="transition hover:text-white"
            >
              Pricing
            </a>

            <Link
              to="/blog"
              className="transition hover:text-white"
            >
              Blog
            </Link>

            <Link
              to="/faq"
              className="transition hover:text-white"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-2">

            <Link
              to="/login"
              className="rounded-xl border border-cyan-400/40 px-4 py-2 text-xs font-medium text-white transition hover:bg-cyan-400/10"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-xl bg-cyan-400 px-4 py-2 text-xs font-semibold text-[#030712] transition hover:bg-cyan-300"
            >
              Get Started
            </Link>

          </div>

        </div>
      </header>

      <main className="relative z-10 pt-[73px]">

        {/* Hero */}
        <section className="border-b border-white/10 px-6 py-14 lg:px-8 lg:py-20">

          <div className="mx-auto max-w-7xl">

            <Link
              to="/guides"
              className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
            >
              <ArrowLeft size={16} />
              Back to Guides
            </Link>

            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* Hero Text */}
              <div>

                <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-400">
                  Sales & Revenue
                </div>

                <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  How to Analyze
                  <span className="block text-cyan-400">
                    Your Sales
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  Learn how to use Optiora's analytics to identify
                  sales trends, compare periods, and understand
                  your business performance.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-slate-400">

                  <div className="flex items-center gap-2">
                    <Clock3
                      size={16}
                      className="text-cyan-400"
                    />
                    5 min read
                  </div>

                  <div className="h-4 w-px bg-white/10" />

                  <div className="flex items-center gap-2">
                    <BarChart3
                      size={16}
                      className="text-cyan-400"
                    />
                    Beginner
                  </div>

                </div>

              </div>

              {/* Dashboard Visual */}
              <SalesDashboardVisual />

            </div>

          </div>

        </section>

        {/* Content */}
        <section className="px-6 py-12 lg:px-8 lg:py-16">

          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[220px_minmax(0,1fr)_230px]">

            {/* Left Navigation */}
            <aside className="hidden lg:block">

              <div className="sticky top-28">

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Guide Sections
                </p>

                <div className="space-y-1">

                  {guideSections.map((section, index) => (
                    <a
                      key={section}
                      href={`#section-${index}`}
                      className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition ${
                        index === 0
                          ? "border-l-2 border-cyan-400 bg-cyan-400/10 text-cyan-400"
                          : "text-slate-500 hover:bg-white/[0.03] hover:text-white"
                      }`}
                    >
                      {index === 0 ? (
                        <Home size={14} />
                      ) : (
                        <ChevronRight size={14} />
                      )}

                      {section}
                    </a>
                  ))}

                </div>

              </div>

            </aside>

            {/* Main Article */}
            <article className="min-w-0">

              {/* Introduction */}
              <section
                id="section-0"
                className="scroll-mt-28"
              >

                <h2 className="text-2xl font-bold text-white">
                  Introduction
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Your sales data tells a story. With Optiora,
                  you can easily track your sales performance,
                  spot trends, and make smarter business
                  decisions.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  This guide will show you how to analyze your
                  sales data step by step using the Optiora
                  analytics dashboard.
                </p>

                <div className="mt-8">
                  <SalesDashboardVisual />
                </div>

              </section>

              {/* Steps */}
              <div className="mt-12 space-y-12">

                {/* Step 1 */}
                <section
                  id="section-1"
                  className="scroll-mt-28"
                >
                  <Step
                    number="1"
                    icon={Home}
                    title="Open the Dashboard"
                  >
                    <p>
                      Log in to your Optiora account and go to
                      the main dashboard. Here you will find a
                      quick overview of your business performance,
                      including total sales, revenue growth,
                      orders, and key metrics.
                    </p>

                    <div className="mt-5 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4">
                      <div className="flex gap-3">
                        <Info
                          size={18}
                          className="mt-0.5 shrink-0 text-cyan-400"
                        />

                        <p className="text-xs leading-6 text-slate-400">
                          <span className="font-semibold text-white">
                            Tip:
                          </span>{" "}
                          Make sure your latest sales data has
                          been added before analyzing your
                          performance.
                        </p>
                      </div>
                    </div>
                  </Step>
                </section>

                {/* Step 2 */}
                <section
                  id="section-2"
                  className="scroll-mt-28"
                >
                  <Step
                    number="2"
                    icon={LineChart}
                    title="Go to Sales Analytics"
                  >
                    <p>
                      From the left navigation menu, open the
                      Sales section and select Analytics. This
                      will take you to your detailed sales
                      performance dashboard.
                    </p>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-[#080d18] p-5">

                      <div className="flex items-center gap-4">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                          <LineChart
                            size={19}
                            className="text-cyan-400"
                          />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-white">
                            Sales
                          </p>

                          <p className="text-xs text-slate-500">
                            Analytics & performance
                          </p>
                        </div>

                        <ChevronRight
                          size={17}
                          className="ml-auto text-slate-600"
                        />

                      </div>

                    </div>
                  </Step>
                </section>

                {/* Step 3 */}
                <section
                  id="section-3"
                  className="scroll-mt-28"
                >
                  <Step
                    number="3"
                    icon={CalendarDays}
                    title="Select the Date Range"
                  >
                    <p>
                      Use the date picker at the top of the
                      analytics page to choose the period you
                      want to analyze.
                    </p>

                    <p className="mt-3">
                      You can compare different periods to
                      understand whether your business is
                      experiencing growth or decline.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {["7D", "30D", "3M", "6M", "1Y"].map(
                        (range) => (
                          <button
                            key={range}
                            className={`rounded-lg border px-4 py-2 text-xs font-medium ${
                              range === "3M"
                                ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400"
                                : "border-white/10 bg-white/[0.03] text-slate-500"
                            }`}
                          >
                            {range}
                          </button>
                        )
                      )}

                    </div>
                  </Step>
                </section>

                {/* Step 4 */}
                <section
                  id="section-4"
                  className="scroll-mt-28"
                >
                  <Step
                    number="4"
                    icon={TrendingUp}
                    title="Analyze the Results"
                  >
                    <p>
                      Look at the charts and metrics to
                      understand your sales trends. You can
                      analyze revenue, order volume, product
                      performance, and other important business
                      indicators.
                    </p>

                    <p className="mt-3">
                      You can also filter your results by
                      product, category, or other available
                      business attributes to get more specific
                      insights.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">

                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <TrendingUp
                          size={18}
                          className="text-cyan-400"
                        />

                        <p className="mt-3 text-sm font-semibold text-white">
                          Sales Trends
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Track how sales change over time.
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <Package
                          size={18}
                          className="text-cyan-400"
                        />

                        <p className="mt-3 text-sm font-semibold text-white">
                          Products
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Identify your strongest products.
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <ShoppingCart
                          size={18}
                          className="text-cyan-400"
                        />

                        <p className="mt-3 text-sm font-semibold text-white">
                          Orders
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Monitor order volume and growth.
                        </p>
                      </div>

                    </div>
                  </Step>
                </section>

                {/* Key Takeaways */}
                <section
                  id="section-5"
                  className="scroll-mt-28"
                >

                  <div className="relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 via-[#08111e] to-[#030712] p-6 sm:p-8">

                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-[70px]" />

                    <div className="relative">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                          <Lightbulb
                            size={20}
                            className="text-cyan-400"
                          />
                        </div>

                        <h2 className="text-xl font-bold text-white">
                          Key Takeaways
                        </h2>

                      </div>

                      <div className="mt-6 space-y-4">

                        {[
                          "Track your sales trends over time",
                          "Compare different time periods",
                          "Identify your best-performing products",
                          "Use data to support business decisions",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3"
                          >
                            <Check
                              size={16}
                              className="shrink-0 text-cyan-400"
                            />

                            <span className="text-sm text-slate-300">
                              {item}
                            </span>
                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                </section>

              </div>

            </article>

            {/* Right Sidebar */}
            <aside className="hidden lg:block">

              <div className="sticky top-28 space-y-5">

                {/* Table of Contents */}
                <div className="rounded-2xl border border-white/10 bg-[#080d18]/80 p-5">

                  <h3 className="text-sm font-semibold text-white">
                    Table of Contents
                  </h3>

                  <div className="mt-4 space-y-3">

                    {guideSections.map((section, index) => (
                      <a
                        key={section}
                        href={`#section-${index}`}
                        className="flex items-start gap-3 text-xs text-slate-500 transition hover:text-cyan-400"
                      >
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-400/70" />

                        {section}
                      </a>
                    ))}

                  </div>

                </div>

                {/* Related Guides */}
                <div className="rounded-2xl border border-white/10 bg-[#080d18]/80 p-5">

                  <h3 className="text-sm font-semibold text-white">
                    Related Guides
                  </h3>

                  <div className="mt-4 space-y-2">

                    {relatedGuides.map((guide) => (
                      <Link
                        key={guide}
                        to="/guides"
                        className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/[0.04]"
                      >

                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
                          <ArrowUpRight
                            size={14}
                            className="text-cyan-400"
                          />
                        </div>

                        <span className="text-xs leading-5 text-slate-400 transition group-hover:text-white">
                          {guide}
                        </span>

                      </Link>
                    ))}

                  </div>

                </div>

              </div>

            </aside>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-slate-500 sm:flex-row">

          <p>
            © 2026 Optiora. All rights reserved.
          </p>

          <div className="flex gap-5">

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

        </div>

      </footer>

    </div>
  );
}

export default Guides;