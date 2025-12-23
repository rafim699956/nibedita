import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import { Link } from "react-router";

const OurCareJourney = () => {
  const data = useSelector((state) => state.ourJourney);
  const half = Math.ceil(data.sliderImgs.length / 2);
  const firstHalf = data.sliderImgs.slice(0, half);
  const secondHalf = data.sliderImgs.slice(half);
  return (
    <section className="space-y-6 md:space-y-10 lg:space-y-14">
      <div className="container">
        <h2 className="text-center">{data.sectionTitle}</h2>
      </div>
      <div className="flex flex-col gap-6 relative">
        <div>
          <Swiper
            rtl={true}
            slidesPerView="auto"
            spaceBetween={24}
            speed={5000}
            autoplay={{
              autoplay: true,
              delay: 3000,
              reverseDirection: true,
            }}
            allowTouchMove={false}
            modules={[Autoplay, FreeMode]}
            freeMode={true}
            loop={true}
            className="mySwiper2"
          >
            {firstHalf.map((item) => (
              <SwiperSlide style={{ width: "364px" }} key={item.id}>
                <img src={item.img} alt="slider" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={24}
            speed={5000}
            autoplay={{
              autoplay: true,
              delay: 3000,
            }}
            allowTouchMove={false}
            modules={[Autoplay, FreeMode]}
            freeMode={true}
            loop={true}
            className="mySwiper3"
          >
            {secondHalf.map((item) => (
              <SwiperSlide style={{ width: "364px" }} key={item.id}>
                <img
                  src={item.img}
                  className="w-full max-w-full object-cover"
                  alt={`slider ${item.id}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute flex items-end pointer-none: justify-center bottom-0 z-10 h-[18.563rem] w-full bg-[linear-gradient(180deg,_rgba(255,255,255,0)_-3.45%,_#FFFFFF_100%)]">
          <Link className="relative font-semibold text-lg leading-1 text-center text-primary-600" to="#">See our Full Gallary</Link>
        </div>
      </div>
    </section>
  );
};

export default OurCareJourney;
