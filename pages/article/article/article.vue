<template>
	<view>
		<view class="tag-box">
			<view class="tab-list">
				<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x>
					<view v-for="(tab,index) in tagList" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
					 :data-current="index" @tap="tabChange(index)">{{tab.name}}</view>
				</scroll-view>
			</view>
			<view class="more" @tap="switchTags">
				<text class="iconfont" v-if="!tagStatus">&#xe655;</text>
				<text class="iconfont" v-else>&#xe667;</text>
			</view>
		</view>
		<view class="cate-box" v-if="tagStatus" @touchmove.stop.prevent="stopPrevent">
			<view class="brand">
				<view class="brand-th flex-row">
					<view class="flex-left">公司/品牌</view>
					<navigator class="flex-right" url="/pages/user_center/user_setting/user_setting">修改</navigator>
				</view>
				<view class="brand-td flex-row" v-if="user.brand">
					<view class="flex-left"><pack-tag selected :text="user.brand.name"></pack-tag></view>
				</view>
			</view>
			<view class="gap"></view>
			<view class="cate">
				<text>关注的类别</text>
				<view class="cate-list">
					<view class="cate-item" v-for="(item,cIndex) in category" :key="cIndex" @click="selectCate(cIndex)">
						<pack-tag :selected="item.selected" :text="item.name"></pack-tag>
					</view>
				</view>
			</view>
			<view class="gap"></view>
			<view class="cate-sure" @tap="saveCate">
				<view class="cate-sure-btn">确定</view>
			</view>
		</view>
		<view class="article-list">
			<view class="gap"></view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(article, key) in articleList" :key="key" @click="articleDetail(article.id)">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="article.main_img"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{article.title}}</view>
							<view class="uni-media-list-text-bottom">
								<view class="uni-media-list-text-bottom-left">
									<view class="uni-media-list-tag">{{article.tag}}</view>
									<text>{{article.created_date}}</text>
								</view>
								<view class="uni-media-list-text-bottom-right">
									<text class="iconfont">&#xe833;</text>
									<text>{{article.view_count}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="loadingStatus"></uni-load-more>
	</view>
</template>

<script>
	import segmentedControl from '@/components/segmented-control.vue'
	import packTag from '@/components/pack-tag.vue'
	import uniLoadMore from '@/components/uni/uni-load-more.vue'
	export default {
		components: {
			segmentedControl,
			packTag,
			uniLoadMore,
		},
		data() {
			return {
				tagList: [
					{name: '行业资讯', keyword: '行业资讯'},
					{name: '健康养生', keyword: '健康养生'},
					{name: '生活励志', keyword: '生活励志'},
				],
				user: {},
				tabIndex: 0,
				tagStatus: false,
				category: [],
				articleList:[],
				loadingStatus: 'more',
				page: 1,
			}
		},
		async onShow() {
			await this.$http.auth('article_category').then(res => {
				let category = res.data.data
				const hisCate = uni.getStorageSync('category_seleced')
				if (hisCate && hisCate.length) {
					category.forEach(item => {
						if (hisCate.findIndex(his => his.name === item.name) !== -1) {
							item.selected = true
						}
					})
				}
				this.category = category
				
			}).catch(err => {})
			
			this.loadData()
		},
		onReachBottom() {
			if (this.articleList) {
				this.loadArticle();
			}
		},
		methods: {
			loadData() {
				this.tagList = [
					{name: '行业资讯', keyword: 'industry'},
					{name: '健康养生', keyword: '健康养生'},
					{name: '生活励志', keyword: '生活励志'},
				]
				this.tabIndex = 0
				this.page = 1
				this.articleList = []
				
				this.$store.dispatch("loadUserInfo").then(user => {
					this.user = user
					user.brand && this.tagList.unshift({
						name: user.brand.name,
						keyword: 'brand',
					})
					this.tagList.unshift({
						name: '精彩推荐',
						keyword: 'is_recommend',
					})
					const hisCate = uni.getStorageSync('category_seleced')
					if (hisCate && hisCate.length) {
						this.tagList = this.tagList.concat(hisCate)
					}
					this.loadArticle()
				})
			},
			tabChange(index) {
				this.tabIndex = index
				this.page = 1
				this.loadingStatus = 'more'
				this.articleList = []
				this.loadArticle()
			},
			selectCate(index) {
				let cate = this.category[index]
				this.$set(cate, 'selected', !cate.selected)
			},
			saveCate() {
				uni.setStorageSync('category_seleced', this.category.filter(item => item.selected))
				this.switchTags()
				this.loadData()
			},
			loadArticle() {
				if (this.loadingStatus === 'loading' || this.loadingStatus === 'noMore') {
					return false;
				}
				this.loadingStatus = 'loading';
				const tag = this.tagList[this.tabIndex]
				this.$http.auth('article', {keyword: tag.keyword, page: this.page}).then(res => {
					this.articleList = this.articleList.concat(res.data.data.data);
					if (this.page < res.data.data.last_page) {
						this.loadingStatus = 'more';
						this.page ++;
					} else {
						this.loadingStatus = 'noMore';
					}
					console.log(res)
				}).catch(err => {})
			},
			switchTags() {
				this.tagStatus = !this.tagStatus
			},
			articleDetail(id) {
				uni.navigateTo({
					url: `/pages/article/article_detail/article_detail?id=${id}`
				})
			},
			stopPrevent() {
				
			}
		}
	}
</script>

<style lang="scss">
$nav-height: 86upx;
page, .cate-box {
	background: $uni-bg-color-grey;
}
.tag-box {
	display: flex;
	background-color: $uni-bg-color;
	position: fixed;
	z-index: 10;
	max-height: $nav-height;
	.tab-list {
		width: 88vw;
	}
	.more {
		width: 12vw;
		display: flex;
		align-items: center;
		justify-content: center;
		color: $uni-text-color;
	}
}
.cate-box {
	position: fixed;
	width: 100%;
	top: $nav-height;
	z-index: 9;
	min-height: 90vh;
	.brand, .cate{
		padding: 10upx $page-padding;
		background-color: $uni-bg-color;
	}
	.brand-td {
		padding: 10upx 0;
	}
	.cate-list {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20upx;
		.cate-item {
			margin-right: 20upx;
			margin-bottom: 30upx;
		}
	}
}
.cate-sure {
	font-size: $fsize1;
	background-color: $tcolor;
	color: $uni-text-color-inverse;
	text-align: center;
	border-radius: 8upx;
	padding: 16upx 0;
	width: 85%;
	margin: 0 auto;
}
.article-list {
	padding-top: $nav-height;
}
.swiper-tab-list{
	position: relative;
	&.active {
		color: $tcolor;
	}
	&.active:after{
		position: absolute;
		display: block;
		content: '';
		width: 8px;
		height: 1px;
		border-radius: 1px;
		background: $tcolor;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
}
.uni-media-list-logo {
	width: 180upx;
	height: 140upx;
}

.uni-media-list-body {
	height: auto;
	justify-content: space-around;
}

.uni-media-list-text-top {
	height: 74upx;
	font-size: 28upx;
	overflow: hidden;
}

.uni-media-list-text-bottom {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 10upx;
	&-left {
		display: flex;
		line-height: 1;
		align-items: center;
	}
	&-right {
		display: flex;
		line-height: 1;
		align-items: center;
		.iconfont {
			margin-right: 8upx;
			color: $tcolor;
		}
	}
}
.uni-media-list-tag{
	border: 1upx solid $tcolor;
	color: $tcolor;
	padding: 2upx 12upx;
	line-height: 1;
	border-radius: 5upx;
	margin-right: 10upx;
}
</style>
