<style lang="less" scoped>
	.footer {
		width: 85px;
		height: 36px;
		line-height: 35px;
		font-size: 14px;
		text-align: center;
		/*opacity: 0.8;*/
		color: #fff;
		background-color: #3b88f6;
		position: fixed;
		bottom: 15%;
		right: 0;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		margin: 0 auto;
		overflow: hidden;
		z-index: 100;
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
		z-index: 1000;
	}
	
	.weixin-tip p {
		text-align: center;
		margin-top: 10%;
		padding: 0 5%;
	}
</style>

<template>
	<div>
		<div>
			<div class="footer" @click="download">打开App</div>

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
	export default {
		props: ["message"],
		name: "footer-info",
		mounted() {
			//			console.log(this.message[0],this.message[1])
		},
		methods: {
			download() {
				var winHeight = $(window).height();
				this.is_weixin()
				var isWeixin = this.is_weixin();
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
//						window.location.href = "itms-services://?action=download-manifest&url=https://pic.qufen.top/ipa.plist"
					} else if(navigator.userAgent.match(/android/i)) {

//						alert(this.message[0])
						//this.message[0]  3是文章
						if(this.message[0] == "article") {
//							alert("文章")
							window.location.href = "find://move/com.secretk.move?pid=2&postId=" + this.message[1]; //安卓协议，由安卓同事提供
						} else if(this.message[0] == "articleInfo") {
//							alert("评测")
							window.location.href = "find://move/com.secretk.move?pid=1&postId=" + this.message[1]; //安卓协议，由安卓同事提供
						} else if(this.message[0] == "discuss") {
//							alert("爆料")
							window.location.href = "find://move/com.secretk.move?pid=3&postId=" + this.message[1]; //安卓协议，由安卓同事提供
						} else {
							window.setTimeout(function() {
								window.location.href = "https://pic.qufen.top/qufen_update.apk"
							}, 2000)
							return
						}

					}
					return false;
				}
			},
			
		}
	}
</script>