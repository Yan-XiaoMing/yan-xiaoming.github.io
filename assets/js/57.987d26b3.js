(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{466:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("code",[s._v("source map")]),s._v(" 是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 soucre map。"),t("code",[s._v("sourceMap")]),s._v("可以帮助我们快速定位到源代码的位置，提高我们的开发效率。"),t("code",[s._v("sourceMap")]),s._v("其实并不是"),t("code",[s._v("Webpack")]),s._v("特有的功能，而是"),t("code",[s._v("Webpack")]),s._v("支持"),t("code",[s._v("sourceMap")]),s._v("，像"),t("code",[s._v("JQuery")]),s._v("也支持"),t("code",[s._v("souceMap")]),s._v("。")]),s._v(" "),t("p",[s._v("map文件只要不打开开发者工具，浏览器是不会加载的。")]),s._v(" "),t("h2",{attrs:{id:"sourcemap原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap原理"}},[s._v("#")]),s._v(" sourcemap原理")]),s._v(" "),t("p",[s._v("既然是一种源码的映射，那必然就需要有一份映射的文件，来标记混淆代码里对应的源码的位置，通常这份映射文件以"),t("code",[s._v(".map")]),s._v("结尾，里边的数据结构大概长这样：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Source Map版本")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"file"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"out.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出文件（可选）")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sourceRoot"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 源文件根目录（可选）")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sources"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bar.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 源文件列表")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"sourcesContent"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 源内容列表（可选，和源文件列表顺序一致）")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"names"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"maps"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"are"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fun"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// mappings使用的符号名称列表")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"mappings"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A,AAAB;;ABCDE;"')]),s._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 带有编码映射数据的字符串")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("其中"),t("code",[s._v("mappings")]),s._v("数据有如下规则：")]),s._v(" "),t("ul",[t("li",[s._v("生成文件中的一行的每个组用“;”分隔；")]),s._v(" "),t("li",[s._v("每一段用“,”分隔；")]),s._v(" "),t("li",[s._v("每个段由1、4或5个可变长度字段组成；")])]),s._v(" "),t("p",[s._v("有了这份映射文件，我们只需要在我们的压缩代码的最末端加上这句注释，即可让sourceMap生效：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//# sourceURL=/path/to/file.js.map")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("有了这段注释后，浏览器就会通过"),t("code",[s._v("sourceURL")]),s._v("去获取这份映射文件，通过解释器解析后，实现源码和混淆代码之间的映射。因此sourceMap其实也是一项需要浏览器支持的技术。")]),s._v(" "),t("p",[s._v("webpack打包出来的bundle文件，可以发现在默认的"),t("code",[s._v("development")]),s._v("开发模式下，每个"),t("code",[s._v("_webpack_modules__")]),s._v("文件模块的代码最末端，都会加上"),t("code",[s._v("//# sourceURL=webpack://file-path?")]),s._v("，从而实现对sourceMap的支持。")]),s._v(" "),t("h2",{attrs:{id:"sourcemap线上方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap线上方案"}},[s._v("#")]),s._v(" sourcemap线上方案")]),s._v(" "),t("p",[s._v("线上环境一般有三种处理方案：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("hidden-source-map")]),s._v("：借助第三方错误监控平台 Sentry 使用")]),s._v(" "),t("li",[t("code",[s._v("nosources-source-map")]),s._v("：只会显示具体行数以及查看源代码的错误栈。安全性比 sourcemap 高")]),s._v(" "),t("li",[t("code",[s._v("sourcemap")]),s._v("：通过 nginx 设置将 .map 文件只对白名单开放(公司内网)")])]),s._v(" "),t("p",[s._v("注意：避免在生产中使用 "),t("code",[s._v("inline-")]),s._v(" 和 "),t("code",[s._v("eval-")]),s._v("，因为它们会增加 bundle 体积大小，并降低整体性能。")])])}),[],!1,null,null,null);t.default=n.exports}}]);