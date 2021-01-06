(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{456:function(t,e,s){"use strict";s.r(e);var a=s(11),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"osx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#osx"}},[t._v("#")]),t._v(" OSX")]),t._v(" "),s("p",[t._v("Use "),s("code",[t._v("brew")]),t._v(" to install "),s("code",[t._v("polipo")]),t._v(" via socks proxy:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ALL_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("socks5://127.0.0.1:9500 brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" polipo\n")])])]),s("p",[t._v("Create "),s("code",[t._v("polipo.config")]),t._v(" file under "),s("code",[t._v("Document")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('socksParentProxy = "127.0.0.1:9500"\nsocksProxyType = socks5\nproxyAddress = "::0"\nproxyPort = 8123\n')])])]),s("p",[t._v("Start polipo server:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ polipo -c ~/Documents/polipo.config\nEstablished listening socket on port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8123")]),t._v(".\n")])])]),s("p",[t._v("Verify it at "),s("code",[t._v("http://localhost:8123")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),s("p",[t._v("Use "),s("a",{attrs:{href:"http://www.privoxy.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("privoxy"),s("OutboundLink")],1),t._v(" tool. Download: "),s("a",{attrs:{href:"http://www.privoxy.org/sf-download-mirror/Win32/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.privoxy.org/sf-download-mirror/Win32/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Install it, find the config file at "),s("code",[t._v("\\Privoxy\\config.txt")]),t._v(", append following to the bottom of it:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("forward-socks5 / 127.0.0.1:9500 .\n")])])]),s("p",[t._v("(Mind the dot at the end)")]),t._v(" "),s("p",[t._v("The default port is "),s("code",[t._v("8118")]),t._v(", search from the config file to replace it.")])])}),[],!1,null,null,null);e.default=o.exports}}]);