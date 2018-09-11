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
</style>

<template>
	<div>
		<div class="footer" @click="download">打开App</div>
	</div>
</template>

<script>
	export default {
		props: ["message"],
		name: "footer-info",
		mounted() {
			console.log(this.message[0],this.message[1])
		},
		methods: {
			download() {
				//				if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
				//
				//					var browser = navigator.userAgent.toLowerCase();
				//
				//					if(browser.match(/micromessenger/i)) {
				//						//微信内置浏览器
				//						window.location.href = "hengtaixin://";
				//						window.setTimeout(function() {
				//							window.location.href = "https://itunes.apple.com/us/app/cheng-shi-gao-er-fu/id1008696844?mt=8&uo=4";
				//						}, 1000)
				//						return
				//					} else {
				//						window.location.href = "hengtaixin://"; //ios app协议，由ios同事提供
				//						window.setTimeout(function() {
				//							window.location.href = "https://itunes.apple.com/us/app/cheng-shi-gao-er-fu/id1008696844?mt=8&uo=4";
				//						}, 2000)
				//						return
				//					}
				//				}

				if(navigator.userAgent.match(/android/i)) {
					alert(this.message[0])
					//this.message[0]  3是文章
					if(this.message[0] == "article") {
						alert("文章")
						window.location.href = "find://move/com.secretk.move?pid=2&postId="+ this.message[1]; //安卓协议，由安卓同事提供
					} else if(this.message[0] == "articleInfo") {
						alert("评测")
						window.location.href = "find://move/com.secretk.move?pid=1&postId="+ this.message[1]; //安卓协议，由安卓同事提供
					} else if(this.message[0] == "discuss") {
						alert("爆料")
						window.location.href = "find://move/com.secretk.move?pid=3&postId="+ this.message[1]; //安卓协议，由安卓同事提供
					} else {
						window.setTimeout(function() {
							window.location.href = "https://pic.qufen.top/qufen_update.apk"
						}, 2000)
						return
					}

				}

			}
		}
	}
</script>