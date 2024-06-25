import React, { useEffect } from "react";
// import bnr from "../../assets/home/bnnr 1.webp"; // Adjust the path based on your actual project structure

import Aos from "aos";
import "aos/dist/aos.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define validation schema with Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^[0-9]+$/, "Phone number must contain only digits"),
  outlet: Yup.string().required("Vehicle is required"),
  model: Yup.string().required("Vehicle is required"),
});

const Service = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://static.marutisuzukicommercial.com/-/jssmedia/msilcommercial/images/aboutusbanner/bnnr-1.png?h=677&iar=0&w=1512&hash=EDB1C4D946A4C39D22622ED76C0A8A12&mw=2048")`,
          height: "60vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // Optionally, you can add other styles as needed
        }}
        className="bg-center bg-no-repeat bg-cover"
      >
        {/* Optional: Add content inside the div if needed */}
      </div>
      {/* <div className="container px-1 pt-10 mx-auto select-none lg:pt-20 md:max-w-6xl ">
        <p className="text-3xl font-semibold text-center">
          Your optional content here
        </p>
      </div> */}
      <div className="relative">
        <div className="container flex flex-col items-center mx-auto lg:flex-row xl:max-w-7xl lg:py-20">
          <div className="w-1/2">
            <ServiceEnquiry
              title1={"Book A"}
              title2={"Service"}
              desc="Please fill out the form and we'll get back to you right away !"
            />
          </div>
          <div className="lg:w-1/2">
            <img
              src={require("../../assets/home/bookAservice.png")}
              alt="service"
              className="mx-auto max-h-96"
            />
          </div>
        </div>{" "}
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

export default Service;

const ServiceEnquiry = ({ title1, title2, desc }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative">
      <div className="container px-2 py-10 mx-auto md:py-12">
        <div className="mx-auto mb-10 lg:max-w-5xl">
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="500"
            className="pt-6 pb-2 text-xl font-medium uppercase lg:pt-10 md:text-2xl lg:text-3xl"
          >
            {title1} <span className="text-primary">{title2}</span>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="text-sm "
          >
            {desc
              ? ` ${desc}`
              : " Start your journey to bring home the perfect Commercial vehicle for your business."}
          </div>
        </div>
        <div className="max-w-5xl pb-10 mx-auto">
          {/* Form  */}
          <Formik
            initialValues={{ name: "", email: "", phone: "", vehicle: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            <Form className="grid gap-4 md:grid-cols-2 lg:gap-6">
              <div>
                <Field
                  name="name"
                  type="text"
                  placeholder="Name*"
                  className="w-full px-4 py-3 border rounded-full lg:px-6"
                />
                <ErrorMessage name="name" className="text-sm text-primary" />
              </div>{" "}
              <div>
                <Field
                  name="phone"
                  type="text"
                  placeholder="Phone*"
                  className="w-full px-4 py-3 border rounded-full lg:px-6"
                />
                <ErrorMessage name="phone" className="text-sm text-primary" />
              </div>
             
              <div>
                <Field
                  name="model"
                  as="select"
                  className="w-full px-4 py-3 border rounded-full lg:px-6"
                  placeholder="Select Vehicle*"

                  id="model"
                >
                  <option value="" >
                    Select Model
                  </option>
                  <option value="vehicle1">Vehicle 1</option>
                  <option value="vehicle2">Vehicle 2</option>
                  {/* Add more options as needed */}
                </Field>
                <ErrorMessage name="outlet" className="text-sm text-primary" />
              </div>
              <div>
                <Field
                  name="outlet"
                  as="select"
                  className="w-full px-4 py-3 border rounded-full lg:px-6"
                  placeholder="Select Vehicle*"

                  id="outlet"
                >
                  <option value="" >
                    Select Vehicle
                  </option>
                  <option value="vehicle1">Vehicle 1</option>
                  <option value="vehicle2">Vehicle 2</option>
                  {/* Add more options as needed */}
                </Field>
                <ErrorMessage name="outlet" className="text-sm text-primary" />
              </div>
              <div className="">
                <button
                  className="px-4 py-2.5 w-full text-sm text-white rounded-full md:px-8 md:py-3 lg:px-12 bg-primary  hover:shadow-lg  "
                  type="submit"
                  // disabled= {isSubmitting}
                >
                  Submit
                </button>
                <p className="mt-4 text-xs text-gray-600">
                  I agree to terms and conditions.
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>

      {/* <div
        className={`absolute  top-0 left-0 w-full h-full -z-10 bg-gradient-to-t from-[#ECF3FE] to-[#FBFDFF]`}
      ></div> */}
    </div>
  );
};
