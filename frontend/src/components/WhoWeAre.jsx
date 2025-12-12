import { useState } from "react";
import { useSelector } from "react-redux";

const WhoWeAre = () => {
  const whoWeAre = useSelector((state) => state.whoWeAre);
  const [activeTab, setActiveTab] = useState("mission & vission");
  console.log(whoWeAre);
  return (
    <section className="bg-white">
      <div className="container space-y-6 md:space-y-8 lg:space-y-14">
        <div className="space-y-4 max-w-[58.188rem]">
          <h2>{whoWeAre.sectionTitle}</h2>
          <p>{whoWeAre.sectionDes}</p>
        </div>
        <div>
          {whoWeAre.navTabs &&
            whoWeAre.navTabs.map((item) => (
              <div key={item.id}>
                <div>
                    
                </div>
                <div></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
