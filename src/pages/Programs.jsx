import React from "react";

const AcademicProgram2026 = () => {
  return (
    <section className="bg-[#dcdcdc] py-20 min-h-screen font-serif text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold mb-10 text-center">
          IAP-ID Academic Programs 2026
        </h1>

        {/* INTRO */}
        <p className="text-lg mb-6 leading-relaxed">
          This is for your information regarding IAP-ID Academic Programs 2026.
          The IAP-ID has the following programs during the course of the year:
        </p>

        {/* PROGRAM LIST */}
        <ul className="list-disc pl-8 text-lg space-y-3 mb-10">
          <li>
            <strong>Mid-Year Teaching Program</strong> (usually a Workshop) in April or May
          </li>
          <li>
            <strong>IAP-ID Annual CME</strong> usually in August or September.
          </li>
          <li>
            <strong>Annual Conference</strong> (usually held in conjunction with IAPM Conference) 
            usually November or December having a symposium and slide seminar.
          </li>
        </ul>

        {/* HOSTING PROPOSALS */}
        <p className="text-lg mb-6 leading-relaxed">
          Those members desirous of organizing and hosting the Mid Year Teaching 
          Program 2026 or Annual CME 2026 should send their proposals and its theme 
          in the formats uploaded on the website of the International Academy of 
          Pathology - Indian Division (IAP-ID) to the Secretary & Treasurer, 
          Dr. Megha Uppin (address on website).
        </p>

        {/* MODERATOR INFO */}
        <p className="text-lg mb-6 leading-relaxed">
          For the Annual Conference 2026 (held along with IAPM Conference) those 
          desirous of being Moderators for Slide seminar or Symposium should send 
          their names along with the proposed titles to the Secretary and Treasurer, IAP-ID.
        </p>

        {/* TOPIC SELECTION */}
        <p className="text-lg mb-6 leading-relaxed">
          As per the decision of the General Body certain topics may be suggested 
          as possible subjects for Slide seminar and Symposium. However, as per 
          the decision of the Council and General Body of the IAP-ID, the person 
          selected as moderator shall be the one who is felt to be best suited 
          for the particular topic of Slide seminar and/or Symposium.
        </p>

        {/* DEADLINE */}
        <p className="text-lg mb-6 leading-relaxed">
          All proposals should reach the Secretary & Treasurer, IAP-ID, in 
          prescribed formats latest by{" "}
          <span className="font-bold text-red-600">30th October 2025</span>, 
          so that the proposals could be discussed and approved by the 
          Council and General Body of the IAP-ID.
        </p>

        {/* DOWNLOAD LINK */}
        <div className="mb-8">
          <a
            href="#"
            className="text-blue-700 font-semibold underline hover:text-blue-900"
          >
            Click here to download the format for the proposal from the IAP ID website
          </a>
        </div>

        {/* MEMBERSHIP NOTE */}
        <p className="text-lg mb-6 leading-relaxed">
          Kindly note that, those who are sending the proposals it is mandatory 
          that their membership is updated and should mention their Membership 
          number in the proposal form. If the membership has expired, it should 
          be renewed till date along with the payment of arrears.
        </p>

        <p className="text-lg mb-10 leading-relaxed">
          The Moderators whose topics are selected for various academic programs 
          should ensure that all the speakers selected are either existing members 
          of IAP-ID and if not should become members of IAP-ID.
        </p>

        {/* CONTACT SECTION */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Proposals Should Be Sent To:
          </h2>

          <p className="mb-2 font-semibold">Dr. Megha Uppin</p>
          <p>Secretary & Treasurer IAP-ID</p>
          <p>
            Professor, Department of Pathology<br />
            Nizam's Institute of Medical Sciences<br />
            Punjagutta, Hyderabad – 500082
          </p>

          <p className="mt-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:Secretary.IAPID25@gmail.com"
              className="text-blue-700 hover:underline"
            >
              Secretary.IAPID25@gmail.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default AcademicProgram2026;
