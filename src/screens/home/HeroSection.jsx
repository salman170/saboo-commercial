import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SocialMediaIcons from "../../components/SocialMediaIcons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-primary">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        // effect="fade"
        // loop={true}
        centeredSlides={true}
        // navigation={true}

        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full overflow-visible select-none customerSwiper "
        // style={backgroundStyle}
      >
        <SwiperSlide className="  h-[80vh] md:h-auto bg-primary lg:max-h-[90vh]">
          <div className=" h-[80vh] md:h-auto flex justify-center items-center  lg:max-h-[90vh]">
            <video
              autoPlay
              muted
              loop
              className="hidden object-cover w-full h-full md:block"
              poster="https://saboocommercial.in/images/banners/newbanner.webp"
              src="https://storage-uat.marutisuzukicommercial.com/homepage-herobanner/HeroBanner1Updated.mp4"
            ></video>
            <video
              autoPlay
              muted
              loop
              className="object-cover w-full h-full md:hidden"
              poster="https://saboocommercial.in/images/banners/newbanner.webp"
              src="https://storage-uat.marutisuzukicommercial.com/homepage-herobanner/mobilevideo.mp4"
            ></video>
          </div>
        </SwiperSlide>
        <SwiperSlide className="  h-[80vh] md:h-auto bg-primary lg:max-h-[90vh]">
          <div className=" h-[80vh] md:h-auto flex justify-center items-center  lg:max-h-[90vh]">
            <video
              autoPlay
              muted
              loop
              className="hidden object-cover w-full h-full md:block"
              poster="https://saboocommercial.in/images/banners/newbanner.webp"
              src="https://storage-uat.marutisuzukicommercial.com/homepage-herobanner/HeroBanner2Updated.mp4"
            ></video>
            <video
              autoPlay
              muted
              loop
              className="object-cover w-full h-full md:hidden "
              poster="https://saboocommercial.in/images/banners/newbanner.webp"
              src="https://storage-uat.marutisuzukicommercial.com/homepage-herobanner/mobilevideo2.mp4"
            ></video>
          </div>
        </SwiperSlide>

        {/* <div className="h-10 bg-white"></div> */}
      </Swiper>
      <div className="absolute z-10 bottom-20 right-10 ">
        <div className="flex flex-col gap-2 md:flex-row ">
          <button className="py-2.5 hover:shadow-xl shadow-black w-32 text-xs text-primary rounded-lg  hover:text-white hover:bg-primary bg-white">
            Explore
          </button>
          <button className="py-2.5 hover:shadow-xl shadow-black whitespace-nowrap  w-32 text-xs text-primary rounded-lg  hover:text-white hover:bg-primary bg-white">
            Enquire Now
          </button>
        </div>
      </div>
      <SocialMediaIcons />
    </div>
  );
};

export default HeroSection;
