(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"120":function(e){e.exports=JSON.parse('{"ui":[{"category":"basic","name":"基础组件","icon":"//img.souche.com/f2e/66dee96347f065dc0b5d2ed057834a98.png","list":[{"name":"button","type":"ui","chinese":"按钮","path":"/pages/components/button/button","desc":"用于传递用户触摸时会触发的操作"},{"name":"icon","type":"ui","chinese":"图标","path":"/pages/components/icon/icon","desc":"目前基于som-ui的icon库制作,不建议使用"},{"name":"image","type":"ui","chinese":"图片","path":"/pages/components/image/image","desc":"可以配置阿里云图片参数"},{"name":"fab","type":"ui","chinese":"悬浮按钮","path":"/pages/components/fab/fab","desc":"浮动操作按钮代表着应用中最重要的操作，是为了使用户更便于操作"}]},{"category":"layout","name":"布局组件","icon":"//img.souche.com/f2e/b6553dcb3757be91c698f1c65de32bc1.png","list":[{"name":"list","type":"ui","chinese":"列表","path":"/pages/components/list/list","desc":"用于快速展示展示列表"},{"name":"popup","type":"ui","chinese":"弹出层","path":"/pages/components/popup/popup","desc":"用于附属内容的展示"},{"name":"scrollList","type":"ui","chinese":"滑动列表","path":"/pages/components/scrollList/scrollList","desc":"","disable":true}]},{"category":"form","name":"表单组件","icon":"//img.souche.com/f2e/4598b1e08898d1bfb6730d713c1cdcfd.png","list":[{"name":"range","type":"ui","chinese":"范围选择器","path":"/pages/components/range/range","desc":"允许用户在一个区间中选择特定值"},{"name":"checkbox","type":"ui","chinese":"多选框","path":"/pages/components/Checkbox/Checkbox","desc":"用于多选"},{"name":"textarea","type":"ui","chinese":"文本框","path":"/pages/components/textarea/textarea","desc":"用于多行文本"},{"name":"input","type":"ui","chinese":"输入框","path":"/pages/components/input/input","desc":"用于文本输入"},{"name":"switch","type":"ui","chinese":"开关","path":"/pages/components/switch/switch","desc":"切换组件"},{"name":"picker","type":"ui","chinese":"选择器","path":"/pages/components/picker/picker","desc":"自定义的选择器"},{"name":"date-picker","type":"ui","chinese":"日期选择器","path":"/pages/components/date-picker/date-picker","desc":"日期选择器"},{"name":"time-picker","type":"ui","chinese":"时间选择器","path":"/pages/components/time-picker/time-picker","desc":"时间选择器"},{"name":"radio","type":"ui","chinese":"单选按钮","path":"/pages/components/radio/radio","desc":"单选组件"},{"name":"search-bar","type":"ui","chinese":"搜索栏","path":"/pages/components/search-bar/search-bar","desc":"用于搜索页的输入框"},{"name":"uploader","type":"ui","chinese":"上传文件","path":"/pages/components/uploader/uploader","desc":"基于阿里上传组件"},{"name":"form","type":"ui","chinese":"表单","path":"/pages/components/form/form","desc":"基础表单,目前不支持校验"},{"name":"date-time-picker","type":"ui","chinese":"日期时间选择器","path":"/pages/components/date-time-picker/date-time-picker","desc":"日期时间选择器组件"}]},{"category":"feedback","name":"反馈组件","icon":"//img.souche.com/f2e/24b3e2a622cc799c3a0b4b2671abf090.png","list":[{"name":"dialog","type":"ui","chinese":"对话框","path":"/pages/components/dialog/dialog","desc":"重弹框"},{"name":"toast","type":"ui","chinese":"提示","path":"/pages/components/toast/toast","desc":"轻弹框"},{"name":"overlaly","type":"ui","chinese":"遮罩层","path":"/pages/components/overlay/overlay","desc":"用于弹窗和主体内容的分隔"}]},{"category":"navigate","name":"导航组件","icon":"//img.souche.com/f2e/eca59b1632127f4da033453c2edd7d4a.png","list":[{"name":"navBar","type":"ui","chinese":"顶部导航栏","path":"/pages/components/navBar/navBar","desc":"顶部导航栏组件,需要设置原生属性关闭原始导航栏"},{"name":"tabBar","type":"ui","chinese":"底部标签栏","path":"/pages/components/tabBar/tabBar","desc":"底部导航组件,需要设置原生属性关闭原始导航栏"},{"name":"tabs","type":"ui","chinese":"标签栏","path":"/pages/components/tabs/tabs","desc":"普通标签,支持懒加载"},{"name":"indexBar","type":"ui","chinese":"索引选择器","path":"/pages/components/indexBar/indexBar","desc":"索引列表选择组件"}]},{"category":"visual","name":"视图组件","icon":"//img.souche.com/f2e/f1a224469c14ade09decca7b4ddcab91.png","list":[{"name":"avatar","type":"ui","chinese":"用户头像","path":"/pages/components/avatar/avatar","desc":"用户头像, 展示openData"},{"name":"badge","type":"ui","chinese":"徽标","path":"/pages/components/badge/badge","desc":"徽标组件"},{"name":"sticky","type":"ui","chinese":"粘性布局","path":"/pages/components/sticky/sticky","desc":"可用于置顶需求"},{"name":"tag","type":"ui","chinese":"标签组件","path":"/pages/components/tag/tag","desc":"标签组件"},{"name":"notice","type":"ui","chinese":"提示文字","path":"/pages/components/notice/notice","desc":"提示文字组件"},{"name":"steps","type":"ui","chinese":"步骤条","path":"/pages/components/steps/steps","desc":"步骤条组件"},{"name":"swiper","type":"ui","chinese":"滑动视图容器","path":"/pages/components/swiper/swiper","desc":"基于原生swiper"}]}],"plugin":[]}')},"121":function(e,t,a){"use strict";a.d(t,"b",(function(){return firstLetterToUpperCase})),a.d(t,"a",(function(){return findUiComponentDemoInfo}));var n=a(120);function firstLetterToUpperCase(e){return e.split("").map((function(e,t){return t?e:e.toUpperCase()})).join("")}function findUiComponentDemoInfo(e,t){var a=function findUiComponentsByName(e,t){return n.ui.filter((function(t){return t.category===e}))[0].list.filter((function(e){return e.name===t}))[0]}(e,t);return{"title":"".concat(firstLetterToUpperCase(a.name)," ").concat(a.chinese),"desc":a.desc}}},"122":function(e,t,a){"use strict";a.d(t,"a",(function(){return wrapper}));var n=a(2),c=a(3),i=a(11),s=a(8),o=a(9),r=a(10),p=a(14),m=a.n(p);function wrapper(e,t){return function(a){return function(a){Object(o.a)(_class,a);var p=Object(r.a)(_class);function _class(){return Object(n.a)(this,_class),p.apply(this,arguments)}return Object(c.a)(_class,[{"key":"render","value":function render(){return e?m.a.createElement(e,t,Object(i.a)(Object(s.a)(_class.prototype),"render",this).call(this)):Object(i.a)(Object(s.a)(_class.prototype),"render",this).call(this)}}]),_class}(a)}}},"123":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(2),c=a(3),i=a(9),s=a(10),o=a(14),r=a.n(o),p=a(119),m=(a(124),function(e){Object(i.a)(DemoComponent,e);var t=Object(s.a)(DemoComponent);function DemoComponent(e){return Object(n.a)(this,DemoComponent),t.call(this,e)}return Object(c.a)(DemoComponent,[{"key":"render","value":function render(){return r.a.createElement(p.View,{"className":"demoComponent"},r.a.createElement(p.View,{"className":"header"},r.a.createElement(p.View,{"className":"title"},this.props.title),r.a.createElement(p.View,{"className":"desc"},this.props.desc)),r.a.createElement(p.View,{"className":"article"},this.props.children))}}]),DemoComponent}(o.Component))},"124":function(e,t,a){},"125":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(2),c=a(3),i=a(9),s=a(10),o=a(4),r=a(14),p=a.n(r),m=a(119),l=(a(126),function(e){Object(i.a)(ShowCom,e);var t=Object(s.a)(ShowCom);function ShowCom(){return Object(n.a)(this,ShowCom),t.apply(this,arguments)}return Object(c.a)(ShowCom,[{"key":"render","value":function render(){var e=this.props.title;return p.a.createElement(m.View,{"className":"showCom"},p.a.createElement(m.Text,{"className":"showCom-title"},e),p.a.createElement(m.View,{"className":"showCom-content"},this.props.children))}}]),ShowCom}(r.Component));Object(o.a)(l,"defaultProps",{"title":"样例名称"})},"126":function(e,t,a){},"174":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n,c=a(2),i=a(3),s=a(9),o=a(10),r=a(0),p=a(14),m=a.n(p),l=a(119),h=a(24),u=a(127),d=a(125),g=a(122),b=a(123),f=a(121),y=u.PkList.PkListItem,w=Object(g.a)(b.a,Object(r.a)({},Object(f.a)("layout","list")))(n=function(e){Object(s.a)(ListExample,e);var t=Object(o.a)(ListExample);function ListExample(e){return Object(c.a)(this,ListExample),t.call(this,e)}return Object(i.a)(ListExample,[{"key":"handleChange","value":function handleChange(e){Object(h.showToast)({"title":"Change Switch: ".concat(e.detail.value),"icon":"none"})}},{"key":"render","value":function render(){return m.a.createElement(l.View,{"className":"_componentName_Example"},m.a.createElement(d.a,{"title":"基本使用"},m.a.createElement(u.PkList,null,m.a.createElement(y,{"title":"标题文字","arrow":"right"}),m.a.createElement(y,{"title":"标题文字","extraText":"详细信息"}),m.a.createElement(y,{"title":"禁用状态","disabled":!0,"extraText":"详细信息"}))),m.a.createElement(d.a,{"title":"带描述信息"},m.a.createElement(u.PkList,null,m.a.createElement(y,{"title":"标题文字","note":"描述信息"}),m.a.createElement(y,{"title":"标题文字","note":"描述信息","arrow":"right"}),m.a.createElement(y,{"arrow":"right","note":"描述信息","title":"标题文字标题文字标题文字标题文字标题文字","extraText":"详细信息详细信息详细信息详细信息"}))),m.a.createElement(d.a,{"title":"支持图标的 Item"},m.a.createElement(u.PkList,null,m.a.createElement(y,{"title":"标题文字","note":"描述信息","arrow":"right","iconInfo":{"size":25,"color":"#78A4FA","type":"address"}}),m.a.createElement(y,{"title":"标题文字","note":"描述信息","extraText":"详细信息","arrow":"right","iconInfo":{"size":25,"color":"#FF4949","type":"directory"}}))),m.a.createElement(d.a,{"title":"包含图片"},m.a.createElement(u.PkList,null,m.a.createElement(y,{"title":"标题文字","arrow":"right","thumb":"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"}),m.a.createElement(y,{"title":"标题文字","note":"描述信息","arrow":"right","thumb":"http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"}),m.a.createElement(y,{"title":"标题文字","note":"描述信息","extraText":"详细信息","arrow":"right","thumb":"http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"}))),m.a.createElement(d.a,{"title":"无边框的 Item"},m.a.createElement(u.PkList,{"hasBorder":!1},m.a.createElement(y,{"isSwitch":!0,"title":"标题文字","hasBorder":!1,"onSwitchChange":this.handleChange}),m.a.createElement(y,{"isSwitch":!0,"title":"标题文字","note":"描述信息","hasBorder":!1,"onSwitchChange":this.handleChange}))),m.a.createElement(d.a,{"title":"带 Switch 的 Item"},m.a.createElement(u.PkList,null,m.a.createElement(y,{"title":"标题文字","isSwitch":!0,"onSwitchChange":this.handleChange}))),m.a.createElement(d.a,{"title":"带自定义内容的Item"},m.a.createElement(u.PkList,null,m.a.createElement(y,{"title":"标题文字","note":"描述信息","arrow":"right"},m.a.createElement(l.View,null,"这是自定义内容")))))}}]),ListExample}(p.Component))||n}}]);