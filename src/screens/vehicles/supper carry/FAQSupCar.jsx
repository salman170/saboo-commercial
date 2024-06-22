import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FAQSupCar = () => {
  const [faqIndex, setFaqIndex] = useState(0);
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
  const handleFaqClick = (index) => {
    if (faqIndex === index) {
      setFaqIndex(-1);
    } else {
      setFaqIndex(index);
    }
  };
  return (
    <div className="">
      <div className="container px-1 py-10 mx-auto lg:pb-20 md:max-w-6xl">
        <h3 className="mb-6 text-xl font-medium text-center md:text-2xl lg:text-3xl lg:mb-7">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <div>
          {faqs.map((faq, index) => (
            <div
              onClick={() => handleFaqClick(index)}
              key={index}
              className="px-2 py-5 mb-3 border shadow-lg cursor-pointer select-none lg:px-8"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-medium ">{faq.question}</h4>
                <svg
                  className="w-6 h-6 cursor-pointer text-primary md:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

                <div className="items-center justify-center hidden w-8 h-8 text-white rounded-full bg-primary md:flex">
                  {index === faqIndex ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              {index === faqIndex && (
                <div className="py-2">
                  <p className="text-sm">{faq.answer1}</p>
                  <p className="text-sm">{faq.answer2}</p>
                  <p className="text-sm">{faq.answer3}</p>
                  <p className="text-sm">{faq.answer4}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSupCar;
