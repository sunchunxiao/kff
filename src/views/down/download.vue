<template>
	<div style="height: 100%;">
		<div class="new-kffdownload">
			<div class="newDownBtn btnPos">
				<div @click="ios" class="newDownqufen">点击安装区分APP</div>
			</div>
		</div>
		<!--ios安装说明-->
		<div class="iosExplain">
			<div class="qf-title">
				<h1>区分APP如何安装？</h1>
			</div>
			<div class="qf-title-content">
				<div class="qf-title-info"><img src="../../assets/down/1.png" /></div>
				<p class="qf-article font">
					完成安装后，若出现“未授信任的企业级开发者”提示，可前往手机“设置”中进行授权，授权成功即可正常使用
				</p>
				<div class="newdownloadImg"><img class="newdownImg" src="../../assets/down/WechatIMG1.png" /></div>
			</div>
			<div class="qf-title-content">
				<div class="qf-title-info"><img src="../../assets/down/2.png" /></div>
				<p class="qf-article font">
					手机中打开“设置-通用-设备管理-企业级应用中 找到我们
				</p>
				<div class="newdownloadImg"><img class="newdownImg" src="../../assets/down/select.png" /></div>
			</div>
			<div class="qf-title-content">
				<div class="qf-title-info"><img src="../../assets/down/3.png" /></div>
				<p class="qf-article font">
					点击“信任”，回到桌面，即可使用“区分APP”
				</p>
				<div class="newdownloadImg"><img class="newdownImg" src="../../assets/down/WechatIMG3@2x.png" /></div>
			</div>
			<div class="newDownBtn" style="margin: 2rem auto;">
				<div @click="ios" class="newDownqufen">点击安装区分APP</div>
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
	export default {
		name: 'newdown',
		data() {
			return {

			}
		},
		mounted() {
			var ua = navigator.userAgent.toLowerCase();
			if(navigator.userAgent.match(/android/i)) {
				alert("安卓")
				$(".iosExplain").css("display", "none")
			}
			document.title = '区分-投资区块链 一定要区分'
		},
		methods: {
			ios() {
				var ua = navigator.userAgent.toLowerCase();
				if(navigator.userAgent.match(/(iPhone|iPad);?/i)) {
					
					window.location.href = "itms-services://?action=download-manifest&url=https://pic.qufen.top/ipa.plist"
				} else if(navigator.userAgent.match(/android/i)) {
					if(ua.match(/MicroMessenger/i) == "micromessenger") {
						var winHeight = $(window).height();
//						console.log(winHeight)
						$(".weixin-tip").css("height", winHeight);
						$(".weixin-tip").show();
					}else{
						window.location.href = "https://pic.qufen.top/qufen_update.apk"
					}
					
				}else{
					window.location.href = "https://pic.qufen.top/qufen_update.apk"
				}

			},

		}

	}
</script>

<style lang="less">
	@import './common.less';
</style>