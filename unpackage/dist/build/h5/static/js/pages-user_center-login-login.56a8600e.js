(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_center-login-login"],{"0d72":function(t,n,e){"use strict";e.r(n);var o=e("8f59"),u=e("1985");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);var c=e("2877"),r=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,"b77da7d8",null);n["default"]=r.exports},1985:function(t,n,e){"use strict";e.r(n);var o=e("82dc"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a},"82dc":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},onLoad:function(){t.is_weixin()?this.$http.post("wechat_login_url").then(function(t){0===t.errcode&&(location.href=t.data.url)}).catch(function(t){}):this.$http.post("demo_login").then(function(n){0===n.errcode&&(console.log(n.data.auth_token),t.setToken(n.data.auth_token),uni.switchTab({url:"/pages/card/card/card"}))}).catch(function(t){})},methods:{}};n.default=e}).call(this,e("c8ba"))},"8f59":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view")},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})}}]);