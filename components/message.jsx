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
				<h1></h1>
				{date && <h2>{date}</h2>}
				<div className='role'><img style={{marginTop: this.state.imgTop}} src={'./assets/images/'+role+'.jpg'}/></div>
				<div className={'text '+ (this.state.hasImg?'notext':'')}>{text}</div>
			</div>
		);
	}
	componentDidMount(){
		let {obserable} = this.props;
		let messageC = this.refs['message-C'];
		setTimeout(()=>{
			messageC.style.opacity=1;
		},1);
		if(messageC.querySelector('.pic')){
			messageC.querySelector('.pic').onload = ()=>{
				this.setState({
					height:messageC.querySelector('.pic').height+30,
					marginTop:'.5rem',
					imgTop:0,
					hasImg:true
				},()=>{
					obserable.trigger({type:'refresh'});
				});
			}
		}
	}
}

Message.defaultProps = {
	
}
