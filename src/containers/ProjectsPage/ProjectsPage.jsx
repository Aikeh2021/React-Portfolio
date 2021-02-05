import React from "react";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";

const ProjectsPage = () => {
  return (
    <div>
        <br />
      <Header />
      <br/>
      <div className="container">
        <div className="row">
          <div className="col">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
