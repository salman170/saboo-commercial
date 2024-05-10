import React, { useEffect, useRef, useState } from "react";
import Tridi from "react-tridi";
import "react-tridi/dist/index.css";


function View360({ path, count, format }) {
 
  const [isAutoPlayRunning, setIsAutoPlayRunning] = useState(true);

  const tridiRef = useRef(null);
  //   useEffect(() => {
  //     if (isAutoPlayRunning) {
  //       tridiRef.current?.toggleAutoPlay(true);
  //     } else {
  //       tridiRef.current?.stopAutoPlay();
  //     }
  //   }, []);
  //   useEffect(() => {
  //     if (isAutoPlayRunning) {
  //       setTimeout(() => {
  //         setIsAutoPlayRunning(false);
  //       }, 1000);
  //     }
  //   }, [isAutoPlayRunning]);
  useEffect(() => {
    if (isAutoPlayRunning) {
      tridiRef.current.toggleAutoplay(true);
    } else {
      tridiRef.current.toggleAutoplay(false);
    }
  }, [isAutoPlayRunning]);

  useEffect(() => {
    if (isAutoPlayRunning) {
      setTimeout(() => {
        setIsAutoPlayRunning(false);
      }, 3000);
    }
  }, [isAutoPlayRunning]);

  return (
    <div >
    {/* <div onMouseEnter={() => setIsAutoPlayRunning(false)}> */}
      <Tridi
        ref={tridiRef}
        location={"./images"}
        format={"png"}
        count={35}
        autoplaySpeed={80}
        onAutoplayStart={() => setIsAutoPlayRunning(true)}
        onAutoplayStop={() => setIsAutoPlayRunning(false)}
        // hintOnStartup
        // hintText="Drag to view"
        // Other props
      />
      {/* <button
        onClick={() => tridiRef.current.toggleAutoplay(!isAutoPlayRunning)}
      >
        {isAutoPlayRunning ? "Pause" : "Autoplay"}
      </button> */}
    </div>
  );
}

export default View360;
