import React, { Component } from 'react';
import './css/message.css';
export default class Message extends Component {
	constructor(option){
		super(option);
		this.state = {

		}
	}
	render() {
		let {role,text} = this.props;
		return (
			<div className={'message-C ' + role}>
				<div className='role'><img src={'./assets/images/'+role+'.jpg'}/></div>
				<div className='text'>{text}</div>
			</div>
		);
	}
}

Message.defaultProps = {
	role:'father',//
	text:'玩的开心，注意安全',
}
