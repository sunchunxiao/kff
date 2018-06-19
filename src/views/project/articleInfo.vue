<style lang="less" scoped>
	.evaluation-title>h2 {
		font-weight: lighter;
		font-size: 20px;
		display: inline-block;
	}

	.evaluation {
		border-top: 1px solid #dddddd;
		border-bottom: 1px solid #dddddd;
	}

	.evaluation-title {
		width: 90%;
		margin: 1rem auto;
	}

	.storeCommon {
		font-size: 1.3rem;
		color: #54c7fc;
		font-weight: bolder;
		/*color:#3b88f6;*/
		letter-spacing: 0;
		float: right;
		margin-right: 1rem;
	}

	.evaluation-store {
		font-weight: 600;
		font-size: 2rem;
	}

	.evaluation-info {
		width: 87%;
		margin: 1rem auto 0;
	}

	.evaluation-info-p {
		float: left;
		padding-left: 1rem;
		width: 220px;
	}

	.evaluation-info-img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		float: left;
		border: 1px solid #dddddd;
	}

	.evaluation-info-title {
		overflow: hidden;
		position: relative;
		margin: 1rem 0;
	}

	.name {
		font-size: 14px;
		color: #333333;
		letter-spacing: 0;
		position: relative;
	}

	.name p {
		display: inline-block;
		margin-right: 5px;
	}

	.name img {
		position: absolute;
		width: 8%;
		/*left: 4rem;*/
	}

	.info {
		font-size: 1rem;
		color: #888888;
		letter-spacing: 0;
	}

	.evaluation-follow {
		position: absolute;
		right: 0;
		top: 0;
		font-size: 12px;
		color: #ffffff;
		text-align: center;
		background: #3b88f6;
		border: 1px solid #3b88f6;
		border-radius: 2px;
		width: 43px;
		height: 20px;
		line-height: 20px;
	}
	/*综合评分*/
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
		/*box-shadow: 0 2px 10px 0 #e8e8e8;*/
		/*border-radius: 5px;*/
		/*width:345px;*/
/*		height: 18rem;*/
		margin-top: 1rem;
	}

	.store-info1 {
		box-shadow: 0 2px 10px 0 #e8e8e8;
		border-radius: 5px;
		padding: 1rem;
	}

	.percent {
		display: inline-block;
		width: 100px;
		margin-left: 5px;
		font-size: 12px;
		color: #888888;
	}

	.storeList {
		margin-top: 0.5rem;
	}

	.store-risk {
		width: 100%;
		padding: 1rem 1.5rem;
		background: #f8f3f4;
		border-radius: 6px;
		border: 1px solid #f4f4f4;
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
	/*标签*/

	.crack-tag1 {
		display: inline-block;
		background-color: #d8e7fd;
		border-radius: 35px;
		width: 61px;
		height: 22px;
		text-align: center;
		line-height: 22px;
		/*opacity:0.2;*/
		/*margin: 0 0.5rem;*/
	}

	.span-name {
		font-size: 14px;
		color: #3b88f6;
	}

	.crack {
		margin: 2rem 0;
	}

	.crack-tag2 {
		font-size: 14px;
		color: #3b88f6;
		letter-spacing: 0;
		margin-left: 2rem;
	}

	.crack-tag3 {
		position: absolute;
		right: 2.5rem;
		font-size: 1rem;
		color: #c2c2c2;
		letter-spacing: 0;
	}

	.sponsor {
		width: 50%;
		margin: 0 auto;
		margin-top: 3rem;
		text-align: center;
		position: relative;
		height: 5rem;
	}

	.img1 {
		display: block;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1px solid #F4F4F4;
	}

	.sponsor1 {
		position: absolute;
		left: 130px;
	}

	.sponsor4 {
		position: absolute;
		left: -40px;
		right: 0;
		top: 0;
		bottom: 0;
		margin: 0 auto;
	}

	.zan {
		text-align: center;
	}

	.v {
		margin-top: 2rem;
	}
</style>

<template>
	<div>
		<!--<HeaderBar-->
		<!--:title="title"-->
		<!--/>-->
		<div class="evaluation">
			<div class="evaluation-title">
				<h2>{{articleTitle}}</h2>
				<span class="evaluation-store storeCommon">8.1</span>
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

					<p class="p1"></p>
					<!--<div>-->
					<!--<div class="storeList" >-->
					<!--<div class="store-info-title">项目定位<span class="percent">/ 20%</span> </div>-->
					<!--<span class="storeCommon">8.2</span>-->
					<!--<Progress :percent="80" :stroke-width="10"  hide-info> </Progress>-->
					<!--</div>-->
					<!--</div>-->
					<!--<img class="img" src="../../assets/evaluation/Bitmap@1x.png" alt="">-->
					<!--已经赞助-->
					<div class="crack">
						<div class="crack-tag1"><span class="span-name">EOS</span></div>
						<span class="crack-tag3">编辑于 2015-07-15</span>
						<div class="sponsor">
							<img class="sponsor4 img1" :src="item" v-for="(item,index) in imgUrls" :style="fun(index)" alt="">

						</div>
						<p class="zan">{{donateNum}}人已赞助</p>
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
	import { articleInfo } from '@/service/home';
	export default {
		name: "article-info",
		data() {
			return {
				title: "",
				src: "",
				id: "",
				m: "",
				articleTitle:'',
				article: "",
				username: "",
				userSignature: "",
				totalscore: "",
				evauationContent: "",
				storeList: [],
				imgUrls: [],
				donateNum: "",
				post: []
			}
		},
		components: {
			HeaderBar,
			FooterInfo
		},
		updated() {
			// $('.v').find('img').css('width', '100%');
			$('.v').find('img').css({
				width:'100%',
				height:'100%',
				});
			$('.v').find('p').css({
				fontSize: '1.3rem',
				width: "100%",
				margin: "10px 0"
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
			console.log(this.$route.query.id)
			this.id = this.$route.query.id;
			let params = {
				postId: this.id
			}
			//测评
			articleInfo(params).then(res => {
				if(res.code == 0) {
					console.log(res.data.projectEvaluationDetailResponse)
					var data = res.data.projectEvaluationDetailResponse

					//头像加V
					var cuser = data.cUsertype
					if(cuser == 0) {
						//      	$(".imgV").attr("src","../../../static/elevation/initial@2x.png")
					}
					if(cuser == 1) {
						$(".imgV").attr("src", "../../../static/elevation/initial@2x.png")
					}
					if(cuser == 2) {
						$(".imgV").attr("src", "../../../static/elevation/media@2x.png")
					}
					if(cuser == 3) {
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
					console.log(this.storeList)
					//文章
					this.m = data.evaluation.evauationContent

					//标签
					// this.tag = data.projectCode;
					//时间
					this.timestr = data.createTimeStr;
					//赞助  循环图片
					var result = data.commendationList
					for(let i = 0; i < result.length; i++) {
						//线上
						var a = result[i].sendUserIcon;
					}
					//赞助人数
					this.donateNum = data.post.donateNum;
					//文章介绍
					this.evauationContent = data.evaluation.evauationContent;
					//底部
					this.post.push({
						praiseNum: data.post.praiseNum
					},{
						commentsNum: data.post.commentsNum
					})
					console.log(this.post)

				}

			})
		}

	}
</script>
