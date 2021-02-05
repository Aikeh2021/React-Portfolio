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
            <Projects title="The Inspirator" description="The Inspirator: an application to help unlock creativity for persons needing a fresh approach. " link="https://github.com/Aikeh2021/The-Inspirator" updated="Last updated 4 months ago" image="" alt="The Inspirator Thumbnail" contribution="I was primarily responsible for implementing the last feature on the website, the film inspiration. I incorporated a button to randomly shuffle an array of movies and pick one to be displayed on the website. With the help of an API from The Movie Database, we were able to attach features like film trailers, descriptions, release dates, and run times for highly rated films from several genres and countries."/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
