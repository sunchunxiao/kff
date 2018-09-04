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

			}
		},
		methods: {
			immediately() {
				this.$router.push('/redenvelopes/login')
			}
		}
	}
</script>

<style lang="less">
@import './envelopes.less';
</style>