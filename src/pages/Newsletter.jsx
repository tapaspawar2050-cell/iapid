import React from "react";

// Assets
import newsletterPDF from "../assets/Newsletter2025.pdf";
import newsletterFullImg from "../assets/newsletter.jpg"; 

const Newsletter = () => {
  // Archives Data as per your list
  const archiveData = [
    ["2025", "News Letter 2025", "News Letter 2025"],
    ["2024", "News Letter 2024", "News Letter 2024"],
    ["2023", "News Letter 2023 Part 2", "News Letter 2023 Part 2"],
    ["2023", "News Letter 2023 Part 1", "News Letter 2023 Part 1"],
    ["2022", "News Letter 2022", "News Letter 2022"],
    ["2021", "News Letter 2021", "News Letter 2021"],
    ["2019", "Vol 22, No.2, Jan 2019", "Vol 21, No. 2, July 2018 & Vol 22, No.1, Jan 2019"],
    ["2015", "Volume 18, No.1", "Volume 18, No.2"],
    ["2013", "Volume 16, No.1", "Volume 16, No.2"],
    ["2012", "Volume 15, No.1", "Volume 15, No.2"],
    ["2011", "Volume 14, No.1", "Volume 14, No.1"],
    ["2010", "Volume 13, No.1", "Volume 13, No.2"],
    ["2009", "Volume 12, No.1", "Volume 12, No.2"],
    ["2008", "Volume 11, No.1", "Volume 11, No.2"],
    ["2007", "Volume 10, No.1", "Volume 10, No.2"],
    ["2006", "Volume 09, No.1", "Volume 09, No.2"],
    ["2005", "Volume 08, No.1", "Volume 08, No.1"],
  ];

  return (
    <div className="bg-[#f0f2f5] full-h-screen font-sans">
      
      {/* 1. HEADER TITLE */}
      <div className="max-w-6xl mx-auto pt-12 px-6">
        <h1 className="text-4xl font-bold text-[#003366] mb-2">Newsletter Latest Issue</h1>
        <div className="w-20 h-1 bg-orange-500 mb-8"></div>
      </div>

      {/* 2. FULL IMAGE SECTION (newsletter.jpg) */}
      {/* Is section mein poori image dikhegi bina kisi sidebar code ke */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-12">
        <div className="bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-300">
          <img 
            src={newsletterFullImg} 
            alt="IAP-ID Newsletter Full Page" 
            className="w-full h-auto block"
          />
        </div>

        {/* Action Buttons for PDF */}
        <div className="flex justify-center gap-6 mt-10">
          <a 
            href={newsletterPDF} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#003366] text-white px-8 py-3 rounded font-bold hover:bg-blue-900 transition shadow-md"
          >
            View Full PDF
          </a>
          <a 
            href={newsletterPDF} 
            download
            className="bg-orange-500 text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition shadow-md"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* 3. ARCHIVES TABLE SECTION */}
      <div className="max-w-6xl mx-auto px-6 pb-20 mt-20">
        <h2 className="text-3xl font-bold text-[#003366] mb-8">Archives</h2>
        
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-200">
                <th className="py-4 px-6 font-bold text-gray-700">Year</th>
                <th className="py-4 px-6 font-bold text-gray-700">January Issue</th>
                <th className="py-4 px-6 font-bold text-gray-700">July Issue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {archiveData.map((row, index) => (
                <tr key={index} className="hover:bg-blue-50 transition cursor-pointer">
                  <td className="py-3 px-6 font-semibold text-gray-600">{row[0]}</td>
                  <td className="py-3 px-6 text-blue-600 hover:underline">{row[1]}</td>
                  <td className="py-3 px-6 text-blue-600 hover:underline">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Newsletter;