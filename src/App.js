import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Refund from "./Components/Refund";
import TermsCondition from "./Components/TermsCondition";
import Home from "./Pages/HomePage/Home";
;

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/refund-policy" element={<Refund />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
