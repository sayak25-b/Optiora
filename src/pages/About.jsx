import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  FaChartLine,
  FaBrain,
  FaUsers,
  FaBoxes,
  FaBullseye,
  FaChevronLeft, FaChevronRight,
  FaEye,
   FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Sayak Bhattacharya",
    role: "Backend & API Developer",
    description: "Develops server-side logic, REST APIs, database integration, and application functionality.",
    image: "/team/sayak.jpg",
    github: "https://github.com/sayak25-b",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:optioraofficial@gmail.com",
  },
  {
    name: "Ritam Manna",
    role: "Frontend Developer",
    description: "Works on responsive interfaces, reusable components, and the user experience.",
    image: "/team/ritam.jpg",
    github: "#",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:optioraofficial@gmail.com",
  },
  {
    name: "Arpan Santra",
    role: "Machine Learning Developer",
    description: "Works on predictive models, data analysis, and machine learning integration.",
    image: "/team/arpan.jpg",
    github: "#",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:optioraofficial@gmail.com",
  },
  {
    name: "Sk. Habib Hossain",
    role: "Testing & Integration",
    description: "Focuses on application testing, integration checks, and overall reliability.",
    image: "/team/habib.jpg",
    github: "#",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:optioraofficial@gmail.com",
  },
];

const features = [
  {
    icon: FaChartLine,
    title: "Business Analytics",
    description:
      "Understand sales performance and business trends through clear, informative dashboards.",
  },
  {
    icon: FaBrain,
    title: "AI-Powered Insights",
    description:
      "Transform business data into meaningful insights to support informed decisions.",
  },
  {
    icon: FaBoxes,
    title: "Demand Prediction",
    description:
      "Estimate future product demand and make smarter inventory planning decisions.",
  },
  {
    icon: FaUsers,
    title: "Customer Insights",
    description:
      "Explore customer behaviour and identify patterns that can help improve retention.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Collect",
    description: "Bring business information together in one place.",
  },
  {
    number: "02",
    title: "Analyze",
    description: "Discover patterns in sales, products, and customers.",
  },
  {
    number: "03",
    title: "Predict",
    description: "Estimate possible future trends using predictive models.",
  },
  {
    number: "04",
    title: "Decide",
    description: "Use insights to plan practical business actions.",
  },
];

const technologies = [
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "Machine Learning",
];

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700 sm:text-sm">
      {eyebrow}
    </span>
    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
      {title}
    </h2>
    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
      {description}
    </p>
  </div>
);

export default function About() {
   const [teamIndex, setTeamIndex] = useState(0);
  return (
    <div className="min-h-screen overflow-x-clip bg-[#F8FAFC] text-slate-900">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.08),transparent_40%)]" />

          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-800 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                ABOUT OPTIORA
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Smarter insights.
                <span className="mt-1 block bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                  Better decisions.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Optiora is an intelligent business growth and predictive
                analytics platform designed to help businesses understand
                their data, anticipate trends, and make more informed
                decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-700"
                >
                  Get Started <FaArrowRight />
                </Link>

                <Link
                  to="/documentation"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700"
                >
                  Explore Documentation
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-600" />
                  Data-driven insights
                </span>
                <span className="flex items-center gap-2">
                  <FaCheckCircle className="text-cyan-600" />
                  Predictive analytics
                </span>
              </div>
            </div>

            {/* Visual panel */}
            <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Business Intelligence
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Your business at a glance
                  </p>
                </div>
                <span className="rounded-lg bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-700">
                  Analytics
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <FaChartLine className="text-xl text-cyan-600" />
                  <p className="mt-4 text-sm text-slate-500">Sales Trends</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    Performance
                  </p>
                  <div className="mt-4 flex h-12 items-end gap-1.5">
                    {[35, 52, 42, 70, 56, 85, 67, 100].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-cyan-500/80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <FaBrain className="text-xl text-violet-600" />
                  <p className="mt-4 text-sm text-slate-500">
                    Predictive Analysis
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    Future Trends
                  </p>
                  <div className="mt-5 space-y-3">
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-4/5 rounded-full bg-violet-500" />
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-3/5 rounded-full bg-cyan-500" />
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-2/3 rounded-full bg-indigo-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-violet-600 p-5 text-white">
                <p className="text-sm font-medium text-white/80">
                  The Optiora approach
                </p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">
                  Data into direction.
                </p>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  Understand your business today and prepare for tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                WHO WE ARE
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Making business data easier to understand.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Businesses generate valuable information every day, but
                understanding that information can be challenging. Optiora
                aims to bring analytics, forecasting, and business insights
                into one accessible platform.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Our project combines web development and machine learning
                concepts to explore how data can support inventory planning,
                sales analysis, and customer-related decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-xl text-cyan-700">
                  <FaBullseye />
                </div>
                <h3 className="mt-5 text-lg font-bold">Our Mission</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Make business analytics more understandable and actionable
                  through a practical, user-friendly platform.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-xl text-violet-700">
                  <FaEye />
                </div>
                <h3 className="mt-5 text-lg font-bold">Our Vision</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Explore how predictive technologies can help businesses
                  plan ahead and grow with greater confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-y border-slate-200 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeading
              eyebrow="WHAT WE OFFER"
              title="Built around business intelligence"
              description="A unified approach to understanding business performance, identifying trends, and planning ahead."
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="h-full rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-900/5 sm:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-xl text-cyan-700">
                      <Icon />
                    </div>
                    <h3 className="mt-5 text-lg font-bold leading-snug text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeading
              eyebrow="HOW IT WORKS"
              title="From raw data to informed decisions"
              description="Optiora follows a straightforward workflow that helps turn business information into useful insights."
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step, index) => (
                <article
                  key={step.number}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
                >
                  <span className="text-3xl font-extrabold text-cyan-600/30">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                  {index < workflow.length - 1 && (
                    <FaArrowRight className="absolute right-5 top-8 hidden text-sm text-cyan-500 lg:block" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="border-y border-slate-200 bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
          <div className="mx-auto w-full max-w-5xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              OUR TECHNOLOGY
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Technologies behind Optiora
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              The project brings together modern web technologies, database
              management, and machine learning.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>




{/* Team Section */}
<section id="team" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div className="mb-10 text-center sm:mb-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 sm:text-sm">
        Meet Our Team
      </p>

      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        The People Behind{" "}
        <span className="text-cyan-600">Optiora</span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
        A team of developers working together to build intelligent
        business analytics and growth solutions.
      </p>
    </div>

    {/* Mobile Carousel */}
    <div className="md:hidden">
      <div className="mx-auto max-w-sm">

        <article
          key={team[teamIndex].name}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
        >
          {/* Member Image */}
          <div className="relative aspect-[3/3] overflow-hidden bg-slate-100">
            <img
              src={team[teamIndex].image}
              alt={team[teamIndex].name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Member Details */}
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-slate-900">
              {team[teamIndex].name}
            </h3>

            <p className="mt-2 text-sm font-semibold text-cyan-600">
              {team[teamIndex].role}
            </p>

            <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
              {team[teamIndex].description}
            </p>

            {/* Social Icons - Always Visible */}
            <div className="mt-5 flex items-center justify-center gap-3 border-t border-slate-100 pt-5">
              <a
                href={team[teamIndex].github !== "#" ? team[teamIndex].github : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-slate-400 hover:bg-slate-100"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={
                  team[teamIndex].linkedin !== "https://www.linkedin.com/"
                    ? team[teamIndex].linkedin
                    : undefined
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-sky-700 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href={team[teamIndex].email}
                aria-label="Email"
                title="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-cyan-700 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </article>

        {/* Carousel Controls */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() =>
              setTeamIndex((prev) =>
                prev === 0 ? team.length - 1 : prev - 1
              )
            }
            aria-label="Previous team member"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700"
          >
            <FaChevronLeft />
          </button>

          <div className="flex items-center gap-2">
            {team.map((member, index) => (
              <button
                key={member.name}
                type="button"
                onClick={() => setTeamIndex(index)}
                aria-label={`Show ${member.name}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === teamIndex
                    ? "w-7 bg-cyan-600"
                    : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setTeamIndex((prev) =>
                prev === team.length - 1 ? 0 : prev + 1
              )
            }
            aria-label="Next team member"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700"
          >
            <FaChevronRight />
          </button>
        </div>

        <p className="mt-3 text-center text-xs text-slate-500">
          {teamIndex + 1} of {team.length} team members
        </p>
      </div>
    </div>

    {/* Desktop / Tablet Grid */}
    <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-4">
      {team.map((member) => (
        <article
          key={member.name}
          className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
        >
          {/* Member Image */}
          <div className="relative aspect-[3/3] overflow-hidden bg-slate-100">
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
            />
          </div>

          {/* Member Details */}
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-lg font-bold leading-snug text-slate-900">
              {member.name}
            </h3>

            <p className="mt-2 min-h-10 text-sm font-semibold text-cyan-600">
              {member.role}
            </p>

            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
              {member.description}
            </p>

            {/* Social Icons - Always Visible */}
            <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
              <a
                href={member.github !== "#" ? member.github : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} GitHub`}
                title="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-slate-400 hover:bg-slate-100"
              >
                <FaGithub size={17} />
              </a>

              <a
                href={
                  member.linkedin !== "https://www.linkedin.com/"
                    ? member.linkedin
                    : undefined
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
                title="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-sky-700 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href={member.email}
                aria-label={`Email ${member.name}`}
                title="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-cyan-700 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-50"
              >
                <FaEnvelope size={17} />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

{/* Mentor Section */}
<section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
  <div className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-10 lg:p-12">
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
      Academic Guidance
    </span>

    <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
      Project Mentor
    </h2>

    <p className="mt-4 text-lg font-semibold text-slate-800">
      Prof. Suity Roy
    </p>

    <p className="mt-2 text-sm leading-6 text-slate-600">
      Department of Computer Science & Engineering
    </p>

    <p className="text-sm leading-6 text-slate-600">
      College of Engineering & Management, Kolaghat
    </p>
  </div>
</section>


        {/* CTA */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-700 via-cyan-600 to-violet-600 px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -bottom-32 -left-10 h-64 w-64 rounded-full border border-white/15" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Ready to explore smarter business insights?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                Discover how Optiora brings business analytics and predictive
                thinking together in one platform.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-cyan-800 transition hover:bg-cyan-50"
                >
                  Get Started <FaArrowRight />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-5 py-7 sm:px-8 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Optiora. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <Link className="transition hover:text-cyan-700" to="/">
              Home
            </Link>
            <Link className="transition hover:text-cyan-700" to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="transition hover:text-cyan-700" to="/terms">
              Terms
            </Link>
            <Link className="transition hover:text-cyan-700" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
