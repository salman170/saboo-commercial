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
      <CNGSection data={cngData} />
      <FAQCar faqs={faqs} />
    </div>
  );
};

export default TourV;
