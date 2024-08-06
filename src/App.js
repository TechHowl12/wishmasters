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

function App() {

  const isMobileOrTablet = () => {
    return window.innerWidth < 768;
  };

  return (
    <>
      <Header />
      <Banner />
      {/* <HowItWorks /> */}
      {!isMobileOrTablet() ? <Contests/> : <ContestCarousel/>}
      <Wish />
      <Judge />
      <Purpose />
      <Maps />
      <PrivacyPolicy/>
      <Footer />
    </>
  );
}

export default App;
