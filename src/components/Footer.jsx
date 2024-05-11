import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[#0C0C0C] text-white">
      {/* <div className=""> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-between px-4 py-4 overflow-hidden border-b border-gray-500 lg:py-6 md:col-span-2 sm:flex-row">
          <img
            src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/footerlogomsil.png"
            alt=""
          />
          <div className="flex gap-4 text-xl lg:gap-6 lg:text-2xl">
            <a
              href="https://twitter.com/SabooCommercial"
              target="_blank"
              rel="noreferrer"
              className=""
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <FaXTwitter className="cursor-pointer hover:text-primary" />
            </a>
            <a
              href="https://www.instagram.com/saboocommercial/"
              target="_blank"
              rel="noreferrer"
              className=""
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <FaInstagram className="cursor-pointer hover:text-primary" />
            </a>
            <a
              href="https://www.facebook.com/saboorkscommercial/"
              target="_blank"
              rel="noreferrer"
              className=""
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <FaFacebookF className="font-light cursor-pointer hover:text-primary" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className=""
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <FaYoutube className="cursor-pointer hover:text-primary" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 px-4 py-3 lg:py-4 bg-primary md:col-span-2 lg:col-span-1">
          <div>
            <img
              src={require("../assets/home/TollFree4462x.png")}
              alt=""
              className="h-10 md:h-12 lg:h-14"
            />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs md:text-sm lg:text-base">Toll Free Number</p>
            <h4
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="text-3xl font-bold"
            >
              <a href="tel:+919848898488" target="_blank" rel="noreferrer">
                98488 98488
              </a>{" "}
            </h4>
          </div>
        </div>

        <div className="px-2 my-3 border-gray-600 md:border-r lg:my-6 lg:px-4">
          <div className="mb-2 font-semibold lg:text-lg">Vehicle Range</div>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-xs text-gray-400">Goods Carrier</div>
            <div className="col-span-2 text-xs text-gray-400">
              Passenger Carrier
            </div>
            <div className="text-xs">
              <ul className="">
                <li className="py-2">
                  <Link to="/">Super Carry</Link>
                </li>
                <li className="py-2">
                  <Link to="/">Eeco Cargo</Link>
                </li>
              </ul>
            </div>
            <div className="text-xs">
              <ul className="">
                <li className="py-2">
                  <Link to="/">Tour H1</Link>
                </li>
                <li className="py-2">
                  <Link to="/">Tour S</Link>
                </li>
                <li className="py-2">
                  <Link to="/">Tour V</Link>
                </li>
              </ul>
            </div>
            <div className="text-xs">
              <ul className="">
                <li className="py-2">
                  <Link to="/">Tour H3</Link>
                </li>
                <li className="py-2">
                  <Link to="/">Tour M</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-2 py-3 border-t border-gray-500 lg:py-6 lg:px-4 md:border-t-0">
          <ul className="text-lg font-semibold ">
            <li className="py-0.5">
              <Link to="/about">About Us</Link>
            </li>
            <li className="py-0.5">
              <Link to="/services">Services</Link>
            </li>
            <li className="py-0.5">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="py-0.5">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="py-0.5">
              <Link to="/terms-and-conditions">Terms of Use</Link>
            </li>
          </ul>
        </div>
        <div className="px-2 py-3 text-[9px] lg:py-6 lg:border-l md:col-span-2 lg:col-span-1 border-t border-gray-500 lg:border-t-0">
          <ul>
            <li>
              *The content and information available on this website is limited
              to the sales and services offered by Maruti Suzuki India Limited
              in the jurisdiction of India only.
            </li>
            <li>
              *Caution: Beware of Fake Promotions or Offers *Prices/Schemes
              prevailing at the time of invoice/bill shall be applicable.
            </li>
            <li>*Creative visualization and illustrative purposes only.</li>
            <li>*Black glass on the vehicles is due to the lightning effect</li>
            <li>
              *Vehicle Model and accessories shown may vary from the actual
              product.
            </li>
            <li>
              *For details on the safety features including air-bag of vehicle
              kindly refer owner's manual Please do not believe or engage with
              any promotional messages (SMS) or Web-link which ask you to click
              on a link and fill in your details to win a Maruti Suzuki car.
              These SMS or Web-link based offers are fake, and Maruti Suzuki
              India Limited bears no liability or responsibility whatsoever for
              any such communication which is fraudulent or misleading in
              nature.
            </li>
          </ul>
        </div>
      </div>
      {/* <hr /> */}
      <div className="flex flex-col justify-between px-4 py-3 border-t border-gray-500 lg:py-6 sm:flex-row">
      
          <p className="text-xs sm:text-center">
            © 2024 Saboo Commercial All Rights Reserved.
          </p>
        
        <div className="flex items-center gap-2 text-xs lg:gap-4">
          Powered by
          <a
            href="https://www.broaddcast.com/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <img
              src="https://www.broaddcast.com/assets/images/logo-white.svg"
              alt=""
              className="h-8 -ml-2"
            />
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;
