<style lang="less">
	@import 'css/project.css';
	.evaluation-follow img {
		float: left;
		width: 17px;
	}
	
	.evaluation-follow span {
		font-size: 10px;
		color: #3b88f6;
		margin-left: -5px;
	}
	
	.evaluation-content {
		font-size: 1.5rem;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
		margin: 2rem 0;
	}
	
	.content-img {
		width: 100%;
	}
	
	/*热门评论*/
	
	.hot-comment {
		width: 90%;
		margin: 1rem auto;
	}
	
	.p-style {
		font-size: 15px;
		color: #333333;
		letter-spacing: 0;
		line-height: 20px;
		text-align: justify;
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
		/*justify-content: space-between;*/
		flex-wrap: wrap;
	}
	
	.evaluationUl li {
		width: 33%;
		/*margin: 0 auto;*/
		height: 9rem;
		float: left;
		margin-bottom: 0.5rem;
	}
	
	.evaluationUl li img {
		width: 94%;
		height: 94%;
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
				<div class="evaluation-follow">+关注</div>
			</div>
			<p class="evaluation-content">{{postShortDesc}}</p>
			<ul class="evaluationUl">
				<li class="evaluationLi" v-for="item in postImg">
					<img class="content-img" :src="item" alt="">
				</li>
			</ul>
			<div class="crack">
				<div class="crack-tag1"><span class="span-name">{{projectCode}}</span></div>
				<span class="crack-tag2" v-for="item in tagInfo">#{{item.tagName}}#</span>
				<div class="crack-tag3">发表于 {{timestr}}</div>
			</div>
		</div>

		<div class="hot evaluation">
			<div class="hot-comment">热门评论(2)</div>
		</div>
		<!--讨论详情-->
		<div class="evaluation-info" v-for="(item,index) in commentsehot">
			<div class="evaluation-info-title">
				<img class="evaluation-info-img" :src="commenticon[index]" alt="">
				<div class="evaluation-info-p">
					<p class="name">{{item .commentUserName}}</p>
					<span class="info">{{item.floot}}楼 {{item.createTimeStr}}</span>
				</div>
				<!--点赞-->
				<div class="evaluation-follow"><img src="../../assets/footer/zan.png" alt=""><span>{{item.praiseNum}}</span></div>
			</div>
			<p class="p-style">{{item.commentContent}}</p>
			<div class="preview" v-for="a in item.childCommentsList
">
				<!--commentUserName评论人-->
				<span class="preview-peo">{{a.commentUserName}}:@{{a.becommentedUserName}}:</span><span>{{a.commentContent}}</span>
			</div>
			<div class="preview">
				<span class="preview-num">更多10条评论</span>
			</div>
		</div>

	</div>
</template>

<script>
	import HeaderBar from '@/components/layout/headerBar.vue'
	import Headerdown from '@/components/layout/headerdown.vue'
	import { discuss } from '@/service/home';
	export default {
		name: "article-info",
		data() {
			return {
				title: "",
				projectCode: "",
				tagInfo: "",
				src: "",
				id: "",
				timestr: "",
				articleTitle: "",
				username: "",
				userSignature: "",
				postShortDesc: "",
				imgUrl: "",
				commenticon: [],
				commentsehot: [],
				commentseNew: [],
				commentseSum: "",
				postImg: []
			}
		},
		components: {
			HeaderBar,Headerdown
		},
		mounted() {
			this.id = this.$route.query.id;
			let params = {
				postId: this.id
			}
			//测评
			discuss(params).then(res => {
				if(res.code == 0) {
					// console.log(res.data.projectEvaluationDetailResponse)
					var data = res.data.discussShare
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

					this.articleTitle = data.post.postTitle
					//头像
					var icon = data.post.createUserIcon
					this.src = icon;

					this.username = data.post.createUserName;
					this.userSignature = data.post.createUserSignature;
					//简介
					this.postShortDesc = data.post.postShortDesc;
					//图片
					var a = JSON.parse(data.post.postSmallImages);
					console.log(a)
					for(let i = 0; i < a.length; i++) {

						console.log(a)
						this.imgUrl = a[i].fileUrl
						this.postImg.push(this.imgUrl)
						console.log(this.postImg)
					}

					//标签
					this.projectCode = data.post.projectCode;

					//最多选择标签
					this.tagInfo = JSON.parse(data.tagInfo);
					console.log(this.tagInfo)
					//热门评论
					this.commentsehot = data.commentsehot;
					var result = data.commentsehot;
					//热门评论头像
					if(result != null) {
						for(let i = 0; i < result.length; i++) {
							var b = data.commentsehot[i].commentUserIcon;
							this.commenticon.push(b)
							console.log(this.commenticon)
						}
					}

					//最新评论数量
					this.commentseSum = data.commentseSum
					//最新评论
					this.commentseNew = data.commentseNew

					// 时间
					this.timestr = data.post.createTimeStr;

					//文章
					// this.article = data.evaluation.evauationContent
					// $(".crack").before( this.article)

				}

			})
		}
	}
</script>