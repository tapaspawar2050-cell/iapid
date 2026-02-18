import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Assets
import heroImg from "../assets/about_bg.jpg";
import ParagraphImg from '../assets/Paragraph.jpg';
import advisorImg from "../assets/advisor.jpg";
import presidentImg from "../assets/president.jpg";
import secretaryImg from "../assets/secretary.jpg";
import prasenjitImg from "../assets/prasenjit.jpg";
import amanjitImg from "../assets/amanjit.jpg";
import paromitaImg from "../assets/roy3.jpg";
import past1 from "../assets/past1.jpg";
import past2 from "../assets/past2.jpg";

const AboutIAPID = () => {

  /* ================= DATA ================= */

  const officeBearers = [
    {
      role: "Advisor, IAP-ID",
      name: "Dr Francisco Couto",
      title: "Professor of Pathology",
      org: "Goa Medical College",
      img: advisorImg,
    },
    {
      role: "President, IAP-ID",
      name: "Dr Nuzhat Husain",
      title: "Prof and Head of Pathology",
      org: "Dr Ram Manohar Lohia Institute, Lucknow India",
      img: presidentImg,
    },
    {
      role: "Secretary & Treasurer IAP-ID",
      name: "Dr Megha Uppin",
      title: "Professor",
      org: "Nizam's Institute of Medical Science",
      email: "Secretary.IAPID25@gmail.com",
      img: secretaryImg,
    },
    {
      role: "Councillor, IAP-ID",
      name: "Dr Prasenjit Das",
      title: "Professor of Pathology",
      org: "AIIMS, New Delhi",
      img: prasenjitImg,
    },
    {
      role: "Councillor, IAP-ID",
      name: "Amanjit Bal",
      title: "Professor of Pathology",
      org: "PGIMER, Chandigarh",
      img: amanjitImg,
    },
    {
      role: "Councillor, IAP-ID",
      name: "Dr Paromita Roy",
      title: "Senior Consultant and Head",
      org: "Tata Medical Center, Kolkata",
      img: paromitaImg,
    },
  ];

  const exOfficeBearers = [
    {
      role: "Past President",
      name: "Sujay Prasad",
      title: "Technical Director",
      org: "Anand Diagnostic Laboratory",
      img: past1,
    },
    {
      role: "Past Secretary & Treasurer IAP-ID",
      name: "Dr Reeni Malik",
      org: "Chirayu Medical College Bhopal",
      img: past2,
    },
    {
      role: "Past President",
      name: "Sujay Prasad",
      title: "Technical Director",
      org: "Anand Diagnostic Laboratory",
      img: past1,
    },
    {
      role: "Past Secretary",
      name: "Dr Example Name",
      org: "Example Institute",
      img: past2,
    },
  ];

  const visibleCards = 3;

  /* ================= STATES ================= */

  const [currentIndex, setCurrentIndex] = useState(0);
  const [exIndex, setExIndex] = useState(0);

  /* ================= SLIDER LOGIC ================= */

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev >= officeBearers.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? officeBearers.length - visibleCards : prev - 1
    );
  };

  const nextEx = () => {
    setExIndex(prev =>
      prev >= exOfficeBearers.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevEx = () => {
    setExIndex(prev =>
      prev === 0 ? exOfficeBearers.length - visibleCards : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-serif text-gray-800">

      {/* HERO */}
      <section
        className="relative h-[470px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-lightgray/30"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">About IAP-ID</h1>
          <p className="text-xl md:text-2xl mt-4 font-normal max-w-3xl mx-auto">
            The IAP-ID is one of the most active and dynamic Divisions of the International Academy of Pathology
          </p>
        </div>
      </section>

      {/* OFFICE BEARERS */}
      <SliderSection
        title="IAP-ID Office Bearers"
        data={officeBearers}
        index={currentIndex}
        next={nextSlide}
        prev={prevSlide}
        visibleCards={visibleCards}
        bg="bg-[#efefef]"
      />

      {/* EX OFFICE BEARERS */}
      <SliderSection
        title="Ex Office Bearers"
        data={exOfficeBearers}
        index={exIndex}
        next={nextEx}
        prev={prevEx}
        visibleCards={visibleCards}
        bg="bg-[#efefef]"
      />

      {/* ABOUT IAP SECTION */}
      <section className="bg-[#f3f3f3] pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

         <h2 className="text-2xl md:text-2xl font-serif font-bold text-[#1f2d3d] border-b-2 border-black inline-block pb-1">
              The International Academy of Pathology
            </h2>
          
          <div className="space-y-8">

            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              The International Academy of Pathology (IAP), formerly known as the
              International Association of Medical Museums, was founded by Dr.
              Maude Abbott in 1906. From then on the International Academy of
              Pathology (IAP) has grown into a world wide organization with
              Divisions in almost all countries and regions of the world,
              including the Indian Division.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              The International Academy of Pathology - Indian Division (IAP-ID)
              was started in the late 1960's with a few select members and from
              this small beginning it has grown tremendously in all aspects of its
              operations, especially so in the last few years. The IAP-ID is one
              of the most active and dynamic Divisions of the International
              Academy of Pathology and has attracted a large membership and evoked
              lot of interest from Pathologists, both from India and abroad, due
              to its active academic and scientific programs.
            </p>
          </div>
        </div>
      </section>

      {/* TEXT ON IMAGE OVERLAY SECTION */}
      <section className="relative w-full overflow-hidden">
        {/* The Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={ParagraphImg} 
            alt="Pathology Background" 
            className="w-full h-full object-cover"
          />
          {/* The dark overlay from your screenshot */}
          <div className="absolute inset-0 bg-lightgray/60"></div>
        </div>

        {/* The Text Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-8 text-white">
          <div className="space-y-10">
            <p className="text-lg md:text-xl leading-relaxed text-justify font-medium">
              The IAP-ID has three main scientific and academic activities in a year. 
              The first is the IAP-ID Mid Year Teaching Programme held usually in April 
              or May and is usually a Workshop on a selected topic of practical utility 
              targeted mainly at trainee and young Pathologists. Next, in the month of 
              August or September there is the IAP-ID Annual CME which would be on a 
              topic of current interest or new frontiers and developments in the field 
              of Pathology. Finally, in November or December, the IAP-ID Annual Meeting 
              is held, which includes usually a Guest Lecture by an invited foreign 
              speaker, a Slide Seminar and a Symposium on pre selected topics. This 
              Meeting is held in conjunction with the Annual National Conference of 
              the Indian Association of Pathologists and Microbiologists (IAPM) for 
              the convenience of members, many of whom are members of both Associations.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-justify font-medium">
              The IAP-ID also has its own Newsletter, the IAP-ID Newsletter, released 
              twice a year in January and July, which keeps the members abreast with 
              the activities of the Indian Division as well as other important news 
              of the IAP and various meetings taking place in various parts of the world.
            </p>
          </div>
        </div>
      </section>
  
    </div>
  );
};

/* ================= REUSABLE SLIDER COMPONENT ================= */

const SliderSection = ({ title, data, index, next, prev, visibleCards, bg }) => {
  return (
    <section className={`${bg} py-20`}>
      <div className="max-w-7xl mx-auto px-8 relative">

        <h2 className="text-4xl font-bold text-center mb-16 text-[#1f2d3d]">
          {title}
        </h2>

        <div className="relative flex items-center">

          <button
            onClick={prev}
            className="absolute -left-10 top-1/2 -translate-y-1/2 bg-[#404040] text-white p-3 rounded-full z-20 hover:bg-black transition"
          >
            <ChevronLeft size={26} />
          </button>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / visibleCards)}%)`,
              }}
            >
              {data.map((item, i) => (
                <div key={i} className="min-w-[33.33%] px-6">
                  <div className="bg-white rounded-2xl shadow-xl hover:scale-105 transition overflow-hidden">
                    <div className="bg-[#404040] text-white text-center py-3 text-sm">
                      {item.role}
                    </div>
                    <div className="p-6 flex gap-6">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-24 h-28 object-cover rounded-lg shadow-md"
                      />
                      <div>
                        <h3 className="text-[#3f51b5] font-bold text-lg">
                          {item.name}
                        </h3>
                        <p className="text-xs mt-2 text-gray-600 font-medium">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.org}</p>
                        {item.email && (
                          <p className="mt-4 text-[11px] font-semibold text-gray-700">
                            Email: {item.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute -right-10 top-1/2 -translate-y-1/2 bg-[#404040] text-white p-3 rounded-full z-20 hover:bg-black transition"
          >
            <ChevronRight size={26} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default AboutIAPID;