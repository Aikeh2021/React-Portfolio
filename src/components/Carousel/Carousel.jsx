import React, { useState } from "react";
import Background from "../../Assets/Background.png";
import Background2 from "../../Assets/Background2.png";
import Background3 from "../../Assets/Background3.png";

const Carousel = () => {
  let picturesArray = [Background, Background2, Background3];
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="Container">
        <div className="row">
          <div className="col-sm-12">
            {/* <div id="pictureDiv">
              {picturesArray.map((item, index) => {
                return (
                  <div key={index} className="d-block w-100">
                    <img src={item} alt="Carousel Image" />
                  </div>
                  
                );
              })}
            </div> */}

            <div class="carousel-item active">
              <img src={Background} class="d-block w-100" alt="Coding Set Up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
