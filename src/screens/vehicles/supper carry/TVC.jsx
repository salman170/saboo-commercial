import React from "react";

const TVC = () => {
  return (
    <div>
      <div className="relative overflow-hidden ">
        <div className="container w-full px-1 py-10 mx-auto lg:pt-20 lg:pb-20 md:max-w-6xl">
          <h2 className="bg-[#616161] text-2xl font-semibold text-white py-2 w-min rounded-md px-4 -skew-x-12 uppercase">
            TVC
          </h2>
          <h4 className="mt-4 mb-10 text-3xl italic font-semibold tracking-tight uppercase md:text-4xl lg:text-5xl">
            Watch Super Carry in Action
          </h4>
          <div className="h-[50vh] shadow-xl bg-white p-2 md:h-[50vh]">
            <div className="w-full h-full ">
           
              <div className="h-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/TCNL7SZ9j-M?si=Chk8gVqw-bd6fo-y&amp;rel=0"
                  // src="https://www.youtube-nocookie.com/embed/63IME4Vu2DI?si=V8xNi8T7AalNkFRI&amp;rel=0"
                  title="Maruti Suzuki| Smart Hybrid Technology"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
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
    </div>
  );
};

export default TVC;
