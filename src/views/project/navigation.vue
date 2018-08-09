<template>
	<div style="background-color: #F1F1F1;height: 100%;">
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
								<div class="projectName"><span class="projectName-name">111</span><span class="atten-span">/ 柚子</span></div>
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
</script>

<style scoped>
	.cx-nav {
		width: 90%;
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
		margin-right: 1rem;
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
		left: 20%;
		top: -7px;
	}
	.cxUlist{
		
	}
	.cxUlist li{
		background-color: #fff;
		padding: 2rem;
		margin-bottom: 1rem;
		border-radius:5px ;
		overflow: hidden;
	}
	.projectName{
		font-size: 18px;
	}
	.projectName-detail{
		font-size: 1.2rem;
	}
</style>