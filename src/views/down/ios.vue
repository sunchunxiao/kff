<template>
	<div class="new-kffdownload">
		<div class="newDownBtn">
			<div class="newDownqufen">点击下载区分APP</div>
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
  import { wechatShare } from '../../assets/js/wxshare'
	export default {
		name: 'download',
    mounted(){
      wechatShare({
        title: "区分-投资区块链一定要区分",
        content: "全球首家以分布式评测为核心的区块链投资平台",
        link: window.location.href,
        logo: "https://pic.qufen.top/posts20180628204925934317",
      })
      document.title = '区分-投资区块链 一定要区分'
    },
		methods: {
			
			is_weixin() {
				var ua = navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i) == "micromessenger") {
					return true;
				} else {
				  //苹果
					if(navigator.userAgent.match(/(iPhone|iPad);?/i)) {
            window.location.href = "itms-services://?action=download-manifest&url=https://pic.qufen.top/ipa.plist"
					}else if(navigator.userAgent.match(/android/i)) {
						window.location.href = "https://pic.qufen.top/qufen_update.apk"
					}else{
            window.location.href = "https://www.pgyer.com/r9sH"
          }
					return false;
				}
			},
			android() {
				var winHeight = $(window).height();
				console.log(winHeight)
				this.is_weixin()
				var isWeixin = this.is_weixin();
				console.log(isWeixin)
				if(isWeixin) {
					$(".weixin-tip").css("height", winHeight);
					$(".weixin-tip").show();
				}
			}
		}
	}
</script>

<style lang="less">
	.new-kffdownload {
		height: 100%;
		background-image: url(../../assets/down/downnew.png);
		background-size: 100% 85%;
		background-repeat: no-repeat;
		position: relative;
	}
	.newDownBtn{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 15px;
		margin: 0 auto;
		width: 19rem;
		height: 6rem;
		line-height: 5.5rem;
		background-image: url(../../assets/down/btn.png);
		background-size: 100% 100%;
		text-align: center;
		color: #fff;
		font-size: 14px;
	}
	.newDownqufen{
		
	}
	.weixin-tip img {
		max-width: 100%;
		height: auto;
	}

	.weixin-tip {
		display: none;
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		filter: alpha(opacity=80);
		height: 100%;
		width: 100%;
		z-index: 100;
	}

	.weixin-tip p {
		text-align: center;
		margin-top: 10%;
		padding: 0 5%;
	}

	

</style>
