<template>
	<div style="height: 100%;">
		<div class="new-kffdownload">
			<div class="newDownBtn btnPos">
				<div @click="android" class="newDownqufen">点击安装区分APP</div>
			</div>
		</div>
		<!--微信下载提示在浏览器上打开的遮罩层-->
		<div class="weixin-tip">
			<p>
				<img src="../../assets/down/down.png" alt="在浏览器打开" />
			</p>
		</div>

	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui';

	export default {
		name: 'newdown',
		data() {
			return {

			}
		},
		mounted() {
			document.title = '区分-投资区块链 一定要区分'
			var ua = navigator.userAgent.toLowerCase();
			if(navigator.userAgent.match(/(iPhone|iPad);?/i)) {
				this.$router.push('/user/download/new')
			}
		},
		methods: {
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
			},
			is_weixin() {
				var ua = navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i) == "micromessenger") {
					return true;
				} else {
					//苹果
					if(navigator.userAgent.match(/(iPhone|iPad);?/i)) {
						window.location.href = "itms-services://?action=download-manifest&url=https://pic.qufen.top/ipa.plist"
					} else if(navigator.userAgent.match(/android/i)) {
						window.location.href = "https://pic.qufen.top/qufen_update.apk"
					}else{
						window.location.href = "https://pic.qufen.top/qufen_update.apk"
					}
					return false;
				}
			},
		}

	}
</script>

<style lang="less">
	@import './common.less';
</style>