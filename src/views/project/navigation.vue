<template>
	<div style="background-color: #F1F1F1;height: 100%">
		<div class="cx-nav"  v-for="item in navigations">
			<!--币圈必读-->
			<div class="cx-navwrap">
				<div class="cxCoin">
					<img :src="item.imgPath"/>
					{{item.navigationTitle}}
				</div>
				<ul class="cxUlist">
					<li v-for="item1 in item.navigationProjects" @click="next(item1.webUrl)">
						<div class="nav-row">
							<div class="photo">
								<img :src="item1.projectImgPath">
							</div>
							<div class="name">
								<div class="projectName"><span class="projectName-name">{{item1.navigationProjectTitle}}</span><span class="atten-span">/ 柚子</span></div>
								<div class="projectName-detail">{{item1.remark}}</div>
							</div>

						</div>
					</li>

				</ul>
			</div>


		</div>
		<!--交易平台-->
		<!--<div class="cx-nav">-->
			<!--&lt;!&ndash;币圈必读&ndash;&gt;-->
			<!--<div class="cx-navwrap">-->
				<!--<div class="cxCoin">-->
					<!--<img src="../../assets/project/cxcoin.png"/>-->
					<!--交易平台-->
				<!--</div>-->
				<!--<ul class="cxUlist">-->
					<!--<li>-->
						<!--<div class="nav-row">-->
							<!--<div class="photo">-->
								<!--<img src="../../assets/project/cxnav.png">-->
							<!--</div>-->
							<!--<div class="name">-->
								<!--<div class="projectName"><span class="projectName-name">EOS </span><span class="atten-span">/ 柚子</span></div>-->
								<!--<div class="projectName-detail">比特币是一种P2P形式的数字货币</div>-->
							<!--</div>-->

						<!--</div>-->
					<!--</li>-->
					<!--<li></li>-->
					<!--<li></li>-->
					<!--<li></li>-->
					<!--<li></li>-->
				<!--</ul>-->
			<!--</div>-->
			<!--交易平台-->
			<div></div>

		</div>
	</div>
</template>

<script>
  import { getNavigtion } from '@/service/home';
  import { wechatShare } from '../../assets/js/wxshare'
	export default {
		name: "navigation",
		data() {
			return {
        navigations:[]
			}
		},
    mounted(){
		  this.getnavigtion()
    },
    updated() {
      wechatShare({
        title: "区块链导航——区分",
        content: "了解区块链，一页就够了！",
        link: window.location.href,
        logo:"https://pic.qufen.top/posts20180628204925934317",
      })
      document.title="区分导航"
    },
		methods:{
      next(webUrl){
        window.location.href = webUrl
      },
			getnavigtion(){

        getNavigtion().then(res => {

          if(res.code == 0) {
            // console.log(res.data)
            this.navigations = res.data.navigations
          }
        })
      }
		}
	}
</script>

<style scoped>
	.cx-nav {
		width: 93%;
		margin: 0 auto;
		font-family: PingFang-SC-Bold;
		display: flex;
		align-items: center;
	}
	.cx-navwrap{
		width: 100%;
	}
	.cxCoin{
		font-size: 17px;
		padding: 1rem 0;
    display: flex;
    align-items: center;
	}
	.cxCoin img{
		width: 17px;
		height: 17px;
		margin-right: 10px;
	}
	.nav-row {
		position: relative;
    /*overflow: hidden;*/
	}
	.photo{
		float: left;
	}
	.nav-row img{
		width: 34px;
		height: 34px;
	}

	.name {
		position: absolute;
		left: 18%;
		top: -7px;
	}
	.cxUlist{

	}
	.cxUlist li{
		background-color: #fff;
		padding: 2rem 1.5rem;
		margin-bottom: 1rem;
		border-radius:5px ;
		overflow: hidden;
		/*box-shadow: 0 2px 3px 0 rgba(103, 166, 255, 0.3);*/
		box-shadow: 0 1px 3px 0   rgba(26, 26, 26, 0.1);
	}
	.cxUlist li:hover{
		box-shadow: 0 1px 3px 0  rgba(103, 166, 255, 0.27);
	}
	.projectName{
		color: #393d46;
		font-size: 1.5rem;
	}
	.atten-span{
		color: #8590a6;
	}
	.projectName-detail{
		font-size: 1.2rem;
	}
</style>
