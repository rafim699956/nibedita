import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const OurConcern = () => {
  const ourConcernData = useSelector((state) => state.ourConcern);
  return (
    <section className="bg-primary-950">
      <div className="container space-y-6 md:space-y-8 lg:space-y-14">
        <div className="lg:max-w-[51.813rem] mx-auto text-center space-y-4">
          <h2 className="text-white">{ourConcernData.sectionTitle}</h2>
          <p className="text-[#E5E5E5] lg:text-[1.25rem] lg:leading-8">
            {ourConcernData.sectionDes}
          </p>
        </div>
        <div className="space-y-4 md:space-y-6 lg:space-y-8 lg:max-w-265 mx-auto">
          {ourConcernData.blogPosts &&
            ourConcernData.blogPosts.map((item) => (
              <div
                key={item.id}
                className="p-5 lg:p-10 bg-white rounded-2xl flex flex-col md:flex-row items-center gap-6 lg:gap-10 md:even:flex-row-reverse"
              >
                <div className="w-full md:max-w-[38.61%] shrink-0">
                  <img
                    className="w-full max-w-full object-cover"
                    src={item.img}
                    alt={`blog post ${item.id}`}
                  />
                </div>
                <div className="grow space-y-6 lg:space-y-8">
                  <div className="space-y-4">
                    <h4>{item.title}</h4>
                    <p>{item.des}</p>
                  </div>
                  <Link to="/">Know More</Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurConcern;
