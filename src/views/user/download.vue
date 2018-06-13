<template>
	<div class="down">
		<div class="downContent">
			<div class="down-logo">
				<img class="dlog1" src="../../assets/down/1024@2x.png" />
				<img class="dlog2" src="../../assets/down/down-6.png" />
			</div>
			<div class="downH">投资区块链，一定要 <span class="down-qf">”区分“</span></div>
			<img class="downearth" src="../../assets/down/down-5.png"/>
			<div class="downBtn"><button><img src="../../assets/down/iOS.png"/><span>iphone下载</span></button></div>
			<div class="downBtn2"><button><img src="../../assets/down/Android.png"/><span>Android下载</span></button></div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.down {
		height: 100%;
		background-color: #127deb;
	}
	
	.downContent {
		width: 90%;
		margin: 0 auto;
		.down-logo {
			text-align: center;
			padding-top: 4rem;
			.dlog1 {
				width: 20%;
			}
			.dlog2 {
				width: 19%;
				margin-top: 2px;
			}
		}
		.downH{
			text-align: center;
			color: #fff;
			font-size: 1.3rem;
			font-weight: 100;
			margin-top: 1rem;
			.down-qf{
				font-weight: 600;
			}
		}
		.downearth{
			width: 100%;
		}
		.downBtn{
			text-align: center;
			margin-bottom: 10px;
			
		}
		.downBtn2{
			text-align: center;
			
		}
		button{
			border-radius: 5px;
			width: 17rem;
			height: 3.5rem;
			line-height: 4rem;
			background-color: #fff;
			border: none;
			img{
				width: 8%;
			}
			span{
				margin-left: 10px;
				margin-top: 1px;
				color: #127deb;
				font-size: 15px;
			}
		}
	}
	
</style>