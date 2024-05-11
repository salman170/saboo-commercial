import React from "react";

const ScrollingSection = () => {
  return (
    <div className="relative py-20 overflow-hidden scorllingDiv">
      <div className="w-full scorllingImg">
        <img
          src={require("../../assets/home/BackgroundImage.png")}
          alt=""
          className="w-full "
        />
        <div className="absolute -mt-20 -translate-y-1/2 lg:-mt-24 -right-80 top-1/2 scorllingCar">
            <img src={require("../../assets/home/VehicleImage.webp")} alt="" className="h-[200px] md:h-[250px] lg:h-[300px]"/>
        </div>
      </div>
    </div>
  );
};

export default ScrollingSection;
