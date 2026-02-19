import React from "react";
import { Megaphone, MapPin, Calendar, Gift, CheckCircle, Mail, Download } from "lucide-react";

// Poster image import
import apiapImg from "../assets/ap-iap-2025.png";

const APIAP2025 = () => {
  return (
    <section className="bg-white py-12 md:py-20 font-sans text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Grid: Left (Poster) | Center (Info) | Right (Downloads) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ================= LEFT SIDE: POSTER ================= */}
          <div className="lg:col-span-3 flex justify-center lg:block">
            <div className="sticky top-10">
              <img
                src={apiapImg}
                alt="14th AP-IAP 2025 Bangkok"
                className="w-full max-w-sm lg:max-w-full rounded-2xl shadow-2xl border border-gray-100"
              />
            </div>
          </div>

          {/* ================= CENTER: CONTENT ================= */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* About Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Megaphone className="text-orange-500" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">About the Opportunity</h2>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                We are excited to announce an incredible opportunity for young Indian pathologists to showcase 
                their research at the prestigious <span className="text-red-600 font-bold">14th Asia Pacific International Academy of Pathology Congress (AP-IAP 2025)</span>.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="text-yellow-600 mt-1" size={20} />
                  <p className="text-lg"><strong>Venue:</strong> Centara Grand at Central Plaza Ladprao, Bangkok, Thailand</p>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="text-yellow-600 mt-1" size={20} />
                  <p className="text-lg"><strong>Dates:</strong> November 5 – 7, 2025</p>
                </div>
              </div>
            </div>

            {/* Bursary Details */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Gift className="text-orange-500" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">Bursary Details</h2>
              </div>
              <ul className="space-y-3 ml-10">
                <li className="flex items-center gap-2 text-lg">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  Free Registration for the Congress
                </li>
                <li className="flex items-center gap-2 text-lg">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  Cash Grant of 10,000 Thai Baht
                </li>
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-orange-500" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">Eligibility Criteria</h2>
              </div>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-2 text-lg">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  Completed MD/DNB in Pathology
                </li>
                <li className="flex items-start gap-2 text-lg">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  Age below 35 years
                </li>
                <li className="flex items-start gap-2 text-lg italic">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  Must be a Member of IAP-ID (*Membership can be applied for during submission*)
                </li>
              </ul>
            </div>

            {/* How to Apply */}
            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-orange-500">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-orange-500" size={28} />
                <h2 className="text-3xl font-bold text-gray-900">How to Apply</h2>
              </div>
              <p className="font-bold mb-4 text-lg">Steps to Submit Your Abstract:</p>
              <ul className="space-y-4 ml-6 list-disc text-lg">
                <li>Write your abstract as per the guidelines (attached below).</li>
                <li>Complete the IAP-ID membership application form (if not already a member).</li>
                <li>
                  Email both documents to <a href="mailto:secretary.IAPID25@gmail.com" className="text-red-600 font-bold underline">secretary.IAPID25@gmail.com</a> before <span className="font-bold text-black">May 30, 2025</span>.
                </li>
              </ul>
              <p className="mt-6 text-xl font-bold text-gray-900 underline underline-offset-4 decoration-red-500">
                Deadline for Submission: May 30, 2025
              </p>
            </div>

            {/* Candidate Announcement Section */}
            <div className="border-t pt-10">
               <a href="#" className="text-blue-600 underline text-lg block mb-6 font-semibold italic">Candidate announcement for APIAP thailand</a>
               <div className="space-y-2 text-lg">
                 <p><strong>Name:</strong> Dr Surabhi Jain</p>
                 <p><strong>Institute:</strong> AIIMS New Delhi.</p>
                 <p className="text-pink-600 font-medium bg-pink-50 p-3 rounded-lg border-l-4 border-pink-400">
                   <strong>Topic :</strong> Copy number alterations of 9p24 can differentiate between Hodgkin lymphoma and Peripheral T-cell lymphomas: A diagnostic surrogate.
                 </p>
               </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: DOWNLOAD BOX ================= */}
          <div className="lg:col-span-3">
            <div className="bg-[#f3f4f6] rounded-xl overflow-hidden shadow-sm border border-gray-200 sticky top-10">
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Download size={18} /> Download Documents
                </h2>
              </div>
              <ul className="p-6 space-y-5">
                <li>
                  <a href="/Abstract template 2025.docx" download className="text-pink-600 hover:text-pink-800 text-sm md:text-base font-medium transition-colors hover:underline block leading-tight">
                    Abstract Template 2025
                  </a>
                </li>
                <li>
                  <a href="/Application form.docx" download className="text-pink-600 hover:text-pink-800 text-sm md:text-base font-medium transition-colors hover:underline block leading-tight">
                    IAP-ID Membership Application Form
                  </a>
                </li>
                <li>
                  <a href="/E-poster preparation guide.pdf" download className="text-pink-600 hover:text-pink-800 text-sm md:text-base font-medium transition-colors hover:underline block leading-tight">
                    E-poster Preparation Guide
                  </a>
                </li>
                <li>
                  <a href="/Indian Division_Traval bursaries letter IAP Thailand.pdf" download className="text-pink-600 hover:text-pink-800 text-sm md:text-base font-medium transition-colors hover:underline block leading-tight">
                    Indian Division Travel Bursaries Letter IAP Thailand
                  </a>
                </li>
                <li>
                  <a href="/Poster template 2025.pptx" download className="text-pink-600 hover:text-pink-800 text-sm md:text-base font-medium transition-colors hover:underline block leading-tight">
                    Poster Template 2025
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default APIAP2025;