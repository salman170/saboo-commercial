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
      <CNGSection data={cngData} />
      <FAQCar faqs={faqs} />
    </div>
  );
};

export default TourH1;
