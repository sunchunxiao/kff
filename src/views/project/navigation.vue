<template>
	<div style="background-color: #F1F1F1;">
		<div class="cx-nav">
			<!--币圈必读-->
			<div class="cx-navwrap">
				<div class="cxCoin">
					<img src="../../assets/project/coin.png"/>
					币圈必读
				</div>
				<ul class="cxUlist">
					<li>
						<div class="nav-row">
							<div class="photo">
								<img src="../../assets/project/cxnav.png">
							</div>
							<div class="name">
								<div class="projectName"><span class="projectName-name">EOS </span><span class="atten-span">/ 柚子</span></div>
								<div class="projectName-detail">比特币是一种P2P形式的数字货币</div>
							</div>

						</div>
					</li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			

		</div>
		<!--交易平台-->
		<div class="cx-nav">
			<!--币圈必读-->
			<div class="cx-navwrap">
				<div class="cxCoin">
					<img src="../../assets/project/cxcoin.png"/>
					交易平台
				</div>
				<ul class="cxUlist">
					<li>
						<div class="nav-row">
							<div class="photo">
								<img src="../../assets/project/cxnav.png">
							</div>
							<div class="name">
								<div class="projectName"><span class="projectName-name">EOS </span><span class="atten-span">/ 柚子</span></div>
								<div class="projectName-detail">比特币是一种P2P形式的数字货币</div>
							</div>

						</div>
					</li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			<!--交易平台-->
			<div></div>

		</div>
	</div>
</template>

<script>
	export default {
		name: "navigation",
		data() {
			return {
				
			}
		},
		methods:{
			
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
	}
	.cxCoin img{
		width: 17px;
		height: 17px;
		margin-right: 10px;
	}
	.nav-row {
		position: relative;
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