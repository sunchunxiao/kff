<style lang="less">
	@import '../project/css/project.css';
	@import './style.css';
	.evaluation-content {
		font-size: 1.3rem;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
		margin: 2rem 0;
	}
	
	.content-img {
		width: 100%;
	}
	
	.min {
		width: 100%;
	}
	
	.preview {
		font-size: 13px;
		/*color:#3b88f6;*/
		letter-spacing: 0;
		line-height: 20px;
		text-align: justify;
		padding: 1rem 0;
		/*border-top: 1px dotted  #dddddd;*/
		border-bottom: 1px dotted #dddddd;
	}
	
	.preview-peo {
		color: #3b88f6;
	}
	
	.evaluationUl {
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
	}
	
	.evaluationUl .evaluationLi {
		width: 31%;
		/*margin: 0 auto;*/
		height: 9rem;
		float: left;
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
	}
	
	.evaluationUl .evaluationLi img {
		width: 100%;
		height: 100%;
	}
	
	.evaluationUl .evaluationLi img {
		transform: scale(1);
		/*图片原始大小1倍*/
		transition: all ease 0.5s;
	}
	/*图片放大所用时间*/
	
	.evaluationUl .evaluationLi img.active {
		transform: scale(0.8);
		/*图片需要放大3倍*/
		position: absolute;
		/*top: 0;*/
		left: 0;
		/*是相对于前面的容器定位的，此处要放大的图片，不能使用position：relative；以及float，否则会导致z-index无效*/
		z-index: 100;
	}
	
	.more-preview {
		height: 3rem;
		line-height: 3rem;
		background: #f4f4f4;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}
	
	.preview-num {
		padding-left: 2rem;
		font-size: 13px;
		color: #aaaaaa;
	}
	
	#prep {
		margin: 1rem 0;
		white-space: pre-wrap;
		/*css-3*/
		white-space: -moz-pre-wrap;
		/*Mozilla,since1999*/
		white-space: -pre-wrap;
		/*Opera4-6*/
		white-space: -o-pre-wrap;
		/*Opera7*/
		word-wrap: break-word;
		/*InternetExplorer5.5+*/
		font-size: 1.3rem;
	}
	
	.rewardCommentList {
		width: 31%;
		height: 6rem;
		float: left;
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
	}
</style>

<template>
	<div>
		<!--<div class="evaluation">
			<div class="evaluation-title">
				<h2>{{articleTitle}}</h2>
			</div>
		</div>-->
		<div class="evaluation-info">
			<div class="evaluation-info-title">
				<img class="evaluation-info-img" :src="src" alt="">
				<div class="evaluation-info-p">
					<div class="name">
						<p>{{username}}</p><img class="imgV" src="" />
					</div>
					<span class="info">{{userSignature}}</span>
				</div>
				<div class="evaluation-follow discuss-atten">+关注</div>
			</div>
			<!--文章内容-->
			<!--<p v-html="disscussContents" class="evaluation-content v">{{disscussContents}}</p>-->
			<pre id="prep" v-html>{{disscussContents}}</pre>
			<div class="evaluationUl">
				<!--<li class="evaluationLi" v-for="(item,index) in postImg">-->
				<div class="evaluationLi" v-for="(item,index) in postImg">
					<img @click="imgScc(index)" :class="{'active':index==isChoose}" :src="item" alt="">
				</div>
			</div>
			<div class="crack">
				<div class="crack-tag1"><span class="span-name">{{projectCode}}</span></div>
				<span class="crack-tag2" v-for="item in tagInfo">#{{item.tagName}}#</span>
				<div class="crack-tag3">发表于 {{timestr}}</div>
				<div class="sponsor">
					<img class="sponsor4 project-img1" :src="item" v-for="(item,index) in imgUrls" :style="fun(index)" alt="">
					<p class="zan">3人已赞助</p>
				</div>
			</div>

			<!--  悬赏1000FIND -->
			<div class="rewardFind">
				<div class="rewardFindContent">
					<div class="FindContentTitle">【 <img src="../../assets/reward/donate.png" alt="" /> 悬赏1000FIND 】</div>
					<p class="answerTitle">ALL- 团队测评!!!</p>
					<p class="answerContent">截止时间08.08 12:00，已有12人回答，截止时间08.08 12:00，已有12人回答</p>
					<div @click="toreward" style="text-align: right;"><span style="color: rgb(57,61,70);">去围观悬赏>></span></div>
				</div>
			</div>
		</div>

		<!--评论-->
		<div class="rewardBor answerBor">
			<div class="borPreview">评论</div>
		</div>
		<!--讨论详情-->
		<v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" @bottom-status-change="handleBottomChange">
			<div class="evaluation-info" v-for="(item,index) in newestComments">
				<div class="evaluation-info-title">
					<img class="evaluation-info-img" :src="item.commentUserIcon" alt="">
					<div class="evaluation-info-p">
						<p class="name">{{item .commentUserName}}</p>
						<span class="info">{{item.floor}}楼 {{item.createTimeStr}}</span>
					</div>
					<!--点赞-->
					<div class="evaluation-follow"><img src="../../assets/reward/zan.png" alt=""><span>{{item.praiseNum}}</span></div>

				</div>
				<p class="p-style">{{item.commentContent}}</p>
			</div>
		</v-loadmore>
		<!--		<App></App>-->
	</div>
</template>

<script>
	import { discuss, discussCommentList } from '@/service/home';
	//	import { wechatShare } from '../../assets/js/wxshare'
	//	import App from '@/components/layout/app.vue'
	import '../../assets/js/baidu'
	import { Loadmore } from 'mint-ui';
	import Data from '../../assets/js/date'
	export default {
		name: "article-info",
		data() {
			return {
				projectCode: "",
				tagInfo: "",
				src: "",
				isChoose: undefined,
				id: "",
				timestr: "",
				articleTitle: "",
				username: "",
				userSignature: "",
				disscussContents: '',
				postShortDesc: "",
				imgUrl: "",
				postImg: [],
				imgUrl: '',
				imgUrlwx: '',
				postShortDesc: '',
				newestComments: [],
				imgUrls: [
					'http://img0.imgtn.bdimg.com/it/u=2882284884,1913504836&fm=27&gp=0.jpg',
					'http://img0.imgtn.bdimg.com/it/u=2882284884,1913504836&fm=27&gp=0.jpg',
					'http://img0.imgtn.bdimg.com/it/u=2882284884,1913504836&fm=27&gp=0.jpg',

				],
				scrollTop: "",
				allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
				scrollMode: "auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
				loading: false,
				bottomText: '',
				bottomStatus: '',
				pageIndex: 1,
				pageSize: 5,
				postId:0
			}
		},
		components: {
			//			App
			'v-loadmore': Loadmore,
		},
		created() {
			window.addEventListener('scroll', this.handleScroll)
			this.id = this.$route.query.id;
//			console.log(this.$route.query.id)
			//悬赏尽调的接口
			this.reward()
			//评论
			this.preview()

		},
		updated() {
			$('.v').css({
				letterSpacing: '1px',
				fontSize: '16px',
				wordWrap: 'break-word',
				lineHeight: '26px',
			})
			$('.v').find('p').css({
				margin: "1rem 0",
			});
			$('.v').find('span').css({
				fontSize: '16px',
			});

			//点击图片增大后的相对位置
			if($(".evaluationLi>img").hasClass("active")) {
				//如果滚动获取滚动的top值
				if(this.scrollTop) {
					$(".active").css({
						top: this.scrollTop
					})
				} else {
					$(".active").css({
						top: 0
					})
				}

			}
			//			if(this.imgUrl.length == 0) {
			//				this.imgUrlwx = 'https://pic.qufen.top/posts20180628204925934317'
			//			} else {
			//				this.imgUrlwx = this.imgUrl[0].fileUrl
			//			}
			//			wechatShare({
			//				title: this.articleTitle,
			//				content: this.postShortDesc,
			//				link: window.location.href,
			//				logo: this.imgUrlwx,
			//			})
			document.title = this.articleTitle
		},
		methods: {
			handleScroll() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			},
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
			imgScc(index) {
				this.isChoose = this.isChoose === index ? undefined : index
			},
			reward() {
				let params = {
					postId: this.id
				}
				//爆料
				discuss(params).then(res => {
					if(res.code == 0) {
						//console.log(res.data.projectEvaluationDetailResponse)
						var data = res.data.discussDetail
						//头像加V
						var cuser = data.userType
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

						//						this.articleTitle = data.postTitle
						//头像
						var icon = data.createUserIcon
						this.src = icon;

						this.username = data.createUserName;
						this.userSignature = data.createUserSignature;
						//文章内容
						this.disscussContents = data.disscussContents;
						//悬调id
						this.postId = data.postId
						
						//图片
						if(data.postSmallImages != null && data.postSmallImages.length != 0) {
							var a = JSON.parse(data.postSmallImages);
							for(let i = 0; i < a.length; i++) {
								// console.log(a)
								this.imgUrl = a[i].fileUrl
								this.postImg.push(this.imgUrl)
								// console.log(this.postImg)
							}
						}

						//标签
						this.projectCode = data.projectCode;

						//最多选择标签
						this.tagInfo = JSON.parse(data.tagInfos);

						//时间  字符串切割
						var arr = data.createTimeStr.split(" ")
						//					console.log(arr[0])
						this.timestr = arr[0];
						//缩略图
						// this.imgUrl = JSON.parse(data.post.postSmallImages)
						//缩略文章
						this.postShortDesc = data.postShortDesc
					}

				})
			},
			preview() {
				let data = {
					token: this.token,
					pageIndex: 1,
					pageSize: 5,
					postId: this.id - 0,
				}
				discussCommentList(data).then(res => {
					if(res.code == 0) {
						this.hasNext = res.data.comments.hasNext
						if(res.data.comments.rows != null) {

							this.newestComments = res.data.comments.rows
							//调用 Data.customData()
							var nowdate = Data.customData()
							//切割当前时间获取当前年份
							var time = nowdate.split("-")
							//							console.log(time[0])

							for(let i = 0; i < res.data.comments.rows.length; i++) {

								//时间  字符串切割
								var arr = res.data.comments.rows[i].createTimeStr.split(" ")
								this.timestr = arr[0];

								if(nowdate == this.timestr) {
									var a1 = arr[1].split(":")
									res.data.comments.rows[i].createTimeStr = a1[0] + ":" + a1[1];
								} else {
									//年份分割
									var year = this.timestr.split("-")
//									console.log(year[0])
									if(time[0] == year[0]) {
										res.data.comments.rows[i].createTimeStr = year[1] + "-" + year[2];
									} else {
										res.data.comments.rows[i].createTimeStr = arr[0];
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
						//						alert(this.pageIndex)
						let data = {
							token: this.token,
							pageIndex: this.pageIndex,
							pageSize: 5,
							postId: this.id - 0,
						}
						
						discussCommentList(data).then(res => {
							if(res.code == 0) {
								

								this.hasNext = res.data.comments.hasNext
								//							console.log(this.hasNext)
								if(res.data.comments.rows != null) {
									for(var i = 0; i < res.data.comments.rows.length; i++) {
										this.newestComments.push(res.data.comments.rows[i]);

										//调用 Data.customData()
										var nowdate = Data.customData()
										//切割当前时间获取当前年份
										var time = nowdate.split("-")
										console.log(time[0])
										//时间  字符串切割
										var arr = res.data.comments.rows[i].createTimeStr.split(" ")
										this.timestr = arr[0];
										if(nowdate == this.timestr) {
											var a1 = arr[1].split(":")
											res.data.comments.rows[i].createTimeStr = a1[0] + ":" + a1[1];
										} else {
											//年份分割
											var year = this.timestr.split("-")
											console.log(year[0])
											if(time[0] == year[0]) {
												res.data.comments.rows[i].createTimeStr = year[1] + "-" + year[2];
											} else {
												res.data.comments.rows[i].createTimeStr = arr[0];
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
			toreward() {
				console.log(this.postId)
				this.$router.push('/reward/?id='+this.postId)
			},
			download() {
				this.$router.push('/user/download')
			},
			fun(index) {
				if(index <= 6) {
					var str = "left:" + (index * 25 - 50) + "px";
					return str;
				} else {
					$(".project-img1").eq(index).css("display", "none");
				}
			},

		}

	}
</script>