import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Banner } from "./Components/Banner";
import { ContestCarousel } from "./Components/ContestCarousel";
import { Contests } from "./Components/Contests";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { HowItWorks } from "./Components/HowItWorks";
import { Judge } from "./Components/Judge";
import { Maps } from "./Components/Maps";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import { Purpose } from "./Components/Purpose";
import { Wish } from "./Components/Wish";
import Refund from "./Components/Refund";
import TermsCondition from "./Components/TermsCondition";
import Pricing from "./Components/Pricing";
import UserJourney from "./Components/UserJourney";

function App() {

  const isMobileOrTablet = () => {
    return window.innerWidth < 768;
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            {!isMobileOrTablet() ? <Contests /> : <ContestCarousel />}
            <Wish />
            <Judge />
            <Pricing/>
            <Purpose />
            <Maps />
            <UserJourney/>
          </>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/refund-policy" element={<Refund />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
