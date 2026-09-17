import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BarChart3,
  Brain,
  Package,
  Users,
  Target,
  Eye,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <BarChart3 size={22} />,
      title: "Business Analytics",
      description:
        "Understand sales, revenue, products, and business performance through clear and meaningful analytics.",
    },
    {
      icon: <Brain size={22} />,
      title: "AI-Powered Insights",
      description:
        "Turn complex business data into simple and meaningful insights for better decision-making.",
    },
    {
      icon: <Package size={22} />,
      title: "Demand Prediction",
      description:
        "Use historical data and machine learning to identify demand patterns and support smarter inventory planning.",
    },
    {
      icon: <Users size={22} />,
      title: "Customer Insights",
      description:
        "Understand customer behavior and identify patterns that can help businesses improve customer retention.",
    },
  ];

  const team = [
    {
      name: "Sayak Bhattacharya",
      role: "Backend & API Developer",
      image: "/team/sayak.jpg",
      description:
        "Responsible for backend development, REST APIs, database integration, testing, and deployment.",
    },
    {
      name: "Ritam Manna",
      role: "Frontend Developer",
      image: "/team/ritam.jpg",
      description:
        "Responsible for the user interface, responsive design, React components, and frontend integration.",
    },
    {
      name: "Arpan Santra",
      role: "Machine Learning Developer",
      image: "/team/arpan.jpg",
      description:
        "Responsible for developing the machine learning models and integrating predictive intelligence into Optiora.",
    },
    {
      name: "Sk. Habib Hossain",
      role: "Testing & Integration",
      image: "/team/habib.jpg",
      description:
        "Responsible for application testing, feature validation, integration, and overall system quality.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white">

      {/* ================= TOP BAR ================= */}
      <div className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-cyan-400"
          >
            <ArrowLeft size={17} />
            Back to Optiora
          </Link>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-20">

        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Optiora
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Turning business data into
            <span className="text-cyan-400"> smarter decisions.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
            Optiora is an intelligent business growth and predictive analytics
            platform designed to help businesses understand their data,
            identify patterns, predict future trends, and make better decisions.
          </p>

        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">

          {/* Why Optiora */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">

            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
              <Brain size={24} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Who We Are
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Why we built Optiora
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Many small and growing businesses collect valuable information
              about sales, customers, products, and inventory but often lack
              simple tools to understand it effectively.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              We created Optiora to bring this information together and turn
              raw business data into useful analytics, predictions, and
              actionable insights.
            </p>

          </div>

          {/* How It Works */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/[0.08] to-white/[0.02] p-8 sm:p-10">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              How It Works
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              From data to decisions.
            </h2>

            <div className="mt-7 space-y-4">

              {[
                ["01", "Collect", "Bring your business data together."],
                ["02", "Analyze", "Discover patterns and performance trends."],
                ["03", "Predict", "Use machine learning for future predictions."],
                ["04", "Decide", "Take smarter actions using insights."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="flex items-start gap-4 rounded-xl border border-white/5 bg-black/20 p-4"
                >
                  <span className="text-sm font-bold text-cyan-400">
                    {number}
                  </span>

                  <div>
                    <h3 className="text-sm font-semibold">
                      {title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          {/* Vision */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                <Eye size={20} />
              </div>

              <h2 className="text-xl font-bold">
                Our Vision
              </h2>

            </div>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              To make intelligent, data-driven decision-making accessible to
              every growing business.
            </p>

          </div>

          {/* Mission */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                <Target size={20} />
              </div>

              <h2 className="text-xl font-bold">
                Our Mission
              </h2>

            </div>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              To simplify business analytics and predictive intelligence
              through an easy-to-use platform that helps businesses
              understand, predict, and grow.
            </p>

          </div>

        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Intelligence built for growth
            </h2>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-black">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-base font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= MEET THE TEAM ================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Meet the Team
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              The people behind Optiora
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400">
              Optiora is developed by a team passionate about technology,
              artificial intelligence, and building practical solutions
              for smarter business decisions.
            </p>

          </div>

          {/* Team Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >

                {/* Image */}
                <div className="mx-auto h-44 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#08111e]">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                {/* Name */}
                <h3 className="mt-6 text-lg font-bold">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-2 text-sm font-medium text-cyan-400">
                  {member.role}
                </p>

                {/* Description */}
                <p className="mt-4 text-xs leading-6 text-gray-500">
                  {member.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/[0.08] to-transparent p-8 sm:p-10">

          <div className="grid gap-8 md:grid-cols-2 md:items-center">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Our Technology
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Built with modern technology
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                Optiora combines modern web technologies with machine
                learning to provide analytics, predictive models, and
                intelligent business insights through a single platform.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Python",
                "Machine Learning",
              ].map((technology) => (
                <div
                  key={technology}
                  className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-center text-sm text-gray-300"
                >
                  {technology}
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 pb-24 pt-12 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-transparent p-8 sm:p-10">

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Ready to grow smarter?
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Start exploring what Optiora can do for your business.
              </p>

            </div>

            <Link
              to="/register"
              className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Get Started
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">

          <Link
            to="/"
            className="text-lg font-bold text-white"
          >
            Optiora<span className="text-cyan-400">.</span>
          </Link>

          <p>
            © 2026 Optiora. Built with intelligence.
          </p>

        </div>

      </footer>

    </div>
  );
}