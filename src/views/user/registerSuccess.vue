<style lang="less" scoped>
	input::-webkit-input-placeholder {
		font-size: 13px;
		color: #cccccc;
	}

	.registerBac {
		width: 100%;
		height: 18rem;
		background-image: url("../../assets/register/registerSuccess.png");
		background-size: 100% 100%;
	}

	.register {
		background: #ffffff;
		box-shadow: 0 2px 11px 0 rgba(103, 166, 255, 0.27);
		width: 80%;
		height: 10%;
		margin: 0 auto;
		margin-top: -2.5rem;
	}

	.register-content {
		position: relative;
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

	.download {
		background: #3b88f6;
		border-radius: 4px;
		width: 75px;
		height: 32px;
		line-height: 32px;
		text-align: center;
		position: absolute;
		right: 1rem;
		top: 1.5rem;
		border: none;
		cursor: pointer;
	}

	.down {
		font-size: 15px;
		color: #ffffff;
	}

	.understanding {
		font-size: 12px;
		color: #999999;
		text-align: center;
		padding-top: 10%;
	}

	.ul {
		padding-bottom: 23%;
	}

	.onecenter ul li {
    text-align: left;
		list-style: disc;
		font-size: 15px;
		color: #333333;
		margin: 2rem 0 2rem 3rem;
	}

	.longBtn1 {
		width: 77%;
		margin-left: 9%;
	}

	.address {
		display: inline-block;
		background: #f9f9f9;
		border-radius: 5px;
		width: 60%;
		height: 32px;
		line-height: 32px;
		margin-left: 9%;
		text-align: center;
	}

	.copyLink {
		display: inline-block;
		font-size: 13px;
		color: #3b88f6;
		border: 1px solid #3b88f6;
		border-radius: 4px;
		width: 75px;
		height: 32px;
		line-height: 32px;
		text-align: center;
	}
    .mint-msgbox-message{
    word-wrap: break-word;
  }
</style>
<template>
	<div>
		<div class="registerBac">
		</div>
		<div class="register">
			<div class="register-content">
				<div>
					<img src="../../assets/register/logo@2x.png" alt="">
					<div class="qf-register">
						<div class="register-title">区分注册</div>
						<span class="register-title-listen">下载App,开始区分之旅!</span>
						<button class="download" @click="down"><span class="down">下载</span></button>
					</div>

				</div>
			</div>
		</div>
		<div class="understanding">- 邀请不限平台，且不限推广人数，可多级获得奖励 -</div>
		<div class="onecenter">
			<ul class="ul">
				<li class="li">邀请好友注册，赚取更多的FIND</li>
				<mt-button type="primary" class="longBtn1" @click.native="registerSuc">一键生成好友注册专属海报</mt-button>
				<li class="li">邀请链接</li>
				<input class="address" v-model="message"></input>
				<button type="button" class="copyLink" v-clipboard:copy="message1" v-clipboard:success="onCopy">复制链接</button>
			</ul>
		</div>
		<Qf></Qf>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	import { getCode, register, registerSuccess } from '@/service/user';

	import Qf from './qf.vue';
	import Input from "iview/src/components/input/input";
	import Button from "iview/src/components/button/button";
	import { Indicator } from 'mint-ui';

	export default {
		name: "registerSmp",
		data() {
			return {
				phone: "",
				// address:"",
				message: "",
        message1:"",
				code: "",
				show: true,
				count: '',
				timer: null,
				checkCode: '',
				picLyanzhengma: '',
				token: localStorage.token
			}
		},
		components: {
			Button,
			Input,
			Qf
		},
		mounted() {
			// console.log(localStorage)
			let params = {
				token: this.token
			}
			registerSuccess(params).then(res => {
				if(res.code == 0) {
					// console.log(res.data.url)
					this.message = res.data.url
          this.message1 = "注册区分领取13wFIND，注册即送30,000FIND,邀请好友再送30,000FIND。深度了解区块链项目，听听其他投资者的声音，速戳："+this.message;
				}
			})
		},
		methods: {
			onCopy(e) {
        MessageBox({
          title: '复制成功',
          showConfirmButton: true
        });
			// 	alert("注册区分领取10wFIND，注册即送50,000FIND≈¥2500,邀请好友再送2500FIND。深度了解区块链项目，听听其他投资者的声音，速戳："+e.text)
			},
			registerSuc() {
				this.$router.push('/user/personalPoster');
				Indicator.open({
					text: '加载中',
					spinnerType: 'double-bounce'
				});
			},
			down() {
				this.$router.push('/user/download')
			}
		}

	}
</script>
