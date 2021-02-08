import React from "react";
import { Link } from "react-router-dom";
import Error from "../../Assets/Error.png";
const PageNotFound = () => {
  const styles = {
   content: {
       padding: 0,
       textAlign: "center"
   }
  };
  return (
    <div className="container" id="content" style={styles.content}>
      <div className="row">
        <div className="col-sm-12">
          <h1>ERROR: Page Not Found!</h1>
            <img src={Error} alt="404 Error" />
            <br />
            <Link to="/" type="button" class="btn btn-info" id="btn">
              Click here to return Home
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
