(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"120":function(e){e.exports=JSON.parse('{"ui":[{"category":"basic","name":"基础组件","icon":"//img.souche.com/f2e/66dee96347f065dc0b5d2ed057834a98.png","list":[{"name":"button","type":"ui","chinese":"按钮","path":"/pages/components/button/button","desc":"用于传递用户触摸时会触发的操作"},{"name":"icon","type":"ui","chinese":"图标","path":"/pages/components/icon/icon","desc":"目前基于som-ui的icon库制作,不建议使用"},{"name":"image","type":"ui","chinese":"图片","path":"/pages/components/image/image","desc":"可以配置阿里云图片参数"},{"name":"fab","type":"ui","chinese":"悬浮按钮","path":"/pages/components/fab/fab","desc":"浮动操作按钮代表着应用中最重要的操作，是为了使用户更便于操作"}]},{"category":"layout","name":"布局组件","icon":"//img.souche.com/f2e/b6553dcb3757be91c698f1c65de32bc1.png","list":[{"name":"list","type":"ui","chinese":"列表","path":"/pages/components/list/list","desc":"用于快速展示展示列表"},{"name":"popup","type":"ui","chinese":"弹出层","path":"/pages/components/popup/popup","desc":"用于附属内容的展示"},{"name":"scrollList","type":"ui","chinese":"滑动列表","path":"/pages/components/scrollList/scrollList","desc":"","disable":true}]},{"category":"form","name":"表单组件","icon":"//img.souche.com/f2e/4598b1e08898d1bfb6730d713c1cdcfd.png","list":[{"name":"range","type":"ui","chinese":"范围选择器","path":"/pages/components/range/range","desc":"允许用户在一个区间中选择特定值"},{"name":"checkbox","type":"ui","chinese":"多选框","path":"/pages/components/Checkbox/Checkbox","desc":"用于多选"},{"name":"textarea","type":"ui","chinese":"文本框","path":"/pages/components/textarea/textarea","desc":"用于多行文本"},{"name":"input","type":"ui","chinese":"输入框","path":"/pages/components/input/input","desc":"用于文本输入"},{"name":"switch","type":"ui","chinese":"开关","path":"/pages/components/switch/switch","desc":"切换组件"},{"name":"picker","type":"ui","chinese":"选择器","path":"/pages/components/picker/picker","desc":"自定义的选择器"},{"name":"date-picker","type":"ui","chinese":"日期选择器","path":"/pages/components/date-picker/date-picker","desc":"日期选择器"},{"name":"time-picker","type":"ui","chinese":"时间选择器","path":"/pages/components/time-picker/time-picker","desc":"时间选择器"},{"name":"radio","type":"ui","chinese":"单选按钮","path":"/pages/components/radio/radio","desc":"单选组件"},{"name":"search-bar","type":"ui","chinese":"搜索栏","path":"/pages/components/search-bar/search-bar","desc":"用于搜索页的输入框"},{"name":"uploader","type":"ui","chinese":"上传文件","path":"/pages/components/uploader/uploader","desc":"基于阿里上传组件"},{"name":"form","type":"ui","chinese":"表单","path":"/pages/components/form/form","desc":"基础表单,目前不支持校验"},{"name":"date-time-picker","type":"ui","chinese":"日期时间选择器","path":"/pages/components/date-time-picker/date-time-picker","desc":"日期时间选择器组件"}]},{"category":"feedback","name":"反馈组件","icon":"//img.souche.com/f2e/24b3e2a622cc799c3a0b4b2671abf090.png","list":[{"name":"dialog","type":"ui","chinese":"对话框","path":"/pages/components/dialog/dialog","desc":"重弹框"},{"name":"toast","type":"ui","chinese":"提示","path":"/pages/components/toast/toast","desc":"轻弹框"},{"name":"overlaly","type":"ui","chinese":"遮罩层","path":"/pages/components/overlay/overlay","desc":"用于弹窗和主体内容的分隔"}]},{"category":"navigate","name":"导航组件","icon":"//img.souche.com/f2e/eca59b1632127f4da033453c2edd7d4a.png","list":[{"name":"navBar","type":"ui","chinese":"顶部导航栏","path":"/pages/components/navBar/navBar","desc":"顶部导航栏组件,需要设置原生属性关闭原始导航栏"},{"name":"tabBar","type":"ui","chinese":"底部标签栏","path":"/pages/components/tabBar/tabBar","desc":"底部导航组件,需要设置原生属性关闭原始导航栏"},{"name":"tabs","type":"ui","chinese":"标签栏","path":"/pages/components/tabs/tabs","desc":"普通标签,支持懒加载"},{"name":"indexBar","type":"ui","chinese":"索引选择器","path":"/pages/components/indexBar/indexBar","desc":"索引列表选择组件"}]},{"category":"visual","name":"视图组件","icon":"//img.souche.com/f2e/f1a224469c14ade09decca7b4ddcab91.png","list":[{"name":"avatar","type":"ui","chinese":"用户头像","path":"/pages/components/avatar/avatar","desc":"用户头像, 展示openData"},{"name":"badge","type":"ui","chinese":"徽标","path":"/pages/components/badge/badge","desc":"徽标组件"},{"name":"sticky","type":"ui","chinese":"粘性布局","path":"/pages/components/sticky/sticky","desc":"可用于置顶需求"},{"name":"tag","type":"ui","chinese":"标签组件","path":"/pages/components/tag/tag","desc":"标签组件"},{"name":"notice","type":"ui","chinese":"提示文字","path":"/pages/components/notice/notice","desc":"提示文字组件"},{"name":"steps","type":"ui","chinese":"步骤条","path":"/pages/components/steps/steps","desc":"步骤条组件"},{"name":"swiper","type":"ui","chinese":"滑动视图容器","path":"/pages/components/swiper/swiper","desc":"基于原生swiper"}]}],"plugin":[]}')},"121":function(e,t,n){"use strict";n.d(t,"b",(function(){return firstLetterToUpperCase})),n.d(t,"a",(function(){return findUiComponentDemoInfo}));var a=n(120);function firstLetterToUpperCase(e){return e.split("").map((function(e,t){return t?e:e.toUpperCase()})).join("")}function findUiComponentDemoInfo(e,t){var n=function findUiComponentsByName(e,t){return a.ui.filter((function(t){return t.category===e}))[0].list.filter((function(e){return e.name===t}))[0]}(e,t);return{"title":"".concat(firstLetterToUpperCase(n.name)," ").concat(n.chinese),"desc":n.desc}}},"122":function(e,t,n){"use strict";n.d(t,"a",(function(){return wrapper}));var a=n(2),i=n(3),c=n(11),s=n(8),o=n(9),r=n(10),p=n(14),l=n.n(p);function wrapper(e,t){return function(n){return function(n){Object(o.a)(_class,n);var p=Object(r.a)(_class);function _class(){return Object(a.a)(this,_class),p.apply(this,arguments)}return Object(i.a)(_class,[{"key":"render","value":function render(){return e?l.a.createElement(e,t,Object(c.a)(Object(s.a)(_class.prototype),"render",this).call(this)):Object(c.a)(Object(s.a)(_class.prototype),"render",this).call(this)}}]),_class}(n)}}},"123":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(2),i=n(3),c=n(9),s=n(10),o=n(14),r=n.n(o),p=n(119),l=(n(124),function(e){Object(c.a)(DemoComponent,e);var t=Object(s.a)(DemoComponent);function DemoComponent(e){return Object(a.a)(this,DemoComponent),t.call(this,e)}return Object(i.a)(DemoComponent,[{"key":"render","value":function render(){return r.a.createElement(p.View,{"className":"demoComponent"},r.a.createElement(p.View,{"className":"header"},r.a.createElement(p.View,{"className":"title"},this.props.title),r.a.createElement(p.View,{"className":"desc"},this.props.desc)),r.a.createElement(p.View,{"className":"article"},this.props.children))}}]),DemoComponent}(o.Component))},"124":function(e,t,n){},"125":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(2),i=n(3),c=n(9),s=n(10),o=n(4),r=n(14),p=n.n(r),l=n(119),m=(n(126),function(e){Object(c.a)(ShowCom,e);var t=Object(s.a)(ShowCom);function ShowCom(){return Object(a.a)(this,ShowCom),t.apply(this,arguments)}return Object(i.a)(ShowCom,[{"key":"render","value":function render(){var e=this.props.title;return p.a.createElement(l.View,{"className":"showCom"},p.a.createElement(l.Text,{"className":"showCom-title"},e),p.a.createElement(l.View,{"className":"showCom-content"},this.props.children))}}]),ShowCom}(r.Component));Object(o.a)(m,"defaultProps",{"title":"样例名称"})},"126":function(e,t,n){},"158":function(e,t,n){},"190":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a,i=n(2),c=n(3),s=n(13),o=n(9),r=n(10),p=n(4),l=n(0),m=n(14),u=n.n(m),h=n(119),d=n(127),b=n(125),f=n(122),g=n(123),C=n(121),y=(n(158),Object(f.a)(g.a,Object(l.a)({},Object(C.a)("feedback","dialog")))(a=function(e){Object(o.a)(DialogExample,e);var t=Object(r.a)(DialogExample);function DialogExample(e){var n;return Object(i.a)(this,DialogExample),n=t.call(this,e),Object(p.a)(Object(s.a)(n),"handleHideDialog1",(function(){n.setState({"visible1":!1})})),Object(p.a)(Object(s.a)(n),"handleHideDialog2",(function(){n.setState({"visible2":!1})})),Object(p.a)(Object(s.a)(n),"handleHideDialog3",(function(){n.setState({"visible3":!1})})),Object(p.a)(Object(s.a)(n),"handleHideDialog4",(function(){n.setState({"visible4":!1})})),n.state={"visible1":!1,"visible2":!1,"visible3":!1,"visible4":!1,"visible5":!1},n}return Object(c.a)(DialogExample,[{"key":"renderCustomCancelButton","value":function renderCustomCancelButton(){var e=this;return u.a.createElement(h.View,{"className":"custom_cancel","onClick":function onClick(){e.setState({"visible5":!1})}},"取消")}},{"key":"renderCustomConfirmButton","value":function renderCustomConfirmButton(){var e=this;return u.a.createElement(h.View,{"className":"custom_confirm","onClick":function onClick(){e.setState({"visible5":!1})}},"确定")}},{"key":"render","value":function render(){var e=this;return u.a.createElement(h.View,{"className":"dialogExample"},u.a.createElement(b.a,{"title":"基本使用"},u.a.createElement(d.PkButton,{"onClick":function onClick(){e.setState({"visible1":!0})}},"点击显示对话框"),u.a.createElement(d.PkDialog,{"confirmText":"我已阅读","content":"大风车规范协议是一个非常重要的协议，它关系到很多重要的规范和协议，请认真阅读，阅读完成后点击我已阅读按钮即可关闭对话框","title":"大风车规范协议","visible":this.state.visible1,"onClose":this.handleHideDialog1})),u.a.createElement(b.a,{"title":"没有标题的对话框"},u.a.createElement(d.PkButton,{"onClick":function onClick(){e.setState({"visible2":!0})}},"点击显示没有标题的对话框"),u.a.createElement(d.PkDialog,{"confirmText":"我已阅读","content":"大风车规范协议是一个非常重要的协议，它关系到很多重要的规范和协议，请认真阅读，阅读完成后点击我已阅读按钮即可关闭对话框","visible":this.state.visible2,"onClose":this.handleHideDialog2})),u.a.createElement(b.a,{"title":"没有内容的对话框"},u.a.createElement(d.PkButton,{"onClick":function onClick(){e.setState({"visible3":!0})}},"点击显示没有内容的对话框"),u.a.createElement(d.PkDialog,{"confirmText":"我已阅读","title":"大风车规范协议","visible":this.state.visible3,"onClose":this.handleHideDialog3})),u.a.createElement(b.a,{"title":"没有取消按钮的对话框"},u.a.createElement(d.PkButton,{"onClick":function onClick(){e.setState({"visible4":!0})}},"点击显示没有取消按钮的对话框"),u.a.createElement(d.PkDialog,{"confirmText":"我已阅读","content":"大风车规范协议是一个非常重要的协议，它关系到很多重要的规范和协议，请认真阅读，阅读完成后点击我已阅读按钮即可关闭对话框","needCancel":!1,"title":"大风车规范协议","visible":this.state.visible4,"onClose":this.handleHideDialog4})),u.a.createElement(b.a,{"title":"自定义按钮"},u.a.createElement(d.PkButton,{"onClick":function onClick(){e.setState({"visible5":!0})}},"点击显示自定义对话框"),u.a.createElement(d.PkDialog,{"confirmText":"我已阅读","content":"大风车规范协议是一个非常重要的协议，它关系到很多重要的规范和协议，请认真阅读，阅读完成后点击我已阅读按钮即可关闭对话框","title":"大风车规范协议","visible":this.state.visible5,"customCancelButton":this.renderCustomCancelButton.call(this),"customConfirmButton":this.renderCustomConfirmButton.call(this)})))}}]),DialogExample}(m.Component))||a)}}]);