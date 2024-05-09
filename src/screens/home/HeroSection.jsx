import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const HeroSection = () => {
  useGSAP(
    ()=>{
        gsap.fromTo(".social_links", { opacity: 0, x:100 }, { opacity: 1, duration: 0.5, x:0, ease: "power1.inOut", stagger: 0.2});

    }
  );
  return (
    <div className="relative bg-primary">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
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
              className="object-cover w-full h-full hidden md:block"
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
              className="object-cover w-full h-full hidden md:block"
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
      <div className="absolute bottom-20 right-10 z-10 ">
        <div className="flex flex-col gap-2 md:flex-row  ">
          <button className="py-2.5 hover:shadow-xl shadow-black w-32 text-xs text-primary rounded-lg  hover:text-white hover:bg-primary bg-white">
            Explore
          </button>
          <button className="py-2.5 hover:shadow-xl shadow-black whitespace-nowrap  w-32 text-xs text-primary rounded-lg  hover:text-white hover:bg-primary bg-white">
            Enquire Now
          </button>
        </div>
      </div>
      <div id="" className="text-xl lg:text-2xl hidden   absolute top-1/2 -translate-y-1/2 right-8 z-10 -mt-6 text-white md:flex md:flex-col md:gap-3 ">
        <a
          href="https://twitter.com/SabooCommercial"
          target="_blank"
          rel="noreferrer"
          className="social_links"
        >
          <FaXTwitter className="hover:text-primary cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/saboocommercial/"
          target="_blank"
          rel="noreferrer"
          className="social_links"
        >
          <FaInstagram className="hover:text-primary cursor-pointer" />
        </a>
        <a
          href="https://www.facebook.com/saboorkscommercial/"
          target="_blank"
          rel="noreferrer"
          className="social_links"
        >
          <FaFacebookF className="hover:text-primary font-light cursor-pointer" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="social_links"
        >
          <FaYoutube className="hover:text-primary cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
