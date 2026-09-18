import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Search,
  ArrowLeft,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is Optiora?",
        answer:
          "Optiora is an intelligent business growth and predictive analytics platform that helps businesses understand their data, monitor performance, predict future trends, and make smarter business decisions.",
      },
      {
        question: "Who can use Optiora?",
        answer:
          "Optiora is designed mainly for small and growing businesses such as retail stores, grocery businesses, clothing stores, electronics shops, restaurants, cafes, pharmacies, and wholesalers.",
      },
      {
        question: "What problems does Optiora solve?",
        answer:
          "Optiora helps businesses organize their data, understand sales trends, monitor inventory, analyze customers, predict demand, forecast sales, and identify potential customer churn.",
      },
      {
        question: "Is Optiora suitable for small businesses?",
        answer:
          "Yes. Optiora is designed with small and growing businesses in mind, with a focus on simple dashboards, understandable analytics, and practical business insights.",
      },
    ],
  },

  {
    category: "AI & Predictions",
    questions: [
      {
        question: "What AI features does Optiora provide?",
        answer:
          "Optiora can provide AI and machine-learning features such as sales forecasting, product demand prediction, customer churn prediction, and data-driven business insights.",
      },
      {
        question: "How does sales forecasting work?",
        answer:
          "The sales forecasting system analyzes historical sales information and identifies patterns and trends to estimate future sales. The quality of a forecast depends on the amount and quality of historical data available.",
      },
      {
        question: "What is demand prediction?",
        answer:
          "Demand prediction estimates how much of a particular product may be required in a future period. This can help businesses plan inventory and reduce the possibility of overstocking or stockouts.",
      },
      {
        question: "What is customer churn prediction?",
        answer:
          "Customer churn prediction identifies customers who may have a higher likelihood of becoming inactive based on historical purchasing behavior and customer activity.",
      },
      {
        question: "Are Optiora's predictions always accurate?",
        answer:
          "No prediction system can guarantee future outcomes. Optiora's predictions depend on the available data, data quality, model performance, and changing business conditions. Predictions should be treated as decision-support information.",
      },
    ],
  },

  {
    category: "Dashboard & Features",
    questions: [
      {
        question: "What can I see on the dashboard?",
        answer:
          "The dashboard can provide an overview of sales, revenue, customers, products, inventory, business trends, notifications, and important AI-generated insights.",
      },
      {
        question: "Can I manage my products?",
        answer:
          "Yes. The Products module is designed to allow users to create, view, update, and manage product information such as name, category, price, cost, and stock-related details.",
      },
      {
        question: "Can I manage customers?",
        answer:
          "Yes. The Customers module can store customer information and purchasing-related data that can also be used for customer analytics and churn prediction.",
      },
      {
        question: "Does Optiora provide inventory management?",
        answer:
          "Yes. The Inventory module is designed to monitor stock levels, identify low-stock products, and provide information that can support inventory planning.",
      },
      {
        question: "Can I generate business reports?",
        answer:
          "Yes. The Reports section is designed to present historical business performance, trends, summaries, and analytical information in an easy-to-understand format.",
      },
    ],
  },

  {
    category: "Account & Security",
    questions: [
      {
        question: "How do I create an Optiora account?",
        answer:
          "You can create an account through the Get Started or Register page by providing the required account and organization information.",
      },
      {
        question: "Is my password stored securely?",
        answer:
          "In the planned backend architecture, passwords should be securely hashed before being stored in the database. Plain-text passwords should never be stored.",
      },
      {
        question: "Does Optiora use authentication?",
        answer:
          "Yes. The planned application uses authentication and protected routes so that users can access features associated with their authenticated account.",
      },
      {
        question: "How does Optiora protect my data?",
        answer:
          "Optiora should use authentication, authorization, input validation, secure password hashing, environment variables for secrets, database access controls, and HTTPS in production.",
      },
    ],
  },

  {
    category: "Pricing & Trial",
    questions: [
      {
        question: "Does Optiora offer a free trial?",
        answer:
          "The current Optiora concept includes a 2-month free trial. Trial terms may be changed before the production launch.",
      },
      {
        question: "What pricing plans does Optiora have?",
        answer:
          "The current concept includes Starter, Growth, and Business plans. The final pricing and feature limits can be updated before the production release.",
      },
      {
        question: "Will I need a payment method for the trial?",
        answer:
          "That depends on the final billing implementation. The current project design does not require this decision to be finalized yet.",
      },
    ],
  },

  {
    category: "Technical",
    questions: [
      {
        question: "What technologies are used to build Optiora?",
        answer:
          "The planned stack includes React 18, Vite, Tailwind CSS, React Router, Node.js, Express.js, MongoDB Atlas, Python, pandas, NumPy, scikit-learn, and FastAPI.",
      },
      {
        question: "Where is my business data stored?",
        answer:
          "The planned architecture uses MongoDB Atlas as the primary database. The exact storage and retention configuration depends on the deployed version of the platform.",
      },
      {
        question: "Can Optiora connect to an ML model?",
        answer:
          "Yes. The architecture can use a Python FastAPI service to expose trained machine-learning models. The Node.js backend can communicate with this service and return prediction results to the React frontend.",
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="text-sm font-medium text-white sm:text-base">
          {question}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-cyan-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={17} />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] pb-5 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pr-10 text-sm leading-7 text-slate-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = ["All", ...faqData.map((item) => item.category)];

  const filteredData = faqData
    .filter(
      (section) =>
        activeCategory === "All" || section.category === activeCategory
    )
    .map((section) => ({
      ...section,
      questions: section.questions.filter((item) => {
        const text =
          `${item.question} ${item.answer}`.toLowerCase();

        return text.includes(search.toLowerCase());
      }),
    }))
    .filter((section) => section.questions.length > 0);

  return (
    <div className="min-h-screen bg-[#030712] text-white">

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          
            <Link to="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="Optiora"
    className="h-9 w-auto object-contain"
  /> OPTIORA<span className="text-cyan-400">.</span>
</Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

        </div>
      </header>

      <main className="relative z-10">

        {/* Hero */}
        <section className="px-6 pb-12 pt-20 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
              <HelpCircle className="text-cyan-400" size={30} />
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Help Center
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Frequently Asked
              <span className="block text-cyan-400">
                Questions
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Find answers about Optiora, AI-powered analytics,
              predictions, business insights, security, pricing,
              and more.
            </p>

            {/* Search */}
            <div className="mx-auto mt-10 max-w-2xl">
              <div className="relative">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search your question..."
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:bg-white/[0.06]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Category Navigation */}
        <section className="px-6 pb-8 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenQuestion(null);
                }}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                  activeCategory === category
                    ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-400"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}

          </div>
        </section>

        {/* FAQ Content */}
        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-5xl">

            {filteredData.length > 0 ? (
              filteredData.map((section) => (
                <div
                  key={section.category}
                  className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-[#080d18]/80 p-6 sm:p-8"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                    <h2 className="text-lg font-semibold text-white">
                      {section.category}
                    </h2>
                  </div>

                  <div>
                    {section.questions.map((item, index) => {
                      const id = `${section.category}-${index}`;

                      return (
                        <FAQItem
                          key={id}
                          question={item.question}
                          answer={item.answer}
                          isOpen={openQuestion === id}
                          onClick={() =>
                            setOpenQuestion(
                              openQuestion === id ? null : id
                            )
                          }
                        />
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-3xl border border-white/10 bg-[#080d18] px-6 py-16 text-center">
                <Search
                  className="mx-auto mb-4 text-slate-600"
                  size={35}
                />

                <h2 className="text-lg font-semibold text-white">
                  No questions found
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Try searching with a different keyword.
                </p>
              </div>
            )}

          </div>
        </section>

        {/* Still Need Help */}
        <section className="border-t border-white/10 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl">

            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[#08111e] to-[#030712] p-8 sm:p-12">

              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-[90px]" />

              <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">

                <div>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                    <MessageCircle
                      size={22}
                      className="text-cyan-400"
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-white">
                    Still have questions?
                  </h2>

                  <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
                    Can't find what you're looking for?
                    Contact the Optiora team and we'll be happy
                    to help.
                  </p>
                </div>

                <Link
                  to="/"
                  className="inline-flex items-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#030712] transition hover:bg-cyan-300"
                >
                  Contact Us
                </Link>

              </div>
            </div>

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

export default FAQ;