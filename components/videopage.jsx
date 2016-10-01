import React, { Component } from 'react';
import './css/videopage.css';

export default class Videopage extends Component {
	constructor(option){
		super(option);
		this.state = {
			showInput:false
		}
	}
	render() {
		let style ={
			background:'url(./assets/images/bg1.jpg) no-repeat center top',
			backgroundSize:'cover'
		};
		let style1 ={
			background:'url(./assets/images/videobg.png) no-repeat center 59%',
			backgroundSize:'cover'
		};
		return (
			<div className='videopage-C' style={style}  onTouchTap={this.beginInput.bind(this)}>
				<h1></h1>
				<div className='video-C' style={style1}>
					<video controls src='./assets/video/1.mp4' autoPlay></video>
				</div>
				<div className='shi'>
					<img src='./assets/images/shi.png'/>
				</div>
				<div className='wish-C'>
					<section className='wish-input'>
						<span>给父母稍一段话，让爱重聚！</span>
						<span className='wish-ico'>
							<i></i>
							<i></i>
							<i></i>
						</span>
					</section>
				</div>
				<div className='wish-input-C' ref='wish-input-C' style={{display:this.state.showInput?'block':'none'}}>
					<div>
						<textarea className='wish-input' ref='wish-input'></textarea>
						<span onTouchTap={this.entryShare.bind(this)}>确定</span>
						<span onTouchTap={()=>{this.setState({showInput:false})}}>取消</span>
					</div>
				</div>
			</div>
		);
	}

	beginInput(e){

		if(e.target.nodeName === 'VIDEO' || e.target.classList.contains('video-C') || e.target.innerHTML === "取消"){
			return;
		}

		this.setState({
			showInput:true
		})
	}
	entryShare(){
		let {obserable} = this.props;
		let value =(this.refs['wish-input'].value);
		var value1 = encodeURI(value);
		var data = {
			value:value1
		}
		let json = encodeURI(JSON.stringify(data));
		var href='./share.html?data='+json;

		window.location.href = href;
	}
}
