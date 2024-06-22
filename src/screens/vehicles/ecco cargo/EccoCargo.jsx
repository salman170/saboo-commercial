import VehicleEnquiry from "../../../components/VehicleEnquiry";
import ExperienceEcco from "./ExperienceEcco";
import HeroSectionEcco from "./HeroSectionEcco";

const EccoCargo = () => {
  const variant = [
    {
      name: "Eeco Cargo Petrol",
      price: "5.47 ",
      title: "Eeco Cargo",
    },
    {
      name: "Eeco Cargo CNG",
      price: "6.39 ",
      title: "Eeco Cargo",
    },
    {
      name: "Eeco Cargo CNG AC",
      price: "6.79 ",
      title: "Eeco Cargo",
    },
  ];

  return (
    <div>
      <HeroSectionEcco />
      <VehicleEnquiry data={variant} />
      <ExperienceEcco />
      <CNGEcco />
    </div>
  );
};

export default EccoCargo;

const CNGEcco = () => {
  return (
    <div className="w-full h-full">
      <div className="">
        <img
          src={require("../../../assets/vehicles/ecco_cargo/home/eeco cargo cng tech.webp")}
          alt=""
          className="object-cover w-full bg-center"
        />
      </div>
    </div>
  );
};
