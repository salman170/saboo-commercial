import React, { useEffect } from "react";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialMediaIcons = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      id=""
      className="absolute z-10 hidden -mt-6 text-xl text-white -translate-y-1/2 lg:text-2xl top-1/2 right-8 md:flex md:flex-col md:gap-3"
    >
      <a
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="700"
        href="https://twitter.com/SabooCommercial"
        target="_blank"
        rel="noreferrer"
        className=""
      >
        <FaXTwitter className="cursor-pointer hover:text-primary" />
      </a>
      <a
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="700"
        href="https://www.instagram.com/saboocommercial/"
        target="_blank"
        rel="noreferrer"
        className=""
      >
        <FaInstagram className="cursor-pointer hover:text-primary" />
      </a>
      <a
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="700"
        href="https://www.facebook.com/saboorkscommercial/"
        target="_blank"
        rel="noreferrer"
        className=""
      >
        <FaFacebookF className="font-light cursor-pointer hover:text-primary" />
      </a>
      <a
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="700"
        href="https://youtube.com"
        target="_blank"
        rel="noreferrer"
        className=""
      >
        <FaYoutube className="cursor-pointer hover:text-primary" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
