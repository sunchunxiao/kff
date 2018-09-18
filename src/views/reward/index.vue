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
</style>

<template>
	<div>
		<Headerdown></Headerdown>
		<div class="evaluation pad-top">
			<div class="evaluation-title">
				<h2>{{articleTitle}}</h2>
			</div>
		</div>
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
				<div class="crack-tag3">发表于 {{timestr1}}</div>
			</div>
			<!--  悬赏1000FIND -->
			<div class="rewardFind">
				<div class="rewardFindContent">
					<div class="FindContentTitle">【 <img src="../../assets/reward/donate.png" alt="" /> 悬赏{{rewardMoney}}FIND 】</div>
					<p>优秀的回答这将会在悬赏结束后分享奖金</p>
					<p>截止时间{{endTimeStr}}，已有{{answerCount}}人回答</p>
					<!--<div @click="download" style="text-align: center;margin-top: 1rem;"><span class="findbBtn">去回答</span></div>-->
				</div>
			</div>
		</div>
		<!--悬赏广场-->
		<!--<div class="square">
			<div class="evaluation-info-title squareContent">
				<img class="evaluation-info-img" :src="src" alt="">
				<div class="evaluation-info-p">
					<div class="name">
						<p>悬赏广场</p><img class="imgV" src="" />
					</div>
					<span class="info">03-28 12:00</span>
				</div>
			</div>
		</div>-->
		<!--评论-->
		<div class="rewardBor">
			<div>精彩回答</div>
		</div>
		<!--讨论详情-->
		<v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" @bottom-status-change="handleBottomChange">
			<div @click="answer(item.postId)" class="evaluation-info" v-for="(item,index) in commentsehot">
				<div class="evaluation-info-title">
					<img class="evaluation-info-img" :src="item.createUserIcon" alt="">
					<div class="evaluation-info-p">
						<p class="name">{{item.createUserName}}</p>
						<span class="info"> {{item.createTimeStr}}</span>
					</div>

				</div>
				<p class="p-style"><span v-if="item.rewardMoneyToOne" style="color: red;font-size: 15px;">【 奖励{{item.rewardMoneyToOne}}FIND 】</span>{{item.postShortDesc}}</p>
				<div class="rewardComment" v-if="item.postSmallImagesList">
					<!--<li class="evaluationLi" v-for="(item,index) in postImg">-->
					<div class="rewardCommentList" v-for="(item1,index) in item.postSmallImagesList">
						<!--<img @click="imgScc(index)" :class="{'active':index==isChoose}" :src="item1.fileUrl" alt="">-->
						<img :src="item1.fileUrl" alt="">
					</div>
				</div>
				<div class="childCrack">
					<div class="crack-tag1"><span class="span-name">{{item.projectCode}}</span></div>
					<span class="crack-tag2" v-for="item1 in item.tagInfos">#{{item1.tagName}}#</span>
				</div>
				<div class="childCrack">
					<div class="childZan"><img src="../../assets/reward/zan.png" alt="" /><span class="childNum">{{item.praiseNum}}</span></div>
					<div class="childZan"><img src="../../assets/reward/preview.png" alt="" /><span class="childNum">{{item.commentsNum}}</span></div>
					<div class="childZan childD"><img src="../../assets/reward/donate.png" alt="" /><span class="childNum">{{item.postTotalIncome}}</span></div>
				</div>

			</div>
		</v-loadmore>

		<!--去回答-->
		<!--<div @click="download" class="toanswer">去回答</div>-->
		<!--<App></App>-->
		<!--<div class=" more-preview">-->
		<!--<span class="preview-num">留下你的评论...</span>-->
		<!--</div>-->
	</div>
</template>

<script>
	import Headerdown from '@/components/layout/headerdown.vue'
	import { discuss } from '@/service/home';
	import { rewardDetail, getRewardAnswerList } from '@/service/reward';
	import Data from '../../assets/js/date'
	import { wechatShare } from '../../assets/js/wxshare'
	//	import App from '@/components/layout/app.vue'
	import { Loadmore } from 'mint-ui';
	export default {
		name: "article-info",
		data() {
			return {
				title: "",
				projectCode: "",
				tagInfo: [],
				src: "",
				isChoose: undefined,
				id: "",
				timestr: "",
				timestr1: "",
				endTimeStr: '',
				answerCount: 0,
				rewardMoney: 0,
				articleTitle: "",
				username: "",
				userSignature: "",
				disscussContents: '',
				postShortDesc: "",
				imgUrl: "",
				commentsehot: [],
				postImg: [],
				postSmallImagesList: [],
				imgUrl: '',
				imgUrlwx: '',
				scrollTop: "",
				loading: false,
				allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
				scrollMode: "auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
				pageIndex: 1,
				pageSize: 5,
				hasNext: false,
			}
		},
		components: {
			Headerdown,
			'v-loadmore': Loadmore,
			//			App
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
			if(this.imgUrl.length == 0) {
				this.imgUrlwx = 'https://pic.qufen.top/posts20180628204925934317'
			} else {
				this.imgUrlwx = this.imgUrl[0].fileUrl
			}
			wechatShare({
				title: this.articleTitle,
				content: this.postShortDesc,
				link: window.location.href,
				logo: this.imgUrlwx,
			})
			document.title = this.articleTitle
		},

		created() {
			window.addEventListener('scroll', this.handleScroll)
			this.id = this.$route.query.id;
			//console.log(this.$route.query.id)
			//悬赏尽调的接口
			this.reward()
			//
			this.preview()

		},
		methods: {
			loadBottom() {
				// 上拉加载
				this.previewmore(); // 上拉触发的分页查询
				this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位
			},
			handleBottomChange(status) {
				setInterval(() => {
					this.bottomStatus = status; //上拉状态变换
				}, 1000)

			},
			handleScroll() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			},
			imgScc(index) {
				this.isChoose = this.isChoose === index ? undefined : index
			},
			preview() {
				let data = {
					token: this.token,
					pageIndex: 1,
					pageSize: 5,
					rewarId: this.id - 0,
					types: 1
				}
				getRewardAnswerList(data).then(res => {
					if(res.code == 0) {
						this.commentsehot = res.data.rows
						this.hasNext = res.data.hasNext

						if(res.data.rows != null) {

							//调用 Data.customData()
							var nowdate = Data.customData()
							//切割当前时间获取当前年份
							var time = nowdate.split("-")

							for(let i = 0; i < res.data.rows.length; i++) {
								//判断标标签不为空
								if(res.data.rows[i].tagInfos != null && res.data.rows[i].tagInfos.length != 0) {
									//									console.log(res.data.rows[i].tagInfos)
									res.data.rows[i].tagInfos = JSON.parse(res.data.rows[i].tagInfos)
								}

								if(res.data.rows[i].postSmallImagesList != null) {

									if(res.data.rows[i].postSmallImagesList.length != 0) {
										//										this.postSmallImagesList = res.data.rows[i].postSmallImagesList
										res.data.rows[i].postSmallImagesList = res.data.rows[i].postSmallImagesList.slice(0, 3)

									}
								}

								//时间  字符串切割
								var arr = res.data.rows[i].createTimeStr.split(" ")
								this.timestr = arr[0];

								if(nowdate == this.timestr) {
									var a1 = arr[1].split(":")
									res.data.rows[i].createTimeStr = a1[0] + ":" + a1[1];
								} else {
									//年份分割
									var year = this.timestr.split("-")
									if(time[0] == year[0]) {
										res.data.rows[i].createTimeStr = year[1] + "-" + year[2];
									} else {
										res.data.rows[i].createTimeStr = arr[0];
									}

								}

							}

							if(this.hasNext == false) {
								this.allLoaded = true;
							}

						}

					}
				}).catch(function(res) {
					$(".rewardBor").css('display', "none")
				});
			},
			//加载下一页
			previewmore() {
				if(this.commentsehot.length != 0) {

					if(this.hasNext == true) {
						this.pageIndex = parseInt(this.pageIndex) + 1
						//						alert(this.pageIndex)
						let data = {
							token: this.token,
							pageIndex: this.pageIndex,
							pageSize: 5,
							rewarId: this.id - 0,
							types: 1
						}

						getRewardAnswerList(data).then(res => {
							if(res.code == 0) {

								this.hasNext = res.data.hasNext
								//							console.log(this.hasNext)
								if(res.data.rows != null) {
									for(var i = 0; i < res.data.rows.length; i++) {
										this.commentsehot.push(res.data.rows[i]);
										//判断标标签不为空
										if(res.data.rows[i].tagInfos != null && res.data.rows[i].tagInfos.length != 0) {
											//									console.log(res.data.rows[i].tagInfos)
											res.data.rows[i].tagInfos = JSON.parse(res.data.rows[i].tagInfos)
										}

										//调用 Data.customData()
										var nowdate = Data.customData()
										//切割当前时间获取当前年份
										var time = nowdate.split("-")
										//时间  字符串切割
										var arr = res.data.rows[i].createTimeStr.split(" ")
										this.timestr = arr[0];
										if(nowdate == this.timestr) {
											var a1 = arr[1].split(":")
											res.data.rows[i].createTimeStr = a1[0] + ":" + a1[1];
										} else {
											//年份分割
											var year = this.timestr.split("-")
											
											if(time[0] == year[0]) {
												res.data.rows[i].createTimeStr = year[1] + "-" + year[2];
											} else {
												res.data.rows[i].createTimeStr = arr[0];
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
			reward() {
				let params = {
					postId: this.id - 0
				}
				//爆料
				rewardDetail(params).then(res => {
					if(res.code == 0) {
						var data = res.data
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

						this.username = data.createUserName;
						this.userSignature = data.createUserSignature;
						//文章内容
						this.disscussContents = data.rewardContents;
						
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

						//调用 Data.customData()
						var nowdate = Data.customData()
						//切割当前时间获取当前年份
						var time = nowdate.split("-")
						//时间  字符串切割
						var arr = data.createTimeStr.split(" ")

						this.timestr = arr[0];
						//						console.log(arr[0])
						if(nowdate == this.timestr) {
							var a1 = arr[1].split(":")
							this.timestr1 = a1[0] + ":" + a1[1];
						} else {
							//年份分割
							var year = this.timestr.split("-")
							//							console.log(year[0])
							if(time[0] == year[0]) {
								this.timestr1 = year[1] + "-" + year[2];
							} else {
								this.timestr1 = arr[0];
							}

						}
						//结束时间
						var end = data.endTimeStr.split(" ")
						//						console.log(end[1].split(":"))
						var end1 = end[0].split("-")
						var end2 = end[1].split(":")

						if(time[0] == end1[0]) {
							this.endTimeStr = end1[1] + "-" + end1[2] + " " + end2[0] + ":" + end2[1];

						}
						//回答人数
						this.answerCount = data.answerCount
						//悬赏find
						this.rewardMoney = data.rewardMoney

						this.tagInfo = JSON.parse(data.tagInfos)
						//缩略文章
						this.postShortDesc = data.postShortDesc
					}

				})
			},
			answer(id) {
				this.$router.push('/reward/answer?id=' + id)
			},
			download() {
				this.$router.push('/user/download')
			}

		}

	}
</script>