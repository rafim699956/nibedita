import React from "react";
import Timeline from "./TimeLine";
import { useSelector } from "react-redux";

const HistoryOfNibedita = () => {
  const data = useSelector((state) => state.historyOfNibedita);
  return (
    <section className="bg-white">
      <div className="container space-y-6 md:space-y-10 lg:space-y-14">
        <div className="lg:max-w-195.5 mx-auto space-y-4">
          <h2 className="text-center text-secondary-950">{data.sectionTitle}</h2>
          <p className="text-center lg:text-xl lg:leading-8 text-black">{data.sectionDes}</p>
        </div>
        <Timeline />
      </div>
    </section>
  );
};

export default HistoryOfNibedita;
