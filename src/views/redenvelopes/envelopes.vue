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
				token:'',
			}
		},
		created(){
			this.invaUIH = this.$route.query.invaUIH
			this.token = localStorage.token
//			if(this.token==undefined){
//				this.$router.push('/redenvelopes/invitation')
//			}
			console.log(this.invaUIH,this.$route.query.invaUIH)
			document.title = '区分-投资区块链 一定要区分'
		},
		methods:{
			receive(){
				this.$router.push('/redenvelopes/findcoin?invaUIH='+this.invaUIH)
			}
			
		}
	}
</script>

<style lang="less">
@import './envelopes.less';
</style>