(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{461:function(t,v,_){"use strict";_.r(v);var r=_(2),a=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"什么是cdn"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是cdn"}},[t._v("#")]),t._v(" 什么是CDN?")]),t._v(" "),v("p",[t._v("CDN（Content Delivery Network 或 Content Distribution Network），中文名叫“内容分发网络”。")]),t._v(" "),v("p",[t._v("CDN 有三个关键词：“"),v("strong",[t._v("内容")]),t._v("”、“"),v("strong",[t._v("分发")]),t._v("”和 "),v("strong",[t._v("“网络”")]),t._v("。")]),t._v(" "),v("p",[t._v("CDN 的最核心原则是**“就近访问”**")]),t._v(" "),v("h3",{attrs:{id:"cdn能加速的内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cdn能加速的内容"}},[t._v("#")]),t._v(" CDN能加速的内容")]),t._v(" "),v("p",[t._v("在 CDN 领域里，“内容”其实就是 HTTP 协议里的“资源”，比如超文本、图片、视频、应用程序安装包等等。")]),t._v(" "),v("p",[t._v("资源按照是否可缓存又分为**“静态资源”"),v("strong",[t._v("和")]),t._v("“动态资源”**。")]),t._v(" "),v("p",[t._v("所谓的**“静态资源”**是指数据内容“静态不变”，任何时候来访问都是一样的，比如图片、音频。")]),t._v(" "),v("p",[t._v("所谓的**“动态资源”**是指数据内容是“动态变化”的，也就是由后台服务计算生成的，每次访问都不一样，比如商品的库存、微博的粉丝数等。")]),t._v(" "),v("p",[t._v("显然，只有静态资源才能够被缓存加速、就近访问，而动态资源只能由源站实时生成，即使缓存了也没有意义。不过，如果动态资源指定了“Cache-Control”，允许缓存短暂的时间，那它在这段时间里也就变成了“静态资源”，可以被 CDN 缓存加速。")]),t._v(" "),v("h2",{attrs:{id:"cdn-的负载均衡"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cdn-的负载均衡"}},[t._v("#")]),t._v(" CDN 的负载均衡")]),t._v(" "),v("p",[t._v("CDN运行由两个关键组成部分："),v("strong",[t._v("全局负载均衡")]),t._v("和"),v("strong",[t._v("缓存系统")]),t._v(" ,对应的是 DNS和缓存代理技术。")]),t._v(" "),v("h3",{attrs:{id:"全局负载均衡"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全局负载均衡"}},[t._v("#")]),t._v(" 全局负载均衡")]),t._v(" "),v("p",[t._v("全局负载均衡（Global Sever Load Balance）一般简称为 GSLB，它是 CDN 的“大脑”，主要的职责是当用户接入网络的时候在 CDN 专网中挑选出一个“最佳”节点提供服务，解决的是用户如何找到“最近的”边缘节点，对整个 CDN 网络进行“负载均衡”。")]),t._v(" "),v("h3",{attrs:{id:"cdn-的缓存代理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cdn-的缓存代理"}},[t._v("#")]),t._v(" CDN 的缓存代理")]),t._v(" "),v("p",[t._v("两个 CDN 的关键概念："),v("strong",[t._v("“命中”"),v("strong",[t._v("和")]),t._v("“回源”")]),t._v("。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("“命中”就是指用户访问的资源恰好在缓存系统里，可以直接返回给用户；")])]),t._v(" "),v("li",[v("p",[t._v("“回源”则正相反，缓存里没有，必须用代理的方式回源站取。")])])]),t._v(" "),v("p",[t._v("两个衡量 CDN 服务质量的指标：“命中率”和“回源率”。命中率就是命中次数与所有访问次数之比，回源率是回源次数与所有访问次数之比。好的 CDN 应该是命中率越高越好，回源率越低越好。")])])}),[],!1,null,null,null);v.default=a.exports}}]);