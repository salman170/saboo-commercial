import React from "react";
import VehicleEnquiry from "../../../components/VehicleEnquiry";
import CNGSection from "../../other/CNGSection";
import FAQCar from "../../other/FAQCar";
import TourHeroSection from "../../../components/TourHeroSection";

const TourS = () => {
  const variant = [
    {
      name: "Tour S Petrol",
      price: "6.56 ",
    },
    {
      name: "Tour S CNG",
      price: "7.51 ",
    },
  ];

  const cngData = {
    title: "MAXIMISE PROFITS",
    description:
      "Our advanced Factory-Fitted S-CNG technology not only boosts your profits but also ensures superior performance. Benefit from our powerful, fuel-efficient, and reliable technology that guarantees better mileage without compromising performance. Moreover, enjoy the added flexibility and convenience of petrol, providing peace of mind while maximising your profits.",
  };

  const faqs = [
    {
      question: "What are the key features of Maruti Suzuki Tour S?",
      answer1: "The key features of Maruti Suzuki Tour S are:",
      answer2: `1. New Bold Front Fascia
2. Stylish & Spacious Interiors
3. 12+ Safety Features
4. Speed Limiting Function
5. Dual Tone Interiors`,
    },
    {
      question: "Does Maruti Suzuki Tour S comes with Airbags?",
      answer1: "Yes, Maruti Suzuki Tour S is equipped with Dual Airbags ",
    },
    {
      question: "What is the top speed of Maruti Tour S?",
      answer1: "The top speed of Maruti Suzuki Tour S is 80 Km/h",
    },
    {
      question: "What is the fuel efficiency of Maruti Tour S?​",
      answer1:
        "Maruti Suzuki Tour S comes with an impressive fuel efficiency of 23.15 km/L on petrol and 32.12 Km/Kg on CNG.​",
    },
    {
      question: "What is the engine capacity of Maruti Tour S?",
      answer1: "Engine capacity of Maruti Suzuki Tour S is 1197 cc​",
    },
    {
      question: "What is the price range of Maruti Tour S?​",
      answer1:
        "The petrol variant of Maruti Suzuki Tour S is priced at ₹651000/-* and the CNG variant  at ₹ 746000/-*",
    },
    {
      question: "Is Tour S India' Most Fuel Efficient Entry Level Sedan taxi?​",
      answer1:
        "Yes,  Maruti Suzuki Tour S is India's most fuel efficient entry Level sedan Taxi",
    },
    {
      question: "What is the seating capacity of Maruti Tour S?",
      answer1: "The seating capacity of Maruti Suzuki Tour S is 5 persons​",
    },
    {
      question: "Are there different variants available for Maruti Tour S?",
      answer1:
        "Yes, Maruti Suzuki Tour S is available in Petrol & CNG variants ​",
    },
    {
      question: "What safety features are included in Maruti Suzuki Tour S?",
      answer1:
        "Maruti Suzuki Tour S comes loaded with following safety features:​",
      answer2: `
1. Suzuki HEARTECT Body
2. ABS with EBD and Brake Assist
3. ESP
4. Reverse Parking Sensor
5. ISOFIX Child Seats Anchorages
6. Front Seat Belt with Pre-tensioner
7. Engine Immobilizer
8. Headlamp Levelling
9. Seat Belt for all Seats
10. Driver & Co-Driver Seat Belt Reminder
11. Key-Left Warning Lamp & Buzzer
12. Door Ajar Warning Lamp
13. Low-Fuel Warning Lamp`,
    },
    {
      question: "Is Maruti Suzuki Tour S available in different colors?",
      answer1:
        "Yes, Maruti Suzuki Tour S is available in Arctic White, Silky Silver & Midnight Black color options. ​",
    },
  ];

  return (
    <div>
      <TourHeroSection
        webImg={require("../../../assets/vehicles/Tour_S/TourSBannerDesktop.webp")}
        mobImg={require("../../../assets/vehicles/Tour_S/TourSBannerMobNew.webp")}
        brochureLink="https://saboocommercial.in/admin/img/brochure/Dzire-Tour-S-Leaflet-Combined-English.pdf"
        altText={"Tour S"}
      />
      <VehicleEnquiry data={variant} vehicleName="Tour S" />
      <div className="relative overflow-hidden outer_container ">
        <div className="container sticky px-1 py-10 mx-auto top-20 lg:pt-20 lg:pb-20 md:max-w-6xl ">
          <h2 className="bg-[#616161] text-2xl font-semibold text-white py-2 w-min rounded-md px-4 -skew-x-12 uppercase">
            Features
          </h2>
          <h4 className="mt-4 text-3xl font-medium uppercase -skew-x-12 md:text-4xl">
            NOW THAT'S COOL!
          </h4>
          <h5 className="mt-2 text-2xl font-light -skew-x-12 md:text-3xl">
            BIG ON COMFORT. BIG ON PROFITS
          </h5>
          <div className="flex flex-col h-full gap-8 py-4 mt-8 lg:mt-10 md:flex-row md:gap-10 lg:gap-20 md:mt-10 ">
            <div className="">
              <div className="bg-white shadow-xl rounded-3xl feature_1">
                <img
                  src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/tours/features/tour-s-engine-1.png"
                  alt=""
                  className="mx-auto my-10 rounded-3xl lg:w-96"
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <h5 className="mt-4 mb-4 text-2xl font-semibold uppercase md:text-3xl ">
                PERFORMANCE & TECHNOLOGY
              </h5>
              <p>
                The all-new Tour S is brimming with the powerful and advanced
                1.2L K series Dualjet, Dual VVT Engine with a host of features:
              </p>
              <ul className="pt-4 space-y-5 min-h-60">
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 ">
                    Factory fitted S-CNG 
                  </p>
                </li>
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 ">5MT Transmission Power steering with
                    tilt adjust Gear shift indicator
                   
                  </p>
                </li>
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 ">Power steering with
                    tilt adjust Gear shift indicator
                   
                  </p>
                </li>
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 "> Gear shift indicator
                   
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

export default TourS;
