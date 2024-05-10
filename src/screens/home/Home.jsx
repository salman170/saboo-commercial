import React from "react";
import HeroSection from "./HeroSection";
import Range from "./Range";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUs from "./AboutUs";

// Ensure ScrollTrigger is registered with GSAP
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    // Your existing animation for.social_links
    gsap.fromTo(
      ".social_links",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        duration: 0.5,
        x: 0,
        ease: "power1.inOut",
        stagger: 0.2,
      }
    );

    // New animation for.slider_img that triggers on scroll
    gsap.fromTo(
      ".slider_img",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        ease: "power1.inOut",

        scrollTrigger: {
          trigger: ".slider_img",
          start: "top 85%",
          end: "bottom bottom",
          // start: "bottom 10%", // Adjust this value to control when the animation starts
          // end: "bottom center", // Adjust this value to control when the animation ends
          scrub: true, // Smoothly transition the animation based on scroll position
          // markers: true, // Show markers for testing purposes
        },
      }
    );
  //   gsap.fromTo(
  //     ".textUp",
  //     { opacity: 0 },
  //     {
  //       opacity: 1,
  //       duration: 2,
  //       ease: "power1.inOut",
  //       scrollTrigger: {
  //         trigger: ".textUp",
  //         start: "top 85%",
  //         end: "bottom bottom",
  //         scrub: true, // Smoothly transition the animation based on scroll position
  //       },
  //     }
  //   );
  });

  return (
    <div className="">
      <HeroSection />
      <Range />
      <AboutUs />
    </div>
  );
};

export default Home;
