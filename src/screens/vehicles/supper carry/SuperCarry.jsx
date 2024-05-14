import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SuperCarry = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[])
  

  return (
    <div>
      <div className="bg-gradient-to-b  from-white to-[#D0E2FC] max-h-screen">
        <img
          src={require("../../../assets/vehicles/super_carry/supercarrydisclaimerjato.webp")}
          alt=""
          data-aos="fade-down-right"
          data-aos-delay="0"
          data-aos-duration="1000"
          className="hidden w-full md:block"
        />
        <img
          src={require("../../../assets/vehicles/super_carry/supercarrymobiledisclaimerNew.webp")}
          alt=""
          data-aos="fade-down-right"
          data-aos-delay="0"
          data-aos-duration="1000"
          className="w-full md:hidden"
        />
      </div>
    </div>
  );
};

export default SuperCarry;
