import { useSelector } from "react-redux";

const Timeline = () => {
  const timelineData = useSelector((state) => state.historyOfNibedita);
  const { timeLine } = timelineData;
  return (
    <div className="relative lg:max-w-285 mx-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[linear-gradient(180deg,#F8F8F8_-3.16%,#9D5DA3_54.35%,#F8F8F8_104.33%)]"></div>

      <div className="space-y-12">
        {timeLine.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={item.id}
              className={`flex items-center justify-between w-full ${
                isEven ? "flex-row-reverse" : ""
              }`}
            >
              <div className={`w-1/2 relative ${isEven ? 'pl-17.5' : 'pr-17.5'}`}>
              <div className={`absolute ${isEven ? '-left-2' : '-right-2'}  top-1/2 transform -translate-y-1/2 z-10 flex items-center justify-center size-4 bg-white border border-primary-600 rounded-full`}>
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 whitespace-nowrap w-17.5 px-4 py-2 border border-primary-600 rounded-full text-[#59355A] lg:text-base font-medium bg-[#F6EFF8] flex items-center justify-center
                  ${isEven ? "-left-35.5" : "-right-35.5"}`}
                >
                  {item.year}
                </div>
              </div>
                <div className={`p-4 ${isEven ? "text-left" : "text-right"}`}>
                  <p className="text-gray-800 font-semibold text-lg leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
              
              <div className="w-1/2"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
