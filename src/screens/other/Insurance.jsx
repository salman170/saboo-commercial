

import React from "react";
import Enquiry from "../home/Enquiry";
// import bnr from "../../assets/home/bnnr 1.webp"; // Adjust the path based on your actual project structure

const Insurance = () => {
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
      <Enquiry title1="Saboo commercial " title2='Insurance Service' />
     
    </div>
  );
};

export default Insurance;
