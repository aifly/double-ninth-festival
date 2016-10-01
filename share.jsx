import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Share from './components/share.jsx';
import './assets/css/share.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
let data = {
	width:document.documentElement.clientWidth,
	height:document.documentElement.clientHeight	
}

var util = {

	init(){	
		this.setDefault();
	},
	setDefault(){
		document.querySelector('html').style.fontSize = data.width / 10 + 'px';
	}

}

util.init();

class App extends Component {
	constructor(props) {
		super(props);
	  this.state = {
	  	text:'麻痹'
	  };
	}
	render() {
		
		return (
			<div ref='main' className='fly-main-C ' >
				<Share {...this.state}></Share>
			</div>
		);
	}
	 
	componentDidMount() {
	
		
	}
}

ReactDOM.render(<App></App>,document.getElementById('fly-main'));

