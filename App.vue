<script>
//登录令牌的设置与获取
global.getToken = function() {
	return uni.getStorageSync('auth_token');
};
global.setToken = function(token) {
	if (token) uni.setStorageSync('auth_token', token);
	else uni.removeStorageSync('auth_token');
};

global.loginAuth = function () {
	// #ifdef H5
	// global.http.post('wechat_login_url').then(res => {
	// 	if (res.errcode === 0) {
	// 		location.href = res.data.url
	// 	}
	// }).catch(err => {});
	if (global.is_weixin()) {
		global.http.post('wechat_login_url').then(res => {
			if (res.errcode === 0) {
				location.href = res.data.url
			}
		}).catch(err => {});
	} else {
		// uni.redirectTo({
		// 	url: '/pages/user_center/login/login'
		// })
		global.http.post('demo_login').then(res => {
			if (res.errcode === 0) {
				console.log(res.data.auth_token)
				global.setToken(res.data.auth_token)
				// uni.switchTab({
				// 	url: '/pages/card/card/card'
				// })
			}
		}).catch(err => {});
	}
	// #endif
}

/**
 * 判断是否是微信内置浏览器打开
 */
global.is_weixin = function (){
		// #ifndef H5
			return false
		// #endif
		// #ifdef H5
			let ua = navigator.userAgent.toLowerCase()
			if(ua.match(/MicroMessenger/i)=="micromessenger") {
				return true
			} else {
				return false
			}
		// #endif
}

//消息提示
global.toast = function(msg, callback) {
	uni.showToast({
		title: msg,
		icon: 'none',
		duration: 2000,
		success: function() {
			if (typeof callback == 'function') {
				setTimeout(function() {
					callback();
				}, 2000);
			}
		}
	});
};
	
export default {
	onLaunch: function() {
		global.http = this.$http;
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
@import './common/css/uni.css';
@import './common/css/public.css';
/*每个页面公共css */
@font-face {
  font-family: 'iconfont';  /* project id 1050106 */
  src: url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2');
  
}

.iconfont {
	font-family: 'iconfont' !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
