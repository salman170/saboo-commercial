import React from "react";
import { FaTruck } from "react-icons/fa";

const Specification = () => {
  const [added, setAdded] = React.useState({
    superCarryPetrol: true,
    superCarryCNG: false,
    superCarryChasis: false,
    superCarryCNGChasis: false,
  });
  const [total, setTotal] = React.useState(1);
  const rows = [
    { id: 1, name: "Measurement", value: "" },
    { id: 2, name: "Height", value: "1883 mm" },
    { id: 3, name: "Wheel Base", value: "2110 mm" },
    { id: 4, name: "Length", value: "3800 mm" },
    { id: 5, name: "Front Track", value: "1345 mm" },
    { id: 6, name: "Width of Deck", value: "1488 mm" },
    { id: 7, name: "Turning Radius", value: "4.3m" },
    { id: 8, name: "Width", value: "1562 mm" },
    { id: 9, name: "Rear Track", value: "1330 mm" },
    { id: 10, name: "Length of Deck", value: "NA" },
    { id: 11, name: "Height of Deck", value: "300" },
    { id: 12, name: "Transmission", value: "+" },
  ];

  const handleCheckboxChange = (key) => {
    setAdded((prevAdded) => {
      const newState = { ...prevAdded, [key]: !prevAdded[key] };
      const newTotal = Object.values(newState).filter((value) => value).length;
      setTotal(newTotal);
      return newState;
    });
  };

  return (
    <div className="">
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
        <div className="flex py-2">
          <div className="w-1/5"></div>
          <div className="flex justify-between w-4/5 px-2 text-sm ">
            <div>
              <input
                type="checkbox"
                checked={added.superCarryPetrol}
                onChange={() => handleCheckboxChange("superCarryPetrol")}
              />
              Super Carry Petrol
            </div>
           <div>
              <input
                type="checkbox"
                checked={added.superCarryCNG}
                onChange={() => handleCheckboxChange("superCarryCNG")}
              />
              Super Carry CNG
            </div>  <div>
              <input
                type="checkbox"
                checked={added.superCarryChasis}
                onChange={() => handleCheckboxChange("superCarryChasis")}
              />
              Super Carry Petrol Chassis
            </div>
           
            <div>
              <input
                type="checkbox"
                checked={added.superCarryCNGChasis}
                onChange={() => handleCheckboxChange("superCarryCNGChasis")}
              />
              Super Carry CNG Chassis
            </div>
          </div>
        </div>

        <table className="w-full table-auto">
          <thead className="bg-gray-500">
            <tr className="text-xs font-medium text-left text-gray-700">
              <th className="px-4 py-2">Measurement</th>
              <th className="px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody className="text-xs font-light text-left text-gray-700">
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-t border-gray-200 hover:bg-gray-100"
              >
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Specification;
