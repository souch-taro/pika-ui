(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{435:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"date-picker-日期选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date-picker-日期选择器"}},[t._v("#")]),t._v(" Date Picker 日期选择器")]),t._v(" "),s("p",[t._v("如果需要按需引入, 则:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PkDatePicker "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@souche-taro/pika-vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用案例"}},[t._v("#")]),t._v(" 使用案例")]),t._v(" "),s("h3",{attrs:{id:"基础使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[t._v("#")]),t._v(" 基础使用")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pk-date-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@change")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("getDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    日期: {{ date }}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pk-date-picker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"限定起始时间和结束时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限定起始时间和结束时间"}},[t._v("#")]),t._v(" 限定起始时间和结束时间")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pk-date-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2019-02-03"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2021-10-16"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    2019/02/03 ~ 2021/10/16\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pk-date-picker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"单独选取-年-月"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单独选取-年-月"}},[t._v("#")]),t._v(" 单独选取 年 / 月")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pk-date-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fields")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("year"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pickYear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    选取年: {{ pickYear }}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pk-date-picker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pk-date-picker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fields")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("month"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pickMonth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    选取月: {{ pickMonth }}\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pk-date-picker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h3",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value（v-model）")]),t._v(" "),s("td",[t._v("当前选中的日期")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("默认为YYYY-MM-DD格式")]),t._v(" "),s("td",[t._v("当前的日期")])]),t._v(" "),s("tr",[s("td",[t._v("start")]),t._v(" "),s("td",[t._v("限定开始的日期")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("默认为YYYY-MM-DD格式")]),t._v(" "),s("td",[t._v("1900-01-01")])]),t._v(" "),s("tr",[s("td",[t._v("end")]),t._v(" "),s("td",[t._v("限定结束的日期")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("默认为YYYY-MM-DD格式")]),t._v(" "),s("td",[t._v("2100-12-31")])]),t._v(" "),s("tr",[s("td",[t._v("fields")]),t._v(" "),s("td",[t._v("单独选择年月日")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("‘year’，‘month’，‘day’")]),t._v(" "),s("td",[t._v("day")])]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[t._v("是否禁用")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("false")])])])]),t._v(" "),s("h3",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("事件名称")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("返回参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("change")]),t._v(" "),s("td",[t._v("日期选择触发的事件")]),t._v(" "),s("td",[t._v("YYYY-MM-DD")])])])]),t._v(" "),s("h3",{attrs:{id:"slot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("#")]),t._v(" Slot")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("default")]),t._v(" "),s("td",[t._v("触发器")])])])]),t._v(" "),s("h2",{attrs:{id:"平台兼容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平台兼容"}},[t._v("#")]),t._v(" 平台兼容")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("平台")]),t._v(" "),s("th",[t._v("微信")]),t._v(" "),s("th",[t._v("支付宝")]),t._v(" "),s("th",[t._v("H5")]),t._v(" "),s("th",[t._v("百度")]),t._v(" "),s("th",[t._v("头条")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("兼容性")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td"),t._v(" "),s("td")])])]),t._v(" "),s("h2",{attrs:{id:"相关问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关问题"}},[t._v("#")]),t._v(" 相关问题")]),t._v(" "),s("ol",[s("li",[t._v("H5不支持PickerView")])]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://git.souche-inc.com/souhce-Taro/pika-ui/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bug反馈"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);