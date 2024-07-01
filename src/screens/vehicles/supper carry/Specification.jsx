import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { sectionsSuperCarry } from "../../../constant";

const Specification = () => {
  const [added, setAdded] = React.useState({
    superCarryPetrol: true,
    superCarryCNG: false,
    superCarryChasis: false,
    superCarryCNGChasis: false,
  });
  const [total, setTotal] = React.useState(1);
  const [selected, setSelected] = React.useState(0);
 

  const handleCheckboxChange = (key) => {
    setAdded((prevAdded) => {
      const newState = { ...prevAdded, [key]: !prevAdded[key] };
      const newTotal = Object.values(newState).filter((value) => value).length;
      setTotal(newTotal);
      return newState;
    });
  };

  return (
    <div className="hidden md:block">
      <div className="container px-1 py-10 mx-auto lg:pb-20 md:max-w-6xl">
        <h2 className="bg-[#616161] text-2xl font-semibold text-white py-2 w-min rounded-md px-4 -skew-x-12 uppercase mb-4">
          Specification
        </h2>
        <h4 className="mt-4 text-2xl italic font-semibold tracking-tight uppercase md:text-3xl lg:text-4xl">
          POWER, PRECISION
        </h4>
        <h4 className="mb-10 text-2xl italic font-light tracking-tight uppercase md:text-3xl lg:text-4xl lg:mb-14">
          & PERFORMANCE
        </h4>
        <div className="py-2 bg-[#333] rounded-t-lg text-white px-2 group duration-300 flex items-end gap-2 ">
          <div className="w-1/5 whitespace-nowrap ">
            <div className="text-white duration-500 group-hover:translate-x-8 ">
              <FaTruck className="text-3xl duration-500 delay-200 lg:text-4xl " />
            </div>
            <p className="font-semibold">Specification</p>
          </div>
          {added.superCarryPetrol && (
            <div className="w-1/5 ">
              <img
                src={require("../../../assets/vehicles/super_carry/specifications/Brand-supercarry 2.webp")}
                alt=""
                className="h-20 -mt-14"
              />
              <p className="font-semibold ">Super Carry Petrol</p>
              {total > 1 && (
                <div
                  onClick={() => handleCheckboxChange("superCarryPetrol")}
                  className="text-sm underline cursor-pointer hover:text-red-500"
                >
                  Remove
                </div>
              )}
            </div>
          )}
          {added.superCarryCNG && (
            <div className="w-1/5 ">
              <img
                src={require("../../../assets/vehicles/super_carry/specifications/SupercarryCNG-thumbnail-new.webp")}
                alt=""
                className="h-20 -mt-20"
              />
              <p className="font-semibold ">Super Carry CNG</p>
              {total > 1 && (
                <div
                  onClick={() => handleCheckboxChange("superCarryCNG")}
                  className="text-sm underline cursor-pointer hover:text-red-500"
                >
                  Remove
                </div>
              )}
            </div>
          )}
          {added.superCarryChasis && (
            <div className="w-1/5 ">
              <img
                src={require("../../../assets/vehicles/super_carry/specifications/supercarry-cab-chasis 1.webp")}
                alt=""
                className="h-24 -mt-20"
              />
              <p className="font-semibold ">Super Carry Chasis</p>
              {total > 1 && (
                <div
                  onClick={() => handleCheckboxChange("superCarryChasis")}
                  className="text-sm underline cursor-pointer hover:text-red-500"
                >
                  Remove
                </div>
              )}
            </div>
          )}
          {added.superCarryCNGChasis && (
            <div className="w-1/5 ">
              <img
                src={require("../../../assets/vehicles/super_carry/specifications/supercarry-CNG-chasis 3.webp")}
                alt=""
                className="h-24 -mt-20"
              />
              <p className="font-semibold ">Super Carry CNG Chasis</p>
              {total > 1 && (
                <div
                  onClick={() => handleCheckboxChange("superCarryCNGChasis")}
                  className="text-sm underline cursor-pointer hover:text-red-500"
                >
                  Remove
                </div>
              )}
            </div>
          )}
        </div>
        {/* <div className="flex py-2">
          <div className="w-1/5"></div>
          <div className="flex justify-between w-4/5 px-2 text-sm ">
            <div>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={added.superCarryPetrol}
                  onChange={() => handleCheckboxChange("superCarryPetrol")}
                  className="mr-2"
                />
                Super Carry Petrol
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={added.superCarryCNG}
                onChange={() => handleCheckboxChange("superCarryCNG")}
                className="mr-2"
              />
              Super Carry CNG
            </div>{" "}
            <div>
              <input
                type="checkbox"
                checked={added.superCarryChasis}
                onChange={() => handleCheckboxChange("superCarryChasis")}
                className="mr-2"
              />
              Super Carry Petrol Chassis
            </div>
            <div>
              <input
                type="checkbox"
                checked={added.superCarryCNGChasis}
                onChange={() => handleCheckboxChange("superCarryCNGChasis")}
                className="mr-2"
              />
              Super Carry CNG Chassis
            </div>
          </div>
        </div> */}

        {sectionsSuperCarry.map((section, index) => (
          <TableSection
            key={index}
            section={section}
            selected={selected}
            setSelected={setSelected}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Specification;

const TableSection = ({ section, selected, setSelected, index }) => (
  <table className="w-full mb-1 table-auto">
    <thead className="h-12 border">
      <tr
        onClick={() => setSelected(index)}
        className={`font-medium text-left text-gray-700 cursor-pointer hover:bg-gray-100  ${
          selected === index ? "bg-gray-50 text-primary" : ""
        }`}
      >
        <th className={`lg:w-1/5 px-4 py-2.5 font-normal whitespace-nowrap  `}>
          {section.title}
        </th>
       <th className="w-1/5 px-4 py-2.5"></th>
        <th className="w-1/5 px-4 py-2.5"></th>
        <th className="w-1/5 px-4 py-2.5"></th> 
        <th className="w-1/5 py-2.5 pr-10 ">
          <div className="flex justify-end w-full">
            {selected === index ? <FaMinus /> : <FaPlus />}
          </div>
        </th>
      </tr>
    </thead>
    {selected === index && (
      <tbody className="text-xs font-light text-left text-gray-800 ">
        {section.rows.map((row) => (
          <tr
            key={row.id}
            className="border-r border-gray-200 border-y hover:bg-gray-50"
          >
            <td className="w-1/5 px-4 py-3 bg-[#333] text-white">{row.name}</td>
            <td className="w-1/5 px-4 py-3">{row.value}</td>
            <td className="w-1/5 px-4 py-3">{row.value2}</td>
            <td className="w-1/5 px-4 py-3">{row.value3}</td>
            <td className="w-1/5 px-4 py-3">{row.value4}</td> 
          </tr>
        ))}
      </tbody>
    )}
  </table>
);
