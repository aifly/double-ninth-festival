import React, { Component } from 'react';
import './css/unreadmessage.css';

export default class UnreadMessage extends Component {
	constructor(option){
		super(option);
		this.state = {
			
		}
	}
	render() {
		let style ={
			background:'url(./assets/images/bg.jpg) no-repeat center bottom',
			backgroundSize:'cover'
		};
		return (
			<div className='unreadmessage-C' style={style}>
				<div className='answer' onTouchTap={this.setCurrentComponet.bind(this)}>
					<img src='./assets/images/answer.png'/>
				</div>
				
				<audio ref='audio' src='./assets/music/message.mp3' autoPlay  loop></audio>
			</div>
		);
	}
	setCurrentComponet(){
		let {obserable} = this.props;
		this.refs['audio'].pause();

		document.title = '欢乐家庭';

		obserable.trigger({
			type:'setCurrentComponet',
			data:'MessageBox'
		})
	}
}
