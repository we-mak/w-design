(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"E/Ix":function(e,r,n){"use strict";n.d(r,"a",(function(){return c})),n.d(r,"b",(function(){return l}));var t=n("mXGw"),o=n.n(t),a=o.a.createContext({}),s=function(e){var r=o.a.useContext(a),n=r;return e&&(n="function"===typeof e?e(r):Object.assign({},r,e)),n},c=function(e){var r=s(e.components);return o.a.createElement(a.Provider,{value:r},e.children)};var p="mdxType",i={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},u=Object(t.forwardRef)((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,p=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===r.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),u=s(n),l=t,d=u[c+"."+l]||u[l]||i[l]||a;return n?o.a.createElement(d,Object.assign({},{ref:r},p,{components:n})):o.a.createElement(d,Object.assign({},{ref:r},p))}));function l(e,r){var n=arguments,t=r&&r.mdxType;if("string"===typeof e||t){var a=n.length,s=new Array(a);s[0]=u;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"===typeof e?e:t,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},Ff2n:function(e,r,n){"use strict";function t(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(r,"a",(function(){return t}))},cFA0:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return l}));var t=n("wx14"),o=n("Ff2n"),a=n("mXGw"),s=n.n(a),c=n("E/Ix"),p=n("b0Hy"),i=(s.a.createElement,{}),u="wrapper";function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(u,Object(t.a)({},i,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"ProgressLoader"),Object(c.b)("p",null,"Display progress status of any task that takes time to complete."),Object(c.b)("h2",null,"Example"),Object(c.b)(p.Container,{mdxType:"Container"},Object(c.b)(p.ProgressLoader,{percent:30,mdxType:"ProgressLoader"}),Object(c.b)(p.ProgressLoader,{percent:40,status:"success",mdxType:"ProgressLoader"}),Object(c.b)(p.ProgressLoader,{percent:70,status:"error",mdxType:"ProgressLoader"}),Object(c.b)(p.ProgressLoader,{percent:100,mdxType:"ProgressLoader"}),Object(c.b)(p.ProgressLoader,{percent:60,size:"sm",mdxType:"ProgressLoader"})),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),'import { Container, ProgressLoader } from "@w-design/core";\n\n<Container>\n  <ProgressLoader percent={30} />\n  <ProgressLoader percent={40} status="success" />\n  <ProgressLoader percent={70} status="error" />\n  <ProgressLoader percent={100} />\n  <ProgressLoader percent={60} size="sm" />\n</Container>;\n')),Object(c.b)("h2",null,"API"))}l.isMDXComponent=!0},eLqm:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/progress",function(){return n("cFA0")}])},wx14:function(e,r,n){"use strict";function t(){return(t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}n.d(r,"a",(function(){return t}))}},[["eLqm",0,1,2]]]);