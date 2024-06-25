import React from "react";
import VehicleEnquiry from "../../../components/VehicleEnquiry";
import Experience from "./Experience";
import Features from "./Features";
import TVC from "./TVC";
import Specification from "./Specification";
import HeroSectionSuper from "./HeroSectionSuper";
import FAQCar from "../../other/FAQCar";

const SuperCarry = () => {
  const variant = [
    {
      name: "Super Carry Petrol",
      price: "4.88",
      title: "Super Carry ",
    },
    {
      name: "Super Carry Petrol Chassis",
      price: "6.30",
      title: "Super Carry ",
    },
    {
      name: "Super Carry CNG",
      price: "4.73",
      title: "Super Carry ",
    },
    {
      name: "Super Carry CNG Chassis",
      price: "6.15",
      title: "Super Carry ",
    },
  ];
  const faqs = [
    {
      question: "What is the engine Capacity of Super Carry?",
      answer1:
        "The Super Carry offers a 1.2L Advanced K-Series Dual Jet, Dual VVT engine.",
      answer2:
        "Packed with an impressive performance that delivers  the maximum power of 59.4kW (80.7 PS) @6000rpm making the new Super Carry, India's Most Powerful Mini-Truck*.",
    },
    {
      question: "What is the price range of Super Carry?",
      answer1:
        "The Maruti Suzuki Super Carry is available in a price range of Rs. 5.16 - 6.30 Lakh**",
    },
    {
      question: "Are there any safety features included in the Super Carry?",
      answer1:
        "The Maruti Suzuki Super Carry stands out with its comprehensive safety package, encompassing more than 18 advanced safety features. Coupled with its robustly engineered chassis frame, addition of Engine Immobilizer, this vehicle ensures a safe and secure driving experience, allowing you to hit the road with confidence.",
    },
    {
      question: "What is the load carrying capacity of super carry?",
      answer1:
        "The Maruti Suzuki Super Carry offers a maximum loading capacity of 740 kgs in the petrol variant and 625 kgs in the CNG variant.",
      answer2: "",
    },
    {
      question: "What are the color options available in Super Carry?",
      answer1: "Maruti Suzuki Super Carry is available in 3 colors:",
      answer2: "- Metallic Silky Silver",
      answer3: "- Solid White",
      answer4: "- Metallic Glistening Grey",
    },
    {
      question: "What are fuel types available in super carry?",
      answer1:
        "The Maruti Suzuki Super Carry is currently available in Petrol and CNG.",
      answer2: "",
    },
    {
      question: "How many cylinders are there in super carry?",
      answer1: "The mini-truck comes with 4 cylinders.",
      answer2: "",
    },
    {
      question: "What is the horsepower of Super Carry?",
      answer1:
        "Packed with an impressive performance that delivers  the maximum power of 59.4kW (80.7 PS) @6000rpm making the new Super Carry an impressive display of  sheer power.",
      answer2: "",
    },
    {
      question: "What is the top speed of super carry?",
      answer1: "80 km/h",
    },
    {
      question: "How many variants are available in Super Carry?",
      answer1:
        "The Maruti Suzuki Super Carry is offered in 4 variants namely Petrol STD, Petro Cab Chassis,  CNG STD and CNG Cab Chassis.",
      answer2: "",
    },
    {
      question: "What is the unique feature of Super Carry CNG Variants?",
      answer1:
        "The Maruti Suzuki Super Carry CNG Variant features a 5L emergency fuel tank, which provides customer’s peace of mind while covering long distances.",
      answer2: "",
    },
    {
      question: "Is Super Carry India's Most Powerul Mini-Truck?",
      answer1:
        "With a best-in-class power output of 80.7 PS from the 1.2L Advanced K-Series Dual Jet, Dual VVT engine, Maruti Suzuki Super Carry is India’s most powerful mini truck*.",
      answer2: "",
    },
  ];
  return (
    <div>
      <HeroSectionSuper />
      <VehicleEnquiry data={variant} />
      <Experience />

      <Features />
      <TVC />
      <Specification />
      <FAQCar faqs={faqs} />
    </div>
  );
};

export default SuperCarry;
