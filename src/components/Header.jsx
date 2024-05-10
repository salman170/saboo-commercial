import React from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 left-0 z-20 w-full bg-white shadow">
      <div className="container flex items-center justify-between h-full px-1 mx-auto ">
        <div>
          <Link to="/">
            <img
              src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/logo.png?h=100&iar=0&w=100&hash=DB3AD9CB421109099D0DD5E01E9A8398&mw=3840"
              alt=""
              className="h-4 lg:h-5"
            />
          </Link>
        </div>
        <div className="hidden text-sm font-medium gap-x-4 lg:gap-x-6 md:flex">
          <Link
            to="/"
            className="flex flex-col justify-between hover:text-primary group"
          >
            <p className="py-6 lg:py-7">Vehicle Range</p>
            <div className=" h-[3px] bg-primary group-hover:w-full w-0 duration-500"></div>
          </Link>
          <Link
            to="/about"
            className="flex flex-col justify-between hover:text-primary group"
          >
            <p className="py-6 lg:py-7"> About</p>
            <div className=" h-[3px] bg-primary group-hover:w-full w-0 duration-500"></div>
          </Link>
          <Link
            to="/services"
            className="flex flex-col justify-between hover:text-primary group"
          >
            <p className="py-6 lg:py-7">Service</p>
            <div className=" h-[3px] bg-primary group-hover:w-full w-0 duration-500"></div>
          </Link>
          <Link
            to="/contact-us"
            className="flex flex-col justify-between hover:text-primary group"
          >
            <p className="py-6 lg:py-7"> Contact us</p>
            <div className=" h-[3px] bg-primary group-hover:w-full w-0 duration-500"></div>
          </Link>
        </div>
        <div className="py-4 md:hidden">
          <button className="text-3xl">
            <IoMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
