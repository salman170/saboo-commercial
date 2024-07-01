import React from "react";
import VehicleEnquiry from "../../../components/VehicleEnquiry";
import CNGSection from "../../other/CNGSection";
import FAQCar from "../../other/FAQCar";
import TourHeroSection from "../../../components/TourHeroSection";

const TourH1 = () => {
  const variant = [
    {
      name: "Tour H1 Petrol",
      price: "4.805 ",
    },
    {
      name: "Tour H1 CNG",
      price: "5.705 ",
    },
  ];

  const cngData = {
    title: "MAXIMISE PROFITS",
    description:
      "Our advanced Factory-Fitted S-CNG technology not only boosts your profits but also ensures superior performance. Benefit from our powerful, fuel-efficient, and reliable technology that guarantees better mileage without compromising performance. Moreover, enjoy the added flexibility and convenience of petrol, providing peace of mind while maximising your profits.",
  };

  const faqs = [
    {
      question: "What is the price of Maruti Tour H1?",
      answer1:
        "The petrol variant of Maruti Suzuki Tour H1 is priced at ₹ 4.80* Lakhs and the CNG variant  at ₹5.70* Lakhs",
    },
    {
      question: "What is the mileage of Tour H1?",
      answer1:
        "Maruti Suzuki Tour H1 provides a mileage of 24.60 km/L on Petrol and 34.46 Km/Kg on CNG ",
    },
    {
      question: "What is the fuel tank capacity of Tour H1?",
      answer1:
        "The fuel tank capacity of Maruti Suzuki H1 for Petrol variant is - 27L and 55L (Water Equivalent) for CNG variant",
    },
    {
      question: "Is Maruti Tour H1 available in different colors?​",
      answer1:
        "Yes, Maruti Suzuki Tour H1 is available in 3 color options - Metallic Silky Silver, Metallic Granite Grey & Solid White​",
    },
    {
      question: "What safety features are included in Maruti Tour H1?",
      answer1:
        "Maruti Suzuki Tour H1 comes loaded with following safety features:​",
      answer2:
        "1. Engine Immobilizer, 2. Speed Limiting Function (80Km/h), 3. Front Seat Belts with Pre-tensioner & Force Limiter, 4. Rear Seat Belt, 5. Dual Front Airbags, 6. ABS with EBD, 7. Reverse Parking Sensor, 8. Seat Belt Reminder with Buzzer, 9. HEARTECT Platform, 10. Headlamp Levelling, 11. High-Mounted Stop Lamp, 12. Collapsible Steering Column",
    },
    {
      question: "What is the seating capacity of Tour H1?​",
      answer1:
        "Seating capacity of Maruti Suzuki Tour H1 is 5 people in Petrol variant and 4 people in CNG variant",
    },
    {
      question: "How many variants are available in Tour H1?​",
      answer1:
        "Maruti Suzuki Tour H1 comes in both Petrol as well as CNG variants​",
    },
    {
      question: "What is the top speed of Maruti Tour H1?",
      answer1: "The top speed of Maruti Suzuki Tour H1 is 80Km/h​",
    },
    {
      question: "Does Tour H1 comes with Air bags?​",
      answer1:
        "Yes, Maruti Suzuki Tour H1 is equipped with Dual Front Airbags​",
    },
  ];

  return (
    <div>
      <TourHeroSection
        webImg={require("../../../assets/vehicles/Tour_H1/TourH1BannerNew.webp")}
        mobImg={require("../../../assets/vehicles/Tour_H1/TourH1BannerMobNew.webp")}
        brochureLink="https://saboocommercial.in/admin/img/brochure/Alto-Tour-H1-Leaflet-A4_English.pdf"
        altText={"Tour H1"}
      />
      <VehicleEnquiry data={variant} vehicleName="Tour H1" />
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
                MORE MILEAGE
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
                    Powered by the Next Gen 1.0L Dual Jet, Dual VVT engine
                  </p>
                </li>
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 ">
                    Power packed with impressive performance Mileage of 24.60
                    km/L on petrol (MT) and 34.46 km/kg on CNG (MT)
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

export default TourH1;
