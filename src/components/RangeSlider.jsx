import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slider";

const RangeSlider = ({ MIN, MAX, values, setValues, steps }) => {
  const styles = `
  .slider {
    width: 100%;
    height: 0.5px;
    // background: linear-gradient(to left, #00BAB8, #0BF2B3);
    background-color: #F4F4F4;
    // margin-top : 16px;
  }

  .slider .thumb {
    width: 110px;
    height: 50px;
    cursor: grab;
    border-radius: 30px;
    border: 2px solid #DA251D;
    // border-color: white;
    top:-22px;
    background-color: #DA251D;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    ring-width: 0px;
    gap: 6px;
    outline-color: red;
    
  }

  // .track-1 {
  //   background-color: red;
  //   z-index: 40;
  // }

  .slider .track-0 {
    width: 100%;
    height: 4px;
    background-color: #F4F4F4;
    //    background-color: #DA251D;
  }
  .slider .track-1 {
    width: 100%;
    height: 4px;
 background-color: #F4F4F4;
  }
  
  `;

  return (
    <>
      <style>{styles}</style>

      <div className="py-10 -mt-6 overflow-hidden ">
        <Slider
          className="slider "
          min={MIN}
          max={MAX}
          step={steps}
          //   defaultValue={5}
          onChange={setValues}
          renderThumb={(props) => (
            <div {...props}>
              <FaAngleRight className="rotate-180" />
              Slide
              <FaAngleRight />
            </div>
          )}
          //   value={values}
        />
      </div>
    </>
  );
};

export default RangeSlider;
