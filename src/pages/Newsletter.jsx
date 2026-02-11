import React from "react";
import newsletterPDF from "../assets/Newsletter2025.pdf";

const Newsletter = () => {
  return (
    <section className="bg-[#dcdcdc] py-20 font-serif text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold mb-12">
          Newsletter
        </h1>

        {/* LATEST ISSUE */}
        <div className="bg-white p-10 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Newsletter Latest Issue
          </h2>

          <p className="text-xl mb-6">
            IAP-ID Newsletter 2025 – Current Edition
          </p>

          <div className="flex gap-6">
            <a
              href={newsletterPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
            >
              View PDF
            </a>

            <a
              href={newsletterPDF}
              download
              className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* ARCHIVES SECTION */}
        <h2 className="text-3xl font-bold mb-8">
          Archives
        </h2>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
          <table className="w-full text-lg">
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="py-4 px-6 text-left">Year</th>
                <th className="py-4 px-6 text-left">January Issue</th>
                <th className="py-4 px-6 text-left">July Issue</th>
              </tr>
            </thead>

            <tbody className="divide-y">

              {[
                ["2025", "News Letter 2025", "News Letter 2025"],
                ["2024", "News Letter 2024", "News Letter 2024"],
                ["2023", "News Letter 2023 Part 2", "News Letter 2023 Part 2"],
                ["2023", "News Letter 2023 Part 1", "News Letter 2023 Part 1"],
                ["2022", "News Letter 2022", "News Letter 2022"],
                ["2021", "News Letter 2021", "News Letter 2021"],
                ["2019", "Vol 22, No.2, Jan 2019", "Vol 21, No.2, July 2018 & Vol 22, No.1, Jan 2019"],
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
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-100 transition">
                  <td className="py-4 px-6 font-semibold">{row[0]}</td>
                  <td className="py-4 px-6 text-orange-600 cursor-pointer hover:underline">
                    {row[1]}
                  </td>
                  <td className="py-4 px-6 text-orange-600 cursor-pointer hover:underline">
                    {row[2]}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;

