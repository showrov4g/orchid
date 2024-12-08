import React from "react";
import slide_1 from "../assets/images/slide (1).jpg";
import slide_2 from "../assets/images/slide (2).jpg";
import slide_3 from "../assets/images/slide (3).jpg";
import slide_4 from "../assets/images/slide (4).jpg";
import slide_5 from "../assets/images/slide (5).jpg";
import slide_6 from "../assets/images/slide (6).jpg";
import slide_7 from "../assets/images/slide (7).jpg";

const Gallary = () => {
  return (
    <>
      <div className="text-center my-5">
        <h1 className="text-5xl font-bold">Movies Gallery</h1>
      </div>
      <div className="md:flex gap-6  space-y-5 md:space-y-0">
        <div className="flex gap-6">
          <div>
            <img src={slide_1} alt="" />
          </div>
          <div>
            <img src={slide_2} alt="" />
          </div>
          <div>
            <img src={slide_3} alt="" />
          </div>
        </div>
        <div className="flex gap-6">
          <div>
            <img src={slide_4} alt="" />
          </div>
          <div>
            <img src={slide_5} alt="" />
          </div>
          <div>
            <img src={slide_6} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
