(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-article_detail-article_detail"],{"1c73":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"article-header"},[a("v-uni-view",{staticClass:"article-header-box",style:{backgroundImage:"url("+e.article.main_img+")"}},[a("v-uni-view",{staticClass:"article-header-box-mask"}),a("v-uni-view",{staticClass:"header-view"},[a("v-uni-view",{staticClass:"article-title"},[a("v-uni-view",{staticClass:"title"},[e._v(e._s(e.article.title))])],1),a("v-uni-view",{staticClass:"article-header-extra"},[a("v-uni-view",{staticClass:"view_count"},[a("v-uni-text",{staticClass:"iconfont"},[e._v("")]),a("v-uni-text",[e._v("10000")])],1),a("v-uni-view",{staticClass:"created-time"},[e._v(e._s(e.article.created_date))])],1),a("v-uni-view",{staticClass:"card-info"},[a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"card-hd"},[a("v-uni-view",{staticClass:"avator"},[a("v-uni-image",{staticClass:"image",attrs:{src:e.user.avatar?e.user.avatar:e.defaultAvatar,mode:""}})],1),a("v-uni-view",{staticClass:"user-name"},[a("v-uni-text",[e._v(e._s(e.user.name))])],1),a("v-uni-view",{staticClass:"brand-tag"},[a("v-uni-text",{staticClass:"tag"},[e._v("品牌")])],1),a("v-uni-view",{staticClass:"user-contact"},[a("v-uni-view",{staticClass:"user-mobile"},[a("v-uni-text",{staticClass:"iconfont"},[e._v("")]),a("v-uni-text",[e._v("电话")])],1),a("v-uni-view",{staticClass:"user-wechat"},[a("v-uni-text",{staticClass:"iconfont"},[e._v("")]),a("v-uni-text",[e._v("微信")])],1)],1)],1),a("v-uni-view",{staticClass:"user-card",on:{click:function(t){t=e.$handleEvent(t),e.toUserCard(t)}}},[a("v-uni-text",[e._v("我的")])],1)],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"article-content"},[a("v-uni-rich-text",{attrs:{nodes:e.article.content}})],1)],1)},r=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return r})},8024:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-25439184]{background-color:#f8f8f8}.article-header[data-v-25439184]{min-height:%?460?%}.article-header-box[data-v-25439184]{min-height:%?240?%;padding:%?20?%;background-size:cover;background-repeat:no-repeat;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative}.article-header-box-mask[data-v-25439184]{position:absolute;top:0;left:0;background-color:rgba(0,0,0,.5);height:100%;width:100%}.article-header-box .article-header-extra[data-v-25439184]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#fff}.article-header-box .header-view[data-v-25439184]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:10}.article-header-box .article-title[data-v-25439184]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#fff;margin-bottom:%?10?%}.article-header-box .article-title .title[data-v-25439184]{font-size:%?36?%;line-height:1.6}.article-header-box .card-info[data-v-25439184]{position:relative;bottom:0;top:%?50?%;height:%?200?%}.article-header-box .card-info .card[data-v-25439184]{width:90%;height:100%;margin:0 auto;-webkit-box-shadow:0 %?2?% 0 #eee;box-shadow:0 %?2?% 0 #eee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fff;position:relative}.article-header-box .card-info .card .card-hd[data-v-25439184]{position:relative;top:%?-48?%;z-index:11;text-align:center}.article-header-box .card-info .card .card-hd .brand-tag[data-v-25439184]{color:#f6375b}.article-header-box .card-info .card .card-hd .brand-tag .tag[data-v-25439184]{background-color:#f0ad4e;padding:0 %?16?%;border-radius:%?6?%}.article-header-box .card-info .card .card-hd .user-contact[data-v-25439184]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.article-header-box .card-info .card .card-hd .user-contact .user-mobile[data-v-25439184],.article-header-box .card-info .card .card-hd .user-contact .user-wechat[data-v-25439184]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#f6375b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.article-header-box .card-info .card .card-hd .user-contact .user-mobile .iconfont[data-v-25439184],.article-header-box .card-info .card .card-hd .user-contact .user-wechat .iconfont[data-v-25439184]{margin-right:%?10?%}.article-header-box .card-info .card .avator[data-v-25439184]{width:%?120?%;height:%?120?%;background:#fff;border:%?5?% solid #fff;border-radius:50%;overflow:hidden;margin:0 auto}.article-header-box .card-info .card .avator .image[data-v-25439184]{width:100%;height:100%}.article-header-box .card-info .card .user-card[data-v-25439184]{position:absolute;right:0;top:%?10?%;background-color:#f6375b;color:#fff;padding:0 %?40?%;border-radius:%?20?% 0 0 %?20?%;z-index:12}.article-content[data-v-25439184]{padding:%?20?%;font-size:%?26?%}body.?%PAGE?%[data-v-25439184]{background-color:#f8f8f8}',""])},"94e1":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{article:{},user:{},defaultAvatar:"/static/avatar_default.jpeg"}},onLoad:function(e){var t=this,a=e.id;this.$store.dispatch("loadUserInfo").then(function(e){console.log("user",e),t.user=e}),this.$http.post("article_detail",{id:a}).then(function(e){t.article=e.data.data,uni.setNavigationBarTitle({title:t.article.title})})},methods:{toUserCard:function(){uni.switchTab({url:"/pages/card/card/card"})}}};t.default=i},b4de:function(e,t,a){"use strict";a.r(t);var i=a("1c73"),r=a("fcf5");for(var n in r)"default"!==n&&function(e){a.d(t,e,function(){return r[e]})}(n);a("c663");var c=a("2877"),o=Object(c["a"])(r["default"],i["a"],i["b"],!1,null,"25439184",null);t["default"]=o.exports},c663:function(e,t,a){"use strict";var i=a("fc0f"),r=a.n(i);r.a},fc0f:function(e,t,a){var i=a("8024");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=a("4f06").default;r("78b279fc",i,!0,{sourceMap:!1,shadowMode:!1})},fcf5:function(e,t,a){"use strict";a.r(t);var i=a("94e1"),r=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);t["default"]=r.a}}]);