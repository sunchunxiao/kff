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

	/*.store-risk {
		width: 100%;
		padding: 1rem 1.5rem;
		background: #f8f3f4;
		border-radius: 6px;
		border: 1px solid #f4f4f4;
	}*/

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
	<div>
		<!--<HeaderBar-->
		<!--:title="title"-->
		<!--/>-->
		<!--头部下载app-->
		<Headerdown></Headerdown>
		<div class="evaluation pad-top">
			<div class="evaluation-title">
				<h2>{{articleTitle}}</h2>
				<span class="evaluation-store storeCommon">{{totalscore}}</span>
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
				<div class="evaluation-follow">+关注</div>
			</div>
			<div>
				<h3>综合评分</h3>
				<span class="storeCommon">{{totalscore}}</span>
				<Progress :percent="80" :stroke-width="10" hide-info></Progress>
				<div class="store-info">
					<div class="store-info1">
						<div class="storeList" v-for="item in storeList">
							<div class="store-info-title">{{item.modelName}}<span class="percent">/ {{item.modelWeight}}%</span> </div>
							<span class="storeCommon">{{item.score}}</span>
							<Progress :percent="item.modelWeight" :stroke-width="5" hide-info> </Progress>
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
						<div class="crack-tag1"><span class="span-name">EOS</span></div>
						<span class="crack-tag3">编辑于 {{timestr}}</span>
						<div class="sponsor">
							<img class="sponsor4 img1" :src="item" v-for="(item,index) in imgUrls" :style="fun(index)" alt="">
							<p class="zan">{{donateNum}}人已赞助</p>
						</div>

					</div>
					<FooterInfo :message="post"></FooterInfo>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	import HeaderBar from '@/components/layout/headerBar.vue'
	import FooterInfo from '@/components/layout/footerInfo.vue'
	import Headerdown from '@/components/layout/headerdown.vue'
	import { articleInfo } from '@/service/home';
	export default {
		name: "article-info",
		data() {
			return {
				title: "",
				src: "",
				id: "",
				m: "",
				articleTitle: '',
				article: "",
				username: "",
				userSignature: "",
				totalscore: "",
				evauationContent: "",
				storeList: [],
				imgUrls: [],
				donateNum: "",
				post: [],
        timestr:""
			}
		},
		components: {
			HeaderBar,
			FooterInfo,
			Headerdown
		},
		updated() {
			// $('.v').find('img').css('width', '100%');
			$('.v').find('img').css({
				width: '100%',
				height: '100%',
			});
			$('.v').find('p').css({
				fontSize: '1.3rem',
				width: "100%",
				margin: "1rem 0"
			});
			$('.v').find('p').css('word-wrap', 'break-word');
		},
		methods: {
			fun(index) {
				if(index <= 6) {
					var str = "left:" + (index * 25 - 50) + "px";
					return str;
				} else {
					$(".img1").eq(index).css("display", "none");
				}
			}
		},
		mounted() {

			// console.log(this.$route.query.id)
			this.id = this.$route.query.id;
			var params = {
				postId: this.id
			}
			//测评
			articleInfo(params).then(res => {
				if(res.code == 0) {
					// console.log(res.data.projectEvaluationDetailResponse)
					var data = res.data.projectEvaluationDetailResponse

					//头像加V
					var cuser = data.cUsertype
					if(cuser == 1) {
						$(".imgV").css("display", "none")
					}
					if(cuser == 2) {
						$(".imgV").attr("src", "../../../static/elevation/initial@2x.png")
					}
					if(cuser == 3) {
						$(".imgV").attr("src", "../../../static/elevation/media@2x.png")
					}
					if(cuser == 4) {
						$(".imgV").attr("src", "../../../static/elevation/progress@2x.png")
					}
					// console.log(JSON.parse(data.post.createUserIcon).fileUrl)
					this.articleTitle = data.post.postTitle
					//头像
					var icon = data.post.createUserIcon
					this.src = icon;
					//用户名
					this.username = data.post.createUserName;
					//用户签名
					this.userSignature = data.post.createUserSignature;
					//综合评分
					this.totalscore = data.evaluation.totalScore;
					//评分
					this.storeList = JSON.parse(data.evaluation.professionalEvaDetail);
					//自定义维度
					if(this.storeList == null) {
						console.log(111)
						$(".store-info1").css("display", "none")
					}
					//文章
					this.m = data.evaluation.evauationContent

					//时间  字符串切割
					var arr = data.post.createTimeStr.split(" ")
					console.log(arr[0])
					this.timestr = arr[0];

					//赞助  循环图片
					var result = data.commendationList
					for(let i = 0; i < result.length; i++) {
						//线上
						var a = result[i].sendUserIcon;
					}
					//赞助人数
					this.donateNum = data.post.donateNum;
					//如果赞助人数为0则不显示图片和赞助人数
					if(this.donateNum == 0) {
						$(".sponsor").css("display", "none")
					}
					//文章介绍
					this.evauationContent = data.evaluation.evauationContent;
					//底部
					this.post.push(data.post.praiseNum,data.post.commentsNum)
					// console.log(this.post)

				}

			})
		}

	}
</script>
