import React, { Component } from 'react';
import './css/unreadmessage.css';

export default class UnreadMessage extends Component {
	render() {
		let style ={
			background:'url(./assets/images/bg.jpg) no-repeat center bottom',
			backgroundSize:'cover'
		};
		return (
			<div className='unreadmessage-C' style={style}>
				<div className='answer'>
					<img src='./assets/images/answer.png'/>
				</div>
			</div>
		);
	}
}
