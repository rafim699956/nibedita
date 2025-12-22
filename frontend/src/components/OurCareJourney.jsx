import React from "react";
import { useSelector } from "react-redux";

const OurCareJourney = () => {
  const data = useSelector((state) => state.ourJourney);
  return (
    <section className="space-y-6 md:space-y-10 lg:space-y-14">
      <div className="container">
        <h2 className="text-center">{data.sectionTitle}</h2>
      </div>
    </section>
  );
};

export default OurCareJourney;
