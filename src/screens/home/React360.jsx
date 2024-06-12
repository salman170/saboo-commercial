import { useEffect, useState } from "react";
import { ReactImageTurntable } from "react-image-turntable";

export const images = [
  require("../../assets/vehicles/super_carry/images/1.png"),
  require("../../assets/vehicles/super_carry/images/2.png"),
  require("../../assets/vehicles/super_carry/images/3.png"),
  require("../../assets/vehicles/super_carry/images/4.png"),
  require("../../assets/vehicles/super_carry/images/5.png"),
  require("../../assets/vehicles/super_carry/images/6.png"),
  require("../../assets/vehicles/super_carry/images/7.png"),
  require("../../assets/vehicles/super_carry/images/8.png"),
  require("../../assets/vehicles/super_carry/images/9.png"),
  require("../../assets/vehicles/super_carry/images/10.png"),
  require("../../assets/vehicles/super_carry/images/11.png"),
  require("../../assets/vehicles/super_carry/images/12.png"),
  require("../../assets/vehicles/super_carry/images/13.png"),
  require("../../assets/vehicles/super_carry/images/14.png"),
  require("../../assets/vehicles/super_carry/images/15.png"),
  require("../../assets/vehicles/super_carry/images/16.png"),
  require("../../assets/vehicles/super_carry/images/17.png"),
  require("../../assets/vehicles/super_carry/images/18.png"),
  require("../../assets/vehicles/super_carry/images/19.png"),
  require("../../assets/vehicles/super_carry/images/20.png"),
  require("../../assets/vehicles/super_carry/images/21.png"),
  require("../../assets/vehicles/super_carry/images/22.png"),
  require("../../assets/vehicles/super_carry/images/23.png"),
  require("../../assets/vehicles/super_carry/images/24.png"),
  require("../../assets/vehicles/super_carry/images/25.png"),
  require("../../assets/vehicles/super_carry/images/26.png"),
  require("../../assets/vehicles/super_carry/images/27.png"),
  require("../../assets/vehicles/super_carry/images/28.png"),
  require("../../assets/vehicles/super_carry/images/29.png"),
  require("../../assets/vehicles/super_carry/images/30.png"),
  require("../../assets/vehicles/super_carry/images/31.png"),
  require("../../assets/vehicles/super_carry/images/32.png"),
  require("../../assets/vehicles/super_carry/images/33.png"),
  require("../../assets/vehicles/super_carry/images/34.png"),
  require("../../assets/vehicles/super_carry/images/35.png"),
];

export const images2 = [
  require("../../assets/vehicles/ecco_cargo/images/download (1).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (2).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (3).png"),

  require("../../assets/vehicles/ecco_cargo/images/download (4).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (5).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (6).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (7).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (8).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (9).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (10).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (11).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (12).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (13).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (14).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (15).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (16).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (17).png"),

  require("../../assets/vehicles/ecco_cargo/images/download (18).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (19).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (20).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (21).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (22).png"),

  require("../../assets/vehicles/ecco_cargo/images/download (23).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (24).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (25).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (26).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (27).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (28).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (29).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (30).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (31).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (32).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (33).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (34).png"),
  require("../../assets/vehicles/ecco_cargo/images/download (35).png"),
];

function React360({activeSlide}) {
  const [rotationDisabled, setRotationDisabled] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setRotationDisabled(true);
    }, 1900);

    return clearTimeout();
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <ReactImageTurntable
        images={activeSlide?images2:images}
        // autoRotate={{ disabled: true }}
        className="cursor-grab"
        onClick={() => setRotationDisabled(true)}
        autoRotate={{ disabled: rotationDisabled, interval: 50 }}
      />
    </div>
  );
}

export default React360;
