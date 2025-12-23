import { useSelector } from "react-redux";

const Timeline = () => {
  const timelineData = useSelector((state) => state.historyOfNibedita);
  const { timeLine } = timelineData;
  const firstIndex = timeLine[0];
  const lastIndex = timeLine[timeLine.length - 1];
  return (
    <div className="relative lg:max-w-285 w-full mx-auto">
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-[linear-gradient(180deg,#F8F8F8_-3.16%,#9D5DA3_54.35%,#F8F8F8_104.33%)]"></div>
      <div className="space-y-6">
        {timeLine.map((item, index) => {
          const even = index % 2 === 0;
          return (
            <div
              key={item.id}
              className={`flex flex-wrap ${
                firstIndex.id === item.id ? "pt-8 md:pt-10 lg:pt-16.5" : ""
              } ${
                lastIndex.id === item.id ? "pb-8 md:pb-10 lg:pb-[4.813rem]" : ""
              } ${even ? "flex-row-reverse" : "flex-row"}`}
            >
              <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6">
                <div
                  className={`flex items-center transform -translate-x-2 ${
                    even
                      ? "md:flex-row md:-translate-x-2"
                      : "md:flex-row-reverse md:translate-x-2"
                  }`}
                >
                  <div className="size-4 bg-white rounded-full border border-primary-600"></div>
                  <div className="border-t border-t-primary-600 w-16"></div>
                  <p className="py-2 px-4 border border-primary-600 rounded-full bg-[#F6EFF8] text-base font-medium text-primary-950 h-10">
                    {item.year}
                  </p>
                </div>
                <h5
                  className={`text-secondary-950 pl-17.5 md:pl-0 ${
                    even ? "md:pl-17.5" : "md:pr-17.5"
                  }`}
                >
                  {item.text}
                </h5>
              </div>
              <div className="w-1/2 hidden md:block"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
