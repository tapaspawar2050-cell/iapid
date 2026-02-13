// We are importing different components (sections) of the Home page

// Hero section (usually top banner with big image or title)
import Hero from "../components/Hero";

// About section (information about organization)
import About from "../components/About";

// Academic Programs section (shows courses or programs)
import AcademicPrograms from "../components/AcademicPrograms";

// Annual Conference section (shows conference details)
import AnnualConference from "../components/AnnualConference";


// This is our Home component
// A component is like a small part of a website
const Home = () => {

  // return means what we want to show on screen
  return (

    // <> </> is called Fragment
    // It helps us group multiple components without adding extra div
    <>
      
      {/* First show Hero section */}
      <Hero />

      {/* Then show About section */}
      <About />

      {/* Then show Academic Programs section */}
      <AcademicPrograms />

      {/* Finally show Annual Conference section */}
      <AnnualConference />

    </>
  );
};

// Exporting Home component
// So we can use it in App.js or other files
export default Home;
