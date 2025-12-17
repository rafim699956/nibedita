import { useState } from "react";
import { useSelector } from "react-redux";

const WhoWeAre = () => {
  const whoWeAre = useSelector((state) => state.whoWeAre);
  const [activeTab, setActiveTab] = useState("Mission & Vision");
  console.log(activeTab);
  console.log(whoWeAre);
  return (
    <section className="bg-white">
      <div className="container space-y-6 md:space-y-8 lg:space-y-14">
        <div className="space-y-4 max-w-[58.188rem]">
          <h2>{whoWeAre.sectionTitle}</h2>
          <p>{whoWeAre.sectionDes}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-9">
          <div className="inline-flex flex-col gap-3 max-w-[18.563rem] w-full shrink-0">
            {whoWeAre.navTabs.tabBtn &&
              whoWeAre.navTabs.tabBtn.map((btn) => (
                <button
                  onClick={() => setActiveTab(btn.label)}
                  className={`border-l-2 ${
                    activeTab == btn.label
                      ? "border-l-[#9D5DA3] bg-[#F6EFF8]"
                      : "border-l-[#F6EFF8] "
                  } py-5 px-8 font-medium text-xl leading-6 text-nowrap text-left cursor-pointer`}
                  key={btn.id}
                >
                  {btn.label}
                </button>
              ))}
          </div>
          <div className="grow flex flex-col gap-6">
            {whoWeAre.navTabs.tabBody &&
              whoWeAre.navTabs.tabBody.map((item) => (
                <div key={item.id} className={`${item.label == activeTab ? 'flex flex-col lg:flex-row' : 'hidden'} gap-6`}>
                  <div className="max-w-86 w-full shrink-0 lg:h-103 max-h-full rounded-2xl overflow-hidden">
                    <img
                      className="w-full h-full max-w-full object-cover"
                      src={item.tabImg}
                      alt={`tab img ${item.id}`}
                    />
                  </div>
                  <div className="grow py-4 space-y-4 md:space-y-6 lg:space-y-10">
                    {item.tabDesTitle1 && (
                      <div className="space-y-2">
                        <h4>{item.tabDesTitle1}</h4>
                        <p>{item.tabDes1}</p>
                      </div>
                    )}
                    {item.tabDesTitle2 && (
                      <div className="space-y-2">
                        <h4>{item.tabDesTitle2}</h4>
                        <p>{item.tabDes2}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
