import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const newsItems = [
    {
      title: "XXVIIth Annual CME of the International Academy of Pathology-Indian Division",
      badge: "NEW"
    },
    {
      title: "Dr Surabhi Jain, AIIIMS New Delhi.",
      badge: "NEW"
    },
    {
      title: "Mid-year Teaching Program: 6-7 th April 2025",
      badge: "NEW"
    },
    {
      title: "IAPID mid year teaching program-Chandigarh on Autopsy Pathology. 6th and 7th April 2025.",
      badge: "NEW"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              About IAP-ID
            </h2>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                A very warm welcome to the website of the International Academy of Pathology - Indian Division (IAP-ID). 
                The IAP-ID was started in the late 1960's with a few select members and from this small beginning it has 
                grown tremendously in all aspects of its operations, especially so in the last few years.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                The IAP-ID is one of the most active and dynamic Divisions of the International Academy of Pathology and 
                has attracted a large membership and evoked lot of interest from Pathologists, both from India and abroad, 
                due to its active academic and scientific programs.
              </p>
              
              <Link 
                to="/about" 
                className="text-iap-orange font-semibold hover:underline inline-block mt-4"
              >
                Read More &gt;&gt;
              </Link>
            </div>
          </div>

          {/* Latest News Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
              Latest News
            </h3>
            
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <div 
                  key={index} 
                  className="border-l-4 border-iap-orange pl-4 py-2 hover:bg-gray-50 transition"
                >
                  <div className="flex items-start justify-between">
                    <p className="text-gray-700 text-sm">{item.title}</p>
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded ml-2 flex-shrink-0">
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;