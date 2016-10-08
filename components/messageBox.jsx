import React, { Component } from 'react';
import './css/messageBox.css';
import Message from './message.jsx';
import IScroll from 'iscroll';

export default class MessageBox extends Component {
	constructor(option){
		super(option);
		this.state={
			showInput:false,
			messages:[],
			showDialog:false
		}	
	}
	render() {
		let style ={
			background:'url(./assets/images/message-bg.png) no-repeat center bottom',
			backgroundSize:'cover'
		};
		return (
			<div className='messageBox-C' style={style} onTouchTap={this.showDialog.bind(this)}>
				<div className='messageBox-content' ref='messageBox-content'>
					<div ref='messageBox-scroll' style={{paddingBottom:'1rem'}}>
						{this.state.messages.map((item,i)=>{
							return <Message {...this.props} key={i} {...item}></Message>
						})}
					</div>
				</div>
				<div className='messageBox-footer' onTouchTap={this.entryVideoPage.bind(this)}>
					<img src='./assets/images/message-footer.jpg'/>
				</div>
				<div className='dialog-C' style={{display:this.state.showDialog?'block':'none'}}>
					<div className='dialog' onTouchTap={this.entryVideoPage.bind(this)}>
						<img src='./assets/images/dialog.png'/>
					</div>
				</div>
			</div>
		);
	}
	showDialog(){
		if(this.canTap){
			this.timer && clearTimeout(this.timer);
			this.setState({
				showDialog:true
			});
		}
	}
	componentDidMount(){
		
		let {messages,obserable} = this.props;
		setTimeout(()=>{

			var iNow = 0,
				pHeight = this.refs['messageBox-content'].offsetHeight,
				scrollEl = this.refs['messageBox-scroll'];

			this.scroll = new IScroll(this.refs['messageBox-content'],{
				click:false
			});


			obserable.on('refresh',()=>{
				this.scroll.refresh();
			});

			this.scroll.on('scrollEnd',(e)=>{
				if(this.scroll.y<=pHeight-scrollEl.offsetHeight){
					this.setState({
						showDialog:true
					},()=>{
						setTimeout(()=>{
							this.entryVideoPage();
						},3000);
					})
				}
			})
		},1);
		messages.forEach((item,i)=>{
			this.state.messages.push(messages[i]);
		});
		this.forceUpdate();
		

		/*	this.t = setInterval(()=>{
				iNow++;
				this.state.messages.push(messages[iNow]);
				this.forceUpdate();
				if(scrollEl.offsetHeight > pHeight){
					this.scroll.scrollToElement(document.querySelector('.messageBox-content .message-C:last-of-type'),null,null,true);
				}
				this.scroll && this.scroll.refresh();
				if(iNow >= messages.length-1){
					clearInterval(this.t);
					this.canTap = true;
					this.timer = setTimeout(()=>{
						this.setState({
							showDialog:true
						},()=>{
							setTimeout(()=>{
								this.entryVideoPage();
							},2000);
						})
					},5000);
				}
			},200);*/
	}
	entryVideoPage(){
		clearInterval(this.t);
		this.setState({
			showDialog:false
		});
		document.title = '今又重阳，让爱相聚';
		let {obserable} = this.props;
		obserable.trigger({
			type:'setCurrentComponet',
			data:'Videopage'
		});
	}
}


MessageBox.defaultProps={
	messages:[
		{
			date:'2016年9月28日 20:46',
			role:'mother',
			text:'十一回来吗？'
		},
		{
			role:'me',
			text:'不回啦，准备去趟九寨沟和成都'
		},
		{
			role:'father',
			text:'几号出去？'
		},{
			role:'me',
			text:'30号晚上飞九寨沟'
		},{
			role:'mother',
			text:'把东西带全了'
		},{
			date:'9月29日 19:15',
			role:'mother',
			text:'明天就出去玩了，东西都收拾好了吗？'
		},{
			role:'me',
			text:'妈，收拾好了'
		},{
			role:'mother',
			text:'多带点钱，穷家富路，在外边别亏着自己'
		},
		{
			role:'father',
			text:'东西丢了没关系，人安全就行！'
		},{
			date:'9月30日 18:20',
			role:'mother',
			text:'你们起飞了？'
		},{
			role:'me',
			text:'登机了'
		},{
			role:'mother',
			text:'好好玩，你们照顾好孩子和自己！'
		},{
			date:'10月1日 10:33',
			role:'me',
			text:<img className='pic' src='./assets/images/1.jpg'/>
		},{
			role:'me',
			text:<img className='pic' src='./assets/images/2.jpg'/>
		},{
			role:'mother',
			text:'景色真美丽，退了休一定去。'
		},{
			date:'10月2日 12:51',
			role:'mother',
			text:'今天看了什么风景？'
		},{
			date:"10月2日 12:55",
			role:'me',
			text:'带着夏天骑马去了'
		},
		{
			role:'father',
			text:'高原不缺氧？'
		},
		{
			role:'me',
			text:"还行"
		},
		{
			date:'10月3日 17:17',
			role:'me',
			text:'我们到成都啦'
		},{
			role:'father',
			text:'到成都好好休息，让夏天吃好点！'
		},{
			role:'mother',
			text:'在外吃好点！'
		},{
			date:'10月3日 19:55',
			role:'me',
			text:'到锦里来玩儿了'
		},{
			role:'father',
			text:'吃好、玩好、休息好！注意安全！！！'
		},{
			role:'me',
			text:'爸妈，给你们带点特产吧'
		},{
			role:'mother',
			text:'我和你爸什么都不用，你们开心就好'
		},{
			date:'10月4日 10:01',
			role:'father',
			text:'今天去哪儿了？'
		},{
			role:'me',
			text:<img src='./assets/images/3.jpg' className='pic'/>
		},{
			role:'me',
			text:'来看大熊猫了'
		},{
			role:'mother',
			text:'夏天高兴吗？'
		},{
			fullWidth:true,
			role:'me',
			text:'可高兴了！说熊猫宝宝翻跟斗笑死我了！'
		},{
			role:'mother',
			text:<img src="./assets/images/smile.png" className='pic smile'/>
		},{
			role:'father',
			text:<img src="./assets/images/smile.png" className='pic smile'/>
		},{
			date:'10月5日 14:30',
			role:"me",
			text:<img src='./assets/images/4.png' className='pic'/>
		},{
			role:"me",
			text:'到峨眉山啦'
		},{
			role:"father",
			text:'挺美！一定要带好夏天、安全第一！！！'
		},{
			date:'10月6日 11:20',
			role:'mother',
			text:'你们明天回家？别累着'
		},{
			date:'10月6日 12:25',
			role:'me',
			text:'明天回'
		},{
			role:'mother',
			text:'你爸说去看你们'
		},{
			date:'10月7日 9:44',
			role:'mother',
			text:'你们今天几点到北京？'
		},{
			date:'10月7日 9:52',
			role:'me',
			text:'下午4点15到'
		},{
			date:'10月7日 17:05',
			role:'mother',
			text:'到北京了吗'
		},{
			role:'me',
			text:'刚到，正在取行李'
		},{
			role:'mother',
			text:"回家好好休息！"
		}
	]
}