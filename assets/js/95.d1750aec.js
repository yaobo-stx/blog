(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{459:function(t,s,a){"use strict";a.r(s);var e=a(11),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Travis CI 是一款免费的持续集成工具，可以与 Github 无缝集成。能够自动完成项目代码的日常测试、编译、部署等工作。现在，我把它应用到了我的两个项目中。")]),t._v(" "),a("p",[t._v("首先，要在这个平台上做持续集成的前提是到它上面 "),a("a",{attrs:{href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://travis-ci.org/"),a("OutboundLink")],1),t._v(" 去注册个账号。实际上直接用 Github 账号进行 OAuth 登录就行了。登录以后可以在首页找到自己的所有仓库，在需要进行持续集成的项目前面的开关打开即可。开启后，Travis CI 会监听项目的代码推送与 PR，当发生改变时会立刻进行相应操作。")]),t._v(" "),a("p",[t._v("至于具体操作内容，由项目根目录的 "),a("code",[t._v(".travis.yml")]),t._v(" 文件决定。这个文件的简单用法由下面两个具体例子来说明。")]),t._v(" "),a("h2",{attrs:{id:"wxsms-github-io"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wxsms-github-io"}},[t._v("#")]),t._v(" wxsms.github.io")]),t._v(" "),a("p",[t._v("该项目就是这个博客了。因为它是静态博客，所以代码上线前都要进行一次打包过程，在之前这个工作是手动完成的，主要的流程如下：")]),t._v(" "),a("ol",[a("li",[t._v("在 "),a("code",[t._v("src")]),t._v(" 分支上进行代码编辑，")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("src")]),t._v(" 分支上 push")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("src")]),t._v(" 分支上运行 "),a("code",[t._v("npm run post")]),t._v(" 与 "),a("code",[t._v("npm run build")]),t._v(" 分别生成文章与博客代码")]),t._v(" "),a("li",[t._v("切换到 "),a("code",[t._v("master")]),t._v(" 分支，将上一步打包编译出来的东西覆盖到相应目录下")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("master")]),t._v(" 分支上 push")]),t._v(" "),a("li",[t._v("切换回 "),a("code",[t._v("src")]),t._v(" 分支")])]),t._v(" "),a("p",[t._v("这些步骤看似简单却又容易出错，每次想要刷博客都必须做这么多事情，烦不胜烦。而且，Github 仓库会因为充斥了无意义的 "),a("code",[t._v("master")]),t._v(" 历史记录而变得臃肿与难看。")]),t._v(" "),a("p",[t._v("现在有了 Travis CI，一切都将变得简单。")]),t._v(" "),a("p",[a("code",[t._v(".travis.yml")]),t._v(" 文件内容：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("directories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run post\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run build\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dist\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target_branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" src\n")])])]),a("p",[t._v("说明：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("language")]),t._v(" 指项目代码的语言，这里使用 "),a("code",[t._v("node_js")])]),t._v(" "),a("li",[a("code",[t._v("cache")]),t._v(" 是 Travis CI 会缓存的内容，比如一些依赖文件无需每次都完全安装。这里缓存了 "),a("code",[t._v("npm_modules")]),t._v(" 这个目录")]),t._v(" "),a("li",[a("code",[t._v("node_js")]),t._v(" 这里指定 node 的版本，"),a("code",[t._v("node")]),t._v(" 的意思是使用最新版")]),t._v(" "),a("li",[a("code",[t._v("script")]),t._v(" 则是 Travis CI 具体会去完成的工作，是有顺序关系的，如果没有指定，则默认是 "),a("code",[t._v("npm run test")]),t._v("，这里依次执行了 3 个脚本：\n"),a("ul",[a("li",[a("code",[t._v("npm run post")]),t._v(" 打包文章")]),t._v(" "),a("li",[a("code",[t._v("npm run build")]),t._v(" 打包代码")]),t._v(" "),a("li",[a("code",[t._v("npm run dist-config")]),t._v(" 生成配置文件以及 Readme 等。前两步显而易见，至于第三步，因为 Travis 部署会是一个 force push 的过程，会删除原有分支上的所有内容，因此需要手动生成 Github 的 README.md 文件以及 Github Page 的 CNAME 文件。")])])]),t._v(" "),a("li",[a("code",[t._v("deploy")]),t._v(" 则是项目在所有脚本执行完成后会进行的部署操作，部署只会在脚本全部执行成功（返回 0）后进行\n"),a("ul",[a("li",[t._v("这里使用 "),a("code",[t._v("page")]),t._v(" 即 Github Page 方式部署。")]),t._v(" "),a("li",[a("code",[t._v("skip_cleanup")]),t._v(" 这个参数用来防止 Travis 删除脚本生成的文件（删掉了就没意义了）")]),t._v(" "),a("li",[a("code",[t._v("github_token")]),t._v(" 是我们 Github 账号的 Access Token，因为私密原因不能写在代码文件里，因此可以在此写一个变量 "),a("code",[t._v("$GITHUB_TOKEN")]),t._v("，然后在 Travis 相应的仓库设置中添加 "),a("code",[t._v("GITHUB_TOKEN")]),t._v(" 环境变量，Travis 会在运行时自动替换")]),t._v(" "),a("li",[a("code",[t._v("local_dir")]),t._v(" 是指需要部署的打包出来的目录，设置为 "),a("code",[t._v("dist")]),t._v(" 目录")]),t._v(" "),a("li",[a("code",[t._v("target_branch")]),t._v(" 即目标分支，Travis 会将为 "),a("code",[t._v("dist")]),t._v(" 目录整个部署到 "),a("code",[t._v("master")]),t._v(" 分支上去")]),t._v(" "),a("li",[a("code",[t._v("on")]),t._v(" 则是附加条件。这里的含义应该是只监听 "),a("code",[t._v("src")]),t._v(" 分支上的更改")])])])]),t._v(" "),a("p",[t._v("因此，Travis 可以帮我完成以下工作")]),t._v(" "),a("ul",[a("li",[t._v("监听 "),a("code",[t._v("src")]),t._v(" 分支上的改动")]),t._v(" "),a("li",[t._v("出现改动时，自动执行所有 build 步骤")]),t._v(" "),a("li",[t._v("如果 build 成功则将相应文件部署到 "),a("code",[t._v("master")]),t._v(" 分支上去")])]),t._v(" "),a("p",[t._v("如此一来，我自己需要做的事情就只剩下简单的两步了：")]),t._v(" "),a("ol",[a("li",[t._v("在 "),a("code",[t._v("src")]),t._v(" 分支上进行代码编辑")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("src")]),t._v(" 分支上 push")])]),t._v(" "),a("p",[t._v("在我无需关注发布过程的同时，Travis 还能帮我保持整个代码仓库的整洁（"),a("code",[t._v("master")]),t._v(" 分支始终进行的都是 force push，不存在无用的历史记录），简直完美！")]),t._v(" "),a("h2",{attrs:{id:"uiv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uiv"}},[t._v("#")]),t._v(" uiv")]),t._v(" "),a("p",[t._v("这个项目其实也差不多，有些许变化：")]),t._v(" "),a("ul",[a("li",[t._v("脚本变为：\n"),a("ul",[a("li",[a("code",[t._v("npm run test")]),t._v(" 执行测试")]),t._v(" "),a("li",[a("code",[t._v("npm run build")]),t._v(" 打包代码")]),t._v(" "),a("li",[a("code",[t._v("npm run build-docs")]),t._v(" 打包文档")])])]),t._v(" "),a("li",[t._v("需要将代码部署到 npm，而文档部署到 Github Page")]),t._v(" "),a("li",[t._v("代码与文档都只在版本发布时（Tagged）才进行部署")])]),t._v(" "),a("p",[a("code",[t._v(".travis.yml")]),t._v(" 文件内容：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("directories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run test\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run build\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docs\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("after_success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'npm run coveralls'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"edisond@qq.com"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api_key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $NPM_TOKEN\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),a("p",[t._v("这个配置文件多了一些内容：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("after_success: 'npm run coveralls'")]),t._v(" 这个是在所有脚本成功以后执行的，目的是与 Coveralls 集成来在项目仓库上添加测试覆盖率的集成，这个在后面说")]),t._v(" "),a("li",[a("code",[t._v("deploy")]),t._v(" 中增加了 "),a("code",[t._v("npm")]),t._v(" 一项，配置内容跟 "),a("code",[t._v("pages")]),t._v(" 基本一致，其中不同的：\n"),a("ul",[a("li",[a("code",[t._v("email")]),t._v(" 是用来发布的 npm 账户邮箱名")]),t._v(" "),a("li",[a("code",[t._v("api_key")]),t._v(" 是用来发布的 npm 账户 token，可以在本地 "),a("code",[t._v("~/.npmrc")]),t._v(" 文件中找到（前提是本地电脑的 npm 已登录）")]),t._v(" "),a("li",[a("code",[t._v("on")]),t._v(" -> "),a("code",[t._v("tags: true")]),t._v(" 这个标志是说只在带有标签的 Commit 推送时才进行 deploy")])])]),t._v(" "),a("li",[t._v("Github Page 的部署配置中也加入了 "),a("code",[t._v("on")]),t._v(" -> "),a("code",[t._v("tags: true")]),t._v("，起的是一样的作用。这里的 Github Page 是从 master 分支的 docs 文件夹 deploy 到 gh-pages 分支（gh-pages 是 Github Page 的默认分支，所以不用配置 "),a("code",[t._v("target_branch")]),t._v(" 项）")])]),t._v(" "),a("p",[t._v("这样一来，Travis 就可以：")]),t._v(" "),a("ul",[a("li",[t._v("在日常 push 的时候执行 test and build 脚本，但不发布")]),t._v(" "),a("li",[t._v("在版本 push 的时候执行 test and build 脚本，全部成功则将内容分别发布到 NPM 与 Github Pages")])]),t._v(" "),a("p",[t._v("完美！")]),t._v(" "),a("h2",{attrs:{id:"关于-coveralls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-coveralls"}},[t._v("#")]),t._v(" 关于 Coveralls")]),t._v(" "),a("p",[t._v("Coveralls "),a("a",{attrs:{href:"https://coveralls.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://coveralls.io/"),a("OutboundLink")],1),t._v(" 是一个将代码测试覆盖率集成到 Github 的工具，在 Travis 的加持下，算是锦上添花的一项。同样，到相应网站注册账号是第一步。")]),t._v(" "),a("p",[t._v("由于 vue-cli 生成的项目默认已经附带了代码测试覆盖率的检测，我要做的只是把这个结果上传而已。")]),t._v(" "),a("p",[t._v("步骤：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("npm install coveralls --save-dev")])]),t._v(" "),a("li",[t._v("将 "),a("code",[t._v('"coveralls": "cat test/unit/coverage/lcov.info | ./node_modules/.bin/coveralls"')]),t._v(" 添加到 npm scripts 中。注意：cat 的路径是随项目不同而改变的")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v(".travis.yml")]),t._v(" 中添加 "),a("code",[t._v("after_success: 'npm run coveralls'")]),t._v(" 配置项")])]),t._v(" "),a("p",[t._v("它可以：")]),t._v(" "),a("ol",[a("li",[t._v("在测试完成后生成覆盖率文件（这一步 vue-cli 已经做了）")]),t._v(" "),a("li",[t._v("将文件内容传给 "),a("code",[t._v("coveralls")]),t._v("，这个模块可以将结果从 Travis 上传到 Coveralls 平台")]),t._v(" "),a("li",[t._v("Github 上会 by commit 地显示测试率是增加还是降低了")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("持续集成的好处无需多言，反正 Travis 就是一个免费的、能与 Github 集成的持续集成工具（实际上其它开源平台也可以，以及可以付费为私有项目提供服务）。简单、易用。")]),t._v(" "),a("p",[t._v("这些配置看似简单，却花费了我大量时间去摸索。由于只能通过不断推送 commit 的方式来触发 build 并验证配置的正确性，其过程异常繁琐，但是现在看来是十分值得的！")]),t._v(" "),a("p",[t._v("BTW：测试用的 commit 事后可以用本地 reset 与 force push 干掉。")])])}),[],!1,null,null,null);s.default=n.exports}}]);