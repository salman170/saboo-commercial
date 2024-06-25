import React from "react";

const CNGSection = ({ data }) => {
  return (
    <div className="bg-[url(https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/eeco-cargo/specification/eeco-cargo-cng-tech.png?h=686&iar=0&w=1512&hash=96DB4B62552C385EB76893F66FC47EFF&mw=1920)] bg-center py-20  bg-cover bg-no-repeat ">
      <div className="container mx-auto lg:max-w-6xl px-0.5">
        <div className="max-w-lg px-8 pt-8 pb-6 bg-white rounded-lg">
          <p className="text-2xl italic font-semibold md:text-3xl lg:text-4xl">
            {data.title}
          </p>
          <p className="pt-6 pb-3 text-xs text-justify">{data.description}</p>
          {data?.points?.map((point, index) => (
            <div key={index} className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
              <p className="">{point}</p>
            </div>
          ))}
          <img
            src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/cngtechnology/cnglogo.png?h=76&iar=0&w=102&hash=209CF4D699CDFC1E2333C1942A10AB29&mw=1920"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CNGSection;

// <div className="w-full h-full">
//   <div className="">
//     <img
//       src={require("../../../assets/vehicles/ecco_cargo/home/eeco cargo cng tech.webp")}
//       alt=""
//       className="object-cover w-full bg-center"
//     />
//   </div>
// </div>
