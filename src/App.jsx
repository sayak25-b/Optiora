import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import ContactPanel from "./components/ContactPanel";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Comparison from "./components/Comparison";
import IntelligenceEngine from "./components/IntelligenceEngine";
import DashboardPreview from "./components/DashboardPreview";
import BusinessSection from "./components/BusinessSection";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Guides from "./pages/Guides"; 
import SupportPanel from "./components/SupportPanel";


import Footer from "./components/Footer";

import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

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

      <Footer
        onContactClick={() => setContactOpen(true)}
        onSupportClick={() => setSupportOpen(true)}
      />

      <ContactPanel
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <SupportPanel
  isOpen={supportOpen}
  onClose={() => setSupportOpen(false)}
  onContactClick={() => setContactOpen(true)}
/>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />

        {/* FAQ */}
        <Route path="/faq" element={<FAQ />} />

        {/* Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Terms of Service */}
        <Route path="/terms" element={<Terms />} />

        {/* Guides */}
        <Route path="/guides" element={<Guides />} />

      </Routes>
    </div>
  );
}

export default App;