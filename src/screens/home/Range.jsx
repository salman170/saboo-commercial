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
import React360 from "./React360";

const Range = () => {
  const [selected, setSelected] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [threesixty, setThreesixty] = useState(0);

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
          className={`border-2  px-2 py-2 rounded-full cursor-pointer relative text-sm md:text-base md:w-48 ${
            selected === 1 && "border-primary text-primary"
          }`}
        >
          Goods Carrier
          <IoMdArrowDropdown
            className={`text-primary text-4xl absolute left-1/2 -translate-x-1/2 top-7  ${
              selected === 1 ? "block" : "hidden"
            }`}
          />
        </div>
        <div
          onClick={() => setSelected(2)}
          className={`border-2  px-2 py-2 rounded-full cursor-pointer relative text-sm md:text-base md:w-48 ${
            selected === 2 && "border-primary text-primary"
          }`}
        >
          Passenger Carrier
          <IoMdArrowDropdown
            className={`text-primary text-4xl absolute left-1/2 -translate-x-1/2 top-7  ${
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
            {selected === 1 ? (
              activeSlide === 0 ? (
                <div className="font-bold">
                  ₹ <CountUp start={100000} end={540500} duration={2} />
                </div>
              ) : (
                <div className="font-bold">
                  ₹ <CountUp start={100000} end={547000} duration={2} />
                </div>
              )
            ) : activeSlide === 0 ? (
              <div className="font-bold">
                ₹ <CountUp start={100000} end={480500} duration={2} />
              </div>
            ) : activeSlide === 1 ? (
              <div className="font-bold">
                ₹ <CountUp start={100000} end={551500} duration={2} />
              </div>
            ) : activeSlide === 2 ? (
              <div className="font-bold">
                ₹ <CountUp start={100000} end={656000} duration={2} />
              </div>
            ) : activeSlide === 3 ? (
              <div className="font-bold">
                ₹ <CountUp start={100000} end={980000} duration={2} />
              </div>
            ) : (
              <div className="font-bold">
                ₹ <CountUp start={100000} end={529000} duration={2} />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4 md:px-6 lg:px-10 border-x-2">
          <div>
            <img src={require("../../assets/home/engineicon.webp")} alt="" />
          </div>
          <div>
            <div className="text-gray-600">Engine </div>
            {selected === 1 ? (
              activeSlide === 0 ? (
                <div className="font-bold">
                  ₹ <CountUp start={1000} end={1197} duration={2} /> cc
                </div>
              ) : (
                <div className="font-bold">
                  ₹ <CountUp start={1000} end={1197} duration={2} /> cc
                </div>
              )
            ) : activeSlide === 0 ? (
              <div className="font-bold">
                ₹ <CountUp start={500} end={998} duration={2} /> cc
              </div>
            ) : activeSlide === 1 ? (
              <div className="font-bold">
                ₹ <CountUp start={500} end={998} duration={2} /> cc
              </div>
            ) : activeSlide === 2 ? (
              <div className="font-bold">
                ₹ <CountUp start={1000} end={1197} duration={2} /> cc
              </div>
            ) : activeSlide === 3 ? (
              <div className="font-bold">
                ₹ <CountUp start={1000} end={1462} duration={2} /> cc
              </div>
            ) : (
              <div className="font-bold">
                ₹ <CountUp start={1000} end={1197} duration={2} /> cc
              </div>
            )}
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
      <div className="z-10 py-16 min-h-[50vh] lg:min-h-[55vh]">
        {threesixty ? (
          <div className="flex justify-center ">
            <div className="w-80  md:w-[40rem] -mb-10  ">
              <React360 activeSlide={activeSlide} />
            </div>
          </div>
        ) : (
          <Swiper
              // loop={true}
            centeredSlides={true}
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
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
            {selected === 1 ? (
              <>
                <SwiperSlide>
                  <div className="flex items-center justify-center ">
                    <img
                      src={require("../../assets/vehicles/super_carry/others/Super Carry.webp")}
                      alt=""
                      srcset=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center ">
                    <img
                      src={require("../../assets/vehicles/ecco_cargo/Eeco Cargo.webp")}
                      alt=""
                      srcset=""
                    />
                  </div>
                </SwiperSlide>
              </>
            ) : (
              <>
                <SwiperSlide>
                  <div className="flex items-center justify-center ">
                    <img
                      src={require("../../assets/vehicles/Tour_H1/TourH1-NewImg.webp")}
                      alt=""
                      srcset=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center ">
                    <img
                      src={require("../../assets/vehicles/Tour_H3/Tour H3.webp")}
                      alt=""
                      srcset=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center ">
                    <img
                      src={require("../../assets/vehicles/Tour_S/Tour S.webp")}
                      alt=""
                      srcset=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center ">
                    <img
                      src={require("../../assets/vehicles/Tour_M/Tour M.webp")}
                      alt=""
                      srcset=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center ">
                    <img
                      src={require("../../assets/vehicles/Tour_V/Tour V.webp")}
                      alt=""
                      srcset=""
                    />
                  </div>
                </SwiperSlide>
              </>
            )}
          </Swiper>
        )}
        <div className="flex items-center justify-center w-full h-full -mt-24 -z-10">
          <img
            src={require("../../assets/home/dotted-circle.png")}
            alt=""
            srcset=""
            className="md:h-28 w-min"
          />
        </div>
        {selected === 1 && (
          <div className="flex items-center justify-center w-full h-full -mt-12 opacity-0 md:opacity-100 -z-10 md:z-20">
            <img
              onClick={() => {
                setThreesixty(!threesixty);
                if (activeSlide === 1 && threesixty) setActiveSlide(0);
              }}
              src={
                !threesixty
                  ? require("../../assets/home/Icon360.svg").default
                  : "https://www.marutisuzukicommercial.com/images/icons/Icon360Close.svg"
              }
              alt=""
              srcset=""
              className="z-20 h-24 cursor-pointer"
            />
          </div>
        )}
        <div className={`flex items-center justify-center h-6 mt-10  ${selected===2 ? "md:mt-16" :" md:mt-8"}`}>
          {selected === 1 ? (
            activeSlide ? (
              <img
                src={require("../../assets/vehicles/ecco_cargo/eecoCargoBrandName.png")}
                alt=""
                srcset=""
                className="h-4 w-min"
              />
            ) : (
              <img
                src={require("../../assets/vehicles/super_carry/others/new super carry logo.webp")}
                alt=""
                srcset=""
                className="h-6 w-min"
              />
            )
          ) : activeSlide === 0 ? (
            <img
              src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/homepage/vehical-range/tour_h1-logo-2-new.png?mw=1200"
              alt=""
            />
          ) : activeSlide === 1 ? (
            <img
              src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/homepage/vehical-range/tour_h3-logo-2-new.png?mw=1200"
              alt=""
            />
          ) : activeSlide === 2 ? (
            <img
              src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/homepage/vehical-range/tour-s-logo-new.png?mw=1200"
              alt=""
            />
          ) : activeSlide === 3 ? (
            <img
              src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/homepage/vehical-range/tour-m-logo-new.png?mw=1200"
              alt=""
            />
          ) : (
            <img
              src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/homepage/vehical-range/tour_v-logo-2-new.png?mw=1200"
              alt=""
            />
          )}
        </div>
        <div className="flex flex-col items-center justify-center h-6 mt-10">
          <Link to={activeSlide ? "/eeco-cargo" : "/super-carry"}>
            <button
              aria-label={activeSlide ? "/eeco-cargo" : "/super-carry"}
              className="px-4 py-2 text-sm text-white border rounded bg-primary hover:text-primary hover:bg-transparent border-primary"
            >
              Explore
            </button>
          </Link>
        </div>
        {selected === 1 && (
          <div className="flex items-center justify-center w-full h-full mt-4 md:hidden">
            <img
              onClick={() => {
                setThreesixty(!threesixty);
                if (activeSlide === 1 && threesixty) setActiveSlide(0);
              }}
              src={require("../../assets/home/Icon360.svg").default}
              alt=""
              srcset=""
              className="h-24 cursor-pointer "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Range;
