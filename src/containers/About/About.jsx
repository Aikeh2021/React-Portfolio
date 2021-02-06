import React from "react";
import Header from "../../components/Header/Header";
import Description from "../../components/AbtDescription/Description";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
              <br />
            <Description title="Meet Ashley! A Dev In The Making..." />
            <br />
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
