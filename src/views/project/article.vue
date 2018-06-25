<style lang="less">
@import 'css/project.css';
	

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
	
</style>

<template>
	<div class="cx-article">
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
	import Headerdown from '@/components/layout/headerdown.vue'
	import { article,share} from '@/service/home';
	// import '../../assets/js/share1'
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
			FooterInfo,
			Headerdown
		},
		mounted(){

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
