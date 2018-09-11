<style scoped>
	.qf-title {
		width: 70%;
		margin: 0 auto;
		padding-top: 10%;
	}

	.qf-title h1 {
		font-weight: 400;
		text-align: center;
		color: rgb(79,61,230);
	}

	.qf-title-info {
		margin: 2rem 0;
	}
	.qf-title-info img{
		width: 15%;
	}
	.qf-title-content {
		width: 90%;
		margin: 0 auto;
	}
	.newdownloadImg{
		text-align: center;
		margin-top: 1rem;
	}
	.newdownImg{
		width: 90%;
	}

	.font {
		font-size: 14px;
		color: #333333;
	}

	.qf-article {
		letter-spacing: 0;
		line-height: 23px;
	}


</style>

<template>
	<div>
		<div class="qf-title">
			<h1>区分APP如何安装？</h1>
		</div>
		<div class="qf-title-content">
			<div class="qf-title-info"><img src="../../assets/down/1.png"/></div>
			<p class="qf-article font">
				完成安装后，若出现“未授信任的企业级开发者”提示，可前往手机“设置”中进行授权，授权成功即可正常使用
			</p>
			<div class="newdownloadImg"><img class="newdownImg" src="../../assets/down/WechatIMG1.png"/></div>
		</div>
		<div class="qf-title-content">
			<div class="qf-title-info"><img src="../../assets/down/2.png"/></div>
			<p class="qf-article font">
				手机中打开“设置-通用-设备管理-企业级应用中 找到我们
			</p>
			<div class="newdownloadImg"><img class="newdownImg" src="../../assets/down/select.png"/></div>
		</div>
		<div class="qf-title-content">
			<div class="qf-title-info"><img src="../../assets/down/3.png"/></div>
			<p class="qf-article font">
				点击“信任”，回到桌面，即可使用“区分APP”
			</p>
			<div class="newdownloadImg"><img class="newdownImg" src="../../assets/down/WechatIMG3@2x.png"/></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "qf"
	}
</script>
