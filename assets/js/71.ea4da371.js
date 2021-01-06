(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{434:function(t,a,s){"use strict";s.r(a);var n=s(11),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"高效-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高效-css"}},[t._v("#")]),t._v(" 高效 CSS")]),t._v(" "),s("p",[t._v("如何编写高效 CSS 其实是一个过时的话题。")]),t._v(" "),s("p",[t._v("这方面曾经存在许多真知灼见，比如说 CSS 选择器的解析方向是从子到父，比如说 ID 选择器是最快的，不应该给 Class 选择器加上 Tag 限制，尽量避免使用后代选择器等。但是，随着浏览器解析引擎的发展，这些都已经变得不再那么重要了。MDN 上阐述高效 CSS 的文章也已经被标记为过时。")]),t._v(" "),s("p",[t._v("Antti Koivisto 是 Webkit 核心的贡献者之一，他曾说：")]),t._v(" "),s("blockquote",[s("p",[t._v("My view is that authors should not need to worry about optimizing selectors (and from what I see, they generally don’t), that should be the job of the engine.")])]),t._v(" "),s("p",[t._v("因此，如果把“高效 CSS”的含义限制为“高效 CSS 选择器”的话，那么实际上现在它已经不是开发者需要关心的问题了。我们需要做的事情变得更“政治正确”：保证功能与结构的良好可维护性即可。")]),t._v(" "),s("p",[t._v("那么 CSS 的性能还能通过什么方式提升呢？这就是下面的内容。")]),t._v(" "),s("h2",{attrs:{id:"reflow-repaint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reflow-repaint"}},[t._v("#")]),t._v(" Reflow & Repaint")]),t._v(" "),s("h3",{attrs:{id:"概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),s("p",[t._v("Reflow （回流）和 Repaint（重绘）是浏览器的两种动作。")]),t._v(" "),s("ul",[s("li",[t._v("Repaint 会在某个元素的外观发生变化，但没有影响布局时触发。比如说 "),s("code",[t._v("visibility")]),t._v("  / "),s("code",[t._v("outline")]),t._v("  / "),s("code",[t._v("background-color")]),t._v("  等 CSS 属性的变化将会触发 Repaint")]),t._v(" "),s("li",[t._v("Reflow 在元素变化影响到布局时触发")])]),t._v(" "),s("p",[t._v("显然，Reflow 的代价要比 Repaint 高昂得多，它影响到了页面部分（或者所有）的布局。一个 元素的 Reflow 动作同时也会触发它的所有后代 / 祖先 / 跟随它的 DOM 节点产生 Reflow")]),t._v(" "),s("p",[t._v("比如说：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello World"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Welcome: "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("strong")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("......"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("......"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("......"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("......"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("对这一小段 HTML 来说，如果 "),s("code",[t._v("<p>")]),t._v(" 元素上产生了 Reflow，那么 "),s("code",[t._v("<strong>")]),t._v(" 将会受到影响（因为它属于前者的后代元素），当然也跑不了 "),s("code",[t._v("<div>")]),t._v(" 和 "),s("code",[t._v("<body>")]),t._v(" （祖先元素），"),s("code",[t._v("<h5>")]),t._v(" 和 "),s("code",[t._v("<ol>")]),t._v(" 则躺枪：没事跟在别人后面干啥呢。")]),t._v(" "),s("p",[t._v("因此，大多数的 Reflow，其实都导致了整个页面重新渲染。这对于计算能力稍低的设备（如手机）来说是非常困难的。我经常发现桌面计算机上运行良好的动画效果到了手机上就看起来很痛苦。")]),t._v(" "),s("h3",{attrs:{id:"reflow-的触发点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reflow-的触发点"}},[t._v("#")]),t._v(" Reflow 的触发点")]),t._v(" "),s("ul",[s("li",[t._v("Window resizing")]),t._v(" "),s("li",[t._v("改变字体")]),t._v(" "),s("li",[t._v("增删样式表")]),t._v(" "),s("li",[t._v("内容改变，比如用户在输入框中输入")]),t._v(" "),s("li",[t._v("触发 CSS 伪类，比如 "),s("code",[t._v(":hover")]),t._v("  等")]),t._v(" "),s("li",[t._v("更改 class 属性")]),t._v(" "),s("li",[t._v("脚本操作 DOM")]),t._v(" "),s("li",[t._v("计算 "),s("code",[t._v("offsetWidth")]),t._v(" 与 "),s("code",[t._v("offsetHeight")])]),t._v(" "),s("li",[t._v("更改 style 属性")]),t._v(" "),s("li",[t._v("……")])]),t._v(" "),s("h3",{attrs:{id:"如何优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何优化"}},[t._v("#")]),t._v(" 如何优化")]),t._v(" "),s("p",[t._v("恩。。。看了这么多发现，要完全避免 Reflow 还是比较困难的。那么我们至少可以有一些办法去减少它们的影响吧。")]),t._v(" "),s("p",[t._v("以下的方法都是收集于一些国外作者的博客。")]),t._v(" "),s("h4",{attrs:{id:"尽量选择-dom-树底层的元素去修改-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尽量选择-dom-树底层的元素去修改-class"}},[t._v("#")]),t._v(" 尽量选择 DOM 树底层的元素去修改 Class")]),t._v(" "),s("p",[t._v("比如说，不要选择类似 Wrapper 这样的元素去修改 Class，而尽量找更加底层的元素。因为 Reflow 会影响所有后代祖先以及后邻，这么干可以尽量地减少 Reflow 的影响，从而提高 CSS 渲染性能。")]),t._v(" "),s("h4",{attrs:{id:"避免设置多个内联样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免设置多个内联样式"}},[t._v("#")]),t._v(" 避免设置多个内联样式")]),t._v(" "),s("p",[t._v("这里的意思其实是说不要使用 JS 来给元素按部就班地设置样式 —— 因为每一次样式变化都会引起一次 Reflow，最好把样式整合为一个 Class 然后一次性加到元素上面去。")]),t._v(" "),s("p",[t._v("还有另外一种解决办法是在设置样式前先将其脱离正常文档流，比如 "),s("code",[t._v("display")]),t._v(" 属性设为 "),s("code",[t._v("none")]),t._v("，然后所有设置都完成后再变回来。这样也是可以接受的。")]),t._v(" "),s("h4",{attrs:{id:"如果要使用动画尽量选择-position-为-fixed-或-absolute-的元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果要使用动画尽量选择-position-为-fixed-或-absolute-的元素"}},[t._v("#")]),t._v(" 如果要使用动画尽量选择 Position 为 Fixed 或 Absolute 的元素")]),t._v(" "),s("p",[t._v("动画的每一帧都会引起 Repaint 或者 Reflow，最好是可以让它脱离正常文档流，这样就绝对不会引起大规模持续的 Reflow")]),t._v(" "),s("h4",{attrs:{id:"不要选用-table-布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不要选用-table-布局"}},[t._v("#")]),t._v(" 不要选用 Table 布局")]),t._v(" "),s("p",[t._v("虽然我们已经有很多理由不去使用 table 布局了，但这又是另外一个 —— 任意一个单元格的小改动都很有可能触发整个布局所有节点的变化，带来巨大的性能开销。")]),t._v(" "),s("p")])}),[],!1,null,null,null);a.default=e.exports}}]);