import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaShareAlt, FaTimes } from "react-icons/fa";
import { MessageSquareText } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Membership from "./pages/Membership";
import Conference from "./pages/Conference";
import GalleryPage from "./pages/GalleryPage";
import GalleryFolder from "./pages/GalleryFolder";
import APIAP2025 from "./pages/AP_IAP_2025";
import Newsletter from "./pages/Newsletter";
import Programs from "./pages/Programs";
import IAPBulletin from "./pages/IAPBulletin";

function App() {
  const [showNews, setShowNews] = useState(false);
  const sliderRef = useRef(null);

  const newsList = [
    "Mid year teaching program, MYTP 2026",
    "XXVIIth Annual CME of the International Academy of Pathology-Indian Division",
    "Dr Surabhi Jain. AIIIMS New Delhi.",
    "Mid-year Teaching Program: 6-7 th April 2025",
    "IAPID mid year teaching program- Chandigarh on Autopsy Pathology. 6th and 7th April 2025."
  ];

  // 🚀 Auto Vertical Scroll
  useEffect(() => {
    if (!showNews) return;

    const slider = sliderRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (!slider) return;

      scrollAmount += 1;
      slider.scrollTop = scrollAmount;

      if (scrollAmount >= slider.scrollHeight - slider.clientHeight) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(autoScroll, 30);
    return () => clearInterval(interval);

  }, [showNews]);

  return (
    <Router>

      {/* 🔥 Left Side Floating Button (IAP 2024 Share Link) */}
      <a
        href="https://app.gleanin.com/share/campaigns/24274/variants"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-[9999] 
                   flex items-center gap-2
                   bg-black/80 backdrop-blur-md
                   hover:bg-black
                   text-white px-6 py-3 
                   rounded-full shadow-2xl 
                   transition-all duration-300"
      >
        <FaShareAlt className="text-sm" />
        IAP 2024
      </a>


      {/* 🟡 Right Floating Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-[9999] md:hidden">

        <span className="absolute -top-2 -right-2 
                         bg-red-600 text-white 
                         text-[10px] font-bold 
                         px-2 py-[2px] 
                         rounded-full
                         animate-pulse">
          NEW
        </span>

        <button
          onClick={() => setShowNews(true)}
          className="w-14 h-14 bg-yellow-500 hover:bg-yellow-600
                     rounded-full flex items-center justify-center shadow-xl">
          <MessageSquareText size={26} className="text-black" />
        </button>
      </div>


      {/* 📢 Latest News Bottom Sheet */}
      {showNews && (
        <div className="fixed inset-0 z-[9999] flex items-end md:hidden">

          {/* ❌ No Blur Background */}
          <div
            onClick={() => setShowNews(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* Bottom Card */}
          <div className="relative w-full bg-[#4f4747] 
                          rounded-t-3xl p-6 
                          max-h-[80vh] shadow-2xl
                          animate-slideUp">

            {/* Header */}
            <div className="flex justify-between items-center 
                            bg-yellow-500 text-black 
                            text-lg font-semibold 
                            px-4 py-3 rounded-xl mb-6">
              Latest News
              <FaTimes
                className="cursor-pointer"
                onClick={() => setShowNews(false)}
              />
            </div>

            {/* 🚀 Auto Moving News */}
            <div
              ref={sliderRef}
              className="overflow-hidden max-h-[55vh] space-y-5 text-white text-sm"
            >
              {newsList.map((news, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-lg">
                  <p>{news}</p>

                  <span className="inline-block mt-2 
                                   bg-red-600 text-white 
                                   text-[10px] font-bold 
                                   px-3 py-1 
                                   rounded-full 
                                   animate-pulse">
                    NEW
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:folderName" element={<GalleryFolder />} />
        <Route path="/ap-iap-2025" element={<APIAP2025 />} />
        <Route path="/program" element={<Programs />} />
        <Route path="/iap-bulletin" element={<IAPBulletin />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;