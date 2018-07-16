<style lang="less">
	.projectItem {
		padding: 10px 20px;
		/*border-top: 1px solid;*/
		border-bottom: 1px solid #ddd;
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
				color: #7e7d7e;
				line-height: 20px;
				flex: 7;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
			}
		}
		.row4 {
			border-bottom: 1px solid #ddd;
			padding-bottom: 5px;
			margin-bottom: 5px;
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
			border-bottom: 6px solid #f4f4f4;
			.detail {
				display: flex;
				align-items: center;
				img {
					width: 18px;
					height: 17px;
					margin-right: 20%;
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
	
	.image {
		text-align: center;
		/*flex: 2;*/
		/*display: flex;*/
		/*justify-content: center;*/
		/*align-items: center;*/
		img {
			width: 100%;
			height: 100%;
		}
	}
	
	.article-title {
		float: left;
		/*padding: 10px 20px;*/
		/*border-bottom: 1px solid #dddddd;*/
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
	
	.photo>img {
		border-radius: 50%;
		border: 1px solid #dddddd;
	}
	
	.index-score {
		font-size: 1.3rem;
		color: #3b88f6;
		font-weight: bolder;
	}
</style>
<template>
	<div>

		<template v-for="(item,index) in itemList">

			<div class="projectItem" :key="index">
				<div class="row action" v-if="isActionTop">
					<img slot="icon" :src="item.operatorImg" />
					<span v-if="item.action=='zan'">{{item.operator}}赞同了评测</span>
					<span v-if="item.action=='test'">{{item.operator}}评论了文章</span>
				</div>

				<div class="row row1">
					<div class="photo">
						<img slot="icon" :src="item.itemImg" @click="gotoProjectHome(item.id)">
					</div>
					<div class="name">
						<div class="projectName"><span>{{item.itemName}} </span><span class="atten-span">/ 柚子</span></div>
						<div class="time">{{item.time}}</div>
					</div>
					<div class="btn">
						<mt-button @click="addAttention(item,index)" :type="item.isAttention ? 'default' : 'primary'">{{item.isAttention ? "已关注" : "+ 关注"}} </mt-button>
					</div>
				</div>
				<div class="row row2">
					<div class="test" style="font-size: 16px;color: #333">{{item.testName}}</div>
					<!--<My-Progress :rate="item.rate"></My-Progress>-->
					<div class="index-score">8.5分</div>
				</div>
				<div class="row row3">
					<div class="content">
						{{item.descrption}}
					</div>

				</div>
				<div class="image">
					<img :src="item.descrImg">
				</div>
				<!--<div class="row4" v-if="!isActionTop">-->
					<!--<div class="testerInfo">
						<img :src="item.testerImg">
						<span style="margin-right: 20px" v-if="item.action=='zan'">{{item.tester}}赞同了评测</span>
						<span style="margin-right: 20px" v-if="item.action=='test'">{{item.tester}}评论了文章</span>
					</div>-->
				<!--</div>-->
				
			</div>
			<div class="row row5">
					<div class="article-title">
						<div class="article-atten">
							<span class="atten-img"><img src="../../assets/evaluation/media@2x.png" /></span>
							<span class="atten-name">老猫</span>
							<span class="atten-project">发布了评测</span>
						</div>
					</div>
					<div class="detail zan">
						<img @click="zan(index)" src="../../assets/index/zan.png">
						<label>{{ item.zanNum}}</label>
					</div>
					<div class="detail index-preview">
						<img src="../../assets/index/review.png">
						<label>{{ item.commentNum}}</label>
					</div>
				</div>
		</template>
	</div>
</template>
<script>
	import MyProgress from '@/components/common/myProgress.vue'

	export default {
		name: "projectItem",
		components: {
			MyProgress
		},
		data() {
			return {
				value: 5
			}
		},
		props: {
			'itemList': {
				type: Array,
				default: function() {
					return []
				}
			},
			"isActionTop": {
				type: Boolean,
				default: function() {
					return true
				}
			}
		},
		methods: {
			//点赞
			zan(index) {
				/*接口*/
				this.itemList[index].zanNum += 1;
			},
			addAttention(item, index) {
				this.$emit('addAttention', item, index)
			},

			gotoProjectHome(id) {
				this.$router.push({
					path: "/project/home",
					query: {
						id,
					}
				})
			}
		}
	}
</script>