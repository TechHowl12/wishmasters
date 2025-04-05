import React from "react";
import {Banner} from "./Banner.js";
import {Wish} from "./Wish.js";
import Pricing from "./Pricing.js";
import {Purpose} from "./Purpose.js";
import {Maps} from "./Maps.js";
import UserJourney from "./UserJourney.js";

const Home = () => {
  return (
    <>
      <Banner />
      <Wish />
      <Pricing />
      <Purpose />
      <Maps />
      <UserJourney />
    </>
  );
};

export default Home;
