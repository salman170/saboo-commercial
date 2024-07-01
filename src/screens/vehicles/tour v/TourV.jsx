import React from "react";
import VehicleEnquiry from "../../../components/VehicleEnquiry";
import CNGSection from "../../other/CNGSection";
import FAQCar from "../../other/FAQCar";
import HeroSectionEcco from "../../../components/HeroSectionEcco";

const TourV = () => {
  const variant = [
    {
      name: "Tour V 5 Seater STD",
      price: "5.29 ",
    },
    {
      name: "Tour V 5 Seater AC",
      price: "5.65 ",
    },
    {
      name: "Tour V 5 Seater AC CNG",
      price: "6.55 ",
    },
    {
      name: "Tour V 7 Seater STD",
      price: "5.58 ",
    },
  ];

  const cngData = {
    title: "MAXIMISE PROFITS",
    description:
      "Our advanced Factory-Fitted S-CNG technology not only boosts your profits but also ensures superior performance. Benefit from our powerful, fuel-efficient, and reliable technology that guarantees better mileage without compromising performance. Moreover, enjoy the added flexibility and convenience of petrol, providing peace of mind while maximising your profits.",
  };

  const faqs = [
    {
      question: "What is the fuel efficiency of Maruti Tour V (EECO)?​",
      answer1:
        "The Maruti Suzuki Commercial Tour V (EECO) gives a mileage of 20.20 km/L in petrol variant and 27.05km/kg in CNG variant.",
    },
    {
      question: "What is the engine specification of Maruti Tour V (EECO)?​",
      answer1:
        "Maruti Suzuki Commercial Tour V (EECO) Is equipped with 5-speed Manual Transmission. It has 1197 Cc Petrol Engine with max torque of 104.4/3000Nm/rpm in petrol variant and 95/3000Nm/rpm in CNG variant.",
    },
    {
      question: "What is the seating capacity of Maruti Tour V (EECO)?​",
      answer1:
        "The Maruti Suzuki Commercial Tour V (EECO) is available in 5 and 7 seater variant.",
    },
    {
      question:
        "Are there different variants of Maruti Tour V (EECO) available?​",
      answer1:
        "Yes, The Maruti Suzuki Commercial Tour V (EECO) comes in four different variants, listing the same below",
      answer2: "● Tour V (EECO) 5 SEATER STANDARD VARIANT ",
      answer3: "● Tour V (EECO) 5 SEATER A.C VARIANT ",
      answer4: "● Tour V (EECO) 5 SEATER A.C  CNG VARIANT ",
      answer5: "● Tour V (EECO) 7 SEATER STANDARD VARIANT ",
    },
    {
      question: "What is the top speed of Maruti Tour V (EECO)?",
      answer1: "Maruti Suzuki Commercial Tour V (EECO) max speed is 80kmph",
    },
    {
      question: "What is the price range of Maruti Tour V (EECO)?​",
      answer1:
        "Yes, The Maruti Suzuki Commercial Tour V (EECO) Comes In STD AND AC VARIANTS WITH 5-SEATER AND 7-SEATER OPTIONS. The Price For Tour V (EECO) 5-seater Std Is Rs. 5.24* Lakhs, Tour V (EECO) 5-seater AC CNG is Rs 6.50 *Lakhs And For 5-seater Ac Is Rs. 5.60* Lakhs. Whereas The Price For Tour V (EECO) 7-seater Std Is Rs. 5.53* Lakhs. ",
      answer2: "*EX-SHOWROOM PRICE",
    },

    {
      question: "Is Maruti Tour V (EECO) available in different colors?",
      answer1:
        "Maruti Suzuki Commercial Tour V (EECO) comes in three colour variants:",
      answer2: "● Metallic Silky Silver  ",
      answer3: "● Solid White",
      answer4: "● Pearl Midnight Black",
    },
  ];

  return (
    <div>
      <HeroSectionEcco
        webImg1={require("../../../assets/vehicles/Tour_V/tourvbannernew.webp")}
        mobImg1={require("../../../assets/vehicles/Tour_V/tourv banner1 mob.webp")}
        webImg2={require("../../../assets/vehicles/Tour_V/TourV main banner 2.webp")}
        mobImg2={require("../../../assets/vehicles/Tour_V/tourv banner2 mob.webp")}
        thubmnail1="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/tourv/banner/tour-v-5-sitter.png"
        thubmnail2="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/tourv/banner/vehicleicon.png"
        brochureLink="https://saboocommercial.in/admin/img/brochure/Eeco-Tour-V-Leaflet_Petrol_English_compressed.pdf"
        altText={"Eeco Cargo"}
      />
      <VehicleEnquiry data={variant} vehicleName="Tour V" />
      <div className="relative overflow-hidden outer_container ">
        <div className="container sticky px-1 py-10 mx-auto top-20 lg:pt-20 lg:pb-20 md:max-w-6xl ">
          <h2 className="bg-[#616161] text-2xl font-semibold text-white py-2 w-min rounded-md px-4 -skew-x-12 uppercase">
            Features
          </h2>
          <h4 className="mt-4 text-3xl font-medium uppercase -skew-x-12 md:text-4xl">
            FEATURES THAT
          </h4>
          <h5 className="mt-2 text-2xl font-light -skew-x-12 md:text-3xl">
            MAKE EVERY BUSINESS SPECIAL
          </h5>
          <div className="flex flex-col h-full gap-8 py-4 mt-8 lg:mt-10 md:flex-row md:gap-10 lg:gap-20 md:mt-10 ">
            <div className="">
              <div className="bg-white shadow-xl rounded-3xl feature_1">
                <img
                  src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/tourh1/features/mileage-1.png"
                  alt=""
                  className="mx-auto my-10 rounded-3xl lg:w-96"
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <h5 className="mt-4 mb-4 text-2xl font-semibold uppercase md:text-3xl ">
                MORE MILEAGE
              </h5>
              <p>
                The new 1.2 L Advanced K-Series Dual Jet Dual VVT Engine in the
                Maruti Suzuki Commercial TOUR V (Eeco) enhances fuel efficiency
                delivering improved fuel efficiency
              </p>
              <ul className="pt-4 space-y-5 min-h-60">
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 ">
                    20.20 km/L* for Tour V Petrol & 27.05km/kg* for S-CNG
                    variant 
                  </p>
                </li>
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 ">
                   Fuel Efficiency up by 25% for Petrol & 29% for CNG
                    Adding more trips leading to greater savings
                  </p>
                </li>
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 ">
                   Adding more trips leading to greater savings
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
      <CNGSection data={cngData} />
      <FAQCar faqs={faqs} />
    </div>
  );
};

export default TourV;
