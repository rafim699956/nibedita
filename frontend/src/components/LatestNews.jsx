import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const LatestNews = () => {
  const latestNewsData = useSelector((state) => state.latestNews);
  return (
    <section className="bg-[#FBF7FC]">
      <div className="container space-y-6 md:space-y-8 lg:space-y-14">
        <div className="lg:max-w-195.5 mx-auto text-center space-y-4">
          <h2>{latestNewsData.sectionTitle}</h2>
          <p className="lg:max-w-[36.563rem] mx-auto lg:text-[1.25rem] lg:leading-8 text-black">
            {latestNewsData.sectionDes}
          </p>
        </div>
        <div className="grid grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNewsData.news &&
            latestNewsData.news.map((item) => (
              <div
                className={`flex flex-col lg:flex-row rounded-lg border border-[#E5E5E5] shadow-[0px_2px_12px_rgba(0,0,0,0.04)] overflow-hidden ${
                  item.img && "md:col-span-2"
                }`}
                key={item.id}
              >
                {item.img && (
                  <div className="shrink-0 lg:max-w-[23.188rem] w-full">
                    <img
                      className="w-full h-full object-cover"
                      src={item.img}
                      alt={`latest news ${item.id}`}
                    />
                  </div>
                )}
                <div
                  className={`grow ${
                    item.img
                      ? "bg-white pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-10 lg:pb-15 pl-6 pr-7.5 space-y-8"
                      : `py-8 md:py-10 lg:py-14 px-6 space-y-6`
                  }`}
                  style={{ backgroundColor: `${item.bgColor}` }}
                >
                  <div className={`${item.img ? "space-y-4" : "space-y-3"}`}>
                    <h5
                      className={`leading-7 ${
                        item.img ? "text-black" : "text-white"
                      }`}
                    >
                      {item.title}
                    </h5>
                    <p
                      className={`text-base leading-6.5 ${
                        item.img ? "text-[#5F5F5F]" : "text-white"
                      }`}
                    >
                      {item.des}
                    </p>
                  </div>
                  <div>
                    <Link
                      className={`font-medium flex items-center gap-1.5 text-base ${
                        item.img ? "text-black" : "text-white"
                      }`}
                      to={`/`}
                    >
                      Learn More <FaArrowRightLong className="text-2xl" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
