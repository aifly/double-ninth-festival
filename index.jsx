import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UnreadMessage from './components/UnreadMessage.jsx';
import MessageBox from './components/messageBox.jsx';
import Videopage from './components/videopage.jsx';
import Share from './components/share.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Obserable from './libs/Obserable';
import './assets/css/index.css';

import {utilMethods, _$, $$} from './libs/utilMethod';

let obserable = new Obserable();


let data = {
	width:document.documentElement.clientWidth,
	height:document.documentElement.clientHeight	
}



var util = {

	init(){	
		this.setDefault();
		utilMethods.loading([
			'./assets/images/1.jpg',
			'./assets/images/2.jpg',
			'./assets/images/3.jpg',
			'./assets/images/4.png',
			'./assets/images/answer.png',
			'./assets/images/bg.jpg',
			'./assets/images/bg1.jpg',
			'./assets/images/dialog.png',
			'./assets/images/father.jpg',
			'./assets/images/mother.jpg',
			'./assets/images/me.jpg',
			'./assets/images/friend.png',
			'./assets/images/message-bg.png',
			'./assets/images/message-footer.jpg',
			'./assets/images/shi.png',
			'./assets/images/smile.png',
			'./assets/images/videobg.png'
		])
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
	  	 currentComponent:'UnreadMessage',
	  	 loadingImgs:[
	  	 	
	  	 ]
	  };

	}
	render() {

		let data  ={
			obserable:obserable
		}
		
		return (
			<div>
				{/*
					<UnreadMessage></UnreadMessage>
					<MessageBox></MessageBox>
					<Videopage></Videopage>
					<Share></Share>
				*/}
				{this.state.currentComponent === 'UnreadMessage' && <UnreadMessage {...data}></UnreadMessage>}
				{this.state.currentComponent === 'MessageBox' && <MessageBox {...data}></MessageBox>}
				{this.state.currentComponent === 'Videopage' && <Videopage {...data}></Videopage>}
			</div>
		);
	}



	componentDidMount() {
		///this.showShine();
		obserable.on("setCurrentComponet",(componentName)=>{

			this.setState({
				currentComponent:componentName
			});
		});
	}

	init(){
		

	}
}

ReactDOM.render(<App></App>,document.getElementById('fly-main'));


