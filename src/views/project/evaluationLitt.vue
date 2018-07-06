<style lang="less">
	@import 'css/project.css';
	/*单项评分*/
	.evaluation-info {
		h3 {
			float: left;
		}
		.percent {
			display: inline-block;
			width: 100px;
			margin-left: 5px;
			font-size: 12px;
			color: #888888;
		}
	}

	.img {
		width: 100%;
		margin-top: 1rem;
	}

	/*.img1 {
		display: block;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		border: 1px solid #F4F4F4;
	}*/

</style>

<template>
	<div>
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
				<img class="evaluation-info-img" :src="src" alt="">
				<div class="evaluation-info-p">
					<div class="name">
						<p>{{username}}</p><img class="imgV" src="" />
					</div>
					<span class="info">{{userSignature}}</span>
				</div>
				<div class="evaluation-follow">+关注</div>
			</div>
			<div>
				<h3>{{title}}</h3>
				<span class="storeCommon">{{score}}</span>
				<Progress :percent="score*10" :stroke-width="10" hide-info> </Progress>
				<div v-html="m" style="width: 100%;margin-top: 20px" class="v">{{m}}</div>
				<div>
					<!--已经赞助-->
					<div class="crack">
						<div class="crack-tag1"><span class="span-name">{{tag}}</span></div>
						<span class="crack-tag3">编辑于 {{timestr}}</span>
						<div class="sponsor">
							<img class="sponsor4 project-img1" :src="item" v-for="(item,index) in imgUrls" :style="fun(index)" alt="">
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
	import { evaluation } from '@/service/home';
  import { wechatShare } from '../../assets/js/wxshare'
	export default {
		name: "article-info",
		data() {
			return {
				title: "",
				m: "",
				score: "8.2",
				imgV: "",
				tag: "",
				username: "",
				imgUrls: [],
				src: "",
				articleTitle: "",
				totalscore: "",
				timestr: "",
				userSignature: "",
				postSmallImages: "",
				article: "",
				donateNum: "",
				post: [],
        imgUrl:'',
        imgUrlwx:'',
        postShortDesc:''

			}
		},
		components: {
			HeaderBar,
			FooterInfo,
			Headerdown
		},
		updated() {
      if(this.imgUrl.length==0){
        this.imgUrlwx = 'https://pic.qufen.top/posts20180628204925934317'
      }else{
        this.imgUrlwx = this.imgUrl[0].fileUrl
      }
      wechatShare({
        title: this.articleTitle,
        content: this.postShortDesc,
        link: window.location.href,
        logo:this.imgUrlwx ,
      })
			// $('.v').find('img').css('width', '100%');
			$('.v').find('img').css({
				width: '100%',
				height: "100%",
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
					$(".project-img1").eq(index).css("display", "none");
				}
			}
		},
		mounted() {
			this.id = this.$route.query.id;
			let params = {
				postId: this.id
			}
			//测评
			evaluation(params).then(res => {
				if(res.code == 0) {
					// console.log(res.data.projectEvaluationDetailResponse)
					var data = res.data.projectEvaluationDetailResponse

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
					//用户名
					this.username = data.post.createUserName;
					//用户签名
					this.userSignature = data.post.createUserSignature;
					// //综合评分
					this.totalscore = data.evaluation.totalScore;
					//单项评分
					var a = JSON.parse(data.evaluation.professionalEvaDetail)[0]
					this.title = a.modelName;
					this.score = a.score;

					//标签
					this.tag = data.post.projectCode;

					//时间  字符串切割
					var arr = data.post.createTimeStr.split(" ")
					console.log(arr[0])
					this.timestr = arr[0];

					//赞助  循环图片
					var result = data.commendationList
					for(let i = 0; i < result.length; i++) {
						var b = result[i].sendUserIcon
						this.imgUrls.push(b);
					}
					//赞助人数
					this.donateNum = data.post.donateNum;
					//如果赞助人数为0则不显示图片和赞助人数
					if(this.donateNum == 0) {
						$(".sponsor").css("display", "none")
					}
					//文章
					this.m = data.evaluation.evauationContent
					//底部
          this.post.push(data.post.praiseNum,data.post.commentsNum)
          //缩略图
          this.imgUrl = JSON.parse(data.post.postSmallImages)
          //缩略文章
          this.postShortDesc = data.post.postShortDesc
				}

			})
		}
	}
</script>
