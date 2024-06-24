import React from "react";
import Enquiry from "../home/Enquiry";
// import bnr from "../../assets/home/bnnr 1.webp"; // Adjust the path based on your actual project structure

const ContactUs = () => {
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
      <Enquiry title1="Saboo commercial " title2="Contact us" />
      <section>
        <div className="container px-1 mx-auto my-12 overflow-hidden lg:mb-20 ">
          <iframe
            id="map"
            width="100%"
            height="400"
            // loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2793323124397!2d78.55569027597898!3d17.39837738349068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99a81e84708d%3A0x9f1dbd88e91a5674!2sSaboo%20RKS%20Motor%20-%20Maruti%20Suzuki%20Commercial%20(Uppal%2C%20Secunderabad)!5e0!3m2!1sen!2sin!4v1719213669424!5m2!1sen!2sin"
            title="Saboo RKS Somajiguda Google Maps Location"
            className="rounded-2xl bg-[#F5F5F5]"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
