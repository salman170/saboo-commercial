// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Features = () => {
//   const divRef = useRef(null);
//   const boxRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: divRef.current,
//         start: "top 20%",
//         end: "+=200%", // Extend the end point for smoother animation
//         scrub: 1, // Set scrubbing to 1 for smoother scrolling
//         markers: true,
//       },
//     });

//     tl.to(divRef.current, {
//       duration: 2,
//       position: "fixed",
//       ease: "power1.inOut",
//     })
//       .to(
//         boxRef.current,
//         {
//           duration: 2,
//           rotate: 360,
//           x: 1000,
//           borderRadius: "50%",
//           ease: "power1.inOut",
//         },
//         0
//       )
//       .to(
//         divRef.current,
//         {
//           duration: 2,
//           position: "static",
//           ease: "power1.inOut",
//         },
//         2
//       );
//   }, []);

//   return (
//     <div className="relative h-screen bg-red-50">
//       <div className="static left-0 w-full top-40 testing_div" ref={divRef}>
//         <div
//           className="w-20 h-20 bg-red-400 rounded-lg red_box"
//           ref={boxRef}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Features;


import React from 'react'

const Features = () => {
  return (
    <div>Features</div>
  )
}

export default Features