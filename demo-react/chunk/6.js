(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"120":function(e){e.exports=JSON.parse('{"ui":[{"category":"basic","name":"基础组件","icon":"//img.souche.com/f2e/66dee96347f065dc0b5d2ed057834a98.png","list":[{"name":"button","type":"ui","chinese":"按钮","path":"/pages/components/button/button","desc":"用于传递用户触摸时会触发的操作"},{"name":"icon","type":"ui","chinese":"图标","path":"/pages/components/icon/icon","desc":"目前基于som-ui的icon库制作,不建议使用"},{"name":"image","type":"ui","chinese":"图片","path":"/pages/components/image/image","desc":"可以配置阿里云图片参数"},{"name":"fab","type":"ui","chinese":"悬浮按钮","path":"/pages/components/fab/fab","desc":"浮动操作按钮代表着应用中最重要的操作，是为了使用户更便于操作"}]},{"category":"layout","name":"布局组件","icon":"//img.souche.com/f2e/b6553dcb3757be91c698f1c65de32bc1.png","list":[{"name":"list","type":"ui","chinese":"列表","path":"/pages/components/list/list","desc":"用于快速展示展示列表"},{"name":"popup","type":"ui","chinese":"弹出层","path":"/pages/components/popup/popup","desc":"用于附属内容的展示"},{"name":"scrollList","type":"ui","chinese":"滑动列表","path":"/pages/components/scrollList/scrollList","desc":"","disable":true}]},{"category":"form","name":"表单组件","icon":"//img.souche.com/f2e/4598b1e08898d1bfb6730d713c1cdcfd.png","list":[{"name":"range","type":"ui","chinese":"范围选择器","path":"/pages/components/range/range","desc":"允许用户在一个区间中选择特定值"},{"name":"checkbox","type":"ui","chinese":"多选框","path":"/pages/components/Checkbox/Checkbox","desc":"用于多选"},{"name":"textarea","type":"ui","chinese":"文本框","path":"/pages/components/textarea/textarea","desc":"用于多行文本"},{"name":"input","type":"ui","chinese":"输入框","path":"/pages/components/input/input","desc":"用于文本输入"},{"name":"switch","type":"ui","chinese":"开关","path":"/pages/components/switch/switch","desc":"切换组件"},{"name":"picker","type":"ui","chinese":"选择器","path":"/pages/components/picker/picker","desc":"自定义的选择器"},{"name":"date-picker","type":"ui","chinese":"日期选择器","path":"/pages/components/date-picker/date-picker","desc":"日期选择器"},{"name":"time-picker","type":"ui","chinese":"时间选择器","path":"/pages/components/time-picker/time-picker","desc":"时间选择器"},{"name":"radio","type":"ui","chinese":"单选按钮","path":"/pages/components/radio/radio","desc":"单选组件"},{"name":"search-bar","type":"ui","chinese":"搜索栏","path":"/pages/components/search-bar/search-bar","desc":"用于搜索页的输入框"},{"name":"uploader","type":"ui","chinese":"上传文件","path":"/pages/components/uploader/uploader","desc":"基于阿里上传组件"},{"name":"form","type":"ui","chinese":"表单","path":"/pages/components/form/form","desc":"基础表单,目前不支持校验"},{"name":"date-time-picker","type":"ui","chinese":"日期时间选择器","path":"/pages/components/date-time-picker/date-time-picker","desc":"日期时间选择器组件"}]},{"category":"feedback","name":"反馈组件","icon":"//img.souche.com/f2e/24b3e2a622cc799c3a0b4b2671abf090.png","list":[{"name":"dialog","type":"ui","chinese":"对话框","path":"/pages/components/dialog/dialog","desc":"重弹框"},{"name":"toast","type":"ui","chinese":"提示","path":"/pages/components/toast/toast","desc":"轻弹框"},{"name":"overlaly","type":"ui","chinese":"遮罩层","path":"/pages/components/overlay/overlay","desc":"用于弹窗和主体内容的分隔"}]},{"category":"navigate","name":"导航组件","icon":"//img.souche.com/f2e/eca59b1632127f4da033453c2edd7d4a.png","list":[{"name":"navBar","type":"ui","chinese":"顶部导航栏","path":"/pages/components/navBar/navBar","desc":"顶部导航栏组件,需要设置原生属性关闭原始导航栏"},{"name":"tabBar","type":"ui","chinese":"底部标签栏","path":"/pages/components/tabBar/tabBar","desc":"底部导航组件,需要设置原生属性关闭原始导航栏"},{"name":"tabs","type":"ui","chinese":"标签栏","path":"/pages/components/tabs/tabs","desc":"普通标签,支持懒加载"},{"name":"indexBar","type":"ui","chinese":"索引选择器","path":"/pages/components/indexBar/indexBar","desc":"索引列表选择组件"}]},{"category":"visual","name":"视图组件","icon":"//img.souche.com/f2e/f1a224469c14ade09decca7b4ddcab91.png","list":[{"name":"avatar","type":"ui","chinese":"用户头像","path":"/pages/components/avatar/avatar","desc":"用户头像, 展示openData"},{"name":"badge","type":"ui","chinese":"徽标","path":"/pages/components/badge/badge","desc":"徽标组件"},{"name":"sticky","type":"ui","chinese":"粘性布局","path":"/pages/components/sticky/sticky","desc":"可用于置顶需求"},{"name":"tag","type":"ui","chinese":"标签组件","path":"/pages/components/tag/tag","desc":"标签组件"},{"name":"notice","type":"ui","chinese":"提示文字","path":"/pages/components/notice/notice","desc":"提示文字组件"},{"name":"steps","type":"ui","chinese":"步骤条","path":"/pages/components/steps/steps","desc":"步骤条组件"},{"name":"swiper","type":"ui","chinese":"滑动视图容器","path":"/pages/components/swiper/swiper","desc":"基于原生swiper"}]}],"plugin":[]}')},"121":function(e,a,t){"use strict";t.d(a,"b",(function(){return firstLetterToUpperCase})),t.d(a,"a",(function(){return findUiComponentDemoInfo}));var n=t(120);function firstLetterToUpperCase(e){return e.split("").map((function(e,a){return a?e:e.toUpperCase()})).join("")}function findUiComponentDemoInfo(e,a){var t=function findUiComponentsByName(e,a){return n.ui.filter((function(a){return a.category===e}))[0].list.filter((function(e){return e.name===a}))[0]}(e,a);return{"title":"".concat(firstLetterToUpperCase(t.name)," ").concat(t.chinese),"desc":t.desc}}},"122":function(e,a,t){"use strict";t.d(a,"a",(function(){return wrapper}));var n=t(2),c=t(3),s=t(11),i=t(8),o=t(9),r=t(10),p=t(14),m=t.n(p);function wrapper(e,a){return function(t){return function(t){Object(o.a)(_class,t);var p=Object(r.a)(_class);function _class(){return Object(n.a)(this,_class),p.apply(this,arguments)}return Object(c.a)(_class,[{"key":"render","value":function render(){return e?m.a.createElement(e,a,Object(s.a)(Object(i.a)(_class.prototype),"render",this).call(this)):Object(s.a)(Object(i.a)(_class.prototype),"render",this).call(this)}}]),_class}(t)}}},"123":function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(2),c=t(3),s=t(9),i=t(10),o=t(14),r=t.n(o),p=t(119),m=(t(124),function(e){Object(s.a)(DemoComponent,e);var a=Object(i.a)(DemoComponent);function DemoComponent(e){return Object(n.a)(this,DemoComponent),a.call(this,e)}return Object(c.a)(DemoComponent,[{"key":"render","value":function render(){return r.a.createElement(p.View,{"className":"demoComponent"},r.a.createElement(p.View,{"className":"header"},r.a.createElement(p.View,{"className":"title"},this.props.title),r.a.createElement(p.View,{"className":"desc"},this.props.desc)),r.a.createElement(p.View,{"className":"article"},this.props.children))}}]),DemoComponent}(o.Component))},"124":function(e,a,t){},"125":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(2),c=t(3),s=t(9),i=t(10),o=t(4),r=t(14),p=t.n(r),m=t(119),l=(t(126),function(e){Object(s.a)(ShowCom,e);var a=Object(i.a)(ShowCom);function ShowCom(){return Object(n.a)(this,ShowCom),a.apply(this,arguments)}return Object(c.a)(ShowCom,[{"key":"render","value":function render(){var e=this.props.title;return p.a.createElement(m.View,{"className":"showCom"},p.a.createElement(m.Text,{"className":"showCom-title"},e),p.a.createElement(m.View,{"className":"showCom-content"},this.props.children))}}]),ShowCom}(r.Component));Object(o.a)(l,"defaultProps",{"title":"样例名称"})},"126":function(e,a,t){},"162":function(e,a,t){},"197":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var n,c=t(2),s=t(3),i=t(9),o=t(10),r=t(0),p=t(14),m=t.n(p),l=t(119),u=t(127),d=t(125),h=(t(162),t(122)),g=t(123),f=t(121),b=Object(h.a)(g.a,Object(r.a)({},Object(f.a)("visual","avatar")))(n=function(e){Object(i.a)(AvatarExample,e);var a=Object(o.a)(AvatarExample);function AvatarExample(e){return Object(c.a)(this,AvatarExample),a.call(this,e)}return Object(s.a)(AvatarExample,[{"key":"render","value":function render(){return m.a.createElement(l.View,{"className":"avatarExample"},m.a.createElement(d.a,{"title":"基本使用"},m.a.createElement(l.View,{"className":"container"},m.a.createElement(u.PkAvatar,{"className":"mr_20","size":"small","image":"//cdn.nlark.com/yuque/0/2020/png/268745/1599026954312-2ad8f0e2-2631-41a3-87af-298c64051693.png"}),m.a.createElement(u.PkAvatar,{"className":"mr_20","circle":!0,"image":"//cdn.nlark.com/yuque/0/2020/png/268745/1599026954312-2ad8f0e2-2631-41a3-87af-298c64051693.png"}),m.a.createElement(u.PkAvatar,{"className":"mr_20","size":"large","image":"//cdn.nlark.com/yuque/0/2020/png/268745/1599026954312-2ad8f0e2-2631-41a3-87af-298c64051693.png"}))),m.a.createElement(d.a,{"title":"文字头像"},m.a.createElement(l.View,{"className":"container"},m.a.createElement(u.PkAvatar,{"className":"mr_20","size":"small","text":"皮卡组件库"}),m.a.createElement(u.PkAvatar,{"className":"mr_20","circle":!0,"text":"皮卡组件库"}),m.a.createElement(u.PkAvatar,{"className":"mr_20","size":"large","text":"皮卡组件库"}))),m.a.createElement(d.a,{"title":"openData"},m.a.createElement(u.PkAvatar,{"className":"mr_20","openData":{"type":"userAvatarUrl"}})),m.a.createElement(d.a,{"title":"自定义style"},m.a.createElement(l.View,{"className":"container"},m.a.createElement(u.PkAvatar,{"className":"mr_20","style":{"background":"red"},"text":"皮卡组件库"}),m.a.createElement(u.PkAvatar,{"className":["test-class","mr_20"],"circle":!0,"text":"皮卡组件库"}))))}}]),AvatarExample}(p.Component))||n}}]);