// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect } from "react";
// import { useGSAP } from "@gsap/react";

const Features = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".outer_container",
  //       start: "top top",
  //       end: "bottom+=200vh top", // Ensures the entire bottom
  //       scrub: true,
  //       markers: true,
  //       // onLeave: () => gsap.set(".outer_container", { position: "static" }),
  //       onEnterBack: () => gsap.set(".outer_container", { position: "sticky" }),
  //     },
  //   });

  //   tl.to(".outer_container", {
  //     duration: 2,
  //     position: "sticky",
  //     width: "100%",
  //     // height: "200vh",
  //     top: 0,
  //     left: 0,
  //     ease: "power1.inOut",
  //   });
  // }, []);

  return (
    <>
      <div className="relative overflow-hidden outer_container ">
        <div className="container sticky px-1 py-10 mx-auto top-20 lg:pt-20 lg:pb-20 md:max-w-6xl ">
          <h2 className="bg-[#616161] text-2xl font-semibold text-white py-2 w-min rounded-md px-4 -skew-x-12 uppercase">
            Features
          </h2>
          <h4 className="mt-4 text-3xl font-medium uppercase -skew-x-12 md:text-4xl">
            Super Power
          </h4>
          <h5 className="mt-2 text-2xl font-light -skew-x-12 md:text-3xl">
            With Super Features
          </h5>
          <div className="flex flex-col h-full gap-8 py-4 mt-8 lg:mt-10 md:flex-row md:gap-10 lg:gap-20 md:mt-10 ">
            <div className="">
              <div className="bg-white shadow-xl rounded-3xl feature_1">
                <img
                  src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/supercarry/features/feature_sc_1.png"
                  alt=""
                  className="mx-auto my-10 lg:h-72"
                />
              </div>
              {/*  <img
                src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/supercarry/features/feature_sc_6.png"
                alt=""
                className="mx-auto mt-10 shadow-xlopacity-0 rounded-3xl feature_2 shadow-black"
              />
              <img
                src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/supercarry/features/feature_sc_3.png"
                alt=""
                className="mx-auto mt-10 shadow-xl rounded-3xl feature_3 shadow-black"
              />
              <img
                src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/supercarry/features/feature_sc_4.png"
                alt=""
                className="mx-auto mt-10 rounded-3xl feature_4"
              />
              <img
                src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/supercarry/features/feature_sc_5.png"
                alt=""
                className="mx-auto mt-10 rounded-3xl feature_5"
              /> */}
            </div>
            <div className="overflow-hidden">
              <h5 className="mt-4 mb-4 text-2xl font-semibold uppercase lg:mb-8 md:text-3xl md:mb-6">
                Powerful Engine
              </h5>
              <ul className="space-y-5 min-h-60">
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 text-lg">
                    1.2L Advanced K-Series Dual Jet, Dual VVT engine
                  </p>
                </li>
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 text-lg">
                    Power packed with impressive performance{" "}
                  </p>
                </li>
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 text-lg">
                    Delivers maximum power of 59.4kW (80.7 PS) @6000 rpm
                  </p>
                </li>
              </ul>
              <div className="flex flex-col gap-2 md:items-end md:flex-row">
                <button className="px-8 py-2 text-sm text-white duration-500 rounded-full lg:py-3 md:w-44 bg-primary hover:shadow-xl hover:shadow-primary/50">
                  Enquire Now
                </button>
                <p className="text-xs text-gray-400">
                  *For details on functioning of safety features, including air
                  bag, kindly refer to the Owner’s Manual.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            background: `linear-gradient(rgba(208, 226, 252, 0) 0%, rgb(208, 226, 252) 49.66%, rgb(208, 226, 252) 100%)`,
          }}
          className="absolute top-0 left-0 w-full h-1/2 -z-10"
        ></div>
        <div
          style={{
            background: `linear-gradient(rgba(208, 226, 252, 0) 0%, rgb(208, 226, 252) 49.66%, rgb(208, 226, 252) 100%)`,
          }}
          className="absolute bottom-0 left-0 w-full rotate-180 h-1/2 -z-10"
        ></div>
      </div>
    </>
  );
};

export default Features;
