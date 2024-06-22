import React, { useRef, useState } from "react";
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
  const swiperRef = useRef(null);

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
      <div className="flex justify-center gap-2 pb-6 text-center select-none lg:pb-10">
        <div
          onClick={() => {
            setSelected(1);
            swiperRef.current.slideTo(0);
            setThreesixty(0);
          }}
          className={`border-2  px-2 py-2 rounded-full cursor-pointer relative text-sm md:text-base md:w-48 text-gray-500 ${
            selected === 1 && "border-primary text-primary"
          }`}
        >
          Goods Carrier
          <IoMdArrowDropdown
            className={`text-primary text-4xl absolute left-1/2 -translate-x-1/2 -mt-1 md:mt-0 top-7  ${
              selected === 1 ? "block" : "hidden"
            }`}
          />
        </div>
        <div
          onClick={() => {
            setSelected(2);
            swiperRef.current.slideTo(0);
            setThreesixty(0);
          }}
          className={`border-2  px-2 py-2 rounded-full cursor-pointer relative text-sm md:text-base md:w-48 text-gray-500 ${
            selected === 2 && "border-primary text-primary"
          }`}
        >
          Passenger Carrier
          <IoMdArrowDropdown
            className={`text-primary text-4xl absolute left-1/2 -translate-x-1/2 -mt-1 md:mt-0 top-7  ${
              selected === 2 ? "block" : "hidden"
            }`}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2 md:gap-4 md:px-6 lg:px-10 md:w-60">
          <div>
            <img
              src={require("../../assets/home/startingpriceicon.webp")}
              alt=""
              className="h-5 md:h-auto"
            />
          </div>
          <div>
            <div className="text-xs text-gray-600 md:text-base">
              Starting From
            </div>
            {selected === 1 ? (
              activeSlide === 0 ? (
                <div className="text-xs font-bold md:text-base">
                  ₹ <CountUp start={100000} end={540500} duration={2} />
                </div>
              ) : (
                <div className="text-xs font-bold md:text-base">
                  ₹ <CountUp start={100000} end={547000} duration={2} />
                </div>
              )
            ) : activeSlide === 0 ? (
              <div className="text-xs font-bold md:text-base">
                ₹ <CountUp start={100000} end={480500} duration={2} />
              </div>
            ) : activeSlide === 1 ? (
              <div className="text-xs font-bold md:text-base">
                ₹ <CountUp start={100000} end={551500} duration={2} />
              </div>
            ) : activeSlide === 2 ? (
              <div className="text-xs font-bold md:text-base">
                ₹ <CountUp start={100000} end={656000} duration={2} />
              </div>
            ) : activeSlide === 3 ? (
              <div className="text-xs font-bold md:text-base">
                ₹ <CountUp start={100000} end={980000} duration={2} />
              </div>
            ) : (
              <div className="text-xs font-bold md:text-base">
                ₹ <CountUp start={100000} end={529000} duration={2} />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 px-1 md:gap-4 md:px-6 lg:px-10 border-x-2 md:w-60">
          <div>
            <img
              src={require("../../assets/home/engineicon.webp")}
              alt=""
              className="h-5 md:h-auto"
            />
          </div>
          <div>
            <div className="text-xs text-gray-600 md:text-base">Engine </div>
            {selected === 1 ? (
              activeSlide === 0 ? (
                <div className="text-xs font-bold md:text-base">
                  ₹ <CountUp start={1000} end={1197} duration={2} /> cc
                </div>
              ) : (
                <div className="text-xs font-bold md:text-base">
                  ₹ <CountUp start={1000} end={1197} duration={2} /> cc
                </div>
              )
            ) : activeSlide === 0 ? (
              <div className="text-xs font-bold md:text-base">
                ₹ <CountUp start={500} end={998} duration={2} /> cc
              </div>
            ) : activeSlide === 1 ? (
              <div className="text-xs font-bold md:text-base">
                ₹ <CountUp start={500} end={998} duration={2} /> cc
              </div>
            ) : activeSlide === 2 ? (
              <div className="text-xs font-bold md:text-base">
                ₹ <CountUp start={1000} end={1197} duration={2} /> cc
              </div>
            ) : activeSlide === 3 ? (
              <div className="text-xs font-bold md:text-base">
                ₹ <CountUp start={1000} end={1462} duration={2} /> cc
              </div>
            ) : (
              <div className="text-xs font-bold md:text-base">
                ₹ <CountUp start={1000} end={1197} duration={2} /> cc
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 md:px-6 lg:px-10 md:w-60 md:gap-4">
          <div>
            <img
              src={require("../../assets/home/fuelicon.webp")}
              alt=""
              className="h-5 md:h-auto"
            />
          </div>
          <div>
            <div className="text-xs text-gray-600 md:text-base">Variant</div>
            <div className="text-xs font-bold md:text-base">PETROL/CNG</div>
          </div>
        </div>
      </div>
      <div className="z-10 py-16 min-h-[50vh] lg:min-h-[55vh] ">
        {threesixty ? (
          <div className="flex justify-center ">
            <div className="w-80  md:w-[40rem] -mb-10  ">
              <React360 activeSlide={activeSlide} />
            </div>
          </div>
        ) : (
          <Swiper
            // loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
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
                      alt = "" className="px-2 md:px-0"
                      
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center ">
                    <img
                      src={require("../../assets/vehicles/ecco_cargo/Eeco Cargo.webp")}
                      alt = "" className="px-2 md:px-0"
                      
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
                      alt = "" className="px-2 md:px-0"
                      
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center ">
                    <img
                      src={require("../../assets/vehicles/Tour_H3/Tour H3.webp")}
                      alt = "" className="px-2 md:px-0"
                      
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center ">
                    <img
                      src={require("../../assets/vehicles/Tour_S/Tour S.webp")}
                      alt = "" className="px-2 md:px-0"
                      
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center ">
                    <img
                      src={require("../../assets/vehicles/Tour_M/Tour M.webp")}
                      alt = "" className="px-2 md:px-0"
                      
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center ">
                    <img
                      src={require("../../assets/vehicles/Tour_V/Tour V.webp")}
                      alt = "" className="px-2 md:px-0"
                      
                    />
                  </div>
                </SwiperSlide>
              </>
            )}
          </Swiper>
        )}
        <div className="items-center justify-center hidden w-full h-full -mt-24 md:flex -z-10 ">
          <img
            src={require("../../assets/home/dotted-circle.png")}
            alt=""
            
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
              
              className="z-20 h-24 cursor-pointer"
            />
          </div>
        )}
        <div
          className={`flex items-center justify-center h-6 mt-10  ${
            selected === 2 ? "md:mt-16" : " md:mt-8"
          }`}
        >
          {selected === 1 ? (
            activeSlide ? (
              <img
                src={require("../../assets/vehicles/ecco_cargo/eecoCargoBrandName.png")}
                alt=""
                
                className="h-4 w-min"
              />
            ) : (
              <img
                src={require("../../assets/vehicles/super_carry/others/new super carry logo.webp")}
                alt=""
                
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
              aria-label={activeSlide ? "eeco-cargo" : "super-carry"}
              className="px-4 py-2 text-sm text-white border rounded-full lg:px-8 bg-primary hover:text-primary hover:bg-transparent border-primary"
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
