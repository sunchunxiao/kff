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
							<Progress :percent="item.score*10"  :stroke-width="5" hide-info> </Progress>
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
						<span class="crack-tag3">编辑于 {{timestr}}</span>
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
              <span class="info">{{item.floor}}楼 {{item.createTimeStr}}</span>
            </div>
            <!--点赞-->
            <div class="evaluation-follow"><img src="../../assets/footer/zan.png" alt=""><span>{{item.praiseNum}}</span></div>
          </div>
          <p class="p-style">{{item.commentContent}}</p>
        </div>
      </v-loadmore>
    </div>
    <FooterInfo :message="post"></FooterInfo>
	</div>
</template>

<script>
	import HeaderBar from '@/components/layout/headerBar.vue'
	import FooterInfo from '@/components/layout/footerInfo.vue'
	import Headerdown from '@/components/layout/headerdown.vue'
	import { articleInfo,postCommentList} from '@/service/home';
  import { wechatShare } from '../../assets/js/wxshare'
  import '../../assets/js/baidu'
  import { Loadmore } from 'mint-ui';
	export default {
		name: "article-info",
		data() {
			return {
				title: "",
				src: "",
				id: "",
				m: "",
				tag:'',
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
        timestr:"",
        imgUrl:'',
        imgUrlwx:'',
        postShortDesc:'',
        pageIndex: 1,
        pageSize: 5,
        postId:0,
        newestComments:[],
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
			FooterInfo,
			Headerdown,
      'v-loadmore': Loadmore,
		},

    mounted() {

      console.log(this.$route.query.id)
      this.id = this.$route.query.id;
      //评论
      this.preview()
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
          //标签
          this.tag = data.post.projectCode;
          //时间  字符串切割
          var arr = data.post.createTimeStr.split(" ")

          this.timestr = arr[0];

          //赞助  循环图片

          if(data.commendationList!=null){
            this.imgUrls = data.commendationList
            for(let i = 0; i < this.imgUrls.length; i++) {
              //线上
              var a = this.imgUrls[i].sendUserIcon;
            }
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
          //缩略图
          this.imgUrl = JSON.parse(data.post.postSmallImages)
          //缩略文章
          this.postShortDesc = data.post.postShortDesc

        }

      })
    },
		updated() {
		  // console.log(this.imgUrl)
		  // console.log(this.postShortDesc,this.articleTitle)
		  //  如果有缩略图
      if(this.imgUrl.length==0){
        this.imgUrlwx = 'https://pic.qufen.top/posts20180628204925934317'
      }else{
        this.imgUrlwx = this.imgUrl[0].fileUrl

      }
      // console.log(this.imgUrlwx)
      wechatShare({
        title: this.articleTitle,
        content: this.postShortDesc,
        link: window.location.href,
        logo:this.imgUrlwx
      })
      $('.v').css({
        letterSpacing:'1px',
        fontSize: '16px',
      })
			$('.v').find('img').css({
				width: '100%',
				height: '100%',
			});
			$('.v').find('p').css({
        letterSpacing:'1px',
				fontSize: '16px',
				width: "100%",
				margin: "1rem 0"
			});
			$('.v').find('p').css('word-wrap', 'break-word');
      $('.v').find('p span').css({
        fontSize: '16px',
        letterSpacing:'1px',
      });

      document.title=this.articleTitle
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
              // if(res.data.newestComments.rows.length > 2) {
              if(this.hasNext == false) {
                this.allLoaded = true;
              }
              // }
            }else{
              $(".previewBottom").css("display","none")
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
                  }

                }
                if(this.hasNext == false) {
                  this.allLoaded = true;
                }

              }
            })
          }else{
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
