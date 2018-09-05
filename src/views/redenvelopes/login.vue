<style lang="less">
	@import './envelopes.less';
	input::-webkit-input-placeholder {
		color: rgb(198, 211, 233);
		font-weight: lighter;
	}
</style>

<template>
	<div class="findcoinLogin enpcommonHeight">
		<h2 class="reg-tit">欢迎领取！</h2>
		<div class="reg-intro">
			<input class="i1" placeholder="请输入中国大陆11位手机号" type="tel" v-model="phone">
			<input placeholder="请输入验证码" type="text" v-model="code">
			<button @click="getcode" id="getcode" v-model="code">获取验证码<span v-show="!show">({{count}}S)</span></button>
		</div>
		<mt-button type="primary" class="longBtn" @click.native="login">登录</mt-button>
	</div>
</template>

<script>
	import HeaderBar from '@/components/layout/headerBar.vue'
	import { regAnLogin, getCode } from '@/service/user'
	import { MessageBox } from 'mint-ui';
	import eventVue from '../../assets/js/event.js'

	export default {
		name: 'invitationlogin',
		components: {
			HeaderBar,
		},
		data() {
			return {
				phone: "",
				code: '',
				show: true,
				count: "",

			}
		},

		methods: {
			//登录接口
			login() {
				var myreg = /^1[23456789]\d{9}$/;

				if(this.phone != '') {
					if(myreg.test(this.phone)) {
						if(this.code != '') {
							let params = {
								phoneNumber: this.phone,
								dynamicVerifyCode: this.code
							}
							regAnLogin(params).then(res => {
								if(res.code == 0) {
									console.log(res.data)
									localStorage.setItem("p", this.phone)
									localStorage.setItem("token", res.data.token)
									this.$router.push('/redenvelopes/invitation')
								}

							}).catch(function(res) {
								MessageBox({
									title: '提示',
									message: res.msg,
									showConfirmButton: true
								});
							});
						} else {
							MessageBox({
								title: '提示',
								message: '请输入验证码',
								showConfirmButton: true
							});
						}

					} else {
						MessageBox({
							title: '提示',
							message: '手机号格式错误',
							showConfirmButton: true
						});
					}

				} else {
					MessageBox({
						title: '提示',
						message: '请输入手机号',
						showConfirmButton: true
					});
				}

			},
			//手机验证码
			getcode() {
				//输入框
				var myreg = /^1[23456789]\d{9}$/;
				if(this.phone != "") {
					if(myreg.test(this.phone)) {
						//发送获取验证码的接口请求
						if(this.show) { //倒计时内只能点一次
							//							console.log(111)
							getCode({
								phone: this.phone,
								module: "reganlogin"
							}).catch(function(res) {
								console.log($(".i1").html())
								console.log(res)
								MessageBox({
									title: '提示',
									message: res.msg,
									showConfirmButton: true
								});
							});
							
						}
						const TIME_COUNT = 60;
						if(!this.timer) {
							this.count = TIME_COUNT;
							this.show = false;
							this.timer = setInterval(() => {
								if(this.count > 0 && this.count <= TIME_COUNT) {
									this.count--;
								} else {
									this.show = true;
									clearInterval(this.timer);
									this.timer = null;
								}
							}, 1000)
						}
					} else {
						MessageBox({
							title: '提示',
							message: '手机号格式错误',
							showConfirmButton: true
						});
					}

				} else {
					MessageBox({
						title: '提示',
						message: '请输入手机号',
						showConfirmButton: true
					});
				}

			},
			//手机号验证
			//			handleCommentBlur() {
			//				var phone = this.phone;
			//				var myreg = /^1[34578]\d{9}$/;
			//				if(!myreg.test(phone)) {
			//					MessageBox({
			//						title: '提示',
			//						message: '请输入正确的手机号！',
			//						showConfirmButton: true
			//					});
			//				}
			//			},

		}
	};
</script>