import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Lock,
} from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    //alert("Login successful! Dashboard will be connected next.");

      window.location.href = "https://optiora-puce.vercel.app";
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center px-4 py-8 text-white"
      style={{
        backgroundImage: "url('/images/login-bg.jpg')",
      }}
    >
      {/* ================= BACKGROUND OVERLAY ================= */}

      <div className="absolute inset-0 bg-[#030712]/60" />

      {/* ================= SOFT GRADIENT ================= */}

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* ================= PAGE CONTENT ================= */}

      <div className="relative z-10">

        {/* ================= BACK ================= */}

        <Link
          to="/"
          className="mx-auto mb-6 flex max-w-6xl items-center gap-2 text-sm text-gray-300 transition hover:text-cyan-400"
        >
          <ArrowLeft size={17} />
          Back to Optiora
        </Link>

        {/* ================= MAIN BOX ================= */}

        <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#080d18]/90 shadow-2xl shadow-black/40 backdrop-blur-xl lg:flex-row">

          {/* ================= LEFT LOGIN ================= */}

          <div className="w-full p-6 sm:p-10 lg:w-[58%]">

            <div className="mb-8">

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Welcome Back
              </p>

              <h1 className="text-3xl font-bold">
                Welcome back
              </h1>

              <p className="mt-2 text-sm text-gray-400">
                Login to continue to your Optiora dashboard.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* ================= EMAIL ================= */}

              <div>

                <label className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-black/40"
                  />

                </div>

              </div>

              {/* ================= PASSWORD ================= */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label className="text-sm text-gray-300">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs text-cyan-400 transition hover:text-cyan-300 hover:underline"
                  >
                    Forgot password?
                  </button>

                </div>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/30 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/50 focus:bg-black/40"
                  />

                </div>

              </div>

              {/* ================= LOGIN BUTTON ================= */}

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-400 py-3.5 text-sm font-semibold text-black shadow-lg shadow-cyan-400/10 transition hover:bg-cyan-300 hover:shadow-cyan-400/20"
              >
                Login
              </button>

            </form>

            {/* ================= REGISTER ================= */}

            <p className="mt-7 text-center text-sm text-gray-400">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="font-medium text-cyan-400 transition hover:text-cyan-300 hover:underline"
              >
                Create an account
              </Link>

            </p>

          </div>

          {/* ================= RIGHT BRAND ================= */}

          <div className="relative flex w-full flex-col overflow-hidden border-t border-white/10 bg-gradient-to-br from-cyan-400/10 via-[#08111e]/95 to-[#030712]/95 lg:w-[42%] lg:border-l lg:border-t-0">

            {/* ================= GLOW ================= */}

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />

            {/* ================= WATERMARK ================= */}

            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 top-10 h-56 w-56 object-contain opacity-[0.035]"
            />

            {/* ================= BRAND CONTENT ================= */}

            <div className="relative flex h-full flex-col justify-between p-8 sm:p-10 lg:p-12">

              <div>

                {/* Logo */}

                <Link
                  to="/"
                  className="flex items-center gap-3"
                >

                  <img
                    src="/logo.png"
                    alt="Optiora"
                    className="h-10 w-10 object-contain"
                  />

                  <span className="text-3xl font-bold tracking-tight">
                    Optiora
                    <span className="text-cyan-400">
                      .
                    </span>
                  </span>

                </Link>

                {/* Main Text */}

                <div className="mt-10 lg:mt-14">

                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                    Intelligent Business Growth
                  </p>

                  <h2 className="text-3xl font-bold leading-tight sm:text-4xl">

                    Know your
                    <br />

                    business.
                    <br />

                    <span className="text-cyan-400">
                      Grow smarter.
                    </span>

                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-6 text-gray-400">
                    From sales forecasting to customer insights,
                    Optiora transforms your business data into
                    meaningful actions.
                  </p>

                </div>

              </div>

              {/* ================= BOTTOM ================= */}

              <div className="mt-10">

                <div className="mb-6 h-px w-full bg-white/10" />

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10">

                    <img
                      src="/logo.png"
                      alt=""
                      className="h-5 w-5 object-contain"
                    />

                  </div>

                  <div>

                    <p className="text-sm font-medium text-gray-300">
                      AI-Powered Business Growth
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Predict. Understand. Grow.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}