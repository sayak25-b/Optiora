import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Comparison from "./components/Comparison";
import IntelligenceEngine from "./components/IntelligenceEngine";
import DashboardPreview from "./components/DashboardPreview";
import BusinessSection from "./components/BusinessSection";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Comparison />
        <IntelligenceEngine />
        <DashboardPreview />
        <BusinessSection />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  );
}

export default App;