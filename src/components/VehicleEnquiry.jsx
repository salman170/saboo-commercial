import React, { useState } from "react";
// import CurrencyFormatter from "./currency-formatter";

const VehicleEnquiry = ({ data, vehicleName }) => {
  const [variant, setVariant] = useState(data[0].price);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value, e.target[2].value);
    alert("Thank you for submitting the form");
    document.getElementById("enquiryForm").reset();
  };
  return (
    <div className="relative">
      <div className="container flex flex-col px-4 py-10 mx-auto mt-10 gap-y-8 lg:pb-20 md:flex-row">
        {/* <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800">
            Vehicle Enquiry
          </h2>
          <p className="text-gray-500">
            Please fill in the form below to enquire about this vehicle.
          </p>
        </div> */}

        <form
          id="enquiryForm"
          onSubmit={(e) => handleSubmit(e)}
          className="w-full md:w-3/5"
          method="POST"
        >
          <div className="gap-4 lg:grid lg:grid-cols-3 ">
            <div className="md:col-span-3">
              <h2 className="mb-1 text-4xl font-semibold text-gray-800 ">
                Vehicle Enquiry
              </h2>
              <p className="mb-2 text-lg italic font-semibold text-gray-800">
                ~ {vehicleName}
              </p>
              <p className="mb-3 text-gray-500">
                Please fill in the form below to enquire about this vehicle.
              </p>
            </div>
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-full"
              />
            </div>
            {/* <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
            />
          </div> */}
            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                type="tel"
                required
                maxLength={10}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-full"
              />
            </div>

            <div className="mt-4 lg:col-span-2">
              <button
                type="submit"
                aria-label="submit"
                className="  px-8 py-2 lg:py-2.5 text-white   rounded-full  md:w-48  bg-primary duration-500  hover:shadow-xl hover:shadow-primary/50   sm:text-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        <div className="md:w-2/5">
          <div className="flex flex-col justify-end md:col-span-2 md:text-right">
            <h2 className="mb-2 text-4xl font-semibold text-gray-800">
              Variant
            </h2>
            <p className="text-gray-500">
              Wide range of variants to choose from.
            </p>
            <div className="flex mt-2 md:justify-end">
              <select
                name="model"
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                class="block w-full max-w-[250px] py-2 px-4 border border-gray-300 bg-primary rounded-full shadow-sm focus:outline-none  text-white focus:border-primary    focus:bg-white focus:text-black   focus:border-opacity-50"
              >
                {data.map((item) => (
                  <option value={item.price} className="mx-1">
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <h3 className="mb-2 text-3xl font-semibold text-gray-800 mt-7">
              {/* <span className="text-3xl text-primary">₹</span>{" "} */}
              {variant} <span className="text-xl">Lakh*</span>
              {/* {CurrencyFormatter.format(variant)}* */}
              {/* <span className="text-2xl">* </span> */}
            </h3>
            <p className="text-sm text-gray-500">*Ex-Showroom Price</p>
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
  );
};

export default VehicleEnquiry;
