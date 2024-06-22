import React, { useEffect, useState } from "react";
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
import SocialMediaIcons from "../../../components/SocialMediaIcons";

const HeroSectionEcco = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [selectedBanner, setSelectedBanner] = useState(1);

  return (
    <div>
      <div
        className="bg-gradient-to-b  from-white to-[#D0E2FC] h-[85vh] md:h-[73vh] relative overflow-hidden"
        // style={{backgroundImage: `url(${banner1})`}}
      >
        <div className="absolute z-10 flex items-start gap-2 -translate-x-1/2 -translate-y-1/2 md:top-1/2 md:left-10 bottom-20 left-1/2 md:translate-x-4 md:translate-y-0">
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="700"
            className=""
          >
            <img
              src={require("../../../assets/vehicles/ecco_cargo/home/Eeco banner first mobile.webp")}
              alt=""
              className={`rounded-lg cursor-pointer `}
              onClick={() => setSelectedBanner(1)}
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="700"
            className=""
          >
            <img
              src={require("../../../assets/vehicles/ecco_cargo/home/EECOBanner.webp")}
              alt=""
              className={`rounded-lg cursor-pointer `}
              onClick={() => setSelectedBanner(2)}
            />
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
                src={require("../../../assets/vehicles/ecco_cargo/home/eeco cargo main banner.webp")}
                alt=""
                className="hidden object-cover w-full h-full md:block"
              />
              <img
                src={require("../../../assets/vehicles/ecco_cargo/home/Group 162942.webp")}
                alt=""
                className="object-cover w-full h-full md:hidden"
              />
            </div>
          ) : (
            <div className="w-full h-full">
              <img
                src={require("../../../assets/vehicles/ecco_cargo/home/eeco cargo main banner 2.webp")}
                alt=""
                className="hidden object-cover w-full h-full md:block"
              />
              <img
                src={require("../../../assets/vehicles/ecco_cargo/home/eeco cargo cng mob.webp")}
                alt=""
                className="object-cover w-full h-full md:hidden"
              />
            </div>
          )}
        </div>

        <div className="absolute flex justify-center w-full gap-4 -translate-x-1/2 bottom-10 left-1/2 ">
          <button aria-label="Brochure">
            <a
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="700"
              href="https://saboocommercial.in/admin/img/brochure/Eeco-leaflet-A4-BS6-ENGLISH-CTC.pdf"
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

export default HeroSectionEcco;
