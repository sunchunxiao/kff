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
				<div class="crack-tag3">发表于 {{timestr}}</div>
			</div>
			<!--  悬赏1000FIND -->
			<div class="rewardFind">
				<div class="rewardFindContent">
					<div class="FindContentTitle">【 悬赏1000FIND 】</div>
					<p>优秀的回答这将会在悬赏结束后分享奖金</p>
					<p>截止时间08.08 12:00，已有12人回答</p>
					<div @click="download" style="text-align: center;margin-top: 1rem;"><span class="findbBtn">去回答</span></div>
				</div>
			</div>
		</div>
		<!--悬赏广场-->
		<div class="square">
			<div class="evaluation-info-title squareContent">
				<img class="evaluation-info-img" :src="src" alt="">
				<div class="evaluation-info-p">
					<div class="name">
						<p>悬赏广场</p><img class="imgV" src="" />
					</div>
					<span class="info">03-28 12:00</span>
				</div>
			</div>
		</div>
		<!--评论-->
		<div class="rewardBor">
			<div>精彩回答</div>
		</div>
		<!--讨论详情-->
		<div @click="answer" class="evaluation-info" v-for="(item,index) in commentsehot">
			<div class="evaluation-info-title">
				<img class="evaluation-info-img" :src="commenticon[index]" alt="">
				<div class="evaluation-info-p">
					<p class="name">{{item .commentUserName}}</p>
					<span class="info">{{item.floor}}楼 {{item.createTimeStr}}</span>
				</div>

			</div>
			<p class="p-style">{{item.commentContent}}</p>
			<div class="preview" v-for="a in item.childCommentsList">
				<!--commentUserName评论人-->
				<span class="preview-peo">{{a.commentUserName}}:@{{a.becommentedUserName}}:</span><span>{{a.commentContent}}</span>
			</div>
			<div class=" rewardComment">
				<!--<li class="evaluationLi" v-for="(item,index) in postImg">-->
				<div class="rewardCommentList" v-for="(item,index) in postImg">
					<img @click="imgScc(index)" :class="{'active':index==isChoose}" :src="item" alt="">
				</div>
			</div>
			<div class="childCrack">
				<div class="crack-tag1"><span class="span-name">{{projectCode}}</span></div>
				<span class="crack-tag2" v-for="item in tagInfo">#{{item.tagName}}#</span>
			</div>
			<div class="childCrack">
				<div class="childZan"><img src="../../assets/reward/zan.png" alt="" /><span class="childNum">120</span></div>
				<div class="childZan"><img src="../../assets/reward/preview.png" alt="" /><span class="childNum">120</span></div>
				<div class="childZan childD"><img src="../../assets/reward/donate.png" alt="" /><span class="childNum">120</span></div>
			</div>

		</div>
		
		<!--去回答-->
		<div @click="download" class="toanswer">去回答</div>
		<!--<App></App>-->
		<!--<div class=" more-preview">-->
		<!--<span class="preview-num">留下你的评论...</span>-->
		<!--</div>-->
	</div>
</template>

<script>
	import Headerdown from '@/components/layout/headerdown.vue'
	import { discuss } from '@/service/home';
	import {rewardDetail} from '@/service/reward';
	//	import { wechatShare } from '../../assets/js/wxshare'
//	import App from '@/components/layout/app.vue'
	import '../../assets/js/baidu'
	export default {
		name: "article-info",
		data() {
			return {
				title: "",
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
				commenticon: [],
				commentsehot: [],
				commentseNew: [],
				commentseSum: "",
				postImg: [],
				imgUrl: '',
				imgUrlwx: '',
				postShortDesc: '',
				scrollTop: ""
			}
		},
		components: {
			Headerdown,
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
			//			wechatShare({
			//				title: this.articleTitle,
			//				content: this.postShortDesc,
			//				link: window.location.href,
			//				logo: this.imgUrlwx,
			//			})
			document.title = this.articleTitle
		},
		
		created() {
			window.addEventListener('scroll', this.handleScroll)
			this.id = this.$route.query.id;
			//console.log(this.$route.query.id)
			//悬赏尽调的接口
			this.reward()

		},
		methods: {
			handleScroll() {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			},
			imgScc(index) {
				this.isChoose = this.isChoose === index ? undefined : index
			},
			reward() {
				let params = {
//					token:
					postId:2
				}
				//爆料
				rewardDetail(params).then(res => {
					if(res.code == 0) {
						console.log(res.data)
						var data = res.data.discussShare
						//头像加V
						var cuser = data.cUsertype
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

						this.articleTitle = data.post.postTitle
						//头像
						var icon = data.post.createUserIcon
						this.src = icon;

						this.username = data.post.createUserName;
						this.userSignature = data.post.createUserSignature;
						//文章内容
						this.disscussContents = data.discuss.disscussContents;
						//图片

						// console.log(a)
						if(data.post.postSmallImages != null && data.post.postSmallImages.length != 0) {
							var a = JSON.parse(data.post.postSmallImages);
							for(let i = 0; i < a.length; i++) {

								// console.log(a)
								this.imgUrl = a[i].fileUrl
								this.postImg.push(this.imgUrl)
								// console.log(this.postImg)
							}
						}

						//标签
						this.projectCode = data.post.projectCode;

						//最多选择标签
						this.tagInfo = JSON.parse(data.tagInfo);
						//热门评论
						this.commentsehot = data.commentsehot;
						var result = data.commentsehot;
						//热门评论头像
						if(result != null) {
							for(let i = 0; i < result.length; i++) {
								var b = data.commentsehot[i].commentUserIcon;
								this.commenticon.push(b)
								//							console.log(this.commenticon)
							}
						}
						//热门评论如果是没有，不显示
						if(this.commentsehot == null) {
							$(".hot").css("display", "none")
						}
						//最新评论数量
						// this.commentseSum = data.commentseSum
						// console.log(this.commentseSum )
						//最新评论
						// this.commentseNew = data.commentseNew

						//时间  字符串切割
						var arr = data.post.createTimeStr.split(" ")
						//					console.log(arr[0])
						this.timestr = arr[0];
						//缩略图
						// this.imgUrl = JSON.parse(data.post.postSmallImages)
						//缩略文章
						this.postShortDesc = data.post.postShortDesc
					}

				})
			},
			answer(){
				this.$router.push('/reward/answer')
			},
			download(){
				this.$router.push('/user/download')
			}

		}

	}
</script>