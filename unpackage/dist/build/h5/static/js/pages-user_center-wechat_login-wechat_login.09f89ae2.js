(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_center-wechat_login-wechat_login"],{"45c0":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view")},c=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return c})},"4dc8":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},onLoad:function(){this.$http.post("wechat_login_url").then(function(t){0===t.errcode&&(location.href=t.data.url)}).catch(function(t){})},methods:{}};n.default=u},c9a5:function(t,n,e){"use strict";e.r(n);var u=e("4dc8"),c=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=c.a},f82f:function(t,n,e){"use strict";e.r(n);var u=e("45c0"),c=e("c9a5");for(var r in c)"default"!==r&&function(t){e.d(n,t,function(){return c[t]})}(r);var a=e("2877"),o=Object(a["a"])(c["default"],u["a"],u["b"],!1,null,"3297122e",null);n["default"]=o.exports}}]);