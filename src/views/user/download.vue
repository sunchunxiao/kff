<template>
	<div class="kffdownload">
		<div class="downContent">
			<div class="down-logo">
				<img class="dlog1" src="../../assets/down/1024@2x.png" />
				<img class="dlog2" src="../../assets/down/down-6.png" />
			</div>
			<div class="downH">投资区块链，一定要 <span class="down-qf">”区分“</span></div>
			<div class="wdown">
				<img class="downearth" src="../../assets/down/down-5.png" />
			</div>
      <!--安卓下载-->
      <div class="downBtn2">
        <a href="http://pic.qufen.top/qufen_beta_v0.7.apk"><Button><img src="../../assets/down/Android.png"/><span>Android下载</span></Button></a>
      </div>
			<div class="downBtn">
				<button @click="instance"><img src="../../assets/down/iOS.png"/><span>iphone下载</span></button>
			</div>


		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {
		name: 'download',
		methods: {
			instance() {
				MessageBox({
					title: 'IOS-全力开发中',
					showConfirmButton: true
				});

			},
			// android(){
			// 	if(navigator.userAgent.match(/android/i)){
			// 		window.location.href='com.baidu.tieba://app';//android app协议
			// 		window.setTimeout(function(){
			// 			window.location.href = 'https://pic.qufen.top/qufen_beta_v0.7.apk'
			// 		})
			// 	}
			// }
		}
	}
</script>

<style lang="less">
	.kffdownload {
		height: 100%;
		background-color: #127deb;
	}
	.wdown{
		width: 85%;
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
			margin-top: 2rem;
			margin-bottom: 10px;
			button {
				line-height: 3rem;
			}
		}
		.downBtn2 {
			text-align: center;
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
			img {
				width: 8%;
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
