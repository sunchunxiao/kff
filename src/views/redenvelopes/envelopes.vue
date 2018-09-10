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
				invaUIH:''
			}
		},
		created(){
			this.invaUIH = this.$route.query.invaUIH
			console.log(this.invaUIH,this.$route.query.invaUIH)
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