(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"E/Ix":function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return p}));var a=n("mXGw"),r=n.n(a),l=r.a.createContext({}),b=function(t){var e=r.a.useContext(l),n=e;return t&&(n="function"===typeof t?t(e):Object.assign({},e,t)),n},c=function(t){var e=b(t.components);return r.a.createElement(l.Provider,{value:e},t.children)};var i="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},u=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,i=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&-1===e.indexOf(a)&&(n[a]=t[a]);return n}(t,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u[c+"."+p]||u[p]||o[p]||l;return n?r.a.createElement(m,Object.assign({},{ref:e},i,{components:n})):r.a.createElement(m,Object.assign({},{ref:e},i))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"===typeof t||a){var l=n.length,b=new Array(l);b[0]=u;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c[i]="string"===typeof t?t:a,b[1]=c;for(var p=2;p<l;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},Ff2n:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,"a",(function(){return a}))},NPsZ:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));var a=n("wx14"),r=n("Ff2n"),l=n("mXGw"),b=n.n(l),c=n("E/Ix"),i=n("b0Hy"),o=(b.a.createElement,{}),u="wrapper";function p(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(c.b)(u,Object(a.a)({},o,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"AnchorScroll"),Object(c.b)("p",null,"Smooth scrolling when click to an anchor link in the page. This component is helpful for improve the user\ninteractive on the layout."),Object(c.b)("h2",null,"Example"),Object(c.b)(i.AnchorScroll,{destination:"target",callback:function(){return console.log("fire callback")},mdxType:"AnchorScroll"},Object(c.b)("span",{role:"img","aria-label":"img","aria-labelledby":"anchor link"},"\ud83d\ude80"),"To target"),Object(c.b)(i.AnchorScroll,{destination:500,mdxType:"AnchorScroll"},"Scroll to 500px"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<AnchorScroll destination="target" callback={() => console.log("fire callback")}>\n  <span role="img" aria-label="img" aria-labelledby="anchor link">\ud83d\ude80</span>\n  To target\n</AnchorScroll>\n\n// And the target at somewhere\n<div id="target" style={{margin: "2rem 0"}}>\n  <span role="img" aria-label="img" aria-labelledby="anchor target">\ud83d\udcb0</span>\n  Target\n</div>\n')),Object(c.b)("h2",null,"Custom animation"),Object(c.b)("p",null,"AnchorScroll intially only use liner animation but you can pick one of below to set whatever kind you want"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  easeInQuad: (t: number) => t * t,\n  easeOutQuad(t: number) {\n    return t * (2 - t);\n  }\n  easeInOutQuad(t: number) {\n    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;\n  }\n  easeInCubic(t: number) {\n    return t * t * t;\n  }\n  easeOutCubic(t: number) {\n    return --t * t * t + 1;\n  }\n  easeInOutCubic(t: number) {\n    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;\n  }\n  easeInQuart(t: number) {\n    return t * t * t * t;\n  }\n  easeOutQuart(t: number) {\n    return 1 - --t * t * t * t;\n  }\n  easeInOutQuart(t: number) {\n    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;\n  }\n  easeInQuint(t: number) {\n    return t * t * t * t * t;\n  }\n  easeOutQuint(t: number) {\n    return 1 + --t * t * t * t * t;\n  }\n  easeInOutQuint(t: number) {\n    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;\n  }\n}\n")),Object(c.b)("div",{id:"target",style:{margin:"2rem 0"}},Object(c.b)("span",{role:"img","aria-label":"img","aria-labelledby":"anchor target"},"\ud83d\udcb0"),"Target"),Object(c.b)("h2",null,"API"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Props"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"destination"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string, number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"md")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"target id or position cordinate")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"duration"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"200")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"scroll duration time")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"easing"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"(t: number) => t")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"easing animation function, is linear by default")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"margin"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"0")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"addition or subtraction scroll target point")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"top"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"0")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"addition height, useful when has fixed menu on top")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"callback"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"undefined"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"callback function after scrolled")))))}p.isMDXComponent=!0},T25V:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/anchor",function(){return n("NPsZ")}])},wx14:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return a}))}},[["T25V",0,1,2]]]);