import React, { Component } from 'react';
import './css/message.css';
export default class Message extends Component {
	constructor(option){
		super(option);
		this.state = {
			height:'2rem',
			marginTop:0,
			imgTop:0,
			hasImg:false
		}	
	}
	render() {
		let {role,text,fullWidth,date} = this.props;
		return (
			<div className={'message-C ' + role} ref='message-C' style={{height:this.state.height,marginTop
				:this.state.marginTop,width:fullWidth?'99%':'96%'}}>
				<h1>{date}</h1>
				<div className='role'><img style={{marginTop: this.state.imgTop}} src={'./assets/images/'+role+'.jpg'}/></div>
				<div className={'text '+ (this.state.hasImg?'notext':'')}>{text}</div>
			</div>
		);
	}
	componentDidMount(){
		let messageC = this.refs['message-C'];
		if(messageC.querySelector('.pic')){
			setTimeout(()=>{
				this.setState({
					height:messageC.querySelector('.pic').height,
					marginTop:'.5rem',
					imgTop:'-.5rem',
					hasImg:true
				});
			},10)
			
		}
	}
}

Message.defaultProps = {
	
}
