(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{494:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Web 性能标准则是在 window 上添加了 performance 属性，通过 window.performance 返回一个 Performance 对象。")]),t._v(" "),s("p",[t._v("对于 Web 开发人员来说，如何衡量一个 Web 页面的性能一直是一个难题。")]),t._v(" "),s("p",[t._v("最初，我们使用 Time to First Byte、DomContentLoaded 和 Load 这些衡量文档加载进度的指标，但它们不能直接反应用户视觉体验。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/171fbe834883d45b.jpg",alt:"171fbe834883d45b"}})]),t._v(" "),s("p",[t._v("我们将这些指标分为三类：文档加载相关、内容呈现相关、交互响应性相关，并基于这些指标提取出与用户最相关的核心指标。")]),t._v(" "),s("h2",{attrs:{id:"文档加载相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档加载相关"}},[t._v("#")]),t._v(" 文档加载相关")]),t._v(" "),s("p",[t._v("文档加载过程时间线如图，这里主要介绍三个指标：TTFB、DCL 和 Load 时间。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/web-perf.jpg",alt:"web-perf"}})]),t._v(" "),s("h3",{attrs:{id:"time-to-first-byte-ttfb-首字节时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#time-to-first-byte-ttfb-首字节时间"}},[t._v("#")]),t._v(" Time to First Byte（TTFB）首字节时间")]),t._v(" "),s("p",[t._v("浏览器从请求页面开始到接收第一字节的时间，这个时间段内包括 DNS 查找、TCP 连接和 SSL 连接。")]),t._v(" "),s("blockquote",[s("p",[t._v("浏览器开始收到服务器响应数据的时间=后台处理时间+重定向时间")]),t._v(" "),s("p",[t._v("TTFB 是反映服务端响应速度的重要指标")])]),t._v(" "),s("h3",{attrs:{id:"domcontentloaded-dcl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#domcontentloaded-dcl"}},[t._v("#")]),t._v(" DomContentLoaded（DCL）")]),t._v(" "),s("p",[t._v("当 **HTML **文档被完全加载和解析完成之后，DOMContentLoaded事件被触发，而无需等待样式表、图像和子框架加载完成。")]),t._v(" "),s("h3",{attrs:{id:"load-l"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-l"}},[t._v("#")]),t._v(" Load（L）")]),t._v(" "),s("p",[t._v("onLoad 事件触发的时间。页面所有资源都加载完毕后（比如图片，CSS），onLoad 事件才被触发。")]),t._v(" "),s("h2",{attrs:{id:"内容呈现相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容呈现相关"}},[t._v("#")]),t._v(" 内容呈现相关")]),t._v(" "),s("h3",{attrs:{id:"first-paint-fp-首次绘制像素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-paint-fp-首次绘制像素"}},[t._v("#")]),t._v(" First Paint（FP）首次绘制像素")]),t._v(" "),s("p",[s("strong",[t._v("定义")])]),t._v(" "),s("p",[t._v("从开始加载到浏览器"),s("strong",[t._v("首次绘制像素")]),t._v("到屏幕上的时间，也就是页面在屏幕上首次发生视觉变化的时间。但此变化可能是简单的背景色更新或不引人注意的内容，它并不表示页面内容完整性，可能会报告没有任何可见的内容被绘制的时间。")]),t._v(" "),s("blockquote",[s("p",[t._v("Note：First Paint 不包括默认的背景绘制，但包括非默认的背景绘制。")])]),t._v(" "),s("p",[s("strong",[t._v("测量方式")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFirstPaint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" firstPaints "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getEntriesByType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" performanceEntries "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    performanceEntries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-paint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        firstPaints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstPaint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-contentful-paint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        firstPaints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstContentfulPaint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chrome "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loadTimes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" loadTimes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadTimes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("firstPaintTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startLoadTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" loadTimes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      firstPaints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstPaint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstPaintTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" startLoadTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msFirstPaint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IE8+ 浏览器")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("msFirstPaint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" navigationStart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      firstPaints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstPaint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" msFirstPaint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" navigationStart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" firstPaints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])]),s("h3",{attrs:{id:"first-contentful-paint-fcp-首次绘制来自-dom-的内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-contentful-paint-fcp-首次绘制来自-dom-的内容"}},[t._v("#")]),t._v(" First Contentful Paint（FCP）首次绘制来自 DOM 的内容")]),t._v(" "),s("p",[s("strong",[t._v("定义")])]),t._v(" "),s("p",[t._v("浏览器"),s("strong",[t._v("首次绘制来自 DOM 的内容")]),t._v("的时间，内容必须是文本、图片（包含背景图）、非白色的 canvas 或 SVG，也包括带有正在加载中的 Web 字体的文本。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("为什么FCP 不能作为一个从用户视角准确衡量页面性能好坏的指标?")])]),t._v(" "),s("p",[t._v("只要首次触发了浏览器的 The First Page Paint 事件，此刻的时间点就是FCP。但此时渲染的不一定是重要的页面信息，比如仅仅是绘制了一个头部的 action bar 等，甚至不一定会渲染出可见的元素。这是用户第一次开始看到页面内容，但仅仅有内容，并不意味着它是有用的内容（例如 Header、导航栏等），也不意味着有用户要消费的内容。")])]),t._v(" "),s("p",[t._v("另外，字体加载是影响 FCP 的一个重要因素，字体通常是需要一段时间才能加载的大文件，有些浏览器在加载字体之前会隐藏文本。为了确保在 webfont 加载期间文本保持可见，可以临时显示系统字体。")]),t._v(" "),s("p",[t._v("如下所示，"),s("code",[t._v("font-display: swap;")]),t._v(" 告诉浏览器使用该字体的文本应立即使用系统字体显示。一旦自定义字体就绪，将替换掉系统字体。")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Pacifico'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("local")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Pacifico Regular'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("local")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Pacifico-Regular'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://fonts.gstatic.com/s/pacifico/v12/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'woff2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" swap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("strong",[t._v("测量方式")])]),t._v(" "),s("p",[t._v("见 First Paint 的计算方式。")]),t._v(" "),s("h3",{attrs:{id:"first-meaningful-paint-fmp-首次有意义的渲染帧、主要内容绘制到屏幕上的时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-meaningful-paint-fmp-首次有意义的渲染帧、主要内容绘制到屏幕上的时间"}},[t._v("#")]),t._v(" First Meaningful Paint（FMP）"),s("strong",[t._v("首次有意义的渲染帧、主要内容绘制到屏幕上的时间")])]),t._v(" "),s("p",[s("strong",[t._v("定义")])]),t._v(" "),s("p",[t._v("页面的"),s("strong",[t._v("主要内容绘制到屏幕上的时间")]),t._v("，这是一个更好的衡量用户感知加载体验的指标，但仍然不理想。")]),t._v(" "),s("p",[t._v("主要内容的定义因页面而异，例如对于博客文章，它的主要内容是标题和摘要，对于搜索页面，它的主要内容是搜索结果，对于电商的页面，图片则是主要内容。")]),t._v(" "),s("p",[t._v("所以采用 "),s("strong",[t._v("布局数量最大并且 Web 字体已加载")]),t._v(" 的时刻作为主要内容绘制的近似时间。")]),t._v(" "),s("p",[s("strong",[t._v("测量方式")])]),t._v(" "),s("p",[t._v("随着网页的加载与解析，布局对象（Layout Object）被逐步添加到布局树（Layout Tree）中。对于主要内容绘制到屏幕上的时间点，则是"),s("strong",[t._v("通过一种计算布局对象数量的方式来估算")]),t._v("的，"),s("a",{attrs:{href:"https://docs.google.com/document/d/1BR94tJdZLsin5poeet0XoTW60M0SjvOJQttKT-JK8HI/view#",target:"_blank",rel:"noopener noreferrer"}},[t._v("该算法"),s("OutboundLink")],1),t._v("将（添加到布局树的布局对象数 / max(1, 页面高度/屏幕高度)）最大的时刻作为 FMP 的时间点，如果在布局时正在加载字体，则布局变动时间将推迟到显示字体为止，以此来猜测页面的主要内容绘制到屏幕中的时间。")]),t._v(" "),s("p",[t._v("这种计算方式对页面加载的微小差异过于敏感，容易导致结果不一致。此外，度量的定义依赖于特定于浏览器的实现细节，这意味着它不能标准化，也不能在所有 Web 浏览器中实现。")]),t._v(" "),s("p",[t._v("在 Lighthouse 6.0 中已不推荐使用 FMP，建议使用 "),s("a",{attrs:{href:"https://web.dev/largest-contentful-paint/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Largest Contentful Paint"),s("OutboundLink")],1),t._v(" 代替。")]),t._v(" "),s("h3",{attrs:{id:"largest-contentful-paint-lcp-可视区域中最大的内容元素呈现-代替fmp的方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#largest-contentful-paint-lcp-可视区域中最大的内容元素呈现-代替fmp的方案"}},[t._v("#")]),t._v(" Largest Contentful Paint（LCP）"),s("strong",[t._v("可视区域中最大的内容元素呈现(代替FMP的方案)")])]),t._v(" "),s("h4",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" "),s("strong",[t._v("定义")])]),t._v(" "),s("p",[t._v("LCP 指的是在视窗内，"),s("strong",[t._v("最大的内容元素")]),t._v("被渲染的时间。")]),t._v(" "),s("p",[s("strong",[t._v("可视区域中最大的内容元素呈现")]),t._v("到屏幕上的时间，用以估算页面的主要内容对用户可见时间。")]),t._v(" "),s("h4",{attrs:{id:"google对该指标的评价"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google对该指标的评价"}},[t._v("#")]),t._v(" Google对该指标的评价：")]),t._v(" "),s("blockquote",[s("p",[t._v("LCP 是一个十分重要并且以用户感受为中心的指标；它反映了感知层面上页面的加载速度；它标记了页面主要内容中最大内容元素加载完成的时间点；LCP 较短的页面能够让用户更快感觉到页面是可用的。")])]),t._v(" "),s("h4",{attrs:{id:"lcp的关键点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lcp的关键点"}},[t._v("#")]),t._v(" LCP的关键点:")]),t._v(" "),s("p",[t._v("从定义可以看出，关键点就2个，选取哪些元素进行比较和如何确定元素的大小。")]),t._v(" "),s("p",[t._v("根据官方文档，下列元素会被纳入Largest Contentful 元素的考虑范围：")]),t._v(" "),s("ul",[s("li",[s("img")]),t._v(" "),s("li",[s("svg",[t._v(" 里面的 "),s("image")])]),t._v(" "),s("li",[s("video")]),t._v(" "),s("li",[t._v("通过 url() 函数加载背景图片的元素")]),t._v(" "),s("li",[t._v("包含 text node 的块级元素或者 inline text 的子元素")])]),t._v(" "),s("p",[t._v("那我们如何确定元素的大小？主要是以下 4 个规则：")]),t._v(" "),s("ul",[s("li",[t._v("在 viewport 内可见元素的大小，如果是超出可视区域或者被裁减、遮挡等，都不算入该元素大小")]),t._v(" "),s("li",[t._v("对于图片元素来说，大小是取图片实际大小和原始大小的较小值，即Min(实际大小，原始大小)")]),t._v(" "),s("li",[t._v("对于文字元素，只取能够覆盖文字的最小矩形面积")]),t._v(" "),s("li",[t._v("对所有元素，margin、padding、border 等都不算")])]),t._v(" "),s("h4",{attrs:{id:"计算lcp时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算lcp时间"}},[t._v("#")]),t._v(" 计算LCP时间")]),t._v(" "),s("p",[t._v("使用 PerformanceObserver 捕获LCP非常简单，仅需设置entryType 为 largest-contentful-paint 即可。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entryList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entries "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lastEntry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" perfEntries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("perfEntries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lcp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lastEntry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("renderTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" lastEntry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loadTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LCP:'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lcp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entryTypes")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'largest-contentful-paint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);