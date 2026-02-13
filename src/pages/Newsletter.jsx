// Importing React library
// React helps us create components (parts of website)
import React from "react";

// Importing PDF file from assets folder
// This PDF will open or download when user clicks button
import newsletterPDF from "../assets/Newsletter2025.pdf";

// Creating Newsletter component
// This page shows latest newsletter and old newsletters
const Newsletter = () => {

  // return means what we want to show on screen
  return (

    // Main section container
    // bg-[#dcdcdc] → light grey background
    // py-20 → padding top and bottom
    // font-serif → serif style font
    // text-black → black text color
    <section className="bg-[#dcdcdc] py-20 font-serif text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= PAGE TITLE ================= */}
        {/* Big heading at top of page */}
        <h1 className="text-5xl font-bold mb-12">
          Newsletter
        </h1>

        {/* ================= LATEST ISSUE SECTION ================= */}
        {/* White box that shows newest newsletter */}
        <div className="bg-white p-10 rounded-2xl shadow-lg mb-16">

          {/* Section heading */}
          <h2 className="text-3xl font-bold mb-6">
            Newsletter Latest Issue
          </h2>

          {/* Newsletter name */}
          <p className="text-xl mb-6">
            IAP-ID Newsletter 2025 – Current Edition
          </p>

          {/* Buttons section */}
          <div className="flex gap-6">

            {/* Button to view PDF in new tab */}
            <a
              href={newsletterPDF}          // PDF file link
              target="_blank"               // Opens in new tab
              rel="noopener noreferrer"     // Security purpose
              className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition"
            >
              View PDF
            </a>

            {/* Button to download PDF */}
            <a
              href={newsletterPDF}
              download                      // This makes file download
              className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* ================= ARCHIVES SECTION ================= */}

        {/* Heading for old newsletters */}
        <h2 className="text-3xl font-bold mb-8">
          Archives
        </h2>

        {/* Table container */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

          {/* Table */}
          <table className="w-full text-lg">

            {/* Table Head (Top Row) */}
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="py-4 px-6 text-left">Year</th>
                <th className="py-4 px-6 text-left">January Issue</th>
                <th className="py-4 px-6 text-left">July Issue</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y">

              {/*
                This is an ARRAY (list) of newsletters.
                Each row has:
                [Year, January Issue, July Issue]

                .map() is used to automatically create table rows
                instead of writing each row manually.
              */}
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

                // Creating one table row for each item
                <tr key={index} className="hover:bg-gray-100 transition">

                  {/* Year column */}
                  <td className="py-4 px-6 font-semibold">
                    {row[0]}
                  </td>

                  {/* January issue column */}
                  <td className="py-4 px-6 text-orange-600 cursor-pointer hover:underline">
                    {row[1]}
                  </td>

                  {/* July issue column */}
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

// Exporting Newsletter component
// So we can use it in App.js or other pages
export default Newsletter;
