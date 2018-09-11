<template>
	<div class="enpcommonHeight envelopes">
		<div class="envelopesWrap">
		<div class="envelopesWrapper">
			<img class="envelopequfen" src="../../assets/envelopes/envelopes1.png"/>
			<img @click="receive" class="envelopeOpen" src="../../assets/envelopes/envelopes-open.png"/>
		</div>
		
		</div>
	</div>
</template>

<script>
	export default {
		name: "envelopes",
		data() {
			return {
				invaUIH:'',
				inva:localStorage.inva,
				token:localStorage.token,
			}
		},
		created(){
			this.invaUIH = this.$route.query.invaUIH
//			console.log(this.invaUIH,this.$route.query.invaUIH)
			
			if(this.token!=undefined){
				this.$router.push('/redenvelopes/invitation?invaUIH='+this.inva)
			}
			console.log(this.token)
			document.title = '区分-投资区块链 一定要区分'
		},
		methods:{
			receive(){
				this.$router.push('/redenvelopes/findcoin?invaUIH='+this.invaUIH)
//				window.open('/redenvelopes/findcoin?invaUIH='+this.invaUIH,"_blank")
			}
			
		}
	}
</script>

<style lang="less">
@import './envelopes.less';
</style>