import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import React from "react";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";


const ProjectsPage = () => {
  return (
    <div>
      <br />
      <Header />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <Projects
              title="The Inspirator"
              description="The Inspirator: an application to help unlock creativity for persons needing a fresh approach. "
              link="https://github.com/Aikeh2021/The-Inspirator"
              updated="Last updated 4 months ago"
              image=""
              alt="The Inspirator Thumbnail"
              contribution="I was primarily responsible for implementing the last feature on the website, the film inspiration. I incorporated a button to randomly shuffle an array of movies and pick one to be displayed on the website. With the help of an API from The Movie Database, we were able to attach features like film trailers, descriptions, release dates, and run times for highly rated films from several genres and countries."
            />
            <br/>
            <Projects
              title="The Reserve"
              description="The Reserve is a room reservation app that allows college campus library managers to create a log of study rooms. In doing so, it's easier for the manager to keep track of which rooms are in use, empty, or in need of cleaning."
              link="https://github.com/Aikeh2021/conference-room-booker"
              updated="Last updated 2 months ago"
              image=""
              alt="The Reserve Thumbnail"
              contribution="I believe in this project I was able to wear many hats. It was the second project I completed during my coding bootcamp and I was able to get involved with more aspects of the process. I sketched the wireframes used to design the site, as well as, completed the design of most of the elements on the website's main page. I also sought out the SweetAlert2 NPM package and proposed the use of it to my team to make the alerts on the page more fun. I did so with the idea being that the small things are often what make the biggest impact for users. I really enjoyed this project and worked with an awesome team!"
            />
            <br/>
            <Projects
              title="Employee Encrypted Password Generator"
              description="Let us create your password, so you can just worry about getting through the onboarding process!"
              link="https://github.com/Aikeh2021/Employee-Encrypted-Password-Generator"
              updated="Last updated 28 days ago"
              image=""
              alt="The Employee Encrypted Password Generator Thumbnail"
              skills="Understanding of vanilla Javascript"
            />
            <br/>
            <Projects
              title="The Weather Dashboard"
              description="This site was created for travelers who want the most up-to-date information regarding the weather in any city around the globe."
              link="https://github.com/Aikeh2021/Weather-Dashboard-App"
              updated="Last updated 28 days ago"
              image=""
              alt="The Weather Dasbhoard Thumbnail"
              skills="Dynamic element generation, knowledge of jQuery, bootstrap styling"
            />
            <br/>
            <Projects
              title="The Workday Scheduler"
              description="This site was created for travelers who want the most up-to-date information regarding the weather in any city around the globe."
              link="https://github.com/Aikeh2021/Weather-Dashboard-App"
              updated="Last updated 2 months ago"
              image=""
              alt="The Weather Dasbhoard Thumbnail"
              skills="Dynamic element generation, knowledge of jQuery, bootstrap styling"
            />
            <br/>
            <Projects
              title="Budget Tracker"
              description="This site was created for travelers who want the most up-to-date information regarding the weather in any city around the globe."
              link="https://github.com/Aikeh2021/Weather-Dashboard-App"
              updated="Last updated 2 months ago"
              image=""
              alt="The Weather Dasbhoard Thumbnail"
              skills="Dynamic element generation, knowledge of jQuery, bootstrap styling"
            />
            <br/>
            <Projects
              title="Employee Directory"
              description="This site was created for travelers who want the most up-to-date information regarding the weather in any city around the globe."
              link="https://github.com/Aikeh2021/Weather-Dashboard-App"
              updated="Last updated 2 months ago"
              image=""
              alt="The Weather Dasbhoard Thumbnail"
              skills="Dynamic element generation, knowledge of jQuery, bootstrap styling"
            />
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default ProjectsPage;
