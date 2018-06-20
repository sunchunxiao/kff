<style lang="less" scoped>
	h2 {
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
		font-size: 14px;
		color: #54c7fc;
		font-weight: bolder;
		/*color:#3b88f6;*/
		letter-spacing: 0;
		float: right;
		margin-right: 1rem;
	}

	.evaluation-store {
		font-size: 20px;
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
		font-size: 10px;
		color: #888888;
		letter-spacing: 0;
	}

	.evaluation-follow {
		position: absolute;
		right: 0;
		top:0;
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
		margin-top: 1rem;
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
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		text-align: center;
	}

	img {
		-ms-interpolation-mode: bicubic;
	}

	img {
		width: 100%
	}

	.v p img {
		width: 100%!important;
	}
</style>

<template>
	<div class="cx-article">
		<!--<HeaderBar-->
		<!--:title="title"-->
		<!--/>-->
		<div class="evaluation">
			<div class="evaluation-title">
				<h2>{{articleTitle}}</h2>
			</div>
		</div>
		<div class="evaluation-info">
			<div class="evaluation-info-title">
				<img class="evaluation-info-img" :src="src" alt="">
				<div class="evaluation-info-p">
					<div class="name">
						<p>{{username}}</p>
						<img class="imgV" src="" />
					</div>
					<span class="info">{{userSignature}}</span>
				</div>
				<div class="evaluation-follow">+关注</div>
			</div>
			<!--<div v-for="item in topicList">{{item}}</div>-->
			<div v-html="m" style="width: 100%" class="v">{{m}}</div>
			<!--<div v-html="m" class="z">{{m}}</div>-->
			<div>
				<!--已经赞助-->
				<div class="crack">
					<!--标签-->
					<div class="crack-tag1"><span class="span-name">{{tag}}</span></div>
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
	import { article } from '@/service/home';
	export default {
		name: "article-info",
		data() {
			return {
				title: "",
				articleTitle: "",
				m: "",
				id: "",
				topicList: [],
				src: "",
				username: "",
				userSignature: "",
				imgsrc: "",
				tag: "",
				timestr: "",
				imgUrls: [],
				articleContents: "",
				donateNum: "",
				post: []
			}
		},
		components: {
			HeaderBar,
			FooterInfo
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
		updated() {
			// $('.v').find('img').css('width', '100%');
			$('.v').find('img').css({
				width: '100%',
				height:'100%'
				});
			$('.v').find('p').css({
				fontSize: '1.3rem',
				width: "100%",
				margin: "10px 0"
			});
			$('.v').find('p').css('word-wrap', 'break-word');
		},
		mounted() {
			// console.log(this.$route.query.id)
			this.id = this.$route.query.id;

			//发送请求
			var params = {
				postId: this.id
			}

			article(params).then(res => {
				if(res.code == 0) {

					var data = res.data.articleDetail

					//头像加V
					var cuser = data.cUsertype
					if(cuser == 1) {
					  $(".imgV").css("display","none")
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

					//文章内容
					this.m = data.article.articleContents
					//抽出文本的图片
					console.log(data.createUserIcon)
					this.articleTitle = data.postTitle
					//头像
					var icon = data.createUserIcon
					this.src = icon;
					this.username = data.createUserName;
					this.userSignature = data.createUserSignature;
					//标签
					this.tag = data.projectCode;
					//时间
					this.timestr = data.createTimeStr;
					//赞助  循环图片
					var result = data.commendationList
					for(let i = 0; i < result.length; i++) {
						//本地
						var a =  result[i].sendUserIcon;
						this.imgUrls.push(a);
					}
					//赞助人数
					this.donateNum = data.donateNum;
          //如果赞助人数为0则不显示图片和赞助人数
					if(this.donateNum==0){
              $(".sponsor").css("display","none")
          }

					//文章介绍
					this.articleContents = data.article.articleContents;
					// 底部点赞和评论人数
					this.post.push({
						praiseNum: data.praiseNum
					},{
						commentsNum: data.commentsNum
					})
					console.log(this.post)

				}

			})

		}
	}
</script>
