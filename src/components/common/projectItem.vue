<style lang="less">
	.project {
		padding-top: 5rem;
	}

	.projectItem {
		padding: 10px 20px;
		/*border-top: 1px solid;*/
		/*border-bottom: 1px solid #ddd;*/
		/*margin-bottom: 8px;*/
		overflow: hidden;
		.action {
			justify-content: flex-start !important;
			align-items: center;
			margin-bottom: 5px;
			border-bottom: 1px solid #DDD;
		}
		.row {
			display: flex;
			justify-content: space-between;
			.btn {
				/*border: 1px solid #3b88f6;*/
				border-radius: 2px;
				width: 43px;
				height: 20px;
				position: absolute;
				right: 5%;
				.mint-button-text {
					font-size: 12px;
				}
			}
			.name {
				position: absolute;
				left: 20%;
			}
		}
		.row1 {
			align-items: center;
			margin-bottom: 10px;
		}
		.row2 {
			margin-bottom: 5px;
      .test {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /*  autoprefixer: on */
        -webkit-line-clamp: 2;
      }
			.mt-range {
				height: 20px;
			}
			.mt-range-thumb {
				width: 20px;
				height: 20px;
			}
		}
		.row3 {
			margin-bottom: 5px;
			.content {
        font-size: 1.1rem;
				color: #7e7d7e;
				line-height: 20px;
        /*white-space: normal!important;*/
				/*flex: 7;*/
        display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
        /*! autoprefixer: off */
				-webkit-box-orient: vertical!important;
        /*  autoprefixer: on */
				-webkit-line-clamp: 3;
			}
		}
		.row4 {
			.testerInfo {
				display: flex;
				align-items: center;
			}
		}
	}



	.projectName {
		font-size: 14px;
		color: #333333;
	}

	.already {
		background-color: #fff;
		padding: 0.5rem 0;
		padding-left: 1rem;
		.already-follow {
			background: #f4f4f4;
			border-radius: 2rem;
			overflow: hidden;
			width: 46%;
			/*height:22px;*/
			line-height: 2.5rem;
			margin: 2px 0;
			img {
				width: 18%;
				float: left;
			}
			.cat {
				float: left;
				.oldcat {
					font-size: 14px;
					color: #333333;
					letter-spacing: 0;
				}
				.follow-this {
					font-size: 12px;
					color: #888888;
					letter-spacing: 0;
				}
			}
		}
	}

	.row5 {
		justify-content: flex-start;
		position: relative;
		overflow: hidden;
		padding: 10px 20px;
		border-bottom: 10px solid #f4f4f4;
		.detail {
			display: flex;
			align-items: center;
			img {
				width: 18px;
				height: 17px;
				margin-right: 20%;
			}
			label {
				font-size: 14px;
				color: #aaaaaa;
			}
		}
		.zan {
			margin-right: 20px;
			position: absolute;
			right: 5rem;
		}
		.index-preview {
			position: absolute;
			right: 2rem;
			top: 11px;
		}
	}

	.mint-button--normal {
		padding: 0;
	}

	.mint-button {
		border-radius: 1px;
		width: 43px;
		height: 20px;
		font-size: 0;
	}

	.mt-progress div:nth-child(2) {
		font-size: 14px;
		color: #3b88f6;
		letter-spacing: 0;
		font-weight: bolder;
	}

	.recommand-img {
		display: flex;
		justify-content: space-between;
	}

	.image {
		width: 32%;
		height: 8rem;
		text-align: center;
		/*flex: 2;*/
		/*align-items: center;*/
		img {
			width: 100%;
			height: 100%;
		}
	}

	.image1 {
		width: 100%;
		height: 11rem;
		text-align: center;
		/*flex: 2;*/
		/*align-items: center;*/
		img {
			width: 100%;
			height: 100%;
		}
	}

	.article-title {
		float: left;
	}

	.article-atten {
		background: #f1f1f1;
		border-radius: 35px;
		width: 131px;
		height: 22px;
		position: relative;
	}

	.atten-img {
		display: inline-block;
		width: 23px;
		height: 22px;
	}

	.atten-img img {
		width: 100%;
	}

	.atten-name {
		font-size: 14px;
		color: #333333;
		position: absolute;
		left: 27px;
		top: 1px;
	}

	.atten-project {
		font-size: 12px;
		color: #888888;
		position: absolute;
		right: 8px;
		top: 3px;
	}

	.atten-span {
		font-size: 12px;
		color: #888888;
	}

	.photo {
		width: 38px;
		height: 38px;
	}

	.photo>img {
		width: 100%;
		border-radius: 50%;
		border: 1px solid #dddddd;
	}

	.index-score {
    width: 75px;
		font-size: 1.3rem;
		color: #3b88f6;
    text-align: right;
		font-weight: bolder;
	}

	.projectName-name {
		font-size: 14px;
		color: #333333;
	}

	.projectName-time {
		font-size: 10px;
		color: #c2c2c2;
	}

	#content {
		overflow: scroll;
	}

	.item {}

	.item .name {
		height: 200px;
		background-color: green;
		margin-bottom: 10px;
	}
</style>
<template>
	<div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
		<v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" @bottom-status-change="handleBottomChange">

			<!--<ul class="list">

				<li v-for="(item, index) in proCopyright">
					<div></div>
				</li>

			</ul>-->
			<template v-for="(item,index) in itemList">

				<div class="projectItem" :key="index" @click="gotoProjectHome(item.postType,item.postId)">
					<div class="row action" v-if="isActionTop">
						<img slot="icon" :src="item.operatorImg" />
						<span v-if="item.action=='zan'">{{item.operator}}赞同了评测</span>
						<span v-if="item.action=='test'">{{item.operator}}评论了文章</span>
					</div>

					<div class="row row1">
						<div class="photo">
							<img slot="icon" :src="item.createUserIcon">
						</div>
						<div class="name">
							<div class="projectName"><span class="projectName-name">{{item.projectCode}} </span><span class="atten-span">/ 柚子</span></div>
							<div class="projectName-time">{{item.createTimeStr}}</div>
						</div>
						<div class="btn">
							<!--<mt-button @click="addAttention(item,index)" :type="item.isAttention ? 'default' : 'primary'">{{item.isAttention ? "已关注" : "+ 关注"}} </mt-button>-->
							<!--<mt-button :type="item.isAttention ? 'default' : 'primary'">{{item.isAttention ? "已关注" : "+ 关注"}} </mt-button>-->
						</div>
					</div>
					<div class="row row2">
						<div class="test" style="font-size: 16px;color: #333">{{item.postTitle}}</div>
						<!--<My-Progress :rate="item.rate"></My-Progress>-->
						<div  v-if="item.postType==1" class="index-score">{{item.totalScore}}分</div>
					</div>
					<div class="row row3">
						<div class="content">
							{{item.postShortDesc}}
						</div>

					</div>
					<div class="recommand-img">
						<!--一张图的-->
						<div class="image" v-if="item.postSmallImagesList.length!=0" v-for="item1 in item.postSmallImagesList">
							<img :src="item1.fileUrl">
						</div>
						<!--<div class="image1"  v-if="item.postSmallImagesList.length<=2" v-for="item1 in item.postSmallImagesList">
							<img :src="item1.fileUrl">
						</div>-->

					</div>

				</div>
				<div class="row row5">
					<div class="article-title">
						<div class="article-atten">
							<span class="atten-img"><img src="../../assets/evaluation/media@2x.png" /></span>
							<span class="atten-name">老猫</span>
							<!--选择发表的帖子类型-->
							<span class="atten-project" v-if="item.postType==1">发布了评测</span>
							<span class="atten-project" v-if="item.postType==2">发布了爆料</span>
							<span class="atten-project" v-if="item.postType==3">发布了文章</span>
						</div>
					</div>
					<div class="detail zan">
						<img @click="zan(index)" src="../../assets/index/zan.png">
						<label>{{ item.praiseNum}}</label>
					</div>
					<div class="detail index-preview">
						<img src="../../assets/index/review.png">
						<label>{{ item.commentsNum}}</label>
					</div>
				</div>

			</template>
			<div slot="bottom" class="mint-loadmore-bottom">
				<span style="font-size: 1.5rem;" v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">上拉加载更多...</span>
				<!--<span v-show="bottomStatus !== 'loading'"><img src="../../assets/down/loading.png"/>加载中...</span>-->
			</div>
		</v-loadmore>

	</div>

	</div>
</template>
<script>
	//	import MyProgress from '@/components/common/myProgress.vue'
	import { Loadmore } from 'mint-ui';
	import { recommend } from '@/service/home';
  import { wechatShare } from '../../assets/js/wxshare'
	export default {
		name: "projectItem",
		//		components: {
		//			MyProgress
		//		},
		data() {
			return {
				value: 5,
				postImage: [],
				pageIndex: 1,
				pageSize: 10,
				itemList: [],
				allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
				scrollMode: "auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
				totalpage: 0,
				loading: false,
				bottomText: '',
				bottomStatus: '',
				historyData: [],
				postType: "",
				state: ""
			}
		},
		props: {
			//			'itemList': {
			//				type: Array,
			//				default: function() {
			//					return []
			//				}
			//			},
			"isActionTop": {
				type: Boolean,
				default: function() {
					return true
				}
			}
		},
		components: {
			'v-loadmore': Loadmore,
		},
		mounted(){
			this.loadPageList(); //初次访问查询列表
		},
		updated() {
      wechatShare({
        title: "区分—— 投资区块链，一定要“区分”",
        content:"币圈大众点评，深度了解区块链项目，上“区分”就够了。",
        link: window.location.href,
        logo: "https://pic.qufen.top/posts20180628204925934317",
      })

			$(".projectItem").each(function() {
				//				console.log($(this).find(".image").length)
				if($(this).find(".image").length <= 2) {
					$(this).find(".image").css({
						width: "100%",
						height: "15rem"
					})
				}

			})

		},
		methods: {

			loadBottom() {
				// 上拉加载
				this.more(); // 上拉触发的分页查询
				this.$refs.loadmore.onBottomLoaded(); // 固定方法，查询完要调用一次，用于重新定位
			},
			loadPageList() {

				// 查询数据
				let params = {
					pageIndex: 1,
					pageSize: 10
				}
				recommend(params).then(res => {
          console.log(res.data.recommends.rows,res.data.recommends.rows.length)
          this.itemList = res.data.recommends.rows;
            for(let i = 0; i < res.data.recommends.rows.length;i++) {

              if( res.data.recommends.rows[i].postSmallImagesList.length!=0){
                console.log(res.data.recommends.rows[i].postSmallImagesList.length)
              this.postImage = res.data.recommends.rows[i].postSmallImagesList
              // this.postType = res.data.recommends.rows[i].postType
              //帖子类型：1-评测；2-讨论；3-文章，4-单项评测

//						console.log(this.postImage)
              if(this.postImage.length <= 2) {
                //							console.log(this.postImage)
                res.data.recommends.rows[i].postSmallImagesList = this.postImage.slice(0, 1)

                $(".recommand-img").addClass("imgg")

              } else if(this.postImage.length >= 3) {
                res.data.recommends.rows[i].postSmallImagesList = this.postImage.slice(0, 3)
              }

            }
          }

					//遍历数据

					this.totalpage = Math.ceil(res.data.recommends.rowCount / this.pageSize);

					if(this.totalpage == 1) {
						this.allLoaded = true;
					}

					this.$nextTick(function() {
						// 是否还有下一页，加个方法判断，没有下一页要禁止上拉
						this.scrollMode = "touch";
						this.isHaveMore();
					});

				})
			},

			more() {
				// 分页查询
				if(this.totalpage == 1) {
					this.pageIndex = 1;
					this.allLoaded = true;
				} else {
					this.pageIndex = parseInt(this.pageIndex) + 1;
					this.allLoaded = false;
				}
				let params = {
					pageIndex: this.pageIndex,
					pageSize: 10
				}
				//				console.log(this.pageIndex);
				recommend(params).then(res => {
					//					this.recommendList = res.data.recommends.rows
          this.itemList = res.data.recommends.rows;
					for(var i = 0; i < res.data.recommends.rows.length; i++) {
            if( res.data.recommends.rows[i].postSmallImagesList.length!=0){

						this.postImage = res.data.recommends.rows[i].postSmallImagesList
						//						console.log(this.postImage)
						if(this.postImage.length <= 2) {
							res.data.recommends.rows[i].postSmallImagesList = this.postImage.slice(0, 1);

						} else if(this.postImage.length >= 3) {
							//							console.log(this.postImage)
							res.data.recommends.rows[i].postSmallImagesList = this.postImage.slice(0, 3)
						}
            }
					}
//					this.itemList = res.data.recommends.rows;
					this.itemList = this.itemList.concat(res.data.recommends.rows);
					this.isHaveMore();

				})

			},
			isHaveMore: function() {
				// 是否还有下一页，如果没有就禁止上拉刷新
				//this.allLoaded = false; //true是禁止上拉加载
				if(this.pageIndex == this.totalpage) {
					this.allLoaded = true;
				}
			},

			handleBottomChange(status) {
				setInterval(() => {
					this.bottomStatus = status; //上拉状态变换
				}, 1000)

			},
			//点赞
			zan(index) {
				/*接口*/
				this.itemList[index].zanNum += 1;
			},
			addAttention(item, index) {
				this.$emit('addAttention', item, index)
			},

			gotoProjectHome(postType, id) {

				//帖子类型：1-评测；2-讨论；3-文章，4-单项评测
				//				console.log(postType)
				if(postType == 1) {
					this.$router.push({
						path: "/project/articleInfo",
						query: {
							id,
						}
					})
					//					 window.open('/project/articleInfo?id=' + id, "_blank ")
				}
				if(postType == 2) {
					this.$router.push({
						path: "/project/discuss",
						query: {
							id,
						}
					})
					//					 window.open('/project/discuss?id=' + id, "_blank ")
				}
				if(postType == 3) {
					this.$router.push({
						path: "/project/article",
						query: {
							id,
						}
					})
					//					 window.open('/project/article?id=' + id, "_blank ")
				}

			}
		}
	}
</script>
