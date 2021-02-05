import React from "react";
import Header from "../../components/Header/Header";

const Home = () => {
const styles = {
    h1: {
        textAlign: "center",
        fontSize: 100,
      }
}
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="display-4" style={styles.h1}>
            Ashley Ikeh
          </h1>
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Home;
