import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router";
import rightArrow from "../assets/images/rightarrow.png";

const Hero = () => {
  const homeHero = useSelector((state) => state.homeHero);
  return (
    <section className="py-0">
      <Swiper
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        // autoplay={{
        //     autoplay: true,
        //     delay: 3000,
        // }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
      >
        {homeHero &&
          homeHero.map((item) => (
            <SwiperSlide className="" key={item.id}>
              <div
                className="lg:min-h-215 h-full flex lg:items-center relative py-12 lg:py-24"
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="container flex flex-col-reverse gap-4 lg:flex-row lg:items-center">
                  <div className="lg:w-1/2 lg:pr-8.5 space-y-8 md:space-y-10 lg:space-y-16">
                    <div className="space-y-4 lg:space-y-6">
                      <h2 className="text-white font-semibold text-[1.875rem] leading-[2.4rem] md:text-[3rem] md:leading-[3.6rem] lg:text-[4.375rem] lg:leading-19.5">
                        {item.title}
                      </h2>
                      <p className="text-white text-sm leading-5.5 lg:text-lg lg:leading-8">
                        {item.description}
                      </p>
                    </div>
                    <div>
                      <Link
                        className="py-2 lg:py-4 px-5 lg:px-9 bg-white rounded-[2.75rem] inline-flex items-center gap-2 text-sm leading-5.5 lg:text-lg lg:leading-6.5 font-medium"
                        to={item.path}
                      >
                        Know More
                        <img
                          className="size-6"
                          src={rightArrow}
                          alt="right arrow"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="lg:w-1/2 lg:absolute right-0 top-0 bottom-0">
                    <img
                      className="w-full max-w-full h-full object-cover"
                      src={item.featuredImg}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        <div className="container absolute z-20 bottom-2 lg:bottom-24 left-1/2 transform -translate-x-1/2">
          <div className="lg:w-1/2">
            <div className="custom-pagination"></div>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
