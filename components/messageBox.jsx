import React, { Component } from 'react';
import './css/messageBox.css';
import Message from './message.jsx';
import IScroll from 'iscroll';

export default class MessageBox extends Component {
	constructor(option){
		super(option);
		this.state={
			messages:[
				{
					role:'father',
					text:'玩得开心，注意安全'
				},
				{
					role:'me',
					text:'好啊，期待很久了。'
				},
				{
					role:'mother',
					text:'好啊，期待很久了。.。'
				},{
					role:'father',
					text:'玩得开心，注意安全哦'
				},{
					role:'father',
					text:'玩得开心，注意安全'
				},{
					role:'father',
					text:'玩得开心，注意安全'
				},{
					role:'father',
					text:'玩得开心，注意安全'
				},{
					role:'father',
					text:'玩得开心，注意安全'
				},
			]
		}	
	}
	render() {
		let style ={
			background:'url(./assets/images/message-bg.png) no-repeat center bottom',
			backgroundSize:'cover'
		};
		return (
			<div className='messageBox-C' style={style}>
				<div className='messageBox-header'>
					<img src='./assets/images/message-header.png'/>
				</div>
				<div className='messageBox-content' ref='messageBox-content'>
					<div>
						{this.state.messages.map((item,i)=>{
							return <Message key={i} {...item}></Message>
						})}
					</div>
				</div>
				<div className='messageBox-footer'>
					<img src='./assets/images/message-footer.jpg'/>
				</div>
			</div>
		);
	}
	componentDidMount(){
		setTimeout(()=>{
			this.scroll = new IScroll(this.refs['messageBox-content']);
		},1);
	}
}
