import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FAQCar = ({faqs}) => {
  const [faqIndex, setFaqIndex] = useState(0);
 
  const handleFaqClick = (index) => {
    if (faqIndex === index) {
      setFaqIndex(-1);
    } else {
      setFaqIndex(index);
    }
  };
  return (
    <div className="mt-4">
      <div className="container px-1 py-10 mx-auto lg:pb-20 md:max-w-6xl">
        <h3 className="mb-6 text-xl font-medium text-center md:text-2xl lg:text-3xl lg:mb-7">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <div>
          {faqs.map((faq, index) => (
            <div
              onClick={() => handleFaqClick(index)}
              key={index}
              className={`px-2 py-5 mb-3 border  cursor-pointer select-none lg:px-8  ${
                index === faqIndex
                  ? " shadow-lg bg-gray-50  "
                  : "border-gray-300"
              }`}
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
                  <p className="text-sm">{faq.answer5}</p>
                  <p className="text-sm">{faq.answer6}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQCar;
