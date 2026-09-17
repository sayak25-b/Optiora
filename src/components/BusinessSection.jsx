import {
  Boxes,
  ShoppingBag,
  Store,
  Utensils,
} from "lucide-react";

function BusinessSection() {

  const businesses = [
    {
      title: "Retail Stores",
      text: "Track sales, inventory and customer trends.",
      icon: ShoppingBag,
    },
    {
      title: "Restaurants",
      text: "Reduce food waste and increase profitability.",
      icon: Utensils,
    },
    {
      title: "Wholesalers",
      text: "Predict demand and manage stock better.",
      icon: Boxes,
    },
    {
      title: "Local Shops",
      text: "Make smarter decisions and grow consistently.",
      icon: Store,
    },
  ];

  return (
    <section
      id="about"
      className="bg-white py-16 text-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:items-center">

          {/* Left */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600">
              Built for growing businesses
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Who Can Benefit from Optiora?
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

              {businesses.map((business) => {
                const Icon = business.icon;

                return (
                  <div
                    key={business.title}
                    className="flex gap-4"
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        {business.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {business.text}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

          {/* Growth Score */}
          <div className="rounded-2xl bg-slate-950 p-6 text-white shadow-2xl">

            <div className="text-center text-sm font-semibold">
              Business Growth Score
            </div>

            <div className="mt-5 flex justify-center">

              <div className="relative flex h-32 w-32 items-center justify-center">

                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full -rotate-90"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="7"
                  />

                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="7"
                    strokeDasharray="251"
                    strokeDashoffset="45"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="text-center">

                  <div className="text-3xl font-bold">
                    82
                  </div>

                  <div className="text-[9px] text-slate-500">
                    /100
                  </div>

                </div>

              </div>

            </div>

            <div className="text-center">

              <div className="text-sm font-semibold text-emerald-400">
                ↑ Healthy Growth
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                Your business is growing well!
                Focus on customer retention to improve
                even more.
              </p>

              <button className="mt-4 rounded-lg border border-white/20 px-5 py-2 text-xs transition hover:bg-white/10">
                Improve Now →
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default BusinessSection;