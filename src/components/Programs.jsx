import React from 'react';

const Programs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          IAP-ID Academic Programs 2026
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md mb-8">
            <p className="text-gray-700 mb-6 text-lg">
              This is for your information regarding IAP-ID Academic Programs 2026. The IAP-ID has the following 
              programs during the course of the year:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-iap-orange font-bold mr-3">•</span>
                <span className="text-gray-700">
                  Mid-Year Teaching Program (usually a Workshop) in April or May
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-iap-orange font-bold mr-3">•</span>
                <span className="text-gray-700">
                  IAP-ID Annual CME usually in August or September.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-iap-orange font-bold mr-3">•</span>
                <span className="text-gray-700">
                  Annual Conference (usually held in conjunction with IAPM Conference) usually November or 
                  December having a symposium and slide seminar.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Note:</span> Those members desirous of organizing and hosting the 
              Mid Year Teaching Program 2026 or Annual CME 2026 should send their proposals and its theme in the 
              formats uploaded on the website of the International Academy of Pathology - Indian Division (IAP-ID) 
              to the Secretary & Treasurer, Dr. Megha Uppin (address on website).
            </p>
            
            <p className="text-gray-700 mb-4">
              All proposals should reach the Secretary & Treasurer, IAP-ID, in prescribed formats latest by 
              <span className="font-semibold text-red-600"> 30th October 2025</span>, so as the same proposals 
              could be discussed and approved by the Council and General Body of the IAP-ID
            </p>

            <a 
              href="#" 
              className="text-red-600 font-semibold hover:underline inline-block"
            >
              Click here to download the format for the proposal from the IAP ID website
            </a>
          </div>

          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-gray-700 mb-4">
              Kindly note that, those who are sending the proposals it is mandatory that their membership is 
              updated and should mention their Membership no in the proposal form. Also, if the membership has 
              expired, it should be renewed till date along with the payment of arrears.
            </p>
            
            <p className="text-gray-700">
              The Moderators whose topics are selected for various academic programs should ensure that all the 
              speakers selected are either existing members of IAP-ID and if not they become members of IAP-ID.
            </p>
          </div>

          <div className="mt-8 bg-white border rounded-lg p-6 shadow">
            <h3 className="font-bold text-xl mb-4 text-gray-800">The proposals should be sent to:</h3>
            
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Dr. Megha Uppin</p>
              <p>Secretary & Treasurer IAP-ID</p>
              <p>Professor, Department of pathology Nizam's institute of medical science</p>
              <p>Punjagutta Hyderabad 500082</p>
              <p className="text-iap-orange font-semibold">
                Email: Secretary.IAPID25 @gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;