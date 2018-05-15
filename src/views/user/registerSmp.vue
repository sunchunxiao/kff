<style lang="less" scoped>
  input::-webkit-input-placeholder{
    font-size:13px;
    color:#cccccc;
  }
    .registerBac{
      width: 100%;
      height: 18rem;
      background-image: url("../../assets/register/register.png");
      background-size: 100% 100%;

    }
  .register{
    background:#ffffff;
    box-shadow:0 2px 11px 0 rgba(103,166,255,0.27);
    width:80%;
    height:55%;
    margin: 0 auto;
    margin-top: -3rem;
  }
    .register-content{
      padding: 1rem;
    }
    .register-content img{
      width: 25px;
      height: 29px;
    }
    .qf-register{
      display: inline-block;
    }
    .register-title{
      font-size:16px;
      color:#1e75ff;
      text-align:left;
    }
  .register-title-listen{
    font-size:10px;
    color:#666666;
    -webkit-transform:scale(0.8);
  }

    .reg-intro{
      width:90%;
      margin-left:5%;
      position: relative;
      input{
        height:2.8rem;
        width:100%;
        font-size:1.4rem;
        border-bottom:1px solid #e8e8e8;
        margin-top:2rem;
      }
      button{
        height:2.5rem;
        line-height:2.5rem;
        font-size:1rem;
        border:1px #3b88f6 solid;
        border-radius:4px;
        padding:0 0.6rem;
        position:absolute;
        right:0px;
        bottom:0.5rem;
        background-color: transparent;
        color:#3b88f6;
      }
    }
  .yanzhengma_input{
    width: 80px;
    margin-right: 10px;
  }
  #code{
    width: 23%;
    font-size: 14px;
    letter-spacing:3px;
    color: #053d84;
    background: #fff;
    border-bottom: 0;
    position: absolute;
    right: 0px;
    top: -8%;
  }
  .reg-code{
    position: relative;
  }
  .longBtn{
    margin-top: 9%;
  }
  .onecenter{
    text-align: center;
    margin-top: 2%;
    a{
      font-size:12px;
      color:#3b88f6;
    }
  }
  .understanding{
    font-size:12px;
    color:#999999;
    text-align: center;
    padding-top:10%;
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
                <span class="register-title-listen">听听其他投资者的声音，分布式解锁区块链</span>
              </div>
              <div>
                <div class="reg-intro">
                  <input placeholder="输入手机号" type="tel" v-model="phone" id="telnum" @blur="handleCommentBlur">
                  <div class="reg-code">
                    <input type="text" placeholder="请输入验证码" class="yanzhengma_input" v-model="picLyanzhengma" @blur="checkLpicma"><input type="button" id="code" @click="createCode"  class="verification1" v-model="checkCode"/>
                    <input placeholder="输入验证码" type="text" v-model="code">
                  </div>
                  <button @click="getcode">获取验证码<span v-show="!show">({{count}}S)</span></button>
                </div>
                <mt-button type="primary" class="longBtn" @click.native="registerSmp">立即注册</mt-button>
                </div>
                <div class="onecenter">
                  <a href="###">已有账户？</a>
                </div>
            </div>
        </div>
    </div>
    <div class="understanding">- 全方位了解区块链项目，做个成熟的价值投资者 -</div>
    <Qf></Qf>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import {getCode} from '@/service/user';
  import {register} from '@/service/user';
  import Qf from './qf.vue';

  export default {
        name: "registerSmp",
        data(){
          return {
            phone: "",
            code: "",
            show: true,
            count: '',
            timer: null,
            checkCode:'',
            picLyanzhengma:''
          }
        },

    created(){
      this.createCode()
    },
    components: {
      Qf
    },
      methods:{
        //提交注册
        registerSmp() {
          let params ={
            phoneNumber:this.phone,
            //图片生成的
            checkCode:this.checkCode,
            //手机验证码
            phoneCode:this.picLyanzhengma,
            dynamicVerifyCode:this.code
          }
          register(params).then(res=>{
            //0是不成功 1是注册成功
            if(res.data.reStatus==0){
              // MessageBox({
              //   title: '提示',
              //   message: '注册成功',
              //   showConfirmButton: true
              // });
              alert(res.data.reason)
              this.code="";
            }
            else{
              console.log(res.data)
              this.$router.push('/user/registerSuccess');
            }

          })


        },
        //手机号验证
        handleCommentBlur(){
          var phone  = this.phone;
          var myreg = /^1[34578]\d{9}$/;
          if(!myreg.test(phone)) {
            MessageBox({
              title: '提示',
              message: '请输入正确的手机号！',
              showConfirmButton: true
            });
          }
        },
        //图片验证
        checkLpicma(){
          this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写
           if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时
            console.log( this.picLyanzhengma.toUpperCase())
            console.log(code)
            this.createCode();//刷新验证码
            this.picLyanzhengma = '';
          }else { //输入正确时
            return true;
          }
        },
        //图片验证码
        createCode(){
          var code = $("#code");
          code = "";
          var codeLength = 4;//验证码的长度
          var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
            'S','T','U','V','W','X','Y','Z');//随机数
          for(var i = 0; i < codeLength; i++) {//循环操作
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
            code += random[index];//根据索引取得随机数加到code上
          }
          this.checkCode = code;//把code值赋给验证码
          // console.log(this.checkCode)
        },
        //手机验证码
        getcode() {

          //发送获取验证码的接口请求
          if(this.show){//倒计时内只能点一次
            getCode({
              phone:this.phone,
              module:"register"
            });
          }
          const TIME_COUNT = 10;
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
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


