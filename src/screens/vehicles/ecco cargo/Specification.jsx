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
      title: "Tyres",
      rows: [
        {
          id: 1,
          name: "Tyre Type",
          value: " Tubeless",
          value2: "Tubeless",
          value3: "Tubeless",
        },
        {
          id: 2,
          name: "Tyre Size",
          value: " 155R13C 8PR",
          value2: "155R13C 8PR",
          value3: "155R13C 8PR",
        },
      ],
    },
    {
      title: "Engine and Transmission",
      rows: [
        {
          id: 1,
          name: "Max Output (kw/rpm)",
          value: " 59.4/6000	",
          value2: "Gasoline: 59.4/6000 CNG: 52.7/6000",
          value3: "Gasoline: 59.4/6000 CNG: 52.7/6000",
        },
        {
          id: 2,
          name: "Engine Type",
          value: " K12N",
          value2: "K12N",
          value3: "K12N",
        },
        {
          id: 3,
          name: "Fuel Type",
          value: "Petrol",
          value2: "CNG",
          value3: "CNG",
        },
        {
          id: 4,
          name: "Tank capacity",
          value: "32L",
          value2: "Petrol: 32L CNG Cylinder (water equi): 65L",
          value3: "Petrol: 32L CNG Cylinder (water equi): 65L",
        },
        {
          id: 5,
          name: "Transmission Type",
          value: "5MT",
          value2: "5MT",
          value3: "5MT",
        },
        {
          id: 6,
          name: "Max Torque (Nm/rpm)",
          value: "104.4/3000",
          value2: "Gasoline: 104.4/3000 CNG: 95/3000",
          value3: "Gasoline: 104.4/3000 CNG: 95/3000",
        },
        {
          id: 7,
          name: "Engine Displacement",
          value: "1197 CC",
          value2: "1197 CC",
          value3: "1197 CC",
        },
      ],
    },
    {
      title: "Dimension and Weight",
      rows: [
        {
          id: 1,
          name: "  Min Turning Radius",
          value: " 4.5 mm",
          value2: "4.5 mm",
          value3: "4.5 mm",
        },
        {
          id: 2,
          name: "Gross Vehicle Weight",
          value: " 1540 kg",
          value2: "1540 kg",
          value3: "1540 kg",
        },
        {
          id: 3,
          name: "Full Length",
          value: " 3675 mm",
          value2: "3675 mm",
          value3: "3675 mm",
        },
        {
          id: 4,
          name: "Kerb Weight",
          value: " 915 kg",
          value2: "1010 kg",
          value3: "1030 kg",
        },
        {
          id: 5,
          name: "Tread Front",
          value: "1280 mm",
          value2: "1280 mm",
          value3: "1280 mm",
        },
        {
          id: 6,
          name: "Full Height",
          value: " 1825 mm",
          value2: "1825 mm",
          value3: "1825 mm",
        },
        {
          id: 7,
          name: "Wheelbase",
          value: " 2350 mm",
          value2: "2350 mm",
          value3: "2350 mm",
        },
        {
          id: 8,
          name: "Tread Rear",
          value: " 1290 mm",
          value2: "1290 mm",
          value3: "1290 mm",
          value4: "1290 mm",
        },
        {
          id: 9,
          name: "Full Width",
          value: "1475 mm",
          value2: "1475 mm",
          value3: "1475 mm",
        },
        {
          id: 10,
          name: "Seating Capacity",
          value: " Driver + 1",
          value2: "Driver + 1",
          value3: "Driver + 1",
        },
      ],
    },
    {
      title: "Brake/Chassis",
      rows: [
        {
          id: 1,
          name: "Suspension",
          value: " Front: Macpherson Strut & Rear: 3 Link Rigid",
          value2: "Front: Macpherson Strut & Rear: 3 Link Rigid",
          value3: "Front: Macpherson Strut & Rear: 3 Link Rigid",
        },
        {
          id: 2,
          name: "Steering",
          value: "Rack & Pinion Manual",
          value2: "Rack & Pinion Manual",
          value3: "Rack & Pinion Manual",
        },
        {
          id: 3,
          name: "Brakes",
          value: "Front: Disc & Rear: Drum",
          value2: "Front: Disc & Rear: Drum",
          value3: "Front: Disc & Rear: Drum",
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
          <div className="w-1/4 whitespace-nowrap ">
            <div className="text-white duration-500 group-hover:translate-x-8 ">
              <FaTruck className="text-3xl duration-500 delay-200 lg:text-4xl " />
            </div>
            <p className="font-semibold">Specification</p>
          </div>
          {added.superCarryPetrol && (
            <div className="w-1/4 ">
              <img
                src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/eeco-cargo/specification/ecco_cargo_1.png?mw=1920"
                alt=""
                className="h-20 -mt-14"
              />
              <p className="font-semibold ">Eeco Cargo Petrol</p>
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
            <div className="w-1/4 ">
              <img
                src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/eeco-cargo/specification/ecco_cargo_1.png?mw=1920"
                alt=""
                className="h-20 -mt-20"
              />
              <p className="font-semibold ">Eeco Cargo CNG</p>
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
            <div className="w-1/4 ">
              <img
                src="https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/eeco-cargo/specification/ecco_cargo_1.png?mw=1920"
                alt=""
                className="h-24 -mt-20"
              />
              <p className="font-semibold ">Eeco Cargo CNG AC</p>
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
        </div>

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
          selected === index ? "bg-gray-50 text-primary" : ""
        }`}
      >
        <th className={`w-1/4 px-4 py-2.5 font-normal whitespace-nowrap  `}>
          {section.title}
        </th>
        <th className="w-1/4 px-4 py-2.5"></th>
        <th className="w-1/4 px-4 py-2.5"></th>

        <th className="w-1/4 py-2.5 pr-10 ">
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
            <td className="w-1/4 px-4 py-3 bg-[#333] text-white">{row.name}</td>
            <td className="w-1/4 px-4 py-3">{row.value}</td>
            <td className="w-1/4 px-4 py-3">{row.value2}</td>
            <td className="w-1/4 px-4 py-3">{row.value3}</td>
          </tr>
        ))}
      </tbody>
    )}
  </table>
);
