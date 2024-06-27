import VehicleEnquiry from "../../../components/VehicleEnquiry";
import CNGSection from "../../other/CNGSection";
import FAQCar from "../../other/FAQCar";
import ExperienceEcco from "./ExperienceEcco";
import HeroSectionEcco from "../../../components/HeroSectionEcco";
import Specification from "./Specification";

const EccoCargo = () => {
  const variant = [
    {
      name: "Eeco Cargo Petrol",
      price: "5.47 ",
    },
    {
      name: "Eeco Cargo CNG",
      price: "6.39 ",
    },
    {
      name: "Eeco Cargo CNG AC",
      price: "6.79 ",
    },
  ];

  const faqs = [
    {
      question: "What is the price range of Eeco Cargo ?",
      answer1:
        "The Maruti Suzuki Commercial EECO Cargo Van starts with a price range of ₹ 5,42,000* and offers excellent mileage for both Petrol and CNG variants.",
    },
    {
      question: "What is the unique features of Eeco Cargo Petrol Variants ?",
      answer1:
        "The Unique features of Maruti Suzuki Commercial EECO Cargo Petrol Variants are listed here:",
      answer2: "● 1.2L Advanced K series Dual Jet Dual VVT Engine",
      answer3: "● Engine Immobilizer",
      answer4: "● Reverse Parking Sensor",
      answer5: "● Digital Speedometer",
      answer6: "● Flat Cargo Bed",
    },
    {
      question: "What are the engine options available for the EECO Cargo?",
      answer1:
        "The Maruti Suzuki EECO Cargo comes with 1.2L Advanced K series Dual Jet Dual VVT Engine.",
    },
    {
      question: "Does the EECO Cargo come in different variants?​",
      answer1:
        "Yes, The Maruti Suzuki Commercial EECO Cargo comes in three different variants, listing the same below:​",
      answer2: "● EECO CARGO PETROL VARAINT",
      answer3: "● EECO CARGO CNG VARAINT",
      answer4: "● EECO CARGO CNG AC VARAINT",
    },
  ];

  const cngData = {
    title: "CNG TECHNOLOGY",
    description:
      "Give your business the perfect set of wheels with Maruti Suzuki Commercial EECO Cargo CNG. With Maruti Suzuki Factory-Fitted S-CNG Technology, experience enhanced performance and pleasurable driving in both petrol and CNG modes. Now carry more goods faster and cheaper and let your business boom.",
    points: ["With Factory Fitted S-CNG Technology", "Enhanced Performance"],
  };

  return (
    <div>
      <HeroSectionEcco
        webImg1={require("../../../assets/vehicles/ecco_cargo/home/eeco cargo main banner.webp")}
        mobImg1={require("../../../assets/vehicles/ecco_cargo/home/Group 162942.webp")}
        webImg2={require("../../../assets/vehicles/ecco_cargo/home/eeco cargo main banner 2.webp")}
        mobImg2={require("../../../assets/vehicles/ecco_cargo/home/eeco cargo cng mob.webp")}
        thubmnail1={require("../../../assets/vehicles/ecco_cargo/home/Eeco banner first mobile.webp")}
        thubmnail2={require("../../../assets/vehicles/ecco_cargo/home/EECOBanner.webp")}
        brochureLink="https://saboocommercial.in/admin/img/brochure/Eeco-leaflet-A4-BS6-ENGLISH-CTC.pdf"
        altText={"Eeco Cargo"}
      />
      <VehicleEnquiry data={variant} vehicleName="Eeco Cargo" />
      <ExperienceEcco />
      <FeaturesEcco />
      <CNGSection data={cngData} />
      <Specification />
      <FAQCar faqs={faqs} />
    </div>
  );
};

export default EccoCargo;

const FeaturesEcco = () => {
  return (
    <div className="relative ">
      <div className="sticky overflow-hidden top-20 outer_container">
        <div className="container px-1 py-10 mx-auto lg:pt-20 lg:pb-20 md:max-w-6xl">
          <h2 className="bg-[#616161] text-2xl font-semibold text-white py-2 w-min rounded-md px-4 -skew-x-12 uppercase">
            Features
          </h2>
          <h4 className="mt-4 text-2xl font-medium uppercase -skew-x-12 md:text-3xl">
            FEATURES THAT
          </h4>
          <h5 className="mt-2 text-xl font-light -skew-x-12 md:text-2xl">
            MAKE EVERY BUSINESS SPECIAL
          </h5>
          <div className="flex flex-col gap-8 py-4 mt-8 lg:mt-10 md:flex-row md:gap-10 lg:gap-20 md:mt-10 h-[25rem] ">
            <div className="relative lg:w-1/3 ">
              <div className="w-auto rounded-3xl feature_1">
                <img
                  src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/eeco-cargo/features/eeco-cargo-feature-2.png"
                  alt=""
                  className="my-10 shadow-xl lg:h-72 rounded-3xl"
                />
              </div>
            </div>
            <div className=" lg:w-2/3">
              <h5 className="mt-4 mb-4 text-2xl font-semibold uppercase lg:mb-8 md:text-3xl md:mb-6">
                MORE SPACE
              </h5>
              <p>
                The new Maruti Suzuki Commercial EECO Cargo comes with its safe
                Cargo cabin flatbed and completely covered cabin space, suited
                for all kinds of business requirements
              </p>
              <ul className="pt-4 space-y-5 ">
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5  text-sm">Covered Cabin Space</p>
                </li>
                <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5  text-sm">
                    Increased Cargo Space by 60L ( In Petrol variant)
                  </p>
                </li>
                {/* <li className="flex gap-x-4">
                  <div className="w-3 h-3 border-4 rounded-full md:h-4 md:w-4 border-primary" />
                  <p className="-mt-1.5 text-lg">
                    Delivers maximum power of 59.4kW (80.7 PS) @6000 rpm
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col gap-2 md:items-end md:flex-row lg:w-2/3">
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
    </div>
  );
};
