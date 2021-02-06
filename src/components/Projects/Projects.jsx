import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = ({title, description, link, updated, image, alt, contribution,skills, site, siteName}) => {
    const styles = {
        a: {
            marginLeft: 5
        }
    }
    return (
    <div>
      <div class="card mb-3">
        <img src={image} class="card-img-top" alt={alt} />
        <div class="card-body">
          <h4 class="card-title">{title}</h4>
          <p class="card-text">
          {description} 
          </p>
          <h4 class="card-title">Contributions/Skills:</h4>
          <p class="card-text">
          {contribution} 
          </p>
          <p class="card-text">
          {skills} 
          </p>
          <a className="btn-lg btn btn-danger" href={link} target="_blank">View Github Repo</a>
          <a className="btn-lg btn btn-danger" href={site} target="_blank" style={styles.a}>{siteName}</a>
          <p class="card-text">
            <small class="text-muted">{updated}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
