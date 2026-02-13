// Yeh function website ki performance (speed) check karne ke liye use hota hai
// onPerfEntry ek function hota hai jo result ko handle karega (jaise console.log)

const reportWebVitals = onPerfEntry => {

  // Check karte hain ki onPerfEntry diya gaya hai ya nahi
  // Aur kya wo ek function hai ya nahi
  if (onPerfEntry && onPerfEntry instanceof Function) {

    // Yahan hum "web-vitals" naam ki library ko load kar rahe hain
    // Import tab hoga jab zarurat pade (isse website fast load hoti hai)
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {

      // Ab alag-alag performance measurements ko call karte hain

      // CLS = Cumulative Layout Shift
      // Check karta hai page load hote waqt layout kitna hilta hai
      getCLS(onPerfEntry);

      // FID = First Input Delay
      // User jab pehli baar click karta hai to kitni delay hoti hai
      getFID(onPerfEntry);

      // FCP = First Contentful Paint
      // Screen par pehla content kitni jaldi dikhta hai
      getFCP(onPerfEntry);

      // LCP = Largest Contentful Paint
      // Page ka sabse bada content kitni jaldi load hota hai
      getLCP(onPerfEntry);

      // TTFB = Time To First Byte
      // Server se pehla data kitni jaldi milta hai
      getTTFB(onPerfEntry);
    });
  }
};

// Is function ko dusri file me use karne ke liye export kar rahe hain
export default reportWebVitals;
