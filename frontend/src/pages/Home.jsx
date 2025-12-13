import React from "react";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import OurConcern from "../components/OurConcern";
import OurTeamMember from "../components/OurTeamMember";
import LatestNews from "../components/LatestNews";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <WhoWeAre /> */}
      <OurConcern />
      <OurTeamMember />
      <LatestNews />
    </>
  );
};

export default Home;
