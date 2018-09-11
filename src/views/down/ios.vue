<template>
	<div style="height: 100%;">
		<div class="new-kffdownload">
			<div class="newDownBtn">
				<div class="newDownqufen">点击下载区分APP</div>
			</div>
		</div>
		<Qf></Qf>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import Qf from './qf.vue';
	export default {
		name: 'newdown',
		data() {
			return {

			}
		},
		components: {
			Qf
		},
		mounted() {
			document.title = '区分-投资区块链 一定要区分'
		},
		methods: {

			//			is_weixin() {
			//				var ua = navigator.userAgent.toLowerCase();
			//				if(ua.match(/MicroMessenger/i) == "micromessenger") {
			//					return true;
			//				} else {
			//					//苹果
			//					if(navigator.userAgent.match(/(iPhone|iPad);?/i)) {
			//						window.location.href = "itms-services://?action=download-manifest&url=https://pic.qufen.top/ipa.plist"
			//					} else if(navigator.userAgent.match(/android/i)) {
			//						window.location.href = "https://pic.qufen.top/qufen_update.apk"
			//					} else {
			//						window.location.href = "https://www.pgyer.com/r9sH"
			//					}
			//					return false;
			//				}
			//			},
			//			android() {
			//				var winHeight = $(window).height();
			//				console.log(winHeight)
			//				this.is_weixin()
			//				var isWeixin = this.is_weixin();
			//				console.log(isWeixin)
			//				if(isWeixin) {
			//					$(".weixin-tip").css("height", winHeight);
			//					$(".weixin-tip").show();
			//				}
			//			}
		}

	}
</script>

<style lang="less">
	@import './common.less';
</style>