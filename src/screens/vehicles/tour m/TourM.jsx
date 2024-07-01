import React from "react";
import VehicleEnquiry from "../../../components/VehicleEnquiry";
import CNGSection from "../../other/CNGSection";
import FAQCar from "../../other/FAQCar";
import TourHeroSection from "../../../components/TourHeroSection";

const TourM = () => {
  const variant = [
    {
      name: "Tour M Petrol",
      price: "9.80 ",
    },
    {
      name: "Tour M CNG",
      price: "10.75 ",
    },
  ];

  const cngData = {
    title: "MAXIMISE PROFITS",
    description:
      "Our advanced Factory-Fitted S-CNG technology not only boosts your profits but also ensures superior performance. Benefit from our powerful, fuel-efficient, and reliable technology that guarantees better mileage without compromising performance. Moreover, enjoy the added flexibility and convenience of petrol, providing peace of mind while maximising your profits.",
  };

  const faqs = [
    {
      question: "What are the engine options available for the Maruti Tour M?",
      answer1:
        "The key features of Maruti Suzuki Tour S are:The Tour M offers a choice between two engine options - K15C Smart Hybrid Petrol Engine and K15C CNG Engine",
    },
    {
      question: "Is Maruti Suzuki Tour M available in different colors?",
      answer1:
        "Yes, Maruti Suzuki Tour M is available in 3 Color Options - Pearl Midnight Black, Pearl Arctic White & Splendid Silver",
    },
    {
      question: "Does Maruti Suzuki Tour M comes with Airbags?",
      answer1: "Yes, Maruti Suzuki Tour M is equipped with Dual Front Airbags",
    },
    {
      question:
        "What is the power output of the K15C Smart Hybrid Engine in the Tour M?",
      answer1:
        "The K15C Smart Hybrid Engine in the Tour M generates a power of 75.8 Kw @6000RPM",
    },
    {
      question:
        "What is the power output of the K15C engine when running in CNG mode?",
      answer1:
        "In CNG mode, the K15C engine generates a power of 64.6 kW @ 5500 RPM.",
    },
    {
      question: "What is the mileage of Maruti Tour M?",
      answer1:
        "Maruti Suzuki Tour M provides a mileage of 21.10 km/L in Petrol and 26.54 Km/Kg in CNG",
    },
    {
      question: "What is the price of Tour M in India?",
      answer1:
        "The petrol variant of  Tour M is priced at Rs. 9.75* Lakhs and the CNG variant  at Rs. 10.7* Lakhs",
    },
    {
      question: "What is the top speed of Maruti Tour M?",
      answer1: "The top speed of Maruti Suzuki Tour M is 80 Km/h",
    },
    {
      question: "What is the seating capacity of Maruti Tour M?",
      answer1: "Seating capacity of Maruti Suzuki Tour M is 7 people",
    },
    {
      question: "Are there different variants available for Maruti Tour M?",
      answer1:
        "Yes, Maruti Suzuki Tour M is available in Petrol & CNG variants",
    },
    {
      question: "What safety features are included in Maruti Suzuki Tour M?",
      answer1:
        "Maruti Suzuki Tour M comes loaded with following safety features:",
      answer2: `1. Suzuki Heartect Platform
2. Dual Front Airbags
3. ABS with EBD and Brake Assist
4. Engine Immobilizer
5. ISOFIX Child Seats Anchorages (2nd Row Seats)
6. Front Seat Belts with Pre-tensioner & Force Limiters (Dr.+Co.Dr.)
7. Seat Belt Reminder Lamp with Buzzer (Dr.+Co.Dr.)
8. Front Seat Belt Height Adjuster
9. Speed Sensitive Auto Door Lock
10. Security Alarm
11. Rear Parking Sensors
12. Central Locking`,
    },
  ];

  return (
    <div>
      <TourHeroSection
        webImg={require("../../../assets/vehicles/Tour_M/TourMBannerDesktop.webp")}
        mobImg={require("../../../assets/vehicles/Tour_M/TourMBannerMobNew.webp")}
        brochureLink="https://saboocommercial.in/admin/img/brochure/Ertiga_Tour-M_Pet-CNG-Leaflet_English.pdf"
        altText={"Tour M"}
      />
      <VehicleEnquiry data={variant} vehicleName="Tour M" />
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
                  src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/tourh1/features/mileage-1.png"
                  alt=""
                  className="mx-auto my-10 rounded-3xl lg:w-96"
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <h5 className="mt-4 mb-4 text-2xl font-semibold uppercase md:text-3xl ">
                SUPERIOR MILEAGE
              </h5>
              <p>
                This exceptional vehicle delivers both remarkable power and
                impressive fuel efficiency, making it an economical choice for
                business needs.
              </p>
              <ul className="pt-4 space-y-5 min-h-40">
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 ">
                    Designed to help business owners strive for success while
                    maximizing of fuel costs. 
                  </p>
                </li>
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 ">
                   Drive with Superior mileage of
                    21.10* km/L on petrol and 26.54 * km/kg on CNG.
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

export default TourM;
