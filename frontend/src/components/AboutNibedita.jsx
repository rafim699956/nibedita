import React from "react";
import Pagination from "./Pagination";
import nibedita from "../assets/images/nibedita.png";

const AboutNibedita = () => {
  return (
    <section className="pt-10 bg-linear-to-b from-[#EDDEF0] from-[66.66%] to-[#FFFFFF] to-[100.88%]">
      <div className="container space-y-6 md:space-y-10 lg:space-y-15">
        <Pagination />
        <div>
          <div className="max-w-[58.188rem] mx-auto">
            <h1 className="text-center">
              We take care of the community's mental and physical health
            </h1>
          </div>
          <img className="w-full max-w-full object-cover" src={nibedita} alt="nibedita" />
        </div>
      </div>
    </section>
  );
};

export default AboutNibedita;
