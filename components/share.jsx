import React, { Component } from 'react';
import './css/share.css';
import {utilMethods, _$, $$} from '../libs/utilMethod';
export default class Share extends Component {
	constructor(option){
		super(option);
		this.state={
			isShare:false,
			text:''
		}
	}
	render() {
		let style ={
			background:'url(./assets/images/sharebg.jpg) no-repeat center top',
			backgroundSize:'cover'
		};
		let style1 ={
			background:'url(./assets/images/videobg.png) no-repeat center top',
			backgroundSize:'cover'
		};
		let style2 ={
			background:'url(./assets/images/share-btns.png) no-repeat center center',
			backgroundSize:'contain'
		};
		let style3 ={
			background:'url(./assets/images/arron1.png) no-repeat right top',
			backgroundSize:'cover'
		};
		return (
			<div className='share-C' style={style}>
				<h1></h1>
				<div className='wish-text'  style={style1}>
					<h2></h2>
					<div>{this.state.text}</div>
				</div>
				<section className='share-btns' style={style2}>
					<div onTouchTap={this.showMask.bind(this)}></div>
					<div><a href='./'></a></div>
				</section>
				{this.state.isShare && <div onTouchTap={this.hideMask.bind(this)} className='mask' style={style3}></div>}
			</div>
		);
	}

	showMask(){
		this.setState({
			isShare:true	
		});
		this.timer = setTimeout(()=>{
			this.setState({
				isShare:false	
			});
		},5000);
	}

	hideMask(){
		this.setState({
			isShare:false	
		});
		this.timer && clearTimeout(this.timer);
	}

	componentDidMount(){
		let {obserable} = this.props;
		var wish = utilMethods.getQueryString('data');
		wish =JSON.parse(decodeURI(wish));
		this.setState({
			text:wish.value
		})
	}
}

 