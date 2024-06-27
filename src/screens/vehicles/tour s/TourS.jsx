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
      <CNGSection data={cngData} />
      <FAQCar faqs={faqs} />
    </div>
  );
};

export default TourS;
