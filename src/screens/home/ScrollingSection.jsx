import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ScrollingSection = () => {
  const scrollRef = React.useRef(null);

  useGSAP(() => {
    gsap.to(".scorllingCar", {
      duration: 4,
      // height: "300px",
      left: "-30%",
      scrollTrigger: {
        trigger: ".scorllingCar",
        start: "bottom bottom", // when the bottom of the box hits the bottom of the viewport
        end: "top 20%", // end when the top of the box hits 20% from the top of the viewport
        // start: "top 50%",
        // end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
      ease: "power1.inOut",
    });
    // gsap.to("#scroll-pink", {
    //   x: 1000,
    //   borderRadius: "50%",
    //   rotate: 360,
    //   scrollTrigger: {
    //     trigger: "#scroll-pink",
    //     start: "bottom bottom", // when the bottom of the box hits the bottom of the viewport
    //     end: "top 20%", // end when the top of the box hits 20% from the top of the viewport
    //     scrub: true, // scrubbing makes the animation smooth
    //     markers: true, // shows the markers on the screen
    //   },
    //   ease: "power1.inOut",
    // });
  }, [scrollRef]);

  return (
    <div className="relative overflow-hidden ">
      <div className="left-0 w-full py-20 overflow-hidden top-20 scorllingDiv lg:py-20">
        <div ref={scrollRef} className="w-full scorllingImg">
          <img
            src={require("../../assets/home/BackgroundImage.png")}
            alt=""
            className="w-full "
          />
          <div className="absolute -right-[36%] z-10 -mt-20 -translate-y-1/2  lg:-mt-24 top-1/2 scorllingCar w-max">
            <img
              src={require("../../assets/home/VehicleImage.webp")}
              alt=""
              className="h-[200px] md:h-[250px] lg:h-[300px] w-auto"
            />
          </div>

          {/* <div className="absolute -right-[19.2%] z-10  -translate-y-1/2   top-1/2  scorllingCar w-max -mt-[25px]">
            <img
              src={require("../../assets/home/front_wheel.png")}
              alt=""
              className=""
            />
          </div>
          <div className="absolute -right-[42.4%] z-10  -translate-y-1/2   top-1/2  scorllingCar w-max -mt-[25px]">
            <img
              src={require("../../assets/home/back_wheel.png")}
              alt=""
              className=""
            />
          </div> */}
        </div>
        {/* <div
          id="scroll-pink"
          className="w-20 h-20 bg-pink-500 rounded-lg scroll-box"
        /> */}
      </div>
    </div>
  );
};

export default ScrollingSection;
