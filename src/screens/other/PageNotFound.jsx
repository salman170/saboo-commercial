import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="flex flex-col items-center py-12 text-center ">
        <video
          src={require("../../assets/home/pagenotfound.mp4")}
          autoPlay
          loop
          muted
          className="object-cover w-64 h-64 lg:h-96 lg:w-96"
        ></video>
        {/* <h1 className="font-extrabold text-9xl">404</h1> */}
        <p className="mt-4 mb-6 text-3xl text-primary">Not Found</p>
        <p className="mb-4 text-gray-500 lg:mb-6">
          The resource requested could not be found on this server!
        </p>
        <div className="flex items-center justify-center px-4 py-2.5 text-sm text-white bg-gray-300 rounded-full md:px-8  lg:px-12 hover:bg-primary hover:text-white hover:shadow-lg duration-200 gap-4 ">
          <FaLongArrowAltRight />
          <Link to="/" className="">
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
