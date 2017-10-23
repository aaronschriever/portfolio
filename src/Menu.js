import React, { Component } from 'react';
import CodepenEmbed from './CodepenEmbed';
//import Codepen from 'react-codepen';
const codepenUser = 'Arnoo';
const projectArray = [
    {title: 'Random Quote Generator', link: 'https://codepen.io/Arnoo/pen/dpZvpA', caption: 'Quote generator - part of the Free Code Camp curriculum', hash:'dpZvpA', tech: 'JQuery, bootstrap' },
    {title: 'Twitch TV Viewer', link: 'https://codepen.io/Arnoo/pen/zZvKyL', caption: 'List view of Twitch casters pulling data from the Twitch API - part of the Free Code Camp curriculum', hash: 'zZvKyL', tech: 'JQuery, JS Promises, SCSS, Pug'},
    {title: 'Wikipedia viewer', link: 'https://codepen.io/Arnoo/pen/NAQboq', caption: 'Wikipedia search app, pulling data from the Wikipedia API - part of the Free Code Camp curriculum', hash: 'NAQboq', tech: 'JQuery, SCSS, Pug, GSAP tweenmax library' },
    {title: 'Weather App', link: 'https://codepen.io/Arnoo/pen/ORedGg', caption: 'Weather app, pulling data from Openweather API - part of the Free Code Camp curriculum', hash: 'ORedGg', tech: 'JQuery, bootstrap' }

];

    class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }
  
    componentDidMount (){
        let projects = projectArray.map((project) =>{
return (
    <div key={project.id}>
        <h2>{project.title}</h2>
        <p>{project.caption}</p>
        <p>Technology used: {project.tech}</p> 
        <p><CodepenEmbed hash={project.hash} link={project.link} title={project.title}/></p>
        
    </div>
)
    });
    this.setState({projects: projects});
    }
   
    render() {
        return (
            <div>
            {this.state.projects}
            
            </div>
            
        )
    }
}

export default Menu;