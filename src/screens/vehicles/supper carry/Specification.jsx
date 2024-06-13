import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Specification = () => {
  const [added, setAdded] = React.useState({
    superCarryPetrol: true,
    superCarryCNG: false,
    superCarryChasis: false,
    superCarryCNGChasis: false,
  });
  const [total, setTotal] = React.useState(1);
  const [selected, setSelected] = React.useState(0);
  const sections = [
    {
      title: "Measurement",
      rows: [
        {
          id: 1,
          name: "Height",
          value: "1883 mm",
          value2: "1883 mm",
          value3: "1883 mm",
          value4: "1883 mm",
        },
        {
          id: 2,
          name: "Wheel Base",
          value: "2110 mm",
          value2: "2110 mm",
          value3: "2110 mm",
          value4: "2110 mm",
        },
        {
          id: 3,
          name: "Length",
          value: "3800 mm",
          value2: "3800 mm",
          value3: "3800 mm",
          value4: "3800 mm",
        },
        {
          id: 4,
          name: "Front Track",
          value: "1345 mm",
          value2: "1345 mm",
          value3: "1345 mm",
          value4: "1345 mm",
        },
        {
          id: 5,
          name: "Width of Deck",
          value: "1488 mm",
          value2: "1488 mm",
          value3: "NA",
          value4: "NA",
        },
        {
          id: 6,
          name: "Turning Radius",
          value: "4.3 m",
          value2: "4.3 m",
          value3: "4.3 m",
          value4: "4.3 m",
        },
        {
          id: 7,
          name: "Width",
          value: "1562 mm",
          value2: "1562 mm",
          value3: "1562 mm",
          value4: "1562 mm",
        },
        {
          id: 8,
          name: "Rear Track",
          value: "1330 mm",
          value2: "1330 mm",
          value3: "1330 mm",
          value4: "1330 mm",
        },
        {
          id: 9,
          name: "Length of Deck",
          value: "2183 mm",
          value2: "2183 mm",
          value3: "NA",
          value4: "NA",
        },
        {
          id: 10,
          name: "Height of Deck",
          value: "300 mm",
          value2: "300 mm",
          value3: "NA",
          value4: "NA",
        },
      ],
    },
    {
      title: "Transmission",
      rows: [
        {
          id: 1,
          name: "Gearbox",
          value: "5 Forward and 1 Reverse",
          value2: "5 Forward and 1 Reverse",
          value3: "5 Forward and 1 Reverse",
          value4: "5 Forward and 1 Reverse",
        },
        {
          id: 2,
          name: "TYPE",
          value: "5MT",
          value2: "5MT",
          value3: "5MT",
          value4: "5MT",
        },
        {
          id: 3,
          name: "Clutch",
          value: "Single Plate Dry Friction",
          value2: "Single Plate Dry Friction",
          value3: "Single Plate Dry Friction",
          value4: "Single Plate Dry Friction",
        },
      ],
    },
    {
      title: "Suspension and Steering",
      rows: [
        {
          id: 1,
          name: "Steering",
          value: "Manual-Rack and Pinion",
          value2: "Manual-Rack and Pinion",
          value3: "Manual-Rack and Pinion",
          value4: "Manual-Rack and Pinion",
        },
        {
          id: 2,
          name: "Rear",
          value: "Leaf Spring Rigid Axle",
          value2: "Leaf Spring Rigid Axle",
          value3: "Leaf Spring Rigid Axle",
          value4: "Leaf Spring Rigid Axle",
        },
        {
          id: 3,
          name: "Front",
          value: "MacPherson strut with Coil Spring",
          value2: "MacPherson strut with Coil Spring",
          value3: "MacPherson strut with Coil Spring",
          value4: "MacPherson strut with Coil Spring",
        },
      ],
    },
    {
      title: "Capacity",
      rows: [
        {
          id: 1,
          name: "Seating Capacity",
          value: "Driver + 1",
          value2: "Driver + 1",
          value3: "Driver + 1",
          value4: "Driver + 1",
        },
        {
          id: 2,
          name: "Fuel Tank",
          value: "30 L",
          value2:
            "CNG Cylinder (Water Equivalent) = 70L (35L x 2) Gasoline = 5L (For Emergency Use)",
          value3: "30 L",
          value4:
            "CNG Cylinder (Water Equivalent) = 70L (35L x 2) Gasoline = 5L (For Emergency Use)",
        },
      ],
    },
    {
      title: "Brake",
      rows: [
        {
          id: 1,
          name: "Front",
          value: "Ventilated Disc Brake",
          value2: "Ventilated Disc Brake",
          value3: "Ventilated Disc Brake",
          value4: "Ventilated Disc Brake",
        },
        {
          id: 2,
          name: "Rear",
          value: "Drum Brake",
          value2: "Drum Brake",
          value3: "Drum Brake",
          value4: "Drum Brake",
        },
        {
          id: 3,
          name: "Brake Control valve",
          value: "LSPV",
          value2: "LSPV",
          value3: "LSPV",
          value4: "LSPV",
        },
      ],
    },
    {
      title: "Performance",
      rows: [
        {
          id: 1,
          name: "Gradeability",
          value: "34%",
          value2: "34%",
          value3: "34%",
          value4: "34%",
        },
        {
          id: 2,
          name: "Top Speed",
          value: "80 Km/h",
          value2: "80 Km/h",
          value3: "80 Km/h",
          value4: "80 Km/h",
        },
      ],
    },
    {
      title: "Wheel and Tyre",
      rows: [
        {
          id: 1,
          name: "Tyre",
          value: "155R13 LT 8PR",
          value2: "155R13 LT 8PR",
          value3: "155R13 LT 8PR",
          value4: "155R13 LT 8PR",
        },
      ],
    },
    {
      title: "Weight",
      rows: [
        {
          id: 1,
          name: "GVW",
          value: "1600 Kg",
          value2: "1600 Kg",
          value3: "1600 Kg",
          value4: "1600 Kg",
        },
        {
          id: 2,
          name: "Kerb",
          value: "860 Kg",
          value2: "975 kg",
          value3: "765 Kg",
          value4: "765 Kg",
        },
        {
          id: 3,
          name: "Payload",
          value: "740 Kg",
          value2: "625 Kg",
          value3: "NA",
          value4: "NA",
        },
      ],
    },
    {
      title: "Other Specifications",
      rows: [
        {
          id: 1,
          name: "Maximum Power",
          value: "59.4KW (80.7PS) @6000 rpm",
          value2: "52.7KW (71.6PS) @6000 rpm",
          value3: "59.4KW (80.7PS) @6000 rpm",
          value4: "52.7KW (71.6PS) @6000 rpm",
        },
        {
          id: 2,
          name: "Engine",
          value: "Advanced K-Series Dual Jet, Dual VVT",
          value2: "Advanced K-Series Dual Jet, Dual VVT",
          value3: "Advanced K-Series Dual Jet, Dual VVT",
          value4: "Advanced K-Series Dual Jet, Dual VVT",
        },
        {
          id: 3,
          name: "Fuel Distribution",
          value: "MPFI",
          value2: "MPFI",
          value3: "MPFI",
          value4: "MPFI",
        },
        {
          id: 4,
          name: "Maximum Torque",
          value: "104.4 Nm @2900 rpm",
          value2: "95 Nm @2800 rpm",
          value3: "104.4 Nm @2900 rpm",
          value4: "95 Nm @2800 rpm",
        },
        {
          id: 5,
          name: "Engine Capacity",
          value: "1197 cc",
          value2: "1197 cc",
          value3: "1197 cc",
          value4: "1197 cc",
        },
      ],
    },
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
        {/* <div className="flex py-2">
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
            </div>{" "}
            <div>
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
        </div> */}

        {sections.map((section, index) => (
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
        className={`font-medium text-left text-gray-700 cursor-pointer hover:bg-gray-100 ${
          selected === index ? "bg-gray-50 text-primary" : "" }`}
      >
        <th className={`w-1/5 px-4 py-2.5 font-normal whitespace-nowrap  `}>{section.title}</th>
        <th className="w-1/5 px-4 py-2.5"></th>
        <th className="w-1/5 px-4 py-2.5"></th>
        <th className="w-1/5 px-4 py-2.5"></th>
        <th className="w-1/5 py-2.5 pr-10 ">
          <div className="flex justify-end w-full">
            {selected === index ? <FaMinus  /> : <FaPlus  />}
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
