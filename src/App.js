import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Refund from "./Components/Refund";
import TermsCondition from "./Components/TermsCondition";
import Home from "./Pages/HomePage/Home";
import { useEffect } from "react";
;

function App() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#joinwaitlist") {
      const el = document.getElementById("joinwaitlist");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/refund-policy" element={<Refund />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
