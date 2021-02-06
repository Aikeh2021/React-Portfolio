import React from "react";
import Description from "../../components/AbtDescription/Description";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <br/>
          <Description title={"Ashley Ikeh"}/>
          <br />
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Home;
