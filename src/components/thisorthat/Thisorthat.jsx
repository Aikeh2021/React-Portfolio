import React from "react";


const thisorthat = () => {
const styles = {
    h1: {
        textAlign: "center"
    },
    ulContent: {
        padding: 0

    },
}

  return (
    <div>
      <h2 style={styles.h1}>This or That With Ashley:</h2>
      <div className="row" id="allContent" style={styles.allContent}>
      <ul className="col-sm-10">
        <ul className="list-group" style={styles.ulContent}>
          <li className="list-group-item">Karaoke or Video Games: Karaoke</li>
          <li className="list-group-item">Dogs or Cats: Both...Duh!</li>
          <li className="list-group-item">Netflix or Hulu: NETFLIX!</li>
          <li className="list-group-item">Money or Free Time: I'll take Free Time for 200, Alex </li>
          <li className="list-group-item">
            East Coast or West Coast: East Coast for life!!!
          </li>
          <li className="list-group-item">
            International or Domestic Travel: Open the passport and stamp away!
          </li>
          <li className="list-group-item">
            Breakfast or Dinner: Breakfast
          </li>
          <li className="list-group-item">
            Vine or TikTok: Vine
          </li>
          <li className="list-group-item">
            Skating or Biking: Skating!
          </li>
        </ul>
      </ul>
      </div>
    </div>
  );
};

export default thisorthat;
