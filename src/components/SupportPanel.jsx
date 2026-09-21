import { useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Search,
  BookOpen,
  HelpCircle,
  MessageCircle,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

function SupportQuestion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden rounded-xl border ${
        open
          ? "border-cyan-400/30 bg-cyan-400/[0.04]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
      >
        <span
          className={`text-sm font-medium ${
            open ? "text-cyan-400" : "text-gray-300"
          }`}
        >
          {question}
        </span>

        <ChevronRight
          size={17}
          className={`shrink-0 transition-transform ${
            open ? "rotate-90 text-cyan-400" : "text-gray-500"
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-white/10 px-4 pb-4 pt-3">
          <p className="text-sm leading-6 text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
}

function SupportPanel({
  isOpen,
  onClose,
  onContactClick,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) {
    return null;
  }

  const topics = [
    {
      icon: <BookOpen size={20} />,
      title: "Documentation",
      description:
        "Learn how Optiora works and explore its features.",
      link: "/Documentation/Optiora_Documentation.pdf",
      type: "pdf",
    },
    {
      icon: <BookOpen size={20} />,
      title: "Getting Started",
      description:
        "Learn how to set up your business and start using Optiora.",
      link: "/guides",
    },
    {
      icon: <AlertCircle size={20} />,
      title: "Troubleshooting",
      description:
        "Find solutions to common account and dashboard issues.",
      action: "issues",
    },
    {
      icon: <HelpCircle size={20} />,
      title: "FAQs",
      description:
        "Find quick answers to frequently asked questions.",
      link: "/faq",
    },
  ];

  const issues = [
    {
      question: "I can't log in to my account",
      answer:
        "Check that your registered email and password are correct. If you forgot your password, use the Forgot Password option on the Login page. If the problem continues, contact Optiora Support.",
    },
    {
      question: "My dashboard data is not updating",
      answer:
        "Refresh the dashboard and check your internet connection. If the data still does not update, verify that your sales, product, and customer information has been entered correctly.",
    },
    {
      question: "I don't understand my AI predictions",
      answer:
        "AI predictions are generated using the available business data. The prediction section shows the expected trend and supporting information to help you understand the result.",
    },
    {
      question: "My sales forecast looks incorrect",
      answer:
        "Forecast accuracy depends on the amount and quality of historical sales data. Make sure your sales records are complete and consistent. More historical data can help improve the forecast.",
    },
    {
      question: "I'm having trouble with my account",
      answer:
        "Check your account details and try logging in again. If the issue remains, contact Optiora Support with your registered email and a description of the problem.",
    },
  ];

  const filteredTopics = topics.filter((topic) => {
    const query = searchQuery.toLowerCase();

    return (
      topic.title.toLowerCase().includes(query) ||
      topic.description.toLowerCase().includes(query)
    );
  });

  const filteredIssues = issues.filter((issue) => {
    const query = searchQuery.toLowerCase();

    return (
      issue.question.toLowerCase().includes(query) ||
      issue.answer.toLowerCase().includes(query)
    );
  });

  const handleTroubleshooting = () => {
    const element = document.getElementById("common-issues");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* OVERLAY */}

      <div
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* SUPPORT PANEL */}

      <aside
        className="fixed left-0 top-0 z-[70] flex h-full w-full flex-col overflow-hidden border-r border-white/10 bg-cover bg-center bg-no-repeat text-white shadow-2xl sm:w-[85%] lg:w-[68%] xl:w-[65%]"
        style={{
          backgroundImage: "url('/images/support1.jpg')",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* BACKGROUND OVERLAY */}

        <div className="absolute inset-0 bg-[#030712]/80" />

        {/* PANEL CONTENT */}

        <div className="relative z-10 flex h-full flex-col">

          {/* HEADER */}

          <div className="flex items-center justify-between border-b border-white/10 bg-[#030712]/40 px-6 py-5 backdrop-blur-md sm:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Optiora Support
              </p>

              <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                How can we help?
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <X size={20} />
            </button>
          </div>

          {/* SCROLLABLE CONTENT */}

          <div className="flex-1 overflow-y-auto">

            {/* HERO */}

            <section className="relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />

              <div className="relative">
                <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
                  Get the help you need
                  <span className="text-cyan-400">.</span>
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                  Find answers, explore guides, troubleshoot problems,
                  or contact the Optiora support team.
                </p>

                {/* SEARCH */}

                <div className="relative mt-6 max-w-2xl">
                  <Search
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) =>
                      setSearchQuery(e.target.value)
                    }
                    placeholder="Search for help, features, or solutions..."
                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-4 text-sm text-white outline-none backdrop-blur-md placeholder:text-gray-600 focus:border-cyan-400/50"
                  />
                </div>
              </div>
            </section>

            {/* QUICK SUPPORT */}

            <section className="px-6 pb-8 sm:px-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-400">
                Quick Support
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {filteredTopics.map((topic, index) => {
                  if (topic.type === "pdf") {
                    return (
                      <a
                        key={index}
                        href={topic.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-md transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                            {topic.icon}
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400">
                              {topic.title}
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-gray-400">
                              {topic.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  }

                  if (topic.action === "issues") {
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={handleTroubleshooting}
                        className="group rounded-2xl border border-white/10 bg-black/30 p-5 text-left backdrop-blur-md transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]"
                      >
                        <TopicContent topic={topic} />
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={index}
                      to={topic.link}
                      onClick={onClose}
                      className="group rounded-2xl border border-white/10 bg-black/30 p-5 text-left backdrop-blur-md transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]"
                    >
                      <TopicContent topic={topic} />
                    </Link>
                  );
                })}
              </div>

              {filteredTopics.length === 0 && (
                <p className="rounded-xl border border-white/10 bg-black/30 p-5 text-center text-sm text-gray-500 backdrop-blur-md">
                  No matching support topic found.
                </p>
              )}
            </section>

            {/* COMMON ISSUES */}

            <section
              id="common-issues"
              className="border-t border-white/10 px-6 py-8 sm:px-8"
            >
              <h3 className="text-lg font-semibold">
                Common Issues
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Find quick solutions to common Optiora problems.
              </p>

              <div className="mt-5 space-y-3">
                {filteredIssues.length > 0 ? (
                  filteredIssues.map((issue, index) => (
                    <SupportQuestion
                      key={index}
                      question={issue.question}
                      answer={issue.answer}
                    />
                  ))
                ) : (
                  <p className="rounded-xl border border-white/10 bg-black/30 p-5 text-center text-sm text-gray-500 backdrop-blur-md">
                    No matching issue found.
                  </p>
                )}
              </div>
            </section>

            {/* CONTACT SUPPORT */}

            <section className="px-6 pb-8 sm:px-8">
              <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 p-6 backdrop-blur-md">
                <MessageCircle
                  size={28}
                  className="text-cyan-400"
                />

                <h3 className="mt-4 text-xl font-semibold">
                  Still need help?
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                  Can't find what you're looking for?
                  Send us a message and our team will help you.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    onClose();

                    if (onContactClick) {
                      onContactClick();
                    }
                  }}
                  className="mt-5 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  Contact Support
                </button>
              </div>
            </section>

            {/* FOOTER */}

            <div className="border-t border-white/10 px-6 py-6 text-center">
              <p className="text-xs text-gray-600">
                Optiora Support • Intelligent Business Growth &
                Predictive Analytics
              </p>
            </div>

          </div>
        </div>
      </aside>
    </>
  );
}

/* =========================================================
   QUICK SUPPORT CARD CONTENT
========================================================= */

function TopicContent({ topic }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        {topic.icon}
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between gap-3">
          <h4 className="font-semibold text-white">
            {topic.title}
          </h4>

          <ChevronRight
            size={17}
            className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-cyan-400"
          />
        </div>

        <p className="mt-1.5 text-xs leading-5 text-gray-500">
          {topic.description}
        </p>
      </div>
    </div>
  );
}

export default SupportPanel;