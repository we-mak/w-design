(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{ODXe:function(n,e,t){"use strict";function r(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],r=!0,a=!1,o=void 0;try{for(var u,i=n[Symbol.iterator]();!(r=(u=i.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return t}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(e,"a",(function(){return r}))},cSlM:function(n,e,t){"use strict";function r(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.r(e);var a=t("ODXe"),o=t("mXGw"),u=t("b0Hy"),i=o.createElement;e.default=function(){var n=o.useState([]),e=Object(a.a)(n,2),t=e[0],c=e[1];return i(u.Container,null,i(u.ButtonGroup,null,i(u.Button,{onClick:function(){return c([].concat(r(t),[{value:"This is a normal message"}]))}},"Normal message"),i(u.Button,{onClick:function(){return c([].concat(r(t),[{value:"This is a success message",appearance:"success"}]))}},"Success message"),i(u.Button,{onClick:function(){return c([].concat(r(t),[{value:"This is a error message",appearance:"error"}]))}},"Error message"),i(u.Button,{onClick:function(){return c([].concat(r(t),[{value:"This is a warning message",appearance:"warn"}]))}},"Warning message")),i(u.PushMessage,{messages:t}))}},f1xO:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/_example/PushMessageExample",function(){return t("cSlM")}])}},[["f1xO",0,1,2]]]);