(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{482:function(e,t,s){"use strict";s.r(t);var _=s(2),v=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"websocket-的分布式集群方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket-的分布式集群方案"}},[e._v("#")]),e._v(" Websocket 的分布式集群方案")]),e._v(" "),t("h4",{attrs:{id:"产品需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#产品需求"}},[e._v("#")]),e._v(" 产品需求:")]),e._v(" "),t("p",[e._v("最终希望构建一个 Websocket"),t("strong",[e._v("集群")]),e._v("来实现与客户端的实时通信，比如聊天室")]),e._v(" "),t("p",[e._v("我们需要构建一个 websocket 服务器并让所有的客户端连接这个机器。")]),e._v(" "),t("p",[e._v("但如果交互量非常庞大,假设需要同时支持 10w 人的并发量,该怎么办?（腾讯 IMWeb -- 3 面）")]),e._v(" "),t("h4",{attrs:{id:"近品分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#近品分析"}},[e._v("#")]),e._v(" 近品分析")]),e._v(" "),t("p",[e._v("斗鱼以及 b 站的直播弹幕,都是很好例子。下面是斗鱼的请求包,其建立了一个名为"),t("code",[e._v("danmuproxy.douyu.com")]),e._v("的 ws 连接，如下图:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/image-20210126204116048.png",alt:"image-20210126204116048"}})]),e._v(" "),t("p",[e._v("而且从其命名中的"),t("code",[e._v("proxy")]),e._v("也可以推测出他们把流量做了分发。\n"),t("strong",[e._v("将流量负载均衡到不同的服务器上并提供一种通信机制让各个服务器能进行消息同步")]),e._v("（不然用户 A 连上服务器 A，用户 B 脸上服务器 B，它们发消息的时候对方都没法收到）")]),e._v(" "),t("p",[e._v("直接影响就是 A 看不到 B 所发的消息(弹幕),反之亦然")]),e._v(" "),t("h3",{attrs:{id:"websocket-集群具体方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#websocket-集群具体方案"}},[e._v("#")]),e._v(" Websocket 集群具体方案")]),e._v(" "),t("p",[e._v("客户端与 Websocket 服务器的交互是"),t("strong",[e._v("有状态")]),e._v("(stateful)的，我们需要把每个客户端的连接数据保存在内存中。而当我们要实现"),t("strong",[e._v("分布式")]),e._v("的时候，我们则需要在各个机器上共享这些信息，所以我们需要一个"),t("strong",[e._v("Publish/Subscribe broker")])]),e._v(" "),t("p",[e._v("假设我们现在使用 Redis 作为我们的解决方案，然后我们现在有三台 Websocket 服务器"),t("code",[e._v("WS1")]),e._v("，"),t("code",[e._v("WS2")]),e._v("和"),t("code",[e._v("WS3")]),e._v("。然后每台服务器上连了三个用户。"),t("code",[e._v("WS1")]),e._v("机器上的其中一个用户发送了某个消息到聊天室，在你的 Websocket 服务器的逻辑中，你首先会把这个消息存入数据库做一个持久化（比如做历史消息），然后将这个消息根据 channelId 之类的东西推送至这个聊天室的 channel(Websocket 的 channel 的实现会在下一篇中详细讲)，我们假设这个 channelId 叫“"),t("strong",[e._v("The World")]),e._v("”。")]),e._v(" "),t("p",[e._v("现在你把数据安全的存入了 DB 里，并且你发布了一个事件给你的"),t("strong",[e._v("Pub/Sub broker")]),e._v("(Redis channel)来通知其他对此感兴趣的部分(其他 Websocket 或者 API 服务器等)。所以之前的另外两个服务器"),t("code",[e._v("WS2")]),e._v("和"),t("code",[e._v("WS3")]),e._v("因为对这部分感兴趣所以他们也通过脚本监听了这一个 Redis channel，它们就会得到通知，然后每个服务器就会对 DB 请求 query 获取更新然后 emit 消息给 Websocket 上对应 channel。")]),e._v(" "),t("p",[e._v("这就是你们可以看到的，使用 Pub/Sub brooker 来实现了一个横向扩展的 Websocket 集群。")]),e._v(" "),t("p",[e._v("从这里也可以看到集群具有的有点，高扩展性以及高可用性。")]),e._v(" "),t("h2",{attrs:{id:"nginx-的负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的负载均衡"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://papergangsta.github.io/blogs/other/nginx%E7%9A%84%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx 的负载均衡"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);