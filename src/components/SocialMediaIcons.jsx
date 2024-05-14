import React from "react";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const SocialMediaIcons = () => {
  return (
    <div
      id=""
      className="absolute z-10 hidden -mt-6 text-xl text-white -translate-y-1/2 lg:text-2xl top-1/2 right-8 md:flex md:flex-col md:gap-3"
    >
      <a
        href="https://twitter.com/SabooCommercial"
        target="_blank"
        rel="noreferrer"
        className="social_links"
      >
        <FaXTwitter className="cursor-pointer hover:text-primary" />
      </a>
      <a
        href="https://www.instagram.com/saboocommercial/"
        target="_blank"
        rel="noreferrer"
        className="social_links"
      >
        <FaInstagram className="cursor-pointer hover:text-primary" />
      </a>
      <a
        href="https://www.facebook.com/saboorkscommercial/"
        target="_blank"
        rel="noreferrer"
        className="social_links"
      >
        <FaFacebookF className="font-light cursor-pointer hover:text-primary" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noreferrer"
        className="social_links"
      >
        <FaYoutube className="cursor-pointer hover:text-primary" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
