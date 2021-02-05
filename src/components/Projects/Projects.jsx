import React from "react";

const Projects = ({title, description, link, updated, image, alt}) => {
  return (
    <div>
      <div class="card mb-3">
        <img src={image} class="card-img-top" alt={alt} />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
          {description} 
          </p>
          <button>View The Repo on Github<a href={link} target="_blank"></a></button>
          <p class="card-text">
            <small class="text-muted">{updated}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
