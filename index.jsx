import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UnreadMessage from './components/UnreadMessage.jsx';
import MessageBox from './components/messageBox.jsx';

import './assets/css/index.css';


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
	  	 loadingImgs:[
	  	 	
	  	 ]
	  };

	}
	render() {
		
		return (
			<div>
				{/*<UnreadMessage></UnreadMessage>*/}
				<MessageBox></MessageBox>
			</div>
		);
	}



	getStyle(ele,val){

	  var style = null;
      
      if(window.getComputedStyle) {
          style = window.getComputedStyle(ele, null);
      }else{
          style = ele.currentStyle;
      }
   	  return style[val];

	}
	 
	componentDidMount() {
		///this.showShine();
		let main = this.refs['main'];
		
	}

	init(){
		

	}
}

ReactDOM.render(<App></App>,document.getElementById('fly-main'));


