import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  Mail,
  MapPin,
  Phone,
  User,
  Lock,
} from "lucide-react";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    organizationName: "",
    organizationAddress: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.terms) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    console.log(formData);

    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center px-4 py-8 text-white"
      style={{
        backgroundImage: "url('/images/register-bg.jpg')",
      }}
    >
      {/* ================= BACKGROUND OVERLAY ================= */}
      <div className="absolute inset-0 bg-[#030712]/65" />

      {/* ================= PAGE CONTENT ================= */}
      <div className="relative z-10">

        {/* Back */}
        <Link
          to="/"
          className="mx-auto mb-6 flex max-w-6xl items-center gap-2 text-sm text-gray-300 transition hover:text-cyan-400"
        >
          <ArrowLeft size={17} />
          Back to Optiora
        </Link>

        {/* ================= MAIN BOX ================= */}
        <div className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/95 shadow-2xl backdrop-blur-xl lg:flex-row">

          {/* ================= LEFT FORM ================= */}
          <div className="w-full p-6 sm:p-10 lg:w-[58%]">

            <div className="mb-7">
              <h1 className="text-3xl font-bold text-cyan-400">
                Create your account
              </h1>

              <p className="mt-2 text-sm text-gray-400">
                Start your 2-month free trial with Optiora.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Full Name */}
              <Input
                icon={<User size={17} />}
                label="Full Name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />

              {/* Organization Name */}
              <Input
                icon={<Building2 size={17} />}
                label="Organization Name"
                name="organizationName"
                placeholder="Enter organization name"
                value={formData.organizationName}
                onChange={handleChange}
              />

              {/* Organization Address */}
              <div>
                <label className="mb-1.5 block text-sm text-cyan-400">
                  Organization Address
                </label>

                <div className="relative">
                  <MapPin
                    size={17}
                    className="absolute left-4 top-4 text-gray-500"
                  />

                  <textarea
                    name="organizationAddress"
                    value={formData.organizationAddress}
                    onChange={handleChange}
                    placeholder="Enter complete organization address"
                    rows="2"
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/20 py-3 pl-11 pr-4 text-sm text-gray-800 outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50"
                  />
                </div>
              </div>

              {/* Mobile + Email */}
              <div className="grid gap-4 sm:grid-cols-2">

                <Input
                  icon={<Phone size={17} />}
                  label="Mobile Number"
                  name="mobileNumber"
                  type="tel"
                  placeholder="10-digit number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />

                <Input
                  icon={<Mail size={17} />}
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              {/* Password + Confirm Password */}
              <div className="grid gap-4 sm:grid-cols-2">

                <Input
                  icon={<Lock size={17} />}
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <Input
                  icon={<Lock size={17} />}
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

              </div>

              {/* Terms */}
              <label className="flex items-start gap-2 pt-1 text-xs text-gray-400">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="mt-0.5 accent-cyan-400"
                />

                <span>
                  I agree to the{" "}
                  <span className="text-cyan-400">
                    Terms & Conditions
                  </span>{" "}
                  and Privacy Policy.
                </span>
              </label>

              {/* Button */}
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-cyan-400 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Create Account
              </button>

            </form>

            {/* Login */}
            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-cyan-400 hover:underline"
              >
                Login
              </Link>
            </p>

          </div>

          {/* ================= RIGHT BRAND ================= */}
          <div className="relative flex w-full flex-col overflow-hidden border-t border-white/10 bg-gradient-to-br from-cyan-400/10 via-[#08111e] to-[#030712] lg:w-[42%] lg:border-l lg:border-t-0">

            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

            {/* Logo Watermark */}
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 top-10 h-52 w-52 object-contain opacity-[0.035]"
            />

            {/* Brand Content */}
            <div className="relative flex h-full flex-col justify-between p-8 sm:p-10 lg:p-12">

              {/* Logo + Main Text */}
              <div>

                <Link
                  to="/"
                  className="flex items-center gap-3 text-3xl font-bold tracking-tight"
                >
                  <img
                    src="/logo.png"
                    alt="Optiora"
                    className="h-10 w-10 object-contain"
                  />

                  <span>
                    Optiora<span className="text-cyan-400">.</span>
                  </span>
                </Link>

                <div className="mt-8 lg:mt-12">

                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                    Intelligent Business Growth
                  </p>

                  <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                    Turn your data
                    <br />
                    into smarter
                    <br />
                    <span className="text-cyan-400">
                      decisions.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-6 text-gray-400">
                    Optiora helps businesses understand their data,
                    predict what comes next, and make better decisions
                    with AI-powered insights.
                  </p>

                </div>
              </div>

              {/* Bottom Stats */}
              <div className="mt-10">

                <div className="mb-6 h-px w-full bg-white/10" />

                <div className="grid grid-cols-2 gap-6">

                  <div>
                    <p className="text-2xl font-bold text-white">
                      AI
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Powered Insights
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-white">
                      2 Months
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Free Trial
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


/* ================= REUSABLE INPUT COMPONENT ================= */

function Input({
  icon,
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>

      {/* Cyan Label */}
      <label className="mb-1.5 block text-sm text-cyan-400">
        {label}
      </label>

      <div className="relative">

        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
          {icon}
        </div>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-11 pr-4 text-sm text-gray-800 outline-none placeholder:text-gray-600 transition focus:border-cyan-400/50"
        />

      </div>
    </div>
  );
}