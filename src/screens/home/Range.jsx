import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { Autoplay, Navigation } from "swiper/modules";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Range = () => {
  const [selected, setSelected] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/360backgroundimage.png')",
      }}
      className="bg-center bg-no-repeat bg-cover "
    >
      <div className="py-6 text-xl font-medium text-center lg:py-10 md:text-2xl lg:text-3xl">
        VEHICLE RANGE
      </div>
      <div className="flex justify-center gap-2 pb-6 text-center lg:pb-10">
        <div
          onClick={() => setSelected(1)}
          className={`border  px-2 py-2 rounded cursor-pointer relative text-sm md:text-base ${
            selected === 1 && "border-primary text-primary"
          }`}
        >
          Goods Carrier
          <IoMdArrowDropdown
            className={`text-primary text-4xl absolute left-1/2 -translate-x-1/2 top-7 -mt-1 sm:-mt-0.5 ${
              selected === 1 ? "block" : "hidden"
            }`}
          />
        </div>
        <div
          onClick={() => setSelected(2)}
          className={`border  px-2 py-2 rounded cursor-pointer relative text-sm md:text-base ${
            selected === 2 && "border-primary text-primary"
          }`}
        >
          Passenger Carrier
          <IoMdArrowDropdown
            className={`text-primary text-4xl absolute left-1/2 -translate-x-1/2 top-7 -mt-1 sm:-mt-0.5 ${
              selected === 2 ? "block" : "hidden"
            }`}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-4 md:px-6 lg:px-10">
          <div>
            <img
              src={require("../../assets/home/startingpriceicon.webp")}
              alt=""
            />
          </div>
          <div>
            <div className="text-gray-600">Starting From</div>
            {activeSlide ? (
              <div className="font-bold">
                ₹ <CountUp start={100000} end={540500} duration={2} />
              </div>
            ) : (
              <div className="font-bold">
                ₹ <CountUp start={100000} end={547000} duration={2} />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4 md:px-6 lg:px-10 border-x-2">
          <div>
            <img src={require("../../assets/home/engineicon.webp")} alt="" />
          </div>
          <div>
            <div className="text-gray-600">Engine</div>
            <div className="font-bold">1197 cc</div>
          </div>
        </div>
        <div className="flex items-center gap-4 md:px-6 lg:px-10">
          <div>
            <img src={require("../../assets/home/fuelicon.webp")} alt="" />
          </div>
          <div>
            <div className="text-gray-600">Variant</div>
            <div className="font-bold">PETROL/CNG</div>
          </div>
        </div>
      </div>
      <div className="z-10 py-16 ">
        <Swiper
          //   loop={true}
          centeredSlides={true}
          // navigation={true}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            // when window width is >= 640px
            // 640: {
            //   slidesPerView: 1,
            //   spaceBetween: 20,
            // },
            // when window width is >= 768px
            768: {
              slidesPerView: 1.9,
              spaceBetween: 10,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 1.9,
              spaceBetween: 10,
            },
          }}
          className="w-full carSlider"
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        >
          <SwiperSlide>
            <div className="flex items-center justify-center opacity-0 slider_img ">
              <img
                src={require("../../assets/vehicles/super_carry/Super Carry.webp")}
                alt=""
                className=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center opacity-0 slider_img ">
              <img
                src={require("../../assets/vehicles/ecco_cargo/Eeco Cargo.webp")}
                alt=""
                className=""
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex items-center justify-center w-full h-full -mt-24 -z-10">
          <img
            src={require("../../assets/home/dotted-circle.png")}
            alt=""
            className="md:h-28 w-min"
          />
        </div>

        <div className="flex items-center justify-center h-6 mt-10 ">
          {activeSlide ? (
            <img
              src={require("../../assets/vehicles/ecco_cargo/eecoCargoBrandName.png")}
              alt=""
              className="h-4 w-min"
            />
          ) : (
            <img
              src={require("../../assets/vehicles/super_carry/new super carry logo.webp")}
              alt=""
              className="h-6 w-min"
            />
          )}
        </div>
        <div className="flex items-center justify-center h-6 mt-10 ">
          <Link to={activeSlide ? "/eeco-cargo" : "/super-carry"}>
            <button
              aria-label={activeSlide ? "/eeco-cargo" : "/super-carry"} 
              className="px-4 py-2 text-sm text-white border rounded bg-primary hover:text-primary hover:bg-transparent border-primary"
            >
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Range;
