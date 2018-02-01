import React, { Component } from 'react';


class CodepenEmbed extends Component {
constructor(props){
    super(props);
    this.state={codePen: ''
};
    
}


    
componentWillMount(){

    let codePen = <iframe height='400' width='80%' scrolling='no' title={this.props.title} allow={this.props.geoLocation} src={'//codepen.io/Arnoo/embed/'+this.props.hash+'/?height=240&theme-id=0&default-tab=js,result&embed-version=2'} frameBorder='no' allowTransparency='true' allowFullScreen='true' >See the Pen <a href={'https://codepen.io/Arnoo/pen/'+ this.props.hash}>{this.props.title}</a> by Aaron (<a href='https://codepen.io/Arnoo'>@Arnoo</a>) on <a href='https://codepen.io'>CodePen</a>.
   </iframe>

   


this.setState({codePen: codePen});
    }

   render(){
return(
    
    <div className={this.props.hidden ? 'Hidden' : 'Show'}>
     
    {this.state.codePen}
     
   </div>
    )
}

}
export default CodepenEmbed;