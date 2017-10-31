import React, { Component } from 'react';
import CodepenEmbed from './CodepenEmbed';
import GitHubProject from './GitHubProject';
import './Menu.css';
import arrow from './ic_play_arrow_white_36px.svg';
import dartboardImage from './dartboard.png';
import TransitionGroup from 'react-transition-group';

const projectArray = [
    {title: 'Random Quote Generator', link: 'https://codepen.io/Arnoo/pen/dpZvpA', caption: 'Quote generator - part of the Free Code Camp curriculum', hash:'dpZvpA', tech: 'JQuery, bootstrap' },
    {title: 'Twitch TV Viewer', link: 'https://codepen.io/Arnoo/pen/zZvKyL', caption: 'List view of Twitch casters pulling data from the Twitch API - part of the Free Code Camp curriculum', hash: 'zZvKyL', tech: 'JQuery, JS Promises, SCSS, Pug'},
    {title: 'Wikipedia viewer', link: 'https://codepen.io/Arnoo/pen/NAQboq', caption: 'Wikipedia search app, pulling data from the Wikipedia API - part of the Free Code Camp curriculum', hash: 'NAQboq', tech: 'JQuery, SCSS, Pug, GSAP tweenmax library' },
    {title: 'Weather App', link: 'https://codepen.io/Arnoo/pen/ORedGg', caption: 'Weather app, pulling data from Openweather API - part of the Free Code Camp curriculum', hash: 'ORedGg', tech: 'JQuery, bootstrap' },
    {title: 'Calculator', link: 'https://codepen.io/Arnoo/pen/ZJGZBr', caption: 'JS Calculator using React - part of the Free Code Camp curriculum', hash: 'ZJGZBr', tech: 'JS, React, SCSS'},
]  
const dartboard = {title: 'Dartboard App', link: 'https://aaronschriever.github.io/dartboard/', caption: 'Dartboard app created for scoring while playing a game of darts', image:{dartboardImage}, altText: 'Dartboard app screen shot' , tech:'JS, JCanvas'};

    class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log(e);
        console.log(this.props);
    }
    componentDidMount (){
        let projects = projectArray.map((project) =>{
return (
    <div className="Project-container">
        <div className="Project-description"key={project.id}>
            <h2><a href={project.link}>{project.title}</a></h2>
            <p>{project.caption}</p>
            <p>Technology used: {project.tech}</p>        
            <div className="Code-embed-container">
                
                <CodepenEmbed hash={project.hash} link={project.link} title={project.title} image={project.image} altText={project.altText}/>
            </div>
        </div>
    </div>
)
    });
    this.setState({projects: projects});
    }
   
    render() {
        return (
            <div>
            {this.state.projects}
            <GitHubProject img={require('./dartboard.png')} dartboard={dartboard}/>
            </div>
            
        )
    }
}

export default Menu;