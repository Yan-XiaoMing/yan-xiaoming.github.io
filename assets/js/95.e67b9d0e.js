(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{506:function(e,t,n){"use strict";n.r(t);var _=n(2),d=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"传统-diff-算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传统-diff-算法"}},[e._v("#")]),e._v(" 传统 diff 算法")]),e._v(" "),t("p",[e._v("计算一棵树形结构转换成另一棵树形结构的最少操作，是一个复杂且值得研究的问题。"),t("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//grfia.dlsi.ua.es/ml/algorithms/references/editsurvey_bille.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("传统 diff 算法"),t("OutboundLink")],1),e._v("通过循环递归对节点进行依次对比，效率低下，算法复杂度达到 O(n^3)，其中 n 是树中节点的总数。")]),e._v(" "),t("h2",{attrs:{id:"react-diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react-diff"}},[e._v("#")]),e._v(" React diff")]),e._v(" "),t("p",[e._v("传统 diff 算法的复杂度为 O(n^3)，显然这是无法满足性能要求的。"),t("strong",[e._v("React 通过制定大胆的策略，将 O(n^3) 复杂度的问题转换成 O(n) 复杂度的问题")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"diff-策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diff-策略"}},[e._v("#")]),e._v(" diff 策略")]),e._v(" "),t("ol",[t("li",[e._v("Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。")]),e._v(" "),t("li",[e._v("拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。")]),e._v(" "),t("li",[e._v("对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。")])]),e._v(" "),t("p",[e._v("基于以上三个前提策略，React 分别对 "),t("strong",[e._v("tree diff")]),e._v("、"),t("strong",[e._v("component diff")]),e._v(" 以及 "),t("strong",[e._v("element diff")]),e._v(" 进行算法优化，事实也证明这三个前提策略是合理且准确的，它保证了整体界面构建的性能。")]),e._v(" "),t("h3",{attrs:{id:"tree-diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tree-diff"}},[e._v("#")]),e._v(" tree diff")]),e._v(" "),t("p",[e._v("基于策略一，React 对树的算法进行了简洁明了的优化，即对树进行分层比较，两棵树只会对同一层次的节点进行比较。")]),e._v(" "),t("p",[e._v("既然 DOM 节点跨层级的移动操作少到可以忽略不计，针对这一现象，React 通过 updateDepth 对 Virtual DOM 树进行层级控制，只会对相同颜色方框内的 DOM 节点进行比较，即同一个父节点下的所有子节点。当发现节点已经不存在，则该节点及其子节点会被完全删除掉，不会用于进一步的比较。这样只需要对树进行一次遍历，便能完成整个 DOM 树的比较。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pic1.zhimg.com/80/0c08dbb6b1e0745780de4d208ad51d34_720w.png",alt:"img"}})]),e._v(" "),t("p",[e._v("所以大部分人知道了以后都会有这样的疑问:")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("如果出现了 DOM 节点跨层级的移动操作，React diff 会有怎样的表现呢")]),e._v("？")])]),e._v(" "),t("p",[e._v("如下图，A 节点（包括其子节点）整个被移动到 D 节点下，由于 React 只会简单的考虑同层级节点的位置变换，而对于不同层级的节点，只有创建和删除操作。当根节点发现子节点中 A 消失了，就会直接销毁 A；当 D 发现多了一个子节点 A，则会创建新的 A（包括子节点）作为其子节点。此时，React diff 的执行情况："),t("strong",[e._v("create A -> create B -> create C -> delete A")]),e._v("。")]),e._v(" "),t("p",[e._v("由此可发现，当出现节点跨层级移动时，并不会出现想象中的移动操作，而是以 A 为根节点的树被整个重新创建，这是一种影响 React 性能的操作，因此 "),t("strong",[e._v("React 官方建议不要进行 DOM 节点跨层级的操作")]),e._v("。")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：在开发组件时，保持稳定的 DOM 结构会有助于性能的提升。例如，可以通过 CSS 隐藏或显示节点，而不是真的移除或添加 DOM 节点。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pic2.zhimg.com/80/d712a73769688afe1ef1a055391d99ed_720w.png",alt:"img"}})]),e._v(" "),t("h3",{attrs:{id:"component-diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#component-diff"}},[e._v("#")]),e._v(" component diff")]),e._v(" "),t("p",[e._v("React 是基于组件构建应用的，对于组件间的比较所采取的策略也是简洁高效。")]),e._v(" "),t("ol",[t("li",[e._v("如果是同一类型的组件，按照原策略继续比较 virtual DOM tree。")]),e._v(" "),t("li",[e._v("如果不是，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点。")]),e._v(" "),t("li",[e._v("对于同一类型的组件，有可能其 Virtual DOM 没有任何变化，如果能够确切的知道这点那可以节省大量的 diff 运算时间，因此 React 允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff。")])]),e._v(" "),t("p",[e._v("如下图，当 component D 改变为 component G 时，即使这两个 component 结构相似，一旦 React 判断 D 和 G 是不同类型的组件，就不会比较二者的结构，而是直接删除 component D，重新创建 component G 以及其子节点。虽然当两个 component 是不同类型但结构相似时，React diff 会影响性能，但正如 React 官方博客所言：不同类型的 component 是很少存在相似 DOM tree 的机会，因此这种极端因素很难在实现开发过程中造成重大影响的。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pic1.zhimg.com/80/52654992aba15fc90e2dac8b2387d0c4_720w.png",alt:"img"}})]),e._v(" "),t("h3",{attrs:{id:"element-diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#element-diff"}},[e._v("#")]),e._v(" element diff")]),e._v(" "),t("p",[e._v("当节点处于同一层级时，React diff 提供了三种节点操作，分别为："),t("strong",[e._v("INSERT_MARKUP")]),e._v("（插入）、"),t("strong",[e._v("MOVE_EXISTING")]),e._v("（移动）和 "),t("strong",[e._v("REMOVE_NODE")]),e._v("（删除）。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("INSERT_MARKUP")]),e._v("，新的 component 类型不在老集合里， 即是全新的节点，需要对新节点执行插入操作。")]),e._v(" "),t("li",[t("strong",[e._v("MOVE_EXISTING")]),e._v("，在老集合有新 component 类型，且 element 是可更新的类型，generateComponentChildren 已调用 receiveComponent，这种情况下 prevChild=nextChild，就需要做移动操作，可以复用以前的 DOM 节点。")]),e._v(" "),t("li",[t("strong",[e._v("REMOVE_NODE")]),e._v("，老 component 类型，在新集合里也有，但对应的 element 不同则不能直接复用和更新，需要执行删除操作，或者老 component 不在新集合里的，也需要执行删除操作。")])]),e._v(" "),t("p",[e._v("如下图，老集合中包含节点：A、B、C、D，更新后的新集合中包含节点：B、A、D、C，此时新老集合进行 diff 差异化对比，发现 B != A，则创建并插入 B 至新集合，删除老集合 A；以此类推，创建并插入 A、D 和 C，删除 B、C 和 D。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pic2.zhimg.com/80/7541670c089b84c59b84e9438e92a8e9_720w.png",alt:"img"}})]),e._v(" "),t("p",[e._v("React 发现这类操作繁琐冗余，因为这些都是相同的节点，但由于位置发生变化，导致需要进行繁杂低效的删除、创建操作，其实只要对这些节点进行位置移动即可。")]),e._v(" "),t("p",[e._v("针对这一现象，React 提出优化策略：允许开发者对同一层级的同组子节点，添加唯一 key 进行区分，虽然只是小小的改动，性能上却发生了翻天覆地的变化！")]),e._v(" "),t("p",[e._v("新老集合所包含的节点，如下图所示，新老集合进行 diff 差异化对比，通过 key 发现新老集合中的节点都是相同的节点，因此无需进行节点删除和创建，只需要将老集合中节点的位置进行移动，更新为新集合中节点的位置，此时 React 给出的 diff 结果为：B、D 不做任何操作，A、C 进行移动操作，即可。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pic4.zhimg.com/80/c0aa97d996de5e7f1069e97ca3accfeb_720w.png",alt:"img"}})]),e._v(" "),t("blockquote",[t("p",[e._v("高效的 diff 到底是如何运作的呢？")])]),e._v(" "),t("p",[t("strong",[e._v("首先")]),e._v("对新集合的节点进行循环遍历，for (name in nextChildren)，通过唯一 key 可以判断新老集合中是否存在相同的节点，if (prevChild === nextChild)，如果存在相同节点，则进行移动操作，但在移动前需要将当前节点在老集合中的位置与 lastIndex 进行比较，if (child._mountIndex < lastIndex)，则进行节点移动操作，否则不执行该操作。这是一种顺序优化手段，lastIndex 一直在更新，表示访问过的节点在老集合中最右的位置（即最大的位置），如果新集合中当前访问的节点比 lastIndex 大，说明当前访问节点在老集合中就比上一个节点位置靠后，则该节点不会影响其他节点的位置，因此不用添加到差异队列中，即不执行移动操作，只有当访问的节点比 lastIndex 小时，才需要进行移动操作。")]),e._v(" "),t("p",[e._v("以上图为例，可以更为清晰直观的描述 diff 的差异对比过程：")]),e._v(" "),t("ul",[t("li",[e._v("从新集合中取得 B，判断老集合中存在相同节点 B，通过对比节点位置判断是否进行移动操作，B 在老集合中的位置 B._mountIndex = 1，此时 lastIndex = 0，不满足 child._mountIndex < lastIndex 的条件，因此不对 B 进行移动操作；更新 lastIndex = Math.max(prevChild._mountIndex, lastIndex)，其中 prevChild._mountIndex 表示 B 在老集合中的位置，则 lastIndex ＝ 1，并将 B 的位置更新为新集合中的位置prevChild._mountIndex = nextIndex，此时新集合中 B._mountIndex = 0，nextIndex++ 进入下一个节点的判断。")]),e._v(" "),t("li",[e._v("从新集合中取得 A，判断老集合中存在相同节点 A，通过对比节点位置判断是否进行移动操作，A 在老集合中的位置 A._mountIndex = 0，此时 lastIndex = 1，满足 child._mountIndex < lastIndex的条件，因此对 A 进行移动操作enqueueMove(this, child._mountIndex, toIndex)，其中 toIndex 其实就是 nextIndex，表示 A 需要移动到的位置；更新 lastIndex = Math.max(prevChild._mountIndex, lastIndex)，则 lastIndex ＝ 1，并将 A 的位置更新为新集合中的位置 prevChild._mountIndex = nextIndex，此时新集合中A._mountIndex = 1，nextIndex++ 进入下一个节点的判断。")]),e._v(" "),t("li",[e._v("从新集合中取得 D，判断老集合中存在相同节点 D，通过对比节点位置判断是否进行移动操作，D 在老集合中的位置 D._mountIndex = 3，此时 lastIndex = 1，不满足 child._mountIndex < lastIndex的条件，因此不对 D 进行移动操作；更新 lastIndex = Math.max(prevChild._mountIndex, lastIndex)，则 lastIndex ＝ 3，并将 D 的位置更新为新集合中的位置 prevChild._mountIndex = nextIndex，此时新集合中D._mountIndex = 2，nextIndex++ 进入下一个节点的判断。")]),e._v(" "),t("li",[e._v("从新集合中取得 C，判断老集合中存在相同节点 C，通过对比节点位置判断是否进行移动操作，C 在老集合中的位置 C._mountIndex = 2，此时 lastIndex = 3，满足 child._mountIndex < lastIndex 的条件，因此对 C 进行移动操作 enqueueMove(this, child._mountIndex, toIndex)；更新 lastIndex = Math.max(prevChild._mountIndex, lastIndex)，则 lastIndex ＝ 3，并将 C 的位置更新为新集合中的位置 prevChild._mountIndex = nextIndex，此时新集合中 C._mountIndex = 3，nextIndex++ 进入下一个节点的判断，由于 C 已经是最后一个节点，因此 diff 到此完成。")])]),e._v(" "),t("blockquote",[t("p",[e._v("以上主要分析新老集合中存在相同节点但"),t("strong",[e._v("位置不同")]),e._v("时，对节点进行位置移动的情况。")]),e._v(" "),t("p",[e._v("如果新集合中有新加入的节点且老集合存在需要删除的节点,React diff 又是如何对比运作的呢？")])]),e._v(" "),t("p",[e._v("以下图为例：")]),e._v(" "),t("ul",[t("li",[e._v("从新集合中取得 B，判断老集合中存在相同节点 B，由于 B 在老集合中的位置 B._mountIndex = 1，此时lastIndex = 0，因此不对 B 进行移动操作；更新 lastIndex ＝ 1，并将 B 的位置更新为新集合中的位置B._mountIndex = 0，nextIndex++进入下一个节点的判断。")]),e._v(" "),t("li",[e._v("从新集合中取得 E，判断老集合中不存在相同节点 E，则创建新节点 E；更新 lastIndex ＝ 1，并将 E 的位置更新为新集合中的位置，nextIndex++进入下一个节点的判断。")]),e._v(" "),t("li",[e._v("从新集合中取得 C，判断老集合中存在相同节点 C，由于 C 在老集合中的位置C._mountIndex = 2，lastIndex = 1，此时 C._mountIndex > lastIndex，因此不对 C 进行移动操作；更新 lastIndex ＝ 2，并将 C 的位置更新为新集合中的位置，nextIndex++ 进入下一个节点的判断。")]),e._v(" "),t("li",[e._v("从新集合中取得 A，判断老集合中存在相同节点 A，由于 A 在老集合中的位置A._mountIndex = 0，lastIndex = 2，此时 A._mountIndex < lastIndex，因此对 A 进行移动操作；更新 lastIndex ＝ 2，并将 A 的位置更新为新集合中的位置，nextIndex++ 进入下一个节点的判断。")]),e._v(" "),t("li",[e._v("当完成新集合中所有节点 diff 时，最后还需要对老集合进行循环遍历，判断是否存在新集合中没有但老集合中仍存在的节点，发现存在这样的节点 D，因此删除节点 D，到此 diff 全部完成。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pic1.zhimg.com/80/7b9beae0cf0a5bc8c2e82d00c43d1c90_720w.png",alt:"img"}})]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("当然，React diff 还是存在些许不足与待优化的地方，如下图所示，若新集合的节点更新为：D、A、B、C，与老集合对比只有 D 节点移动，而 A、B、C 仍然保持原有的顺序，理论上 diff 应该只需对 D 执行移动操作，然而由于 D 在老集合的位置是最大的，导致其他节点的 _mountIndex < lastIndex，造成 D 没有执行移动操作，而是 A、B、C 全部移动到 D 节点后面的现象。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://pic2.zhimg.com/80/1b8dac5b9b3e4452dec8d5447d7717ad_720w.png",alt:"img"}})]),e._v(" "),t("blockquote",[t("p",[e._v("建议：在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。")])]),e._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("ul",[t("li",[e._v("React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题；")]),e._v(" "),t("li",[e._v("React 通过"),t("strong",[e._v("分层求异")]),e._v("的策略，对 tree diff 进行算法优化；")]),e._v(" "),t("li",[e._v("React 通过"),t("strong",[e._v("相同类生成相似树形结构，不同类生成不同树形结构")]),e._v("的策略，对 component diff 进行算法优化；")]),e._v(" "),t("li",[e._v("React 通过"),t("strong",[e._v("设置唯一 key")]),e._v("的策略，对 element diff 进行算法优化；")]),e._v(" "),t("li",[e._v("建议，在开发组件时，保持稳定的 DOM 结构会有助于性能的提升；")]),e._v(" "),t("li",[e._v("建议，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。")])])])}),[],!1,null,null,null);t.default=d.exports}}]);