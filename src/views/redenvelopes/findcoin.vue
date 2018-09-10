<template>
	<div class="findcoin enpcommonHeight">
		<img style="width: 100%;height: 100%;" src="../../assets/envelopes/findcoinbac.png"/>
		<div class="findcoinWrap">
			<div class="findcoinWrapper">
				<img class="findcoinqufen" src="../../assets/envelopes/findcoin1.png"/>
				<img @click="immediately"  class="findcoinOpen" src="../../assets/envelopes/findcoin-icon.png"/>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: "findcoin",
		data() {
			return {
				invaUIH:'',
				inva:localStorage.inva,
				token:localStorage.token,
			}
		},
		created(){
			this.invaUIH = this.$route.query.invaUIH
			console.log(this.invaUIH,this.$route.query.invaUIH)
			
			console.log(this.inva)
			if(this.token!=undefined){
				this.$router.push('/redenvelopes/invitation?invaUIH='+this.inva)
			}
			document.title = '区分-投资区块链 一定要区分'
		},
		methods: {
			immediately() {
				this.$router.push('/redenvelopes/login?invaUIH='+this.invaUIH)
			}
		}
	}
</script>

<style lang="less">
@import './envelopes.less';
</style>