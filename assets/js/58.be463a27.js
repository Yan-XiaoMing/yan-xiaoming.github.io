(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{468:function(e,a,v){"use strict";v.r(a);var _=v(2),t=Object(_.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"/img/1628153796992_AC51D4C3-1DE3-41CC-8B4F-37A96D47F926.png",alt:"webpack"}})]),e._v(" "),a("h2",{attrs:{id:"什么是webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是webpack"}},[e._v("#")]),e._v(" 什么是webpack")]),e._v(" "),a("p",[e._v("本质上,webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时,它会递归地构建一个依赖关系图(dependency graph),其中包含应用程序需要的每个模块,然后将所有这些模块打包成一个或多个 bundle。")]),e._v(" "),a("p",[e._v("webpack 就像一条生产线,要经过一系列处理流程后才能将源文件转换成输出结果。 这条生产线上的每个处理流程的职责都是单一的,多个流程之间有存在依赖关系,只有完成当前处理后才能交给下一个流程去处理。 插件就像是一个插入到生产线中的一个功能,在特定的时机对生产线上的资源做处理。")]),e._v(" "),a("p",[e._v("webpack 通过 Tapable 来组织这条复杂的生产线。 webpack 在运行过程中会广播事件,插件只需要监听它所关心的事件,就能加入到这条生产线中,去改变生产线的运作。 webpack 的事件流机制保证了插件的有序性,使得整个系统扩展性很好。")]),e._v(" "),a("p",[e._v("​\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t -- 《深入浅出 webpack》 吴浩麟")]),e._v(" "),a("h2",{attrs:{id:"webpack的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack的作用"}},[e._v("#")]),e._v(" webpack的作用")]),e._v(" "),a("p",[a("code",[e._v("webpack")]),e._v("的作用有以下几点：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("**模块打包。**可以将不同模块的文件打包整合在一起，并且保证它们之间的引用正确，执行有序。利用打包我们就可以在开发的时候根据我们自己的业务自由划分文件模块，保证项目结构的清晰和可读性。")])]),e._v(" "),a("li",[a("p",[e._v("**编译兼容。**在前端的“上古时期”，手写一堆浏览器兼容代码一直是令前端工程师头皮发麻的事情，而在今天这个问题被大大的弱化了，通过"),a("code",[e._v("webpack")]),e._v("的"),a("code",[e._v("Loader")]),e._v("机制，不仅仅可以帮助我们对代码做"),a("code",[e._v("polyfill")]),e._v("，还可以编译转换诸如"),a("code",[e._v(".less, .vue, .jsx")]),e._v("这类在浏览器无法识别的格式文件，让我们在开发的时候可以使用新特性和新语法做开发，提高开发效率。")])]),e._v(" "),a("li",[a("p",[e._v("**能力扩展。**通过"),a("code",[e._v("webpack")]),e._v("的"),a("code",[e._v("Plugin")]),e._v("机制我们在实现模块化打包和编译兼容的基础上，可以进一步实现诸如按需加载，代码压缩等一系列功能，帮助我们进一步提高自动化程度，工程效率以及打包输出的质量。")])])]),e._v(" "),a("h2",{attrs:{id:"核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[e._v("#")]),e._v(" 核心概念")]),e._v(" "),a("h3",{attrs:{id:"entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry"}},[e._v("#")]),e._v(" Entry")]),e._v(" "),a("p",[e._v("入口起点(entry point)指示 webpack 应该使用哪个模块,来作为构建其内部依赖图的开始。")]),e._v(" "),a("p",[e._v("进入入口起点后,webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。")]),e._v(" "),a("p",[e._v("每个依赖项随即被处理,最后输出到称之为 bundles 的文件中。")]),e._v(" "),a("h3",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" Output")]),e._v(" "),a("p",[e._v("output 属性告诉 webpack 在哪里输出它所创建的 bundles,以及如何命名这些文件,默认值为 ./dist。")]),e._v(" "),a("p",[e._v("基本上,整个应用程序结构,都会被编译到你指定的输出路径的文件夹中。")]),e._v(" "),a("h3",{attrs:{id:"module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[e._v("#")]),e._v(" Module")]),e._v(" "),a("p",[e._v("模块,在 Webpack 里一切皆模块,一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。")]),e._v(" "),a("h3",{attrs:{id:"chunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunk"}},[e._v("#")]),e._v(" Chunk")]),e._v(" "),a("p",[e._v("代码块,一个 Chunk 由多个模块组合而成,用于代码合并与分割。")]),e._v(" "),a("h3",{attrs:{id:"loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[e._v("#")]),e._v(" Loader")]),e._v(" "),a("p",[e._v("loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。")]),e._v(" "),a("p",[e._v("loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块,然后你就可以利用 webpack 的打包能力,对它们进行处理。")]),e._v(" "),a("p",[e._v("本质上,webpack loader 将所有类型的文件,转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。")]),e._v(" "),a("h3",{attrs:{id:"plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[e._v("#")]),e._v(" Plugin")]),e._v(" "),a("p",[e._v("loader 被用于转换某些类型的模块,而插件则可以用于执行范围更广的任务。")]),e._v(" "),a("p",[e._v("插件的范围包括,从打包优化和压缩,一直到重新定义环境中的变量。插件接口功能极其强大,可以用来处理各种各样的任务。")]),e._v(" "),a("h2",{attrs:{id:"构建流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建流程"}},[e._v("#")]),e._v(" 构建流程")]),e._v(" "),a("p",[e._v("Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("初始化参数")]),e._v("：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数")]),e._v(" "),a("li",[a("code",[e._v("开始编译")]),e._v("：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译")]),e._v(" "),a("li",[a("code",[e._v("确定入口")]),e._v("：根据配置中的 entry 找出所有的入口文件")]),e._v(" "),a("li",[a("code",[e._v("编译模块")]),e._v("：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理")]),e._v(" "),a("li",[a("code",[e._v("完成模块编译")]),e._v("：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系")]),e._v(" "),a("li",[a("code",[e._v("输出资源")]),e._v("：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会")]),e._v(" "),a("li",[a("code",[e._v("输出完成")]),e._v("：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统")])]),e._v(" "),a("h2",{attrs:{id:"loader和plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader和plugin"}},[e._v("#")]),e._v(" Loader和Plugin")]),e._v(" "),a("h3",{attrs:{id:"常见loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见loader"}},[e._v("#")]),e._v(" 常见loader")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("sass-loader")]),e._v("：将SCSS/SASS代码转换成CSS")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("css-loader")]),e._v("：加载 CSS，支持模块化、压缩、文件导入等特性")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("style-loader")]),e._v("：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("postcss-loader")]),e._v("：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("image-loader")]),e._v("：加载并且压缩图片文件")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("babel-loader")]),e._v("：把 ES6 转换成 ES5")])])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("raw-loader")]),e._v("：加载文件原始内容（utf-8）")]),e._v(" "),a("li",[a("code",[e._v("file-loader")]),e._v("：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)")]),e._v(" "),a("li",[a("code",[e._v("url-loader")]),e._v("：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)")]),e._v(" "),a("li",[a("code",[e._v("source-map-loader")]),e._v("：加载额外的 Source Map 文件，以方便断点调试")]),e._v(" "),a("li",[a("code",[e._v("svg-inline-loader")]),e._v("：将压缩后的 SVG 内容注入代码中")]),e._v(" "),a("li",[a("code",[e._v("json-loader")]),e._v(" 加载 JSON 文件（默认包含）")]),e._v(" "),a("li",[a("code",[e._v("handlebars-loader")]),e._v(": 将 Handlebars 模版编译成函数并返回")]),e._v(" "),a("li",[a("code",[e._v("ts-loader")]),e._v(": 将 TypeScript 转换成 JavaScript")]),e._v(" "),a("li",[a("code",[e._v("awesome-typescript-loader")]),e._v("：将 TypeScript 转换成 JavaScript，性能优于 ts-loader")]),e._v(" "),a("li",[a("code",[e._v("eslint-loader")]),e._v("：通过 ESLint 检查 JavaScript 代码")]),e._v(" "),a("li",[a("code",[e._v("tslint-loader")]),e._v("：通过 TSLint检查 TypeScript 代码")]),e._v(" "),a("li",[a("code",[e._v("mocha-loader")]),e._v("：加载 Mocha 测试用例的代码")]),e._v(" "),a("li",[a("code",[e._v("coverjs-loader")]),e._v("：计算测试的覆盖率")]),e._v(" "),a("li",[a("code",[e._v("vue-loader")]),e._v("：加载 Vue.js 单文件组件")]),e._v(" "),a("li",[a("code",[e._v("i18n-loader")]),e._v(": 国际化")]),e._v(" "),a("li",[a("code",[e._v("cache-loader")]),e._v(": 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里")])]),e._v(" "),a("h3",{attrs:{id:"常见plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见plugin"}},[e._v("#")]),e._v(" 常见plugin")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("define-plugin")]),e._v("：定义环境变量 (Webpack4 之后指定 mode 会自动配置)")]),e._v(" "),a("li",[a("code",[e._v("ignore-plugin")]),e._v("：忽略部分文件")]),e._v(" "),a("li",[a("code",[e._v("html-webpack-plugin")]),e._v("：简化 HTML 文件创建 (依赖于 html-loader)")]),e._v(" "),a("li",[a("code",[e._v("web-webpack-plugin")]),e._v("：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用")]),e._v(" "),a("li",[a("code",[e._v("uglifyjs-webpack-plugin")]),e._v("：不支持 ES6 压缩 (Webpack4 以前)")]),e._v(" "),a("li",[a("code",[e._v("terser-webpack-plugin")]),e._v(": 支持压缩 ES6 (Webpack4)")]),e._v(" "),a("li",[a("code",[e._v("webpack-parallel-uglify-plugin")]),e._v(": 多进程执行代码压缩，提升构建速度")]),e._v(" "),a("li",[a("code",[e._v("mini-css-extract-plugin")]),e._v(": 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代extract-text-webpack-plugin)")]),e._v(" "),a("li",[a("code",[e._v("serviceworker-webpack-plugin")]),e._v("：为网页应用增加离线缓存功能")]),e._v(" "),a("li",[a("code",[e._v("clean-webpack-plugin")]),e._v(": 目录清理")]),e._v(" "),a("li",[a("code",[e._v("ModuleConcatenationPlugin")]),e._v(": 开启 Scope Hoisting")]),e._v(" "),a("li",[a("code",[e._v("speed-measure-webpack-plugin")]),e._v(": 可以看到每个 Loader 和 Plugin 执行耗时 (整个打包耗时、每个 Plugin 和 Loader 耗时)")]),e._v(" "),a("li",[a("code",[e._v("webpack-bundle-analyzer")]),e._v(": 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)")])]),e._v(" "),a("h3",{attrs:{id:"loader和plugin区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader和plugin区别"}},[e._v("#")]),e._v(" loader和plugin区别")]),e._v(" "),a("p",[a("code",[e._v("Loader")]),e._v(" 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。")]),e._v(" "),a("p",[a("code",[e._v("Plugin")]),e._v(" 就是插件，基于事件流框架 "),a("code",[e._v("Tapable")]),e._v("，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。")]),e._v(" "),a("p",[a("code",[e._v("Loader")]),e._v(" 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。")]),e._v(" "),a("p",[a("code",[e._v("Plugin")]),e._v(" 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。")])])}),[],!1,null,null,null);a.default=t.exports}}]);