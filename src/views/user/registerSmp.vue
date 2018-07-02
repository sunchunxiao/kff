<style lang="less" scoped>
	input::-webkit-input-placeholder {
		font-size: 13px;
		color: #cccccc;
	}

	.registerBac {
		width: 100%;
		height: 18rem;
		background-image: url("../../assets/register/register.png");
		background-size: 100% 100%;
	}

	.register {
		background: #ffffff;
		box-shadow: 0 2px 11px 0 rgba(103, 166, 255, 0.27);
		width: 80%;
		height: 55%;
		margin: 0 auto;
		margin-top: -3rem;
	}

	.register-content {
		padding: 1rem;
	}

	.register-content img {
		width: 25px;
		height: 29px;
	}

	.qf-register {
		display: inline-block;
	}

	.register-title {
		font-size: 16px;
		color: #1e75ff;
		text-align: left;
	}

	.register-title-listen {
		font-size: 10px;
		color: #666666;
		-webkit-transform: scale(0.8);
	}

	.reg-intro {
		width: 90%;
		margin-left: 5%;
		position: relative;
		input {
			height: 2.8rem;
			width: 100%;
			font-size: 1.4rem;
			border-bottom: 1px solid #e8e8e8;
			margin-top: 1.5rem;
		}
		button {
			height: 2.5rem;
			line-height: 2.5rem;
			font-size: 1rem;
			border: 1px #3b88f6 solid;
			border-radius: 4px;
			padding: 0 0.6rem;
			position: absolute;
			right: 0px;
			bottom: 5rem;
			background-color: transparent;
			color: #3b88f6;
		}
	}

	.yanzhengma_input {}

	.code1 {
		width: 23%;
		font-size: 14px;
		letter-spacing: 3px;
		color: #053d84;
		background: #fff;
		border-bottom: 0;
		position: absolute;
		right: 0px;
		top: 10%;
	}
	/*图片验证码*/

	.code {
		/*width: 400px;*/
		/*margin: 0 auto;*/
	}

	.input-val {
		width: 80px;
		margin-right: 10px;
	}

	#canvas {
		width: 79px;
		float: right;
		display: inline-block;
		/*border: 1px solid #ccc;*/
		border-radius: 5px;
		cursor: pointer;
	}

	.reg-code {
		position: relative;
	}

	.longBtn {
		margin-top: 9%;
	}

	.registerSmp .mint-button-text {
		color: #fff;
	}

	.onecenter {
		text-align: center;
		margin-top: 2%;
		span {
			font-size: 12px;
			color: #3b88f6;
		}
	}

	.understanding {
		font-size: 12px;
		color: #999999;
		text-align: center;
		padding-top: 10%;
	}
</style>
<template>
	<div class="registerSmp">
		<div class="registerBac">
		</div>
		<div class="register">
			<div class="register-content">
				<div>
					<img src="../../assets/register/logo@2x.png" alt="">
					<div class="qf-register">
						<div class="register-title">区分注册</div>
						<span class="register-title-listen">投资区块链，一定要“区分”！</span>
					</div>
					<div>
						<div class="reg-intro">
							<input placeholder="输入手机号" type="tel" v-model="phone" id="telnum" @blur="handleCommentBlur">
							<div class="reg-code">
								<div class="code">
									<input class="input-val" type="text" value="" placeholder="请输入图片验证码" />
									<canvas id="canvas" class="code1" width="100" height="43" @click="draw1"></canvas>
								</div>
								<input placeholder="输入验证码" type="text" v-model="code">
							</div>
							<button @click="getcode">获取验证码<span v-show="!show">({{count}}S)</span></button>
							<input placeholder="输入密码(8-20位数字字母组合)" type="password" v-model="password">
						</div>
						<mt-button type="primary" class="longBtn" @click.native="registerSmp">立即注册</mt-button>
					</div>
					<div class="onecenter">
						<span  @click="next">已有账户？</span>
					</div>
				</div>
			</div>
		</div>
		<div class="understanding">- 在这里读懂区块链项目，寻找价值币 -</div>
		<div style="color: red;text-align: center;margin-top: 1rem;" >内测期间不开放注册</div>
		<Qf></Qf>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import { getCode, register, phoneP } from '@/service/user';
	import Qf from './qf.vue';
  import {encrypt as aes128Encod} from '../../utils/aesEncode'
  import { wechatShare } from '../../assets/js/wxshare'

	export default {
		name: "registerSmp",
		data() {
			return {
				phone: "",
				code: "",
				password: "",
				show: true,
				count: '',
				timer: null,
				picLyanzhengma: '',
				invaUIH: "",
				show_num: [],

			}
		},
		components: {
			Qf
		},
		mounted() {
      wechatShare({
        title: "做区分创世节点，领取5w注册糖果包",
        content: "注册即送5w，每邀请一个好友再送2500 FIND。深度了解区块链项目，听听其他投资者的声音",
        link: window.location.href,
        logo:"https://pic.qufen.top/posts20180628204925934317" ,
      })
			this.draw1();
			console.log(this.$route.query.invaUIH)
			this.invaUIH = this.$route.query.invaUIH
		},
		methods: {
      next(){
        this.$router.push('/user/download')
      },
			//图片验证码
			btn() {
				var val = $(".input-val").val().toLowerCase();
				var num = this.show_num.join("");
				if(val == '') {
					alert('请输入验证码！');
				} else if(val == num) {
					alert('提交成功！');
					$(".input-val").val('');
					this.draw(this.show_num);

				} else {
					alert('验证码错误！请重新输入！');
					$(".input-val").val('');
					this.draw(this.show_num);
				}
			},
			draw1() {
				this.draw(this.show_num);
			},
			draw(show_num) {
				var canvas_width = $('#canvas').width();
				var canvas_height = $('#canvas').height();
				var canvas = document.getElementById("canvas"); //获取到canvas的对象，演员
				var context = canvas.getContext("2d"); //获取到canvas画图的环境，演员表演的舞台
				canvas.width = canvas_width;
				canvas.height = canvas_height;
				var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
				var aCode = sCode.split(",");
				var aLength = aCode.length; //获取到数组的长度

				for(var i = 0; i <= 3; i++) {
					var j = Math.floor(Math.random() * aLength); //获取到随机的索引值
					var deg = Math.random() * 30 * Math.PI / 180; //产生0~30之间的随机弧度
					var txt = aCode[j]; //得到随机的一个内容
					show_num[i] = txt.toLowerCase();
					var x = 7 + i * 14; //文字在canvas上的x坐标
					var y = 18 + Math.random() * 8; //文字在canvas上的y坐标
					context.font = "bold 23px 微软雅黑";

					context.translate(x, y);
					context.rotate(deg);

					context.fillStyle = this.randomColor();
					context.fillText(txt, 0, 0);

					context.rotate(-deg);
					context.translate(-x, -y);
				}
				for(var i = 0; i <= 5; i++) { //验证码上显示线条
					context.strokeStyle = this.randomColor();
					context.beginPath();
					context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
					context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
					context.stroke();
				}
				for(var i = 0; i <= 30; i++) { //验证码上显示小点
					context.strokeStyle = this.randomColor();
					context.beginPath();
					var x = Math.random() * canvas_width;
					var y = Math.random() * canvas_height;
					context.moveTo(x, y);
					context.lineTo(x + 1, y + 1);
					context.stroke();
				}
			},
			randomColor() { //得到随机的颜色值
				var r = Math.floor(Math.random() * 256);
				var g = Math.floor(Math.random() * 256);
				var b = Math.floor(Math.random() * 256);
				return "rgb(" + r + "," + g + "," + b + ")";
			},
			//提交注册
			registerSmp() {
				let aesEncode = aes128Encod(this.password)
				// console.log(aesEncode)
				var myreg = /^1[345678]\d{9}$/;
        var pwreg = /[a-zA-Z0-9]{8,20}/;
				//输入框
				var val = $(".input-val").val().toLowerCase();
				//图片生成的
				var num = this.show_num.join("");
				console.log(val, num)
				let params = {
					phoneNumber: this.phone,
					password: aesEncode,
					//图片生成的
					checkCode: num,
					phoneCode: val,
					//手机验证码
					dynamicVerifyCode: this.code,
					//  邀请码
					invaUIH: this.invaUIH
				}
				if(myreg.test(this.phone)) {
					if(val != "") {
						if(val == num) {
							if(this.code != "") {
								if(pwreg.test(this.password)) {
									register(params).then(res => {
										//0是不成功 1是注册成功
										if(res.data.reStatus == 0) {
											MessageBox({
											  title: '提示',
											  message: res.data.reason,
											  showConfirmButton: true
											});
											// alert(res.data.reason)
										} else {
											localStorage.setItem("token", res.data.token);
											this.$router.push('/user/registerSuccess');
										}

									})
								} else {
									MessageBox({
										title: '提示',
										message: '请输入8-20位数字字母组合！',
										showConfirmButton: true
									});
								}

							} else {
								MessageBox({
									title: '提示',
									message: '请输入短信验证码！',
									showConfirmButton: true
								});
							}
						} else {
							MessageBox({
								title: '提示',
								message: '图片验证码输入不正确！',
								showConfirmButton: true
							});
//							this.draw1();//刷新验证码
//						    $(".input-val").val('');
						}

					} else {
						MessageBox({
							title: '提示',
							message: '请输入图片验证码！',
							showConfirmButton: true
						});
					}

				} else {
					MessageBox({
						title: '提示',
						message: '请输入手机号！',
						showConfirmButton: true
					});
				}

			},
			//手机号验证
			handleCommentBlur() {
				var phone = this.phone;
				var myreg = /^1[345678]\d{9}$/;
				let params = {
					phone: this.phone
				}
				if(!myreg.test(phone)) {
					MessageBox({
						title: '提示',
						message: '请输入正确的手机号！',
						showConfirmButton: true
					});

				} else {
					phoneP(params).then(res => {

						if(res.code == 0) {
							if(res.data.isRegister != 0) {
								MessageBox({
									title: '提示',
									message: '手机号已被注册',
									showConfirmButton: true
								});
							}

						}else{
             alert(res.msg)

            }
					})
				}

			},

			//手机验证码
			getcode() {

				//发送获取验证码的接口请求
				if(this.show) { //倒计时内只能点一次
					getCode({
						phone: this.phone,
						module: "register"
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

			}
		}
	}
</script>
