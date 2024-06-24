import React, { useEffect, useState } from "react";
import React360 from "../../home/React360";
import { RxCross2 } from "react-icons/rx";

const ExperienceEcco = () => {
  // const [selected, setSelected] = useState(0);
  // const [activeSlide, setActiveSlide] = useState(0);
  const [threesixty, setThreesixty] = useState(false);

  useEffect(() => {
    console.log(threesixty);
  }, [threesixty]);

  return (
    <div className="bg-gradient-to-t from-[#D0E2FC] to-white relative">
      <div className="container px-1 py-10 mx-auto select-none lg:pt-20 lg:pb-16 md:max-w-6xl">
    
        <h2 className="bg-[#616161] text-2xl font-semibold text-white py-2 w-min rounded-md px-4 -skew-x-12 uppercase mb-4">
          Experience
        </h2>
        <div className="] overflow-hidden">
          {threesixty ? (
            <div className="flex justify-center">
              <div className="overflow-hidden lg:w-2/3 rounded-2xl">
                <React360 activeSlide={1} />
              </div>
            </div>
          ) : (
            <div className="relative">
              <img
                src={require("../../../assets/vehicles/ecco_cargo/hotspotexterior.webp")}
                alt=""
                className="p-2 mx-auto rounded-md md:w-11/12 lg:w-10/12 md:p-4 md:rounded-lg sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
              />
              <div className="absolute w-8 h-8 p-1.5 transform -translate-x-1/2 -translate-y-1/2 border border-black rounded-full top-[60%] left-1/2 -ml-4 cursor-pointer">
                <div className="flex items-center justify-center w-full h-full text-white bg-black rounded-full animate-pulse ">
                  +
                </div>
              </div>
              <div className="absolute w-8 h-8 p-1.5 transform -translate-x-1/2 -translate-y-1/2 border border-black rounded-full top-1/2 left-1/2 ml-14 lg:ml-24 lg:-mt-8 cursor-pointer">
                <div className="flex items-center justify-center w-full h-full text-white bg-black rounded-full animate-pulse">
                  +
                </div>
              </div>
              <div className="absolute w-8 h-8 p-1.5 transform -translate-x-1/2 -translate-y-1/2 border border-black rounded-full bottom-[15%] left-1/2 -ml-6 cursor-pointer">
                <div className="flex items-center justify-center w-full h-full text-white bg-black rounded-full animate-pulse ">
                  +
                </div>
              </div>
              <div className="absolute w-8 h-8 p-1.5 transform -translate-x-1/2 -translate-y-1/2 border border-black rounded-full top-1/2 left-1/2 -ml-48 -mt-16 cursor-pointer">
                <div className="flex items-center justify-center w-full h-full text-white bg-black rounded-full animate-pulse ">
                  +
                </div>
              </div>
              <div className="absolute w-8 h-8 p-1.5 transform -translate-x-1/2 -translate-y-1/2 border border-black rounded-full top-1/2 left-1/2  ml-48 lg:ml-56 lg:-mt-8 cursor-pointer">
                <div className="flex items-center justify-center w-full h-full text-white bg-black rounded-full animate-pulse">
                  +
                </div>{" "}
              </div>
              <div className="absolute w-8 h-8 p-1.5 transform -translate-x-1/2 -translate-y-1/2 border border-black rounded-full top-1/2 left-1/2  ml-48 lg:ml-56 mt-10 cursor-pointer">
                <div className="flex items-center justify-center w-full h-full text-white bg-black rounded-full animate-pulse ">
                  +
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="justify-center hidden mt-6 duration-500 md:flex">
          <div
            onClick={() => setThreesixty(!threesixty)}
            className="relative w-20 transition-all duration-500 rounded-full cursor-pointer h-7 bg-gray-400/50 "
          >
            <div
              className={`flex items-center justify-center  text-white rounded-full   bg-primary transition-all duration-500 z-10 absolute top-0 ${
                threesixty
                  ? "translate-x-10 h-10 w-10 -mt-1.5"
                  : "translate-x-0 h-11 w-11 -mt-2"
              }`}
            >
              {threesixty ? (
                <RxCross2 className="text-xl" />
              ) : (
                <img
                  src={require("../../../assets/home/three_sixty_view.gif")}
                  alt=""
                  srcset=""
                  className="scale-x-110"
                />
              )}
            </div>
            <div className="z-0 flex items-center justify-between w-full h-full px-2 text-sm text-gray-500 rounded-full leading-0">
              <p>OFF</p>
              <p>ON</p>
            </div>
          </div>
        </div>
        
      </div>
      {/* <div className="bg-white md:max-w-[400px] shadow h-full absolute right-0 top-0 w-full lg:max-w-[500px] rounded-xl shadow-blue-100">
        fsdfds
      </div> */}
    </div>
  );
};

export default ExperienceEcco;
