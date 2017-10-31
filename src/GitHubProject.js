import React from 'react';
import './GitHubProject.css';
function GitHubProject(props) {
  
      return(
      <div className="Project-container">
      <div className="Project-description">
      <h2><a href={props.dartboard.title}>{props.dartboard.title}</a></h2>
      <p>{props.dartboard.caption}</p>
      <p>Technology used: {props.dartboard.tech}</p>        
      <img className='Project-image' src={props.img} alt={props.dartboard.alt}/>
      </div>
      </div>
      );
    
}
export default GitHubProject;