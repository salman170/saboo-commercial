import React, { useState } from "react";
import HeroSection from "./HeroSection";
import Range from "./Range";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUs from "./AboutUs";
import HomeNews from "./HomeNews";
import SocialMedia from "./SocialMedia";
import Enquiry from "./Enquiry";
import ScrollingSection from "./ScrollingSection";
import ModalYoutube from "../../components/ModalYoutube";

// Ensure ScrollTrigger is registered with GSAP
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [openYoutube, setOpenYoutube] = useState({
    open: false,
    title: "",
    url: "",
    description: "",
  });

  useGSAP(() => {
    // New animation for.slider_img that triggers on scroll
    gsap.fromTo(
      ".slider_img",
      { opacity: 0, y: 100, duration: 2, ease: "power1.inOut" },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        ease: "power1.inOut",

        scrollTrigger: {
          trigger: ".slider_img",
          start: "top 95%",
          end: "bottom bottom",
          // start: "bottom 10%", // Adjust this value to control when the animation starts
          // end: "bottom center", // Adjust this value to control when the animation ends
          scrub: true, // Smoothly transition the animation based on scroll position
          // markers: true, // Show markers for testing purposes
        },
      }
    );

    // gsap.to(".scorllingCar", {
    //   duration: 4,
    //   right: "10%",
    //   ease: "power1.inOut",
    //   scrollTrigger: {
    //     trigger: ".scorllingCar",
    //     start: "top 50%",
    //     end: "bottom bottom",
    //     // start: "bottom 10%", // Adjust this value to control when the animation starts
    //     // end: "bottom center", // Adjust this value to control when the animation ends
    //     scrub: true, // Smoothly transition the animation based on scroll position
    //     // markers: true, // Show markers for testing purposes
    //   },
    // });

    // timeline.to(".scorllingDiv", {
    //   duration: 2,
    //   height: "200vh", // Adjust this value to control the height of the "scrollingDiv
    //   y: 0,
    //   ease: "power1.inOut",
    //   scrollTrigger: {
    //     trigger: ".scorllingDiv",
    //     start: "top 85%",
    //     end: "bottom bottom",
    //     // start: "bottom 10%", // Adjust this value to control when the animation starts
    //     // end: "bottom center", // Adjust this value to control when the animation ends
    //     scrub: true, // Smoothly transition the animation based on scroll position
    //     markers: true, // Show markers for testing purposes
    //   },
    // });
  });

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Enquiry title1="ENQUIRE NOW " />
      {/* <Range />
      <AboutUs setOpen={setOpenYoutube} />
      <HomeNews />
      <SocialMedia />
      <ScrollingSection />
      <ModalYoutube
        open={openYoutube.open}
        data={openYoutube}
        setOpenYoutube={setOpenYoutube}
      /> */}
    </div>
  );
};

export default Home;
