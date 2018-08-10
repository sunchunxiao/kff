<template>
	<div class="kffdownload">
		<div class="downContent">
			<div class="down-logo">
				<img class="dlog1" src="../../assets/down/1024@2x.png" />
				<img class="dlog2" src="../../assets/down/down-6.png" />
			</div>
			<div class="downH">投资区块链，一定要 <span class="down-qf">"区分"</span></div>
			<div class="wdown">
				<img class="downearth" src="../../assets/down/down-5.png" />
			</div>
			<!--安卓下载-->
			<div class="downBtn2">
				<!--<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.secretk.move"><Button ><img src="../../assets/down/Android.png"/><span>Android下载</span></Button></a>-->
				<Button @click="android"><img class="android-img" src="../../assets/down/Android.png"/><span>Android下载</span></Button>

			</div>
			<div class="downBtn">
				<button @click="android"><img  class="ios-img" src="../../assets/down/iOS.png"/><span>iPhone(beta1)下载</span></button>
			</div>
			<!--微信下载提示在浏览器上打开的遮罩层-->
			<div class="weixin-tip">
				<p>
					<img src="../../assets/down/down.png" alt="在浏览器打开" />
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {
		name: 'download',

		methods: {
			// instance() {
			// 	MessageBox({
			// 		title: 'IOS-全力开发中',
			// 		showConfirmButton: true
			// 	});
			//
			// },
			is_weixin() {
				var ua = navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i) == "micromessenger") {
					return true;
				} else {
				  //苹果
					if(navigator.userAgent.match(/(iPhone|iPad);?/i)) {
						window.location.href = "https://www.pgyer.com/r9sH"
					}
					//安卓
					if(navigator.userAgent.match(/android/i)) {
						window.location.href = "https://pic.qufen.top/qufen_update.apk"
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

	.kffdownload {
		height: 100%;
		background-color: #127deb;
	}

	.wdown {
		width: 80%;
		margin: 1rem auto 0;
	}

	.downContent {
		width: 90%;
		margin: 0 auto;
		.down-logo {
			text-align: center;
			padding-top: 2rem;
			.dlog1 {
				width: 20%;
			}
			.dlog2 {
				width: 19%;
				margin-top: 2px;
			}
		}
		.downH {
			text-align: center;
			color: #fff;
			font-size: 1.3rem;
			font-weight: 100;
			margin-top: 1rem;
			.down-qf {
				font-weight: 600;
			}
		}
		.downearth {
			width: 100%;
		}
		.downBtn {
			text-align: center;
			margin-top: 1rem;
			margin-bottom: 10px;
			button {
				line-height: 3rem;
				position: relative;
			}
		}
		.downBtn2 {
			text-align: center;
			margin-top: 1rem;
			a {
				padding: 1rem 0.5rem;
			}
		}
		button {
			border-radius: 5px;
			width: 17rem;
			height: 3.5rem;
			line-height: 3rem;
			background-color: #fff;
			border: none;
			position: relative;
			img {
				width: 8%;
			}
			.android-img {
				position: absolute;
				top: 13px;
				left: 47px;
			}
			.ios-img {
				position: absolute;
				top: 9px;
				left: 24px;
			}
			span {
				margin-left: 10px;
				margin-top: 1px;
				color: #127deb;
				font-size: 15px;
			}
		}
	}
</style>
