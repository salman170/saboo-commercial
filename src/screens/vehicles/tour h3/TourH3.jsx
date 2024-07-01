import React from "react";
import VehicleEnquiry from "../../../components/VehicleEnquiry";
import CNGSection from "../../other/CNGSection";
import FAQCar from "../../other/FAQCar";
import TourHeroSection from "../../../components/TourHeroSection";

const TourH3 = () => {
  const variant = [
    {
      name: "Tour H3 Petrol",
      price: "5.515 ",
    },
    {
      name: "Tour H3 CNG",
      price: "6.415 ",
    },
  ];

  const cngData = {
    title: "MAXIMISE PROFITS",
    description:
      "Our advanced Factory-Fitted S-CNG technology not only boosts your profits but also ensures superior performance. Benefit from our powerful, fuel-efficient, and reliable technology that guarantees better mileage without compromising performance. Moreover, enjoy the added flexibility and convenience of petrol, providing peace of mind while maximising your profits.",
  };

  const faqs = [
    {
      question: "What is the fuel efficiency of Maruti Suzuki Tour H3?",
      answer1:
        "Maruti Suzuki Tour H3 comes with an impressive fuel efficiency of 25.40 km/L on petrol and 34.73 Km/Kg on CNG.",
    },
    {
      question: "What is the top speed of Maruti Tour H3?",
      answer1: "The top speed of Maruti Tour H3 is 80 Km/h ",
    },
    {
      question: "What type of transmission does Maruti Suzuki Tour H3 offers?",
      answer1: "Maruti Suzuki Tour H3 offers 5 speed Manual Transmisson",
    },
    {
      question: "What is the seating capacity of Maruti Tour H3?​",
      answer1: "The seating capacity of Maruti Tour H3 is 5 people​",
    },
    {
      question: "Are there different variants available for Maruti Tour H3?",
      answer1: "Maruti Suzuki Tour H3 comes in  Petrol & CNG variants​",
    },
    {
      question: "What safety features are included in Maruti Suzuki Tour H3?​",
      answer1:
        "Maruti Suzuki Tour H3 comes loaded with following safety features:",
      answer2: `
        1. Driver Airbag
2. Passenger Airbag
3. ABS with EBD
4. Electronic Stability Program (ESP)
5. Pedestrian Protection
6. Seat Belt Pre-tensioner & Force Limiters (Dr.+Co.Dr.)
7. Seat Belt Reminder with Buzzer (Front + Rear Seat)
8. Seat Belt for all seats
9. Rear Parking Sensor
10. Central Door Locking
11. Speed Limiting Function
`,
    },
    {
      question: "Is Maruti Suzuki Tour H3 available in different colors?​",
      answer1:
        "Yes, Maruti Suzuki Tour H3 is available in Superior White & Silky Silver color options​",
    },
    {
      question: "What is the mileage of celerio tour H3 CNG?",
      answer1:
        "Maruti Suzuki Tour H3 provides a mileage of 34.73 Km/Kg on CNG​",
    },
    {
      question: "Does Maruti Suzuki Tour H3 comes with Airbags?",
      answer1:
        "Yes, Maruti Suzuki Tour H3 is equipped with both driver and passenger airbags.​",
    },
    {
      question: "What is the price range of Maruti Suzuki Tour H3?",
      answer1:
        "The petrol variant of Maruti Suzuki Tour H3 is priced at ₹ 544500/-* and the CNG variant  at ₹ 639500/-*​",
    },
  ];

  return (
    <div>
      <TourHeroSection
        webImg={require("../../../assets/vehicles/Tour_H3/TourH3BannerNew.webp")}
        mobImg={require("../../../assets/vehicles/Tour_H3/TourH3BannerMobNew.webp")}
        brochureLink="https://saboocommercial.in/admin/img/brochure/Commercial-Tour-H3-Leaflet-English.pdf"
        altText={"Tour H3"}
      />
      <VehicleEnquiry data={variant} vehicleName="Tour H3" />
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
                  src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/tourh3/features/tour-h3-engine-1.png"
                  alt=""
                  className="mx-auto my-10 rounded-3xl "
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <h5 className="mt-4 mb-4 text-2xl font-semibold uppercase md:text-3xl ">
                POWERFUL ENGINE
              </h5>
              <p>
                Tour H3 is powered by 1.0 L Next Gen K-series Dual Jet Dual VVT
                Engine promising superior mileage with maximum savings.
              </p>
              <ul className="pt-4 space-y-5 min-h-40">
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 ">
                    With Idle Start Stop Technology (In Petrol Variant)
                  </p>
                </li>
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 ">With 5MT Transmission</p>
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

export default TourH3;
