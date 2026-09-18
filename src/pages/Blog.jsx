import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Clock,
  Calendar,
  Brain,
  TrendingUp,
  Package,
  Users,
  BarChart3,
} from "lucide-react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "AI & ML",
    "Analytics",
    "Sales",
    "Inventory",
    "Customers",
    "Business Growth",
  ];

  const articles = [
    {
      id: 1,
      title: "How AI Can Help Small Businesses Grow",
      description:
        "Discover how artificial intelligence can help small businesses understand data, automate analysis, and make smarter decisions.",
      category: "AI & ML",
      date: "September 15, 2026",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      icon: <Brain size={18} />,
      featured: true,
    },
    {
      id: 2,
      title: "What Is Predictive Analytics?",
      description:
        "Learn how predictive analytics uses historical business data to identify patterns and estimate what could happen next.",
      category: "Analytics",
      date: "September 12, 2026",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      icon: <BarChart3 size={18} />,
    },
    {
      id: 3,
      title: "How Sales Forecasting Helps Businesses Plan Ahead",
      description:
        "Understand how sales forecasting can help businesses estimate future sales and prepare their operations accordingly.",
      category: "Sales",
      date: "September 09, 2026",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
      icon: <TrendingUp size={18} />,
    },
    {
      id: 4,
      title: "Demand Prediction: Avoid Overstock and Stockouts",
      description:
        "Learn how demand prediction can help businesses maintain healthier inventory levels and reduce unnecessary stock problems.",
      category: "Inventory",
      date: "September 06, 2026",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      icon: <Package size={18} />,
    },
    {
      id: 5,
      title: "Understanding Customer Churn",
      description:
        "Customer churn can affect long-term growth. Learn how data can help identify customer behavior patterns.",
      category: "Customers",
      date: "September 03, 2026",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
      icon: <Users size={18} />,
    },
    {
      id: 6,
      title: "From Raw Data to Better Business Decisions",
      description:
        "A simple guide to turning raw business information into useful insights that support everyday decision-making.",
      category: "Business Growth",
      date: "August 30, 2026",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
      icon: <BarChart3 size={18} />,
    },
    {
      id: 7,
      title: "Why Data-Driven Decision Making Matters",
      description:
        "Explore why businesses are increasingly using data instead of assumptions to understand performance and plan growth.",
      category: "Business Growth",
      date: "August 27, 2026",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
      icon: <TrendingUp size={18} />,
    },
    {
      id: 8,
      title: "AI vs Traditional Business Analytics",
      description:
        "Understand the difference between traditional analytics and modern AI-powered business intelligence.",
      category: "AI & ML",
      date: "August 24, 2026",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
      icon: <Brain size={18} />,
    },
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" ||
        article.category === activeCategory;

      const matchesSearch =
        article.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        article.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const featuredArticle = articles.find(
    (article) => article.featured
  );

  return (
    <div className="min-h-screen bg-[#030712] text-white">

      {/* ================= HEADER ================= */}
      <header className="border-b border-white/10 bg-[#030712]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-cyan-400"
          >
            <ArrowLeft size={17} />
            Back to Optiora
          </Link>

          <div className="text-xl font-bold">
            Optiora<span className="text-cyan-400">.</span>
          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pb-16 pt-20 lg:px-8 lg:pt-28">

        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="relative mx-auto max-w-4xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Optiora Blog
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Insights for
            <span className="text-cyan-400">
              {" "}Smarter Business Growth
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Practical insights about artificial intelligence, business
            analytics, sales forecasting, inventory, customers, and
            data-driven growth.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-xl">

            <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 transition focus-within:border-cyan-400/40">

              <Search
                size={19}
                className="text-gray-500"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-transparent px-3 py-4 text-sm text-white outline-none placeholder:text-gray-600"
              />

            </div>

          </div>

        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="px-6 pb-12 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                activeCategory === category
                  ? "border-cyan-400 bg-cyan-400 text-black"
                  : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-cyan-400/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </section>

      {/* ================= FEATURED ARTICLE ================= */}
      {activeCategory === "All" && !searchTerm && (
        <section className="px-6 py-10 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Featured Article
              </p>
            </div>

            <div className="group grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-2">

              {/* Image */}
              <div className="relative min-h-[300px] overflow-hidden lg:min-h-[440px]">

                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent lg:bg-gradient-to-r" />

              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

                <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
                  {featuredArticle.icon}
                  {featuredArticle.category}
                </div>

                <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                  {featuredArticle.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  {featuredArticle.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-gray-500">

                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {featuredArticle.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock size={14} />
                    {featuredArticle.readTime}
                  </span>

                </div>

                <button className="mt-8 flex w-fit items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300">

                  Read Article
                  <ArrowRight size={16} />

                </button>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* ================= LATEST ARTICLES ================= */}
      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Explore
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Latest Articles
              </h2>
            </div>

            <p className="text-sm text-gray-500">
              {filteredArticles.length} articles
            </p>

          </div>

          {/* Articles Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredArticles.map((article) => (

              <article
                key={article.id}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >

                {/* Image */}
                <div className="relative h-52 overflow-hidden">

                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Category */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-cyan-400 backdrop-blur-md">

                    {article.icon}

                    {article.category}

                  </div>

                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-lg font-bold leading-7 transition group-hover:text-cyan-400">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {article.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">

                    <div className="flex items-center gap-3 text-xs text-gray-600">

                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {article.date}
                      </span>

                    </div>

                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock size={13} />
                      {article.readTime}
                    </span>

                  </div>

                  <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">

                    Read More
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />

                  </button>

                </div>

              </article>

            ))}

          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="py-20 text-center">

              <Search
                size={40}
                className="mx-auto text-gray-600"
              />

              <h3 className="mt-5 text-xl font-semibold">
                No articles found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another search term or category.
              </p>

            </div>
          )}

        </div>

      </section>

      {/* ================= TOPICS ================= */}
      <section className="px-6 py-16 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/[0.08] to-transparent p-8 sm:p-12">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Explore Topics
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Learn. Analyze. Grow.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                Explore practical topics that help businesses understand
                their data and make better decisions.
              </p>

            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <TopicCard
                icon={<Brain size={20} />}
                title="AI & Machine Learning"
                text="Understand AI, ML, and predictive intelligence."
              />

              <TopicCard
                icon={<BarChart3 size={20} />}
                title="Business Analytics"
                text="Turn business data into meaningful insights."
              />

              <TopicCard
                icon={<TrendingUp size={20} />}
                title="Sales & Forecasting"
                text="Understand sales trends and future demand."
              />

              <TopicCard
                icon={<Package size={20} />}
                title="Inventory"
                text="Build smarter and more efficient inventory plans."
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="px-6 pb-20 pt-8 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Stay Updated
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Get smarter business insights
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            Subscribe to receive practical insights about AI, analytics,
            forecasting, and business growth.
          </p>

          <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-cyan-400/40"
            />

            <button className="rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300">
              Subscribe
            </button>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

          <Link
            to="/"
            className="text-xl font-bold text-white"
          >
            Optiora<span className="text-cyan-400">.</span>
          </Link>

          <p className="text-xs text-gray-600">
            © 2026 Optiora. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}


/* ================= TOPIC CARD ================= */

function TopicCard({ icon, title, text }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-cyan-400/30">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-black">
        {icon}
      </div>

      <h3 className="mt-4 text-sm font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-500">
        {text}
      </p>

    </div>
  );
}