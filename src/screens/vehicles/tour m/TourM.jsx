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
      <CNGSection data={cngData} />
      <FAQCar faqs={faqs} />
    </div>
  );
};

export default TourM;
