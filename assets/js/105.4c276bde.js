(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{469:function(e,a,t){"use strict";t.r(a);var v=t(11),_=Object(v.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("使用 "),t("a",{attrs:{href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-cli"),t("OutboundLink")],1),e._v(" 创建的脚手架项目，目前最大的问题是创建后无法自动地进行升级。虽然 3.0 版本已经计划将其作为头等大事来进行改善 ("),t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/issues/589",target:"_blank",rel:"noopener noreferrer"}},[e._v("#589"),t("OutboundLink")],1),e._v(")，但是现行的版本依然要面对它。以下基于 webpack template 来进行升级时的一些要点解析。")]),e._v(" "),t("h2",{attrs:{id:"依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[e._v("#")]),e._v(" 依赖")]),e._v(" "),t("p",[e._v("项目整体升级的一个重要目的体现在依赖的升级，如 webpack 从老版本 2 升级到 3，以及 babel / eslint 等各种配套工具的升级（至于 Vue 反倒不是什么大问题）。")]),e._v(" "),t("p",[e._v("在对依赖进行升级的时候主要有两个参考：")]),e._v(" "),t("ul",[t("li",[e._v("目前最新的脚手架 ("),t("a",{attrs:{href:"https://github.com/vuejs-templates/webpack",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuejs-templates/webpack"),t("OutboundLink")],1),e._v(") 依赖版本")]),e._v(" "),t("li",[t("code",[e._v("yarn outdated")]),e._v(" (or npm) 给出的建议版本")])]),e._v(" "),t("p",[e._v("outed version 如果是 MINOR / PATCH 更新，直接 upgrade 即可。如果是 MAJOR 更新则需要到相应项目主页上确认一下 breaking changes 是否对自己有影响。")]),e._v(" "),t("p",[e._v("以下列举一些主要的依赖。")]),e._v(" "),t("h3",{attrs:{id:"webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[e._v("#")]),e._v(" Webpack")]),e._v(" "),t("p",[e._v("Webpack 2 -> 3 其实是无痛升级的。也就是说基本不用更改什么配置。")]),e._v(" "),t("h3",{attrs:{id:"eslint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[e._v("#")]),e._v(" ESLint")]),e._v(" "),t("p",[e._v("ESlint 及其相关库的升级也没什么需要特别注意的地方，因为它并不参与最终构建。只不过升级以后可能会有 lint failed cases （因为新版本一般会添加新的 rules），注意修复即可。")]),e._v(" "),t("h3",{attrs:{id:"babel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[e._v("#")]),e._v(" Babel")]),e._v(" "),t("p",[e._v("Babel 相关的升级是最麻烦（也是最头疼）的一部分。其主要问题体现在：")]),e._v(" "),t("ul",[t("li",[e._v("其直接参与代码构建，影响巨大，需要特别谨慎")]),e._v(" "),t("li",[e._v("Babel 作为一个重要工具有一定的学习成本")]),e._v(" "),t("li",[e._v("Babel 相关库变更较为频繁，典型的如 "),t("code",[e._v("babel-preset-latest")]),e._v(" 库废弃并被 "),t("code",[e._v("babel-preset-env")]),e._v(" 替代，而后者在最新的版本中又变成了 "),t("code",[e._v("@babel/preset-env")]),e._v("，甚至 "),t("code",[e._v("babel-core")]),e._v(" 也废弃了，变成了 "),t("code",[e._v("@babel/core")])])]),e._v(" "),t("p",[e._v("在经过了几次的迁移尝试后，建议"),t("strong",[e._v("目前")]),e._v("的方案是：")]),e._v(" "),t("ul",[t("li",[e._v("进行 MINOR 升级，如果还在使用 "),t("code",[e._v("babel-preset-latest")]),e._v(" 可以将其替换为 "),t("code",[e._v("babel-preset-env")]),e._v("（注意两者的配置大致一样，但略有不同，需要仔细比对）")]),e._v(" "),t("li",[e._v("暂时不要将 babel 升级至 7.x-beta")]),e._v(" "),t("li",[e._v("暂时也不要使用 "),t("code",[e._v("@babel")]),e._v(" 类型的依赖（实测中出现奇怪的报错，难以追踪、搜索）")]),e._v(" "),t("li",[e._v("等待 Vue.js 社区给出解决方案")])]),e._v(" "),t("h3",{attrs:{id:"autoprefixer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#autoprefixer"}},[e._v("#")]),e._v(" AutoPrefixer")]),e._v(" "),t("p",[e._v("将 "),t("code",[e._v("autoprefixer")]),e._v(" 从 6.x 升级到 7.x 时，注意将 "),t("code",[e._v("package.json")]),e._v(" 中的 "),t("code",[e._v("browserlist")]),e._v(" 改成 "),t("code",[e._v("browserslist")]),e._v(" （一个 s 的区别）")]),e._v(" "),t("h2",{attrs:{id:"配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[e._v("#")]),e._v(" 配置文件")]),e._v(" "),t("p",[e._v("这里说的配置文件主要有两方面：Babel 以及 Webpack")]),e._v(" "),t("h3",{attrs:{id:"babel-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-2"}},[e._v("#")]),e._v(" Babel")]),e._v(" "),t("p",[e._v("最简单的操作是，直接到 "),t("a",{attrs:{href:"https://github.com/vuejs-templates/webpack",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuejs-templates/webpack"),t("OutboundLink")],1),e._v(" 找到最新的 babel 文件，复制更新的内容下来即可。当然要注意自己已经更改过的内容不要被覆盖。")]),e._v(" "),t("h3",{attrs:{id:"webpack-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-2"}},[e._v("#")]),e._v(" Webpack")]),e._v(" "),t("p",[e._v("Webpack 配置稍微麻烦一些，主要体现在 "),t("code",[e._v("webpack.base.conf.js")]),e._v(" 以及 "),t("code",[e._v("webpack.prod.conf.js")]),e._v("，个人总结的升级步骤：")]),e._v(" "),t("ol",[t("li",[e._v("先升级 Webpack 相关工具到最新版本")]),e._v(" "),t("li",[e._v("打开官方项目，对文件进行比对并更新相应内容（一般 "),t("code",[e._v("webpack.prod.conf.js")]),e._v(" 会有较多内容更新，而且主要是 "),t("code",[e._v("plugins")]),e._v(" 配置项）")]),e._v(" "),t("li",[e._v("如果遇到目前没有安装的依赖则安装之")])]),e._v(" "),t("p",[e._v("当然这只适用于 Webpack 2 -> 3 的升级，至于 1 -> 2 或者 1-> 3 没试过，不好说。")]),e._v(" "),t("p",[e._v("做完以上操作，跑过所有 npm scripts 一切正常的话，项目脚手架升级就基本完成了。这个过程说难不难，但是如果对 Webpack / Babel 不熟悉的话还是挺痛苦的，期待 vue-cli 3.0 可以带来更优秀的脚手架解决方案，达到类似 Nuxt.js 的效果，彻底解决升级烦恼。")])])}),[],!1,null,null,null);a.default=_.exports}}]);