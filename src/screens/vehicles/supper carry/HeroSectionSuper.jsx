import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentArrowDown,
} from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SocialMediaIcons from "../../../components/SocialMediaIcons";
import { Navigation, Autoplay } from "swiper/modules";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const HeroSectionSuper = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [selectedBanner, setSelectedBanner] = useState(1);

  return (
    <div>
      <div
        className="bg-gradient-to-b  from-white to-[#D0E2FC] h-[85vh] md:h-[73vh] relative overflow-hidden"
        // style={{backgroundImage: `url(${banner1})`}}
      >
        <div className="absolute z-10 -translate-x-1/2 -translate-y-1/4 md:top-1/2 md:left-10 bottom-20 left-1/2 md:translate-x-4 md:translate-y-0">
          <div className="select-none w-96">
            <Swiper
              className=""
              spaceBetween={2}
              slidesPerView={2}
              // autoplay={{
              //   delay: 1000,
              //   disableOnInteraction: false,
              // }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              // navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Autoplay]}
            >
              <SwiperSlide>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="700"
                  onClick={() => setSelectedBanner(1)}
                  className=""
                >
                  <img
                    src={require("../../../assets/vehicles/super_carry/home/PetrolStdCarousel.webp")}
                    alt=""
                    className={`rounded-lg cursor-pointer ${
                      selectedBanner === 1 ? "grayscale-0" : "grayscale"
                    }`}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="700"
                  onClick={() => setSelectedBanner(2)}
                  className=""
                >
                  <img
                    src={require("../../../assets/vehicles/super_carry/home/CNGstdCarousel.webp")}
                    alt=""
                    className={`rounded-lg cursor-pointer ${
                      selectedBanner === 2 ? "grayscale-0" : "grayscale"
                    }`}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  data-aos-duration="700"
                  onClick={() => setSelectedBanner(3)}
                  className=""
                >
                  <img
                    src={require("../../../assets/vehicles/super_carry/home/PetrolChassisCarousel.webp")}
                    alt=""
                    className={`rounded-lg cursor-pointer ${
                      selectedBanner === 3 ? "grayscale-0" : "grayscale"
                    }`}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="700"
                  data-aos-duration="700"
                  onClick={() => setSelectedBanner(4)}
                  className=""
                >
                  <img
                    src={require("../../../assets/vehicles/super_carry/home/CNGChassisCarousel.webp")}
                    alt=""
                    className={`rounded-lg cursor-pointer ${
                      selectedBanner === 4 ? "grayscale-0" : "grayscale"
                    }`}
                  />
                </div>
              </SwiperSlide>
              <div className="flex justify-center gap-4 mt-3 md:justify-start">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-duration="700"
                  aria-label="Previous"
                  type="button"
                  className="flex items-center justify-center text-white cursor-pointer group "
                  ref={navigationPrevRef}
                >
                  <BsArrowLeft className="text-2xl text-white duration-500 group-hover:text-primary " />
                </button>
                <button
                  data-aos="zoom-in"
                  data-aos-delay="700"
                  data-aos-duration="700"
                  aria-label="Next"
                  type="button"
                  className="flex items-center justify-center text-white rotate-180 cursor-pointer group "
                  ref={navigationNextRef}
                >
                  <BsArrowRight className="text-2xl text-white duration-500 group-hover:text-primary " />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
        <div
          data-aos="fade-down-right"
          data-aos-delay="0"
          data-aos-duration="1000"
          className={`absolute top-0 left-0  h-full w-full bg-cover  bg-center  `}
          // style={{ backgroundImage: `url(${banner1})` }}
        >
          {selectedBanner === 1 ? (
            <div className="w-full h-full">
              <img
                src={require("../../../assets/vehicles/super_carry/home/supercarrydisclaimerjato.webp")}
                alt=""
                className="hidden object-cover w-full h-full md:block"
              />
              <img
                src={require("../../../assets/vehicles/super_carry/home/supercarrymobiledisclaimerNew.webp")}
                alt=""
                className="object-cover w-full h-full md:hidden"
              />
            </div>
          ) : selectedBanner === 2 ? (
            <div className="w-full h-full">
              <img
                src={require("../../../assets/vehicles/super_carry/home/CNGCargo.webp")}
                alt=""
                className="hidden object-cover w-full h-full md:block"
              />
              <img
                src={require("../../../assets/vehicles/super_carry/home/CNGStdMobile.webp")}
                alt=""
                className="object-cover w-full h-full md:hidden"
              />
            </div>
          ) : selectedBanner === 3 ? (
            <div className="w-full h-full">
              <img
                src={require("../../../assets/vehicles/super_carry/home/PetrolCabChassis.webp")}
                alt=""
                className="hidden object-cover w-full h-full md:block"
              />
              <img
                src={require("../../../assets/vehicles/super_carry/home/PetrolChasisMobile.webp")}
                alt=""
                className="object-cover w-full h-full md:hidden"
              />
            </div>
          ) : (
            <div className="w-full h-full">
              <img
                src={require("../../../assets/vehicles/super_carry/home/CNGChassis.webp")}
                alt=""
                className="hidden object-cover w-full h-full md:block"
              />
              <img
                src={require("../../../assets/vehicles/super_carry/home/CNGChassisMobile.webp")}
                alt=""
                className="object-cover w-full h-full md:hidden"
              />
            </div>
          )}
        </div>
        {/* <div
          data-aos="fade-down-right"
          data-aos-delay="0"
          data-aos-duration="1000"
          className={`absolute top-0 left-0  h-full w-full bg-cover  bg-center hidden md:block `}
          style={{ backgroundImage: `url(${banner1})` }}
        ></div>
        <div
          data-aos="fade-down-right"
          data-aos-delay="0"
          data-aos-duration="1000"
          className={`absolute top-0 left-0  h-full w-full bg-cover  bg-top md:hidden `}
          style={{ backgroundImage: `url(${banner2})` }}
        ></div> */}

        <div className="absolute flex justify-center w-full gap-4 -translate-x-1/2 bottom-10 left-1/2 ">
          <button aria-label="Brochure">
            <a
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="700"
              href="https://saboocommercial.in/admin/img/brochure/SuperCarry_Leaflet_Petrol_BS6_Deck_English.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 lg:py-2.5 text-white border border-white rounded-full lg:w-48 justify-center hover:bg-primary duration-500 hover:border-primary "
            >
              <HiOutlineDocumentArrowDown className="text-3xl" /> Brochure
            </a>
          </button>
          <button
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="700"
            aria-label="Enquire Now"
            className="flex items-center gap-2 px-4 py-2 lg:py-2.5 text-white border border-white rounded-full lg:w-48 justify-center hover:bg-primary duration-500 hover:border-primary "
          >
            <HiOutlineClipboardDocumentList className="text-3xl" /> Enquire Now
          </button>
        </div>
        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default HeroSectionSuper;
