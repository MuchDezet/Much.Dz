// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Services from "./components/Services.jsx";
import LetsConnectPage from "./components/LetsConnectPage.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Play from "./pages/Play.jsx";
import Loader from "./components/Loader.jsx";
import SectionSeparator from "./components/SectionSeparator";
import MobileDeviceNotification from "./components/MobileDeviceNotification"; // Tambahkan impor ini

import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  // Minimum display time for the loader
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(minLoadTime);
  }, []);

  const handleLoadingComplete = () => {
    // Tidak langsung setLoading(false) di sini, biarkan useEffect yang mengatur
  };

  return (
    <Router>
      <main className="bg-[#101010] min-h-screen">
        {/* Tambahkan MobileDeviceNotification di sini */}
        <MobileDeviceNotification />

        {loading && <Loader onLoadingComplete={handleLoadingComplete} />}
        <div
          className={`font-primary transition-opacity duration-700 ease-in-out ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Work />
                  <SectionSeparator />
                  <Services />
                  <SectionSeparator />
                  <LetsConnectPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <Footer />
                </>
              }
            />
            <Route path="/play" element={<Play />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;