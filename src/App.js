import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Import other pages as you create them
// import AboutPage from './pages/AboutPage';
// import Membership from './pages/Membership';
// etc.

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/membership" element={<Membership />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;