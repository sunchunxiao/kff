<style lang="less">
	@import 'css/project.css';
	/*综合评分*/
	
	.evaluation-info {
		h3 {
			float: left;
		}
		.store-info-title {
			font-size: 14px;
			color: #666666;
			float: left;
		}
		.store-info {
			background: #ffffff;
			margin-top: 1rem;
		}
		.store-info1 {
			box-shadow: 0 2px 10px 0 #e8e8e8;
			border-radius: 5px;
			padding: 1rem;
			.storeList {
				margin-top: 0.5rem;
				.percent {
					display: inline-block;
					width: 100px;
					margin-left: 5px;
					font-size: 12px;
					color: #888888;
				}
			}
		}
	}
	
	.p1 {
		margin-top: 3rem;
		font-size: 13px;
		color: #333333;
		line-height: 20px;
		text-align: justify;
	}
	
	.img {
		width: 100%;
		margin-top: 1rem;
	}
</style>

<template>
	<div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
		<!--<HeaderBar-->
		<!--:title="title"-->
		<!--/>-->
		<!--头部下载app-->
		<Headerdown></Headerdown>
		<div class="evaluation pad-top">
			<div class="evaluation-title">
				<h2>{{articleTitle}} <span class="evaluation-store storeCommon">{{totalscore}}</span></h2>

			</div>
		</div>
		<div class="evaluation-info">
			<div class="evaluation-info-title">
				<img class=" evaluation-info-img" :src="src" alt="">
				<div class="evaluation-info-p">
					<div class="name">
						<p>{{username}}</p><img class="imgV" src="" />
					</div>
					<span class="info">{{userSignature}}</span>
				</div>
				<div class="evaluation-follow discuss-atten">+关注</div>
			</div>
			<div>
				<h3>综合评分</h3>
				<span class="storeCommon">{{totalscore}}</span>
				<Progress :percent="totalscore*10" :stroke-width="10" hide-info></Progress>
				<div class="store-info">
					<div class="store-info1">
						<div class="storeList" v-for="item in storeList">
							<div class="store-info-title">{{item.modelName}}<span class="percent">/ {{item.modelWeight}}%</span> </div>
							<span class="storeCommon">{{item.score}}</span>
							<Progress :percent="item.score*10" :stroke-width="5" hide-info> </Progress>
						</div>
					</div>
					<div v-html="m" style="width: 100%" class="v">{{m}}</div>
					<!--风险->
        <!--<div class="store-risk">-->
					<!--<p>{{evauationContent}}</p>-->
					<!--</div>-->

					<!--<p class="p1"></p>-->

					<!--已经赞助-->
					<div class="crack">
						<div class="crack-tag1"><span class="span-name">{{tag}}</span></div>
						<span class="crack-tag3">编辑于 {{timestr1}}</span>
						<div class="sponsor">
							<img class="sponsor4 project-img1" :src="item.sendUserIcon" v-for="(item,index) in imgUrls" :style="fun(index)" alt="">
							<p class="zan">{{donateNum}}人已赞助</p>
						</div>

					</div>

				</div>

			</div>
		</div>
		<!--评论-->
		<div class="previewBottom">
			<div class="hot evaluation">
				<div class="hot-comment">热门评论</div>
			</div>
			<!--讨论详情-->
			<v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" @bottom-status-change="handleBottomChange">
				<div class="evaluation-info" v-for="(item,index) in newestComments">
					<div class="evaluation-info-title">
						<img class="evaluation-info-img" :src="item.commentUserIcon" alt="">
						<div class="evaluation-info-p">
							<p class="name">{{item.commentUserName}}</p>
							<span class="info">{{item.createTimeStr}}</span>
						</div>
						<!--点赞-->
						<div class="evaluation-follow"><img src="../../assets/footer/zan.png" alt=""><span>{{item.praiseNum}}</span></div>
					</div>
					<p class="p-style">{{item.commentContent}}</p>
				</div>
			</v-loadmore>
		</div>
		<App :message="post"></App>
	</div>
</template>

<script>
	import HeaderBar from '@/components/layout/headerBar.vue'
	import App from '@/components/layout/app.vue'
	import Headerdown from '@/components/layout/headerdown.vue'
	import { articleInfo, postCommentList } from '@/service/home';
	import { wechatShare } from '../../assets/js/wxshare'
	import '../../assets/js/baidu'
	import Data from '../../assets/js/date'
	import { Loadmore } from 'mint-ui';
	export default {
		name: "article-info",
		data() {
			return {
				src: "",
				id: "",
				m: "",
				tag: '',
				articleTitle: '',
				username: "",
				userSignature: "",
				totalscore: "",
				storeList: [],
				imgUrls: [],
				donateNum: "",
				post: [],
				timestr: "",
				timestr1: "",
				imgUrl: '',
				imgUrlwx: '',
				postShortDesc: '',
				pageIndex: 1,
				pageSize: 5,
				postId: 0,
				newestComments: [],
				allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
				scrollMode: "auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
				totalpage: 0,
				loading: false,
				bottomText: '',
				bottomStatus: '',
			}
		},
		components: {
			HeaderBar,
			App,
			Headerdown,
			'v-loadmore': Loadmore,
		},

		mounted() {

//			console.log(this.$route.query.id)
			this.id = this.$route.query.id;
			//评论
			this.preview()
			var params = {
				postId: this.id-0
			}
			//测评
			articleInfo(params).then(res => {
				if(res.code == 0) {
					var data = res.data.evaluationDetail

					//头像加V
					var cuser = data.usertype
					if(cuser == 1) {
						$(".imgV").css("display", "none")
					}
					//项目方
					if(cuser == 2) {
						$(".imgV").attr("src", "../../../static/elevation/p.gif")
					}
					//评测媒体
					if(cuser == 3) {
						$(".imgV").attr("src", "../../../static/elevation/F.gif")
					}
					//机构号
					if(cuser == 4) {
						$(".imgV").attr("src", "../../../static/elevation/V.gif")

					}
					
					this.articleTitle = data.postTitle
					//头像
					var icon = data.createUserIcon
					this.src = icon;
					//用户名
					this.username = data.createUserName;
					//用户签名
					this.userSignature = data.createUserSignature;
					//综合评分
					this.totalscore = data.totalScore;
					//评分
					if(data.professionalEvaDetail!=null&&data.professionalEvaDetail.length!=0){
						this.storeList = JSON.parse(data.professionalEvaDetail);
//						console.log(this.storeList)
						if(this.storeList.length==0){
							$(".store-info1").css("display", "none")
						}
					}else{
						$(".store-info1").css("display", "none")
					}
					
					//文章
					this.m = data.evauationContent
					//标签
					this.tag = data.projectCode;
					//调用 Data.customData()
					var nowdate = Data.customData()
					//切割当前时间获取当前年份
					var time = nowdate.split("-")
					//时间  字符串切割
					var arr = data.createTimeStr.split(" ")

					this.timestr = arr[0];
					if(nowdate == this.timestr) {
						var a1 = arr[1].split(":")
						this.timestr1 = a1[0] + ":" + a1[1];
					} else {
						//年份分割
						var year = this.timestr.split("-")

						if(time[0] == year[0]) {
							this.timestr1 = year[1] + "-" + year[2];
						} else {
							this.timestr1 = arr[0];
						}

					}

					//赞助  循环图片
					if(data.commendationList != null) {
						this.imgUrls = data.commendationList
						for(let i = 0; i < this.imgUrls.length; i++) {
							//线上
							var a = this.imgUrls[i].sendUserIcon;
						}
					}

					//赞助人数
					this.donateNum = data.donateNum;
					//如果赞助人数为0则不显示图片和赞助人数
					if(this.donateNum == 0) {
						$(".sponsor").css("display", "none")
					}

					//判断是不是评测   发送另一个组件
					var a1 = window.location.href
					var a2 = a1.match("articleInfo")[0]
//					console.log(a2)
					this.post.push(a2,this.id)
//					console.log(this.post)
					
					//缩略图
					if(data.postSmallImages!=null&&data.postSmallImages.length!=0){
						this.imgUrl = JSON.parse(data.postSmallImages)
					}
					
					//缩略文章
					this.postShortDesc = data.postShortDesc
				}

			})
		},
		updated() {
			// console.log(this.imgUrl)
			
			//  如果有缩略图
			if(this.imgUrl.length == 0) {
				this.imgUrlwx = 'https://pic.qufen.top/posts20180628204925934317'
			} else {
				this.imgUrlwx = this.imgUrl[0].fileUrl

			}
			
			wechatShare({
				title: this.articleTitle,
				content: this.postShortDesc,
				link: window.location.href,
				logo: this.imgUrlwx
			})
			$('.v').css({
				letterSpacing: '1px',
				fontSize: '16px',
				wordWrap: 'break-word',
				lineHeight: '26px',
			})
			$('.v').find('img').css({
				width: '100%',
				height: '100%',
			});
			$('.v').find('p').css({
				margin: "1rem 0"
			});
			$('.v').find('span').css({
				fontSize: '16px',
			});

			document.title = this.articleTitle
		},
		methods: {
			handleBottomChange(status) {
				setInterval(() => {
					this.bottomStatus = status; //上拉状态变换
				}, 1000)

			},
			loadBottom() {
				// 上拉加载
				this.previewmore(); // 上拉触发的分页查询
				this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位
			},
			preview() {
				let data = {
					token: this.token,
					pageIndex: 1,
					pageSize: 5,
					postId: this.id - 0,
					postType: 1
				}
				postCommentList(data).then(res => {
					if(res.code == 0) {
						this.hasNext = res.data.newestComments.hasNext
						if(res.data.newestComments.rows != null) {
							this.newestComments = res.data.newestComments.rows
							//调用 Data.customData()
							var nowdate = Data.customData()
							//切割当前时间获取当前年份
							var time = nowdate.split("-")

							for(let i = 0; i < res.data.newestComments.rows.length; i++) {
								//时间  字符串切割
								var arr = res.data.newestComments.rows[i].createTimeStr.split(" ")
								this.timestr = arr[0];
								if(nowdate == this.timestr) {
									var a1 = arr[1].split(":")
									res.data.newestComments.rows[i].createTimeStr = a1[0] + ":" + a1[1];
								} else {
									//年份分割
									var year = this.timestr.split("-")
									
									if(time[0] == year[0]) {
										res.data.newestComments.rows[i].createTimeStr = year[1] + "-" + year[2];
									} else {
										res.data.newestComments.rows[i].createTimeStr = arr[0];
									}
								}

							}

							if(this.hasNext == false) {
								this.allLoaded = true;
							}

						} else {
							$(".previewBottom").css("display", "none")
						}

					}
				}).catch(function(res) {
					// $(".previewContent").css('display', "none")
				});
			},
			previewmore() {
				if(this.newestComments.length != 0) {

					if(this.hasNext == true) {
						this.pageIndex = parseInt(this.pageIndex) + 1
						let data = {
							token: this.token,
							pageIndex: this.pageIndex,
							pageSize: 5,
							postId: this.id - 0,
							postType: 1
						}
						postCommentList(data).then(res => {
							if(res.code == 0) {

								this.hasNext = res.data.newestComments.hasNext
								//							console.log(this.hasNext)
								if(res.data.newestComments.rows != null) {
									for(var i = 0; i < res.data.newestComments.rows.length; i++) {
										this.newestComments.push(res.data.newestComments.rows[i]);

										//调用 Data.customData()
										var nowdate = Data.customData()
										//切割当前时间获取当前年份
										var time = nowdate.split("-")
										

										//时间  字符串切割
										var arr = res.data.newestComments.rows[i].createTimeStr.split(" ")
										this.timestr = arr[0];
										if(nowdate == this.timestr) {
											var a1 = arr[1].split(":")
											res.data.newestComments.rows[i].createTimeStr = a1[0] + ":" + a1[1];
										} else {
											//年份分割
											var year = this.timestr.split("-")
											
											if(time[0] == year[0]) {
												res.data.newestComments.rows[i].createTimeStr = year[1] + "-" + year[2];
											}else {
												res.data.newestComments.rows[i].createTimeStr = arr[0];
											}
										}

									}

								}
								if(this.hasNext == false) {
									this.allLoaded = true;
								}

							}
						})
					} else {
						this.allLoaded = true;
					}
				}

			},
			fun(index) {
				if(index <= 6) {
					var str = "left:" + (index * 25 - 50) + "px";
					return str;
				} else {
					$(".project-img1").eq(index).css("display", "none");
				}
			}
		},

	}
</script>