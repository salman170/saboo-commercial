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
      <CNGSection data={cngData} />
      <FAQCar faqs={faqs} />
    </div>
  );
};

export default TourH3;
