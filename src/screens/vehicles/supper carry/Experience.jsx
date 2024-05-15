import React from "react";

const Experience = () => {
  return (
    <div className="bg-gradient-to-t from-[#D0E2FC] to-white">
      <div className="container px-1 py-10 mx-auto lg:pt-28 lg:pb-20 md:max-w-6xl">
        <h2 className="bg-[#616161] text-2xl font-semibold text-white py-2 w-min rounded-md px-4 -skew-x-12 uppercase mb-4">
          Experience
        </h2>

        <img
          src={require("../../../assets/vehicles/super_carry/others/ExperienceExterior.webp")}
          alt=""
          className="mx-auto"
        />
        <div className="mt-10 ">
          <img
            src={require("../../../assets/common/CNGLogo.webp")}
            alt=""
            className="h-5 px-4 mb-2 md:mb-4 md:px-0 md:h-auto"
          />
          <button className="px-8 py-2 text-sm text-white duration-500 rounded-full lg:py-3 md:w-48 bg-primary hover:shadow-xl hover:shadow-primary/50">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
