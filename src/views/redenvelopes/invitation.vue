<template>
	<div class="enpcommonHeight invitationWrap">
		<img class="invitationBacg" src="../../assets/envelopes/invitation.png" />
		<div class="invitationContent">
			<!--下载app-->
			<div class="invitationContent-down">
				<div class="invitationWrap">
					<div class="invitationTitle">
						<img src="../../assets/envelopes/1.png" />
						<span>{{msg}}</span>
					</div>
					<div style="margin-top: 2rem;color: rgb(125,132,155);font-size: 15px;">
						已领取
					</div>
					<div class="invitationIcon">
						<span class="invitationFont">30000FIND</span>
						<span class="invitationFont1">≈ 1500.00RMB</span>
					</div>
					<div class="invitationBtn">
						<div @click="down" type="primary" class="btnLogin">下载APP提现</div>
					</div>
				</div>
			</div>
			<!--待领取 100000 FIND-->
			<div class="invitationContent-down">
				<div class="invitationWrap">
					<div class="invitationT invitationF">
						<div>待领取 100000 FIND</div>
					</div>
					<ul class="findCoin">
						<li class="findLine">
							<img class="findImg" src="../../assets/envelopes/img.png" />
							<span class="findSpan">1.邀请一个好友可以获得<span class="f1">1500FIND</span></span>
						</li>
						<li class="findLine">
							<img class="findImg" src="../../assets/envelopes/img.png" />
							<span class="findSpan">2.好友邀请其他人可以获得<span class="f1">100FIND</span></span>
						</li>
					</ul>
					<div class="invitationBtn">
						<div @click="invitation" type="primary" class="btnLogin">立即邀请</div>
					</div>
				</div>
			</div>
			<!--了解find-->
			<div class="invitationContent-down">
				<div class="invitationWrap">
					<div class="invitationT invitationKnow">
						<div>了解FIND</div>
					</div>
					<p class="invitationKnowP">
						FIND是区分系统内唯一流通的Token,它既是个人在系统内的价值标记，也代表着系统内的应用权证。
					</p>
					<p class="invitationKnowP">
						FIND，在区分系统内拥有非常广泛的应用场景和流通逻辑。
					</p>
				</div>

				<div class="invitationWrap">
					<div class="invitationT invitationKnow">
						<div>了解区分</div>
					</div>
					<p class="invitationKnowP">
						全球首家以分布式评测为核心的区块链投资平台。初期针对区块链项目进行分布式评测，构建区块链行业独特的投资内容生态,形成包括项目评测、项目论坛、项目资讯、项目文章等高频率、高质量的UGC内容。
					</p>
					<p class="invitationKnowP">
						我们致力于成为全球区块链投资者首选内容平台，打造丰富的区块链投资内容生态，构建用户层、内容层、社区层、投资层到数据层的生态闭环。
					</p>
				</div>
			</div>
			<!--微信下载提示在浏览器上打开的遮罩层-->
			<div class="weixin-tip">
				<p>
					<img src="../../assets/envelopes/download.png" alt="在浏览器打开" />
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	import eventVue from '../../assets/js/event.js'
	import { wechatShare } from '../../assets/js/wxshare'

	export default {
		name: 'invitation',
		data() {
			return {
				msg: '',
				token:'',
				url:'',
				invaUIH:''
				inva:localStorage.inva
			}
		},
		
		created() {
			this.invaUIH = this.$route.query.invaUIH
//			console.log(this.invaUIH,this.$route.query.invaUIH)
			this.token = localStorage.token
			
			if(this.token!=undefined) {
				this.msg = localStorage.p
				var phone = this.msg
				var nPhone = phone.substr(0, 3) + '****' + phone.substring(7, 11)
				this.msg = nPhone
				window.location.href = 'https://m.qufen.top/redenvelopes/invitation?invaUIH='+this.inva
			}else{
				window.location.href = 'https://m.qufen.top/redenvelopes/envelopes?invaUIH='+this.invaUIH
				
//				this.$router.push('/redenvelopes/envelopes?invaUIH='+this.invaUIH)
			}
			
			wechatShare({
				title: "免费领取价值1500RMB的数字货币  ",
				content: "点击领取红包",
				link:window.location.href,
				logo: "https://pic.qufen.top/hongbao.png",
			})
			document.title = '区分-投资区块链 一定要区分'
		},
		
		methods: {
			down(){
				this.$router.push('/user/download')
			},
			is_weixin() {
				var ua = navigator.userAgent.toLowerCase();
				if(ua.match(/MicroMessenger/i) == "micromessenger") {
					return true;
				} 
			},
			invitation(){
				this.is_weixin()
				var isWeixin = this.is_weixin();
				if(isWeixin) {
					$(".weixin-tip").show();
				}
				
			}
		}
	}
</script>

<style lang="less">
	@import './envelopes.less';
</style>