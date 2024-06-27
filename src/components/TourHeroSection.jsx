import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentArrowDown,
} from "react-icons/hi2";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SocialMediaIcons from "./SocialMediaIcons";

const TourHeroSection = ({ webImg, mobImg, altText, brochureLink }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div
        className="bg-gradient-to-b  from-white to-[#D0E2FC] h-[85vh] md:h-[73vh] relative overflow-hidden"
        // style={{backgroundImage: `url(${banner1})`}}
      >
        <div
          data-aos="fade-down-right"
          data-aos-delay="0"
          data-aos-duration="1000"
          className={`absolute top-0 left-0  h-full w-full bg-cover  bg-center  `}
          // style={{ backgroundImage: `url(${banner1})` }}
        >
          <div className="w-full h-full">
            <img
              src={webImg}
              alt={altText}
              className="hidden object-cover w-full h-full md:block"
            />
            <img
              src={mobImg}
              alt={altText}
              className="object-cover w-full h-full md:hidden"
            />
          </div>
        </div>

        <div className="absolute flex justify-center w-full gap-4 -translate-x-1/2 bottom-10 left-1/2 ">
          <button aria-label="Brochure">
            <a
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="700"
              href={brochureLink}
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

export default TourHeroSection;
