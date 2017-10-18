import React, { Component } from 'react';
const projectArray = [{title: 'Random Quote Generator', link: 'https://codepen.io/Arnoo/pen/dpZvpA', caption: 'quote generator - part of the Free Code Camp curriculum'},
{title: 'Twitch TV Viewer', link: 'https://codepen.io/Arnoo/pen/zZvKyL', captioon: 'list view of Twitch casters pulling data from the Twitch API - part of the Free Code Camp curriculum'} ];
class Menu extends Component {

    constructor(props) {
        super(props);
        this.state={projectArray: projectArray};
    }

    render() {
        return (
            <div>
            <h2>{this.projectArray.title}</h2>
            <a href={this.projectArray.link}>image</a>
            </div>
        )
    }
}

