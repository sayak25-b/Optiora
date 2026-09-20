import {
  Store,
  Utensils,
  Boxes,
  ShoppingBag,
  ArrowRight,
  TrendingUp,
  Users,
  PackageCheck,
  Sparkles,
} from "lucide-react";

function BusinessSection() {
  return (
    <section
      id="businesses"
      className="relative overflow-hidden bg-cover bg-center py-20 sm:py-24"
      style={{
        backgroundImage: "url('/images/business.jpg')",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/90" />

      {/* Soft background glows */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-300/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2">
            <Sparkles size={15} className="text-violet-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
              Built for Growing Businesses
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Your Business Is Different.
            <br />

            <span className="text-violet-600">
              Your Insights Should Be Too.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Whether you run a local shop, restaurant, retail store or
            wholesale business, Optiora helps you understand what is
            happening and decide what to focus on next.
          </p>

        </div>

        {/* Main content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_390px] lg:gap-16">

          {/* ================= LEFT ================= */}
          <div>

            <p className="text-sm font-semibold text-slate-500">
              One platform. Different business needs.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">

              <BusinessItem
                icon={<Store size={23} />}
                title="Retail Stores"
                description="Know what is selling, what is slowing down and when stock may need attention."
              />

              <BusinessItem
                icon={<Utensils size={23} />}
                title="Restaurants & Cafés"
                description="Understand popular products, changing demand and areas that affect profitability."
              />

              <BusinessItem
                icon={<Boxes size={23} />}
                title="Wholesalers"
                description="Monitor inventory, understand demand and plan your next purchase with better information."
              />

              <BusinessItem
                icon={<ShoppingBag size={23} />}
                title="Local Shops"
                description="Turn everyday business data into simple insights that help you make better decisions."
              />

            </div>

            {/* Human message */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm">

              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  <TrendingUp size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Different business. Same question.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    “What is happening in my business, and what should
                    I focus on next?”
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* ================= RIGHT SCORE CARD ================= */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-[32px] bg-violet-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#07101f] p-7 text-white shadow-2xl sm:p-8">

              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative z-10">

                {/* Header */}
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      Your Business
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      Growth Overview
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <TrendingUp size={19} />
                  </div>

                </div>

                {/* Score */}
                <div className="relative mx-auto mt-8 flex h-36 w-36 items-center justify-center">

                  <svg
                    className="absolute inset-0 h-full w-full -rotate-90"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="rgb(30 41 59)"
                      strokeWidth="8"
                    />

                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="rgb(52 211 153)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="314"
                      strokeDashoffset="56"
                    />
                  </svg>

                  <div className="relative text-center">

                    <p className="text-4xl font-bold">
                      82
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      out of 100
                    </p>

                  </div>

                </div>

                {/* Status */}
                <div className="mt-5 text-center">

                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-4 py-2">

                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <span className="text-xs font-semibold text-emerald-400">
                      Healthy Growth
                    </span>

                  </div>

                  <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-slate-400">
                    Your business is showing positive momentum.
                    Here is what Optiora is noticing.
                  </p>

                </div>

                {/* Mini insights */}
                <div className="mt-6 grid grid-cols-2 gap-2">

                  <MiniMetric
                    icon={<TrendingUp size={13} />}
                    label="Sales"
                    value="+18.4%"
                    positive
                  />

                  <MiniMetric
                    icon={<Users size={13} />}
                    label="Customers"
                    value="+12.6%"
                    positive
                  />

                  <MiniMetric
                    icon={<PackageCheck size={13} />}
                    label="Inventory"
                    value="Healthy"
                  />

                  <MiniMetric
                    icon={<Sparkles size={13} />}
                    label="Insights"
                    value="3 New"
                  />

                </div>

                {/* CTA */}
                <button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
                >
                  Understand Your Business
                  <ArrowRight size={16} />
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom statement */}
        <div className="mt-14 text-center">

          <p className="text-sm text-slate-500">
            From everyday operations to long-term growth,
            <span className="font-semibold text-slate-900">
              {" "}Optiora helps you make sense of your business.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}


/* ================= BUSINESS ITEM ================= */

function BusinessItem({
  icon,
  title,
  description,
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-lg">

      <div className="flex items-start gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
          {icon}
        </div>

        <div>

          <h3 className="text-base font-semibold text-slate-950">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
}


/* ================= MINI METRIC ================= */

function MiniMetric({
  icon,
  label,
  value,
  positive = false,
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">

      <div className="flex items-center gap-1.5 text-slate-500">
        {icon}

        <span className="text-[9px]">
          {label}
        </span>
      </div>

      <p
        className={`mt-2 text-xs font-semibold ${
          positive
            ? "text-emerald-400"
            : "text-white"
        }`}
      >
        {value}
      </p>

    </div>
  );
}

export default BusinessSection;