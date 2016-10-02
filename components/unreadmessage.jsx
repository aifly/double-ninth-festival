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
				<div ref='answer' className='answer' onTouchStart={this.touchStart.bind(this)} onTouchMove={this.touchMove.bind(this)} onTouchEnd={this.touchEnd.bind(this)} onTouchTap={this.setCurrentComponet.bind(this)}>
					<img src='./assets/images/answer.png'/>
				</div>
				
				<audio ref='audio' src='./assets/music/message.mp3' autoPlay  loop></audio>
			</div>
		);
	}
	touchStart(e){
		this.canMove = true;
		this.disY = e.nativeEvent.changedTouches[0].pageY;
		this.answer =  this.refs['answer'];
		this.answer.style.WebkitAnimation= 'none';
		this.answer.style.WebkitTransition = 'none';
	}
	touchMove(e){
		if(this.canMove){
			var disY = e.nativeEvent.changedTouches[0].pageY - this.disY;
			if(disY>0){
				return;
			}
			this.answer.style.WebkitTransform = 'translate3d(0,'+disY+'px,0) scale('+(1+disY/230)+')';
		}

	}
	touchEnd(e){
		var disY = e.nativeEvent.changedTouches[0].pageY - this.disY;
		if(disY<-100){
			this.setCurrentComponet();
		}
		else{
			this.answer.style.WebkitTransition = '.2s';
			this.answer.style.WebkitTransform = 'translate3d(0,0,0)';			
		}
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
