(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{472:function(t,s,v){"use strict";v.r(s);var a=v(2),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("对于 TCP 而言，在传输的时候分为两个部分:"),s("strong",[t._v("TCP 头")]),t._v("和"),s("strong",[t._v("数据部分")]),t._v("。")]),t._v(" "),s("p",[t._v("而 HTTP 类似，也是"),s("code",[t._v("header + body")]),t._v("的结构，具体而言:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("起始行 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 头部 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 空行 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 实体"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("由于 http "),s("code",[t._v("请求报文")]),t._v("和"),s("code",[t._v("响应报文")]),t._v("是有一定区别，因此我们分开介绍。")]),t._v(" "),s("h2",{attrs:{id:"起始行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起始行"}},[t._v("#")]),t._v(" 起始行")]),t._v(" "),s("p",[t._v("对于请求报文来说，起始行类似下面这样:")]),t._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[t._v("GET/home HTTP/1.1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("也就是"),s("strong",[t._v("方法 + 路径 + http 版本")]),t._v("。")]),t._v(" "),s("p",[t._v("对于响应报文来说，起始行一般张这个样:")]),t._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token response-status"}},[s("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token status-code number"}},[t._v("200")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token reason-phrase string"}},[t._v("OK")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("响应报文的起始行也叫做"),s("code",[t._v("状态行")]),t._v("。由"),s("strong",[t._v("http 版本、状态码和原因")]),t._v("三部分组成。")]),t._v(" "),s("p",[t._v("值得注意的是，在起始行中，每两个部分之间用"),s("strong",[t._v("空格")]),t._v("隔开，最后一个部分后面应该接一个"),s("strong",[t._v("换行")]),t._v("，严格遵循"),s("code",[t._v("ABNF")]),t._v("语法规范。")]),t._v(" "),s("blockquote",[s("p",[t._v("ABNF 规定是一组推导规则，写为：规则 = 定义 ; 注释 CRLF")])]),t._v(" "),s("h2",{attrs:{id:"头部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#头部"}},[t._v("#")]),t._v(" 头部")]),t._v(" "),s("p",[t._v("展示一下请求头和响应头在报文中的位置:")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/http001-01.png",alt:"http001-01"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/http001-02.png",alt:"http001-02"}})]),t._v(" "),s("p",[t._v("不管是请求头还是响应头，其中的字段是相当多的，而且牵扯到"),s("code",[t._v("http")]),t._v("非常多的特性，这里就不一一列举的，重点看看这些头部字段的格式：")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("字段名不区分大小写")])])]),t._v(" "),s("li",[s("ol",[s("li",[t._v("字段名不允许出现空格，不可以出现下划线"),s("code",[t._v("_")])])])]),t._v(" "),s("li",[s("ol",[s("li",[t._v("字段名后面必须"),s("strong",[t._v("紧接着"),s("code",[t._v(":")])])])])])]),t._v(" "),s("h2",{attrs:{id:"空行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空行"}},[t._v("#")]),t._v(" 空行")]),t._v(" "),s("p",[t._v("很重要，用来区分开"),s("code",[t._v("头部")]),t._v("和"),s("code",[t._v("实体")]),t._v("。")]),t._v(" "),s("p",[t._v("问: 如果说在头部中间故意加一个空行会怎么样？")]),t._v(" "),s("p",[t._v("那么空行后的内容全部被视为实体。")]),t._v(" "),s("h2",{attrs:{id:"实体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实体"}},[t._v("#")]),t._v(" 实体")]),t._v(" "),s("p",[t._v("就是具体的数据了，也就是"),s("code",[t._v("body")]),t._v("部分。请求报文对应"),s("code",[t._v("请求体")]),t._v(", 响应报文对应"),s("code",[t._v("响应体")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("文章转载自 "),s("a",{attrs:{href:"https://juejin.cn/user/430664257382462/posts",target:"_blank",rel:"noopener noreferrer"}},[t._v("@神三元"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);