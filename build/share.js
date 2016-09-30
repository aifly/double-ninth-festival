/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _componentsButtonJsx = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/Button.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _componentsButtonJsx2 = _interopRequireDefault(_componentsButtonJsx);

	var _componentsStarJsx = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/star.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _componentsStarJsx2 = _interopRequireDefault(_componentsStarJsx);

	var _libsDriftdown = __webpack_require__(1);

	var _libsDriftdown2 = _interopRequireDefault(_libsDriftdown);

	var _componentsDrawSceneJsx = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/draw-scene.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _componentsDrawSceneJsx2 = _interopRequireDefault(_componentsDrawSceneJsx);

	var _componentsShareCardJsx = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/share-card.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _componentsShareCardJsx2 = _interopRequireDefault(_componentsShareCardJsx);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./assets/css/share.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var data = {
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight
	};

	var util = {

		init: function init() {
			this.setDefault();
		},
		setDefault: function setDefault() {
			document.querySelector('html').style.fontSize = data.width / 10 + 'px';
		}

	};

	util.init();

	var App = (function (_Component) {
		_inherits(App, _Component);

		function App(props) {
			_classCallCheck(this, App);

			_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
			this.state = {
				shadow: false,
				showTeam: false,
				indexShow: true,
				shareShow: false,
				images: ['window']
			};
			this.showBox = this.showBox.bind(this);
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				var starProps = {
					width: data.width,
					height: data.height
				};

				var shadowStyle = {
					background: 'url(./assets/images/shadow.png) no-repeat right center',
					backgroundSize: 'cover',
					display: this.state.shadow ? 'block' : 'none'
				};

				return _react2['default'].createElement(
					'div',
					{ ref: 'main', className: 'fly-main-C ' },
					_react2['default'].createElement('div', { className: 'fly-shadow', style: shadowStyle }),
					_react2['default'].createElement('audio', { autoPlay: true, loop: true, src: './assets/images/bg.mp3' }),
					this.state.indexShow && this.state.images.map(function (item, i) {
						return _react2['default'].createElement(
							'div',
							{ key: i, className: 'fly-' + item },
							_react2['default'].createElement('img', { src: './assets/images/' + item + '.png' })
						);
					}),
					this.state.indexShow && _react2['default'].createElement(
						'div',
						{ className: 'fly-box' },
						_react2['default'].createElement('img', { src: './assets/images/box.png', onTouchTap: this.showBox })
					),
					this.state.indexShow && _react2['default'].createElement(
						'div',
						{ className: 'fly-text-img' },
						_react2['default'].createElement('img', { src: './assets/images/text.png' })
					),
					this.state.indexShow && _react2['default'].createElement(
						'div',
						{ className: 'fly-share-btn' },
						_react2['default'].createElement('img', { src: './assets/images/share-btn.png' })
					),
					_react2['default'].createElement(
						'div',
						{ className: 'fly-team', onTouchTap: this.showTeam.bind(this) },
						'制作团队'
					),
					_react2['default'].createElement(_componentsShareCardJsx2['default'], null),
					this.state.showTeam && _react2['default'].createElement('div', { className: 'fly-team-img', onTouchTap: function () {
							_this2.setState({ showTeam: false });
						}, style: { background: 'url(./assets/images/copyright.jpg) no-repeat center', backgroundSize: 'cover' } }),
					_react2['default'].createElement(
						'div',
						{ className: 'fly-share', onTouchTap: function () {
								_this2.setState({ shareShow: true });
							} },
						_react2['default'].createElement('img', { src: './assets/images/share.png' })
					),
					this.state.shareShow && _react2['default'].createElement('div', { onTouchTap: function () {
							_this2.setState({ shareShow: false });
						}, className: 'fly-share-info', style: { background: 'url(./assets/images/arron1.png) no-repeat center top', backgroundSize: 'cover' } })
				);
			}
		}, {
			key: 'showTeam',
			value: function showTeam() {
				this.setState({
					showTeam: true
				});
			}
		}, {
			key: 'showBox',
			value: function showBox(e) {
				//打开盒子

				var self = this;
				e.target.src = './assets/images/boxopen.png';

				this.setState({ shadow: true }); //
				var cardC = document.querySelector('.fly-card-C');
				cardC.classList.add('active');

				cardC.addEventListener('webkitTransitionEnd', function () {
					self.setState({
						indexShow: false
					});
					this.classList.add('big');
				});
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this3 = this;

				//this.showShine();
				var main = this.refs['main'];
				this.main = main;
				setTimeout(function () {
					main.classList.add('active');
					_this3.float(_this3);
				}, 1000);
			}
		}, {
			key: 'float',
			value: function float(_this) {

				return;

				/*let main = document.querySelector('.fly-main-C');
	   		let petals =main.querySelectorAll('.fly-petal'),
	   	latern =  main.querySelectorAll('.fly-latern'),
	   	plun = main.querySelector('.fly-plum'),
	   	petalArr = [];
	   	this.petalArr= petalArr;
	   	//plun.style.opacity =1;
	   for(var i =0 ;i<petals.length;i++){
	   	//petals[i].style.opacity =1;
	   	let petal = new DriftDown({
	   		petal:petals[i],
	   			});
	   	petalArr.push(petal);
	   }
	   
	   for(var i =0 ;i<latern.length;i++){
	   	latern[i].style.opacity =1;
	   	let petal = new DriftDown({
	   		petal:latern[i],
	   		up:true,
	   		maxHeight:-750
	   	});
	   	petalArr.push(petal);
	   }
	   
	   var m = Math;
	   		this.timer = setInterval(()=>{
	   			petalArr.forEach((petal)=>{
	   		petal.angle+=(petal.speed);
	   		petal.angle>=360 && (petal.angle = 0);
	   		m.abs(petal.startY) > m.abs(petal.maxHeight) &&(petal.startY = 0,petal.angle =0,petal.speedY = Math.random()+.5,petal.startX = 0,petal.rotation = Math.random()*180);
	   		petal.startX += m.sin(petal.angle/180*m.PI)/2;
	   				if(petal.up){
	   			petal.startY-=petal.speedY/2;
	   			petal.startX += m.sin(petal.angle/180*m.PI)/2*m.random();
	   		}
	   		else{
	   			petal.startY+=petal.speedY;
	   		}
	   		
	   		petal.startMove(petal.startX,petal.startY);
	   	});
	   },1000/60);*/
			}
		}, {
			key: 'showShine',
			value: function showShine() {
				var shines = this.refs['main'].querySelectorAll('.fly-shine'),
				    len = shines.length;
				for (var i = 0; i < len; i++) {
					shines[i].classList.add('active');
				}
			}
		}, {
			key: 'rabbitOut',
			value: function rabbitOut() {
				this.main.querySelector('.fly-rabbit-r').classList.add('hide');
				this.main.querySelector('.fly-box-btn').classList.add('hide');
			}
		}, {
			key: 'plumOut',
			value: function plumOut() {
				this.main.querySelector('.fly-plum').style.opacity = 0;
				var petal = this.main.querySelectorAll('.fly-petal');
				var latern = this.main.querySelectorAll('.fly-latern');
				petal[0].style.opacity = 0;
				petal[1].style.opacity = 0;
				petal[2].style.opacity = 0;
				latern[0].style.opacity = 0;
				latern[1].style.opacity = 0;
				latern[2].style.opacity = 0;
			}
		}]);

		return App;
	})(_react.Component);

	_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('fly-main'));
	/*<div className='fly-meteor-C'>
	<img src='./assets/images/meteor.png' className='meteor'/>
	</div>
	<div className='fly-meteor-C fly-meteor-C1'>
	<img src='./assets/images/meteor.png' className='meteor'/>
	</div>
		<div className='fly-meteor-C fly-meteor-C2'>
	<img src='./assets/images/meteor.png' className='meteor'/>
	</div>*/

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var DriftDown = (function () {
		function DriftDown() {
			var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

			_classCallCheck(this, DriftDown);

			this.petal = props.petal;
			this.timer = null;
			this.angle = 0;
			this.startX = this.startY = 0;
			this.delay = Math.random() * 500 + 500;
			this.speed = Math.random() + .1;
			this.speedY = Math.random() + .5;
			this.up = props.up;
			this.maxHeight = props.maxHeight || 550;
			this.rotation = Math.random() * 180;
		}

		_createClass(DriftDown, [{
			key: 'startMove',
			value: function startMove() {
				var startX = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
				var startY = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

				this.petal.display = 'block';
				if (this.maxHeight < 0) {
					this.petal.style.WebkitTransform = 'translate3d(' + this.startX + 'px,' + this.startY + 'px,0) scale(' + (1 - startY / this.maxHeight) + ')';
					//this.petal.style.WebkitFilter = 'blur('+(startY/this.maxHeight*6)+'px)';
				} else {
						this.petal.style.WebkitTransform = 'translate3d(' + this.startX + 'px,' + this.startY + 'px,0) rotate(' + this.rotation + 'deg)';
					}
			}
		}, {
			key: 'stop',
			value: function stop() {
				this.petal.display = 'none';
			}
		}]);

		return DriftDown;
	})();

	exports['default'] = DriftDown;
	module.exports = exports['default'];

/***/ }
/******/ ]);