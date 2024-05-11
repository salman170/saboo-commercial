import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define validation schema with Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^[0-9]+$/, "Phone number must contain only digits"),
  vehicle: Yup.string().required("Vehicle is required"),
});

const Enquiry = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container px-1 pb-10 mx-auto md:pb-12">
      <div className="mx-auto mb-10 text-center lg:max-w-4xl">
        <div
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="500"
          className="pb-4 text-xl font-medium text-center uppercase lg:pb-5 md:text-xl lg:text-2xl lg:font-semibold "
        >
          ENQUIRE NOW
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="text-sm text-center lg:px-10 "
        >
          Start your journey to bring home the perfect Commercial vehicle for
          your business.
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
                className="w-full px-4 py-3 border rounded lg:p-6"
              />
              <ErrorMessage name="name" />
            </div>
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-3 border rounded lg:p-6"
              />
              <ErrorMessage name="email" />
            </div>
            <div>
              <Field
                name="phone"
                type="text"
                placeholder="Phone*"
                className="w-full px-4 py-3 border rounded lg:p-6"
              />
              <ErrorMessage name="phone" />
            </div>
            <div>
              <Field
                name="vehicle"
                as="select"
                className="w-full px-4 py-3 border rounded lg:p-6"
                placeholder="Select Vehicle*"
              >
                <option value="" disabled>
                  Select Vehicle
                </option>
                <option value="vehicle1">Vehicle 1</option>
                <option value="vehicle2">Vehicle 2</option>
                {/* Add more options as needed */}
              </Field>
              <ErrorMessage name="vehicle" />
            </div>

            <div>
              <button
                className="px-4 py-2.5 text-sm text-white bg-gray-300 rounded-lg md:px-8"
                disabled
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Enquiry;
