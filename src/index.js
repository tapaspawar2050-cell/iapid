// Importing React library
// React is used to build the user interface (UI)
import React from 'react';

// Importing ReactDOM
// ReactDOM helps show React app inside HTML page
import ReactDOM from 'react-dom/client';

// Importing CSS file for styling
// This file contains design and Tailwind styles
import './index.css';

// Importing main App component
// App is the main part of our website
import App from './App';

// Importing performance measuring tool
// It helps check how fast our website loads
import reportWebVitals from './reportWebVitals';


// Finding the root element in public/index.html
// This connects React with the HTML page
const root = ReactDOM.createRoot(
  document.getElementById('root')
);


// Rendering (showing) the App component on screen
root.render(

  // React.StrictMode is used to check errors in development
  // It helps developers find problems early
  <React.StrictMode>

    {/* App component is displayed here */}
    <App />

  </React.StrictMode>
);


// This function checks website performance (optional)
// It measures speed and loading time
// If you want to see results, use:
// reportWebVitals(console.log);
reportWebVitals();
