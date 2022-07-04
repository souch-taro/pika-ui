(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"119":function(e,t,r){"use strict";r.r(t);var n=r(129),o=r.n(n),a=r(30),c=r.n(a),i=r(137),u=r.n(i),s=r(133),f=r.n(s),l=r(134),p=r.n(l),d=r(135),b=r.n(d),y=r(136),m=r.n(y),v=r(132),w=r.n(v),h=r(143),O=r.n(h),g=r(14),_=r.n(g);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=w()(e);if(t){var o=w()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m()(this,r)}}_.a.createElement;var j=function reactifyWebComponent(e){var t=function(t){b()(Index,t);var r=_createSuper(Index);function Index(e){var t;return f()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(g.createRef)(),t}return p()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),Object.entries(this.props).forEach((function(n){var o=u()(n,2),a=o[0],i=o[1];if(r.ref.current&&"children"!==a)if("classname"!==a.toLowerCase())if("style"!==a){if("taro-scroll-view-core"===e){if("scrollTop"===a)return void(r.ref.current.mpScrollTop=i);if("scrollLeft"===a)return void(r.ref.current.mpScrollLeft=i);if("scrollIntoView"===a)return void(r.ref.current.mpScrollIntoView=i)}if("function"==typeof i&&a.match(/^on[A-Z]/)){var s=a.substr(2).toLowerCase(),f=i;return"taro-scroll-view-core"===e&&"scroll"===s&&(f=function fn(e){e instanceof CustomEvent&&i.apply(null,Array.from(arguments))}),r.eventHandlers.push([s,f]),r.ref.current.addEventListener(s,f)}if("string"!=typeof i&&"number"!=typeof i)return"boolean"==typeof i?i?(r.ref.current[a]=!0,r.ref.current.setAttribute(a,i)):(r.ref.current[a]=!1,r.ref.current.removeAttribute(a)):void(r.ref.current[a]=i);r.ref.current[a]=i}else{if("string"==typeof i)return r.ref.current.setAttribute(a,i);if(i&&"object"===c()(i)){for(var l in i)r.ref.current.style[l]=i[l];return}}else r.ref.current.className=t?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),c=[];return n.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&c.push(e)})),(c=[].concat(O()(c),O()(a))).join(" ")}(r.ref.current,t,r.props):i}))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===c()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=u()(t,2),n=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(n,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),Object(g.createElement)(e,o,r)}}]),Index}(_.a.Component);return _.a.forwardRef((function(e,r){return _.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=j("taro-input-core"),P=(_.a.createElement,_.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),_.a.createElement(x,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))})));r.d(t,"View",(function(){return E})),r.d(t,"Icon",(function(){return k})),r.d(t,"Progress",(function(){return S})),r.d(t,"RichText",(function(){return I})),r.d(t,"Text",(function(){return A})),r.d(t,"Button",(function(){return N})),r.d(t,"Checkbox",(function(){return C})),r.d(t,"CheckboxGroup",(function(){return V})),r.d(t,"Editor",(function(){return T})),r.d(t,"Form",(function(){return R})),r.d(t,"Input",(function(){return D})),r.d(t,"Label",(function(){return L})),r.d(t,"Picker",(function(){return H})),r.d(t,"PickerView",(function(){return B})),r.d(t,"PickerViewColumn",(function(){return q})),r.d(t,"Radio",(function(){return M})),r.d(t,"RadioGroup",(function(){return K})),r.d(t,"Slider",(function(){return U})),r.d(t,"Switch",(function(){return W})),r.d(t,"CoverImage",(function(){return F})),r.d(t,"Textarea",(function(){return J})),r.d(t,"CoverView",(function(){return G})),r.d(t,"MoveableArea",(function(){return z})),r.d(t,"MoveableView",(function(){return Z})),r.d(t,"ScrollView",(function(){return $})),r.d(t,"Swiper",(function(){return Q})),r.d(t,"SwiperItem",(function(){return X})),r.d(t,"FunctionalPageNavigator",(function(){return Y})),r.d(t,"Navigator",(function(){return ee})),r.d(t,"Audio",(function(){return te})),r.d(t,"Camera",(function(){return re})),r.d(t,"Image",(function(){return ne})),r.d(t,"LivePlayer",(function(){return oe})),r.d(t,"Video",(function(){return ae})),r.d(t,"Map",(function(){return ce})),r.d(t,"Canvas",(function(){return ie})),r.d(t,"Ad",(function(){return ue})),r.d(t,"OfficialAccount",(function(){return se})),r.d(t,"OpenData",(function(){return fe})),r.d(t,"WebView",(function(){return le})),r.d(t,"NavigationBar",(function(){return pe})),r.d(t,"Block",(function(){return de}));var E=j("taro-view-core"),k=j("taro-icon-core"),S=j("taro-progress-core"),I=j("taro-rich-text-core"),A=j("taro-text-core"),N=j("taro-button-core"),C=j("taro-checkbox-core"),V=j("taro-checkbox-group-core"),T=j("taro-editor-core"),R=j("taro-form-core"),D=P,L=j("taro-label-core"),H=j("taro-picker-core"),B=j("taro-picker-view-core"),q=j("taro-picker-view-column-core"),M=j("taro-radio-core"),K=j("taro-radio-group-core"),U=j("taro-slider-core"),W=j("taro-switch-core"),F=j("taro-cover-image-core"),J=j("taro-textarea-core"),G=j("taro-cover-view-core"),z=j("taro-moveable-area-core"),Z=j("taro-moveable-view-core"),$=j("taro-scroll-view-core"),Q=j("taro-swiper-core"),X=j("taro-swiper-item-core"),Y=j("taro-functional-page-navigator-core"),ee=j("taro-navigator-core"),te=j("taro-audio-core"),re=j("taro-camera-core"),ne=j("taro-image-core"),oe=j("taro-live-player-core"),ae=j("taro-video-core"),ce=j("taro-map-core"),ie=j("taro-canvas-core"),ue=j("taro-ad-core"),se=j("taro-official-account-core"),fe=j("taro-open-data-core"),le=j("taro-web-view-core"),pe=j("taro-navigation-bar-core"),de=j("taro-block-core")},"129":function(e,t){e.exports=function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}},"130":function(e,t,r){var n=r(131);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},"131":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},"132":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(t)}e.exports=_getPrototypeOf},"133":function(e,t){e.exports=function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"134":function(e,t){function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}},"135":function(e,t,r){var n=r(141);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),t&&n(e,t)}},"136":function(e,t,r){var n=r(30),o=r(142);e.exports=function _possibleConstructorReturn(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},"137":function(e,t,r){var n=r(138),o=r(139),a=r(130),c=r(140);e.exports=function _slicedToArray(e,t){return n(e)||o(e,t)||a(e,t)||c()}},"138":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e}},"139":function(e,t){e.exports=function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}},"140":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"141":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},_setPrototypeOf(t,r)}e.exports=_setPrototypeOf},"142":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"143":function(e,t,r){var n=r(144),o=r(145),a=r(130),c=r(146);e.exports=function _toConsumableArray(e){return n(e)||o(e)||a(e)||c()}},"144":function(e,t,r){var n=r(131);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return n(e)}},"145":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},"146":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"147":function(e,t,r){},"148":function(e){e.exports=JSON.parse('{"name":"@souche-taro/pika-demo-react","private":true,"version":"1.5.0","description":"pika-react 组件库演示案例","templateInfo":{"name":"default-youshu","typescript":true,"css":"sass"},"scripts":{"dev":"yarn run dev:weapp","build:weapp":"./node_modules/.bin/taro build --type weapp","build:swan":"./node_modules/.bin/taro build --type swan","build:alipay":"./node_modules/.bin/taro build --type alipay","build:tt":"./node_modules/.bin/taro build --type tt","build:qq":"./node_modules/.bin/taro build --type qq","build:h5":"./node_modules/.bin/taro build --type h5","dev:weapp":"npm run build:weapp -- --watch","dev:swan":"npm run build:swan -- --watch","dev:alipay":"npm run build:alipay -- --watch","dev:tt":"npm run build:tt -- --watch","dev:qq":"npm run build:qq -- --watch","dev:h5":"npm run build:h5 -- --watch","update":"./node_modules/.bin/taro update self","new":"node ./scripts/new.js"},"browserslist":["last 3 versions","Android >= 4.1","ios >= 8"],"author":"","dependencies":{"@babel/runtime":"^7.7.7","@souche-taro/pika-react":"^0.6.0","@souche/taro-router":"^0.0.5","@tarojs/components":"3.0.17","@tarojs/react":"3.0.17","@tarojs/runtime":"3.0.17","@tarojs/taro":"3.0.17","react":"^16.10.0","react-dom":"^16.10.0","sr-sdk-wxapp":"^1.3.6","taro-ui":"^2.3.4"},"devDependencies":{"@babel/core":"^7.8.0","@tarojs/cli":"3.0.17","@tarojs/mini-runner":"3.0.17","@tarojs/webpack-runner":"3.0.17","@types/react":"^16.0.0","@types/webpack-env":"^1.13.6","@typescript-eslint/eslint-plugin":"^2.x","@typescript-eslint/parser":"^2.x","babel-preset-taro":"3.0.17","eslint":"^6.8.0","eslint-config-taro":"3.0.17","eslint-plugin-import":"^2.12.0","eslint-plugin-react":"^7.8.2","eslint-plugin-react-hooks":"^1.6.1","fs-extra":"^9.0.1","inquirer":"^7.3.3","ora":"^5.0.0","stylelint":"9.3.0","typescript":"^3.7.0"}}')},"168":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var n=r(2),o=r(3),a=r(9),c=r(10),i=r(14),u=r.n(i),s=r(24),f=r(119),l=(r(147),r(148)),p=function(e){Object(a.a)(Enter,e);var t=Object(c.a)(Enter);function Enter(e){var r;return Object(n.a)(this,Enter),(r=t.call(this,e)).state={"list":[{"title":"组件","desc":"包含基础样式、按钮、表单等元素","icon":"//img.souche.com/f2e/e64415aec36fcb8f8aa71258f262a076.png","next":"/pages/ui/index","status":!0},{"title":"页面&插件","desc":"包含通用的业务模块以及页面","icon":"//img.souche.com/f2e/9059119dd053c5e6b16279b22b5ac4cd.png","next":"/pages/plugins/index","status":!1}]},r}return Object(o.a)(Enter,[{"key":"handleNext","value":function handleNext(e,t){t?s.default.navigateTo({"url":e}):Object(s.showToast)({"title":"内容暂无,敬请期待","icon":"none"})}},{"key":"render","value":function render(){var e=this;return u.a.createElement(f.View,{"className":"enter"},u.a.createElement(f.View,{"className":"enter_header"},u.a.createElement(f.View,{"className":"icon"}),u.a.createElement(f.View,{"className":"desc"},"Pika3.0 React UI"),u.a.createElement(f.View,{"className":"version"},"ver.",l.dependencies["@souche-taro/pika-react"].slice(1))),u.a.createElement(f.View,{"className":"enter_body"},this.state.list.map((function(t){return u.a.createElement(f.View,{"className":"enterBtn","key":t.title,"onClick":e.handleNext.bind(e,t.next,t.status)},u.a.createElement(f.View,{"className":"enterBtn-left"},u.a.createElement(f.View,{"className":"enterBtn-left_desc"},u.a.createElement(f.View,{"className":"enterBtn-left_desc-title"},t.title),u.a.createElement(f.View,{"className":"enterBtn-left_desc-content"},t.desc))),u.a.createElement(f.View,{"className":"enterBtn-left_icon","style":{"backgroundImage":"url(".concat(t.icon,")")}}))}))))}}]),Enter}(i.Component)}}]);