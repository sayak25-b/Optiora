import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

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

    alert("Login successful! Dashboard will be connected next.");

    // Later:
    // navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#030712] px-4 py-8 text-white">

      {/* Back */}
      <Link
        to="/"
        className="mx-auto mb-6 flex max-w-6xl items-center gap-2 text-sm text-gray-400 hover:text-cyan-400"
      >
        <ArrowLeft size={17} />
        Back to Optiora
      </Link>

      {/* Main Box */}
      <div className="mx-auto flex max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#080d18] shadow-2xl">

        {/* ================= LEFT LOGIN ================= */}
        <div className="w-full p-8 sm:p-12 lg:w-[58%]">

          <div className="mb-10">
            <h1 className="text-3xl font-bold">
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Login to continue to your Optiora dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
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
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3.5 pl-11 pr-4 text-sm outline-none placeholder:text-gray-600 focus:border-cyan-400/50"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex justify-between">
                <label className="text-sm text-gray-300">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs text-cyan-400 hover:underline"
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
                  className="w-full rounded-xl border border-white/10 bg-black/20 py-3.5 pl-11 pr-4 text-sm outline-none placeholder:text-gray-600 focus:border-cyan-400/50"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-400 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Login
            </button>

          </form>

          {/* Register */}
          <p className="mt-8 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-cyan-400 hover:underline"
            >
              Create an account
            </Link>
          </p>

        </div>

        {/* ================= RIGHT BRAND ================= */}
        <div className="relative hidden w-[42%] overflow-hidden border-l border-white/10 bg-gradient-to-br from-cyan-400/10 via-[#08111e] to-[#030712] lg:flex">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative flex flex-col justify-between p-12">

            {/* Logo */}
            <div>
              <Link to="/" className="text-3xl font-bold">
                Optiora<span className="text-cyan-400">.</span>
              </Link>

              <div className="mt-12">

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  Intelligent Business Growth
                </p>

                <h2 className="text-4xl font-bold leading-tight">
                  Know your
                  <br />
                  business.
                  <br />
                  <span className="text-cyan-400">
                    Grow smarter.
                  </span>
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
                  From sales forecasting to customer insights,
                  Optiora transforms your business data into
                  meaningful actions.
                </p>

              </div>
            </div>

            {/* Bottom */}
            <div>

              <div className="mb-6 h-px w-full bg-white/10" />

              <p className="text-sm font-medium text-gray-300">
                AI-Powered Business Growth
              </p>

              <p className="mt-2 text-xs text-gray-500">
                Predict. Understand. Grow.
              </p>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}