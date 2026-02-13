// Importing React library
import React from "react";

// This is AboutIAPID component
// A component is like one page or one section of a website
const AboutIAPID = () => {

  // return means what we want to show on the screen
  return (

    // section is like a big container
    // It has background color, padding and font style
    <section className="bg-gray-200 py-16 font-serif text-black">

      {/* This div keeps content centered and gives space on sides */}
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= MAIN ABOUT ================= */}

        {/* Main title of the page */}
        <h1 className="text-5xl font-bold mb-8">
          About IAP-ID
        </h1>

        {/* Paragraph explaining about IAP-ID */}
        <p className="text-xl leading-relaxed mb-6">
          The International Academy of Pathology - Indian Division (IAP-ID) 
          is one of the most active and dynamic Divisions of the International 
          Academy of Pathology. Since its inception in the late 1960’s, the 
          IAP-ID has grown tremendously in all aspects of its operations.
        </p>

        {/* Second paragraph */}
        <p className="text-xl leading-relaxed mb-12">
          It has attracted a large membership and evoked significant interest 
          from Pathologists both from India and abroad due to its strong 
          academic and scientific programs.
        </p>

        {/* ================= OFFICE BEARERS ================= */}

        {/* Section title */}
        <h2 className="text-4xl font-bold mb-10">
          IAP-ID Office Bearers
        </h2>

        {/* Grid layout divides content into 2 columns on medium screens */}
        <div className="grid md:grid-cols-2 gap-10 text-lg leading-relaxed">

          {/* President details */}
          <div>
            <h3 className="font-bold text-xl">President, IAP-ID</h3>
            <p>Dr Nuzhat Husain</p>
            <p>Prof and Head of Pathology</p>
            <p>Dr Ram Manohar Lohia Institute of Medical Science, Lucknow</p>
          </div>

          {/* Secretary & Treasurer details */}
          <div>
            <h3 className="font-bold text-xl">Secretary & Treasurer</h3>
            <p>Dr Megha Uppin</p>
            <p>Professor, Department of Pathology</p>
            <p>Nizam's Institute of Medical Science, Hyderabad 500082</p>
            <p>Email: Secretary.IAPID25@gmail.com</p>
          </div>

          {/* Councillor details */}
          <div>
            <h3 className="font-bold text-xl">Councillor</h3>
            <p>Amanjit Bal</p>
            <p>Professor of Pathology</p>
            <p>PGIMER, Chandigarh</p>
          </div>

          {/* Another Councillor */}
          <div>
            <h3 className="font-bold text-xl">Councillor</h3>
            <p>Dr Paromita Roy</p>
            <p>Senior Consultant & Head</p>
            <p>Tata Medical Center, Kolkata</p>
            <p>Email: dr.paromita.roy@gmail.com</p>
          </div>

          {/* Advisor details */}
          <div>
            <h3 className="font-bold text-xl">Advisor</h3>
            <p>Dr Francisco Couto</p>
            <p>Professor of Pathology</p>
            <p>Goa Medical College, Panaji, Goa</p>
          </div>

          {/* Councillor details */}
          <div>
            <h3 className="font-bold text-xl">Councillor</h3>
            <p>Dr Prasenjit Das</p>
            <p>Professor of Pathology</p>
            <p>AIIMS, New Delhi</p>
          </div>

        </div>

        {/* ================= EX OFFICE BEARERS ================= */}

        {/* Title for past members */}
        <h2 className="text-4xl font-bold mt-16 mb-10">
          Ex Office Bearers
        </h2>

        {/* Grid layout again */}
        <div className="grid md:grid-cols-2 gap-10 text-lg leading-relaxed">

          {/* Past Secretary */}
          <div>
            <h3 className="font-bold text-xl">Past Secretary & Treasurer</h3>
            <p>Dr. Reeni Malik</p>
            <p>Dean Academics & Research</p>
            <p>Chirayu Medical College, Bhopal</p>
            <p>Email: reenimalik@yahoo.co.in</p>
          </div>

          {/* Past President */}
          <div>
            <h3 className="font-bold text-xl">Past President</h3>
            <p>Sujay Prasad</p>
            <p>Technical Director</p>
            <p>Anand Diagnostic Laboratory</p>
            <p>Email: sujayprasad@me.com</p>
          </div>

        </div>

        {/* ================= INTERNATIONAL ACADEMY INFO ================= */}

        {/* Title for international information */}
        <h2 className="text-4xl font-bold mt-16 mb-8">
          The International Academy of Pathology
        </h2>

        {/* Information paragraph */}
        <p className="text-xl leading-relaxed mb-6">
          The International Academy of Pathology (IAP), formerly known as the 
          International Association of Medical Museums, was founded by 
          Dr. Maude Abbott in 1906. Since then, it has grown into a worldwide 
          organization with Divisions in almost all countries and regions, 
          including the Indian Division.
        </p>

        {/* Introduction to activities */}
        <p className="text-xl leading-relaxed mb-6">
          The IAP-ID conducts three major scientific and academic activities 
          every year:
        </p>

        {/* Unordered list (bullet points) */}
        <ul className="list-disc pl-8 text-xl leading-relaxed space-y-4 mb-8">

          {/* Activity 1 */}
          <li>
            Mid-Year Teaching Programme (April/May) – Workshop focused on 
            practical topics for trainees and young Pathologists.
          </li>

          {/* Activity 2 */}
          <li>
            Annual CME (August/September) – Covers current topics and 
            new developments in Pathology.
          </li>

          {/* Activity 3 */}
          <li>
            Annual Meeting (November/December) – Includes Guest Lecture, 
            Slide Seminar and Symposium, held along with IAPM Conference.
          </li>
        </ul>

        {/* Newsletter information */}
        <p className="text-xl leading-relaxed">
          The IAP-ID Newsletter is released twice a year (January and July), 
          keeping members updated on activities of the Indian Division and 
          important international developments in Pathology.
        </p>

      </div>
    </section>
  );
};

// Exporting this component so it can be used in other files
export default AboutIAPID;
