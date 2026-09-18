import {
  Store,
  Utensils,
  Boxes,
  ShoppingBag,
} from "lucide-react";

function BusinessSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cover bg-center py-16 sm:py-20"
      style={{
        backgroundImage: "url('/images/business.jpg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/85" />

      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-violet-300/20 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-12">

          {/* ================= LEFT ================= */}

          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
              Built for Growing Businesses
            </p>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Who Can Benefit from Optiora?
            </h2>

            {/* Business Types */}
            <div className="mt-9 grid gap-7 sm:grid-cols-2">

              <BusinessItem
                icon={<Store size={27} />}
                title="Retail Stores"
                description="Track sales, inventory and customer trends."
              />

              <BusinessItem
                icon={<Utensils size={27} />}
                title="Restaurants"
                description="Reduce food waste and increase profitability."
              />

              <BusinessItem
                icon={<Boxes size={27} />}
                title="Wholesalers"
                description="Predict demand and manage stock better."
              />

              <BusinessItem
                icon={<ShoppingBag size={27} />}
                title="Local Shops"
                description="Make smarter decisions and grow consistently."
              />

            </div>

          </div>

          {/* ================= SCORE CARD ================= */}

          <div className="relative">

            {/* Card Glow */}
            <div className="absolute inset-0 rounded-[28px] bg-violet-400/20 blur-3xl" />

            <div className="relative rounded-[28px] border border-white/10 bg-[#020617]/95 px-7 py-7 text-center shadow-2xl backdrop-blur-xl sm:px-8">

              <h3 className="text-xl font-semibold text-white">
                Business Growth Score
              </h3>

              {/* Score Circle */}
              <div className="relative mx-auto mt-7 flex h-32 w-32 items-center justify-center">

                <svg
                  className="absolute inset-0 h-full w-full -rotate-90"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="rgb(51 65 85)"
                    strokeWidth="9"
                  />

                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="rgb(52 211 153)"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray="314"
                    strokeDashoffset="56"
                  />
                </svg>

                <div className="relative">

                  <p className="text-4xl font-bold text-white">
                    82
                  </p>

                  <p className="text-xs text-slate-500">
                    /100
                  </p>

                </div>

              </div>

              <p className="mt-5 text-lg font-semibold text-emerald-400">
                ↑ Healthy Growth
              </p>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-400">
                Your business is growing well! Focus on
                customer retention to improve even more.
              </p>

              <button
                type="button"
                className="mt-6 rounded-xl border border-white/15 px-6 py-2.5 text-sm font-medium text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
              >
                Improve Now →
              </button>

            </div>

          </div>

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
    <div className="flex gap-4">

      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
        {icon}
      </div>

      <div>

        <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">
          {title}
        </h3>

        <p className="mt-1.5 text-sm leading-6 text-slate-500 sm:text-base">
          {description}
        </p>

      </div>

    </div>
  );
}

export default BusinessSection;