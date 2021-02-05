import React from "react";

const Projects = ({title, description, link, updated, image, alt, contribution}) => {
  return (
    <div>
      <div class="card mb-3">
        <img src={image} class="card-img-top" alt={alt} />
        <div class="card-body">
          <h4 class="card-title">{title}</h4>
          <p class="card-text">
          {description} 
          </p>
          <h4 class="card-title">Contributions:</h4>
          <p class="card-text">
          {contribution} 
          </p>
          <button className="btn-lg btn btn-danger">View Github Repo<a href={link} target="_blank"></a></button>
          <p class="card-text">
            <small class="text-muted">{updated}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
