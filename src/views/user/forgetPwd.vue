<style lang="less">
  input::-webkit-input-placeholder{
    color:#fff;
  }
  .page-field{
    color:#fff;
    background-image:linear-gradient(-180deg, #02b7ea 0%, #4372ff 100%);
    font-family:HiraginoSansGB-W3;
    .back{
      position:absolute;
      left:1.5rem;
      top:1.5rem;
      display:inline-block;
      width:1.2rem;
      height:1.2rem;
      border-bottom:2px solid #ffffff;
      border-left:2px solid #ffffff;
      transform:rotate(45deg);
    }
    .reg-tit{
      font-size:2rem;
      color:#ffffff;
      letter-spacing:0.23px;
      text-align: left;
      padding-top: 8rem;
      text-indent:1.4rem;
    }
    .reg-intro{
      width:90%;
      margin-left:5%;
      position: relative;
      input{
        height:2.8rem;
        width:100%;
        font-size:1.4rem;
        border-bottom:1px #fff solid;
        color:#fff;
        margin-top:2rem;
      }
      button{
        line-height:2rem;
        font-size:1rem;
        border:1px #fff solid;
        border-radius: 1rem;
        padding:0 0.6rem;
        position:absolute;
        right:0px;
        bottom:0.5rem;
        background-color: transparent;
        color:#fff;
      }
    }
    .longBtn{
      border-radius:0.3rem;
      background-color:#64b5f7;
      margin-top:2rem;
    }
    .protocol{
      width:100%;
      text-align: center;
      position:absolute;
      color:#fff;
      bottom:1rem;
      a{
        color:#fff;
      }
    }
  }
  .forgetPas{
    text-align: center;
    margin-bottom: 4rem;
    span{
      display: inline-block;
      margin-top: 1.5rem;
      font-size: 1.5rem;
    }
  }
</style>
<template>
  <div class="page-field">
    <div class="forgetPas">
      <a class="back" @click="back">&nbsp;</a>
      <span>忘记密码</span>
    </div>

    <div class="reg-intro">
      <input placeholder="输入手机号" type="tel" v-model="phone" id="telnum" @blur="handleCommentBlur">
      <input placeholder="输入验证码" type="text" v-model="code">
      <button @click="getCode">获取验证码<span v-show="!show">({{count}}S)</span></button>

      <!--<div class="register-tel-error" id="telnum-error" style="opacity: 0;">-->
      <!--<span>请输入正确的手机号</span>-->
      <!--</div>-->
    </div>
    <div class="reg-intro">
      <input placeholder="输入长度6——16位密码" type="password" v-model="password" @blur="regpw">
    </div>
    <mt-button type="primary" class="longBtn" @click.native="register">确认</mt-button>
    <div class="protocol">
      <!--<input type="checkbox" name="" id="" v-model="agree">同意-->
      <a @click="showProtocolModal">注册即同意《开封府服务协议》</a>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import {getCode} from '@/service/user';
  import {register} from '@/service/user';


  export default {
    name: 'register',
    data() {
      return {
        phone: "",
        password: "",
        code: "",
        show: true,
        count: '',
        timer: null,
        agree: false,
      }
    },
    mounted(){

    },
    methods: {
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
      //密码验证
      regpw(){
        var pw = this.password;
        var pwreg = /[a-zA-Z\d+]{6,16}/;
        if(!pwreg.test(pw)) {
          MessageBox({
            title: '提示',
            message: '请输入正确的密码！',
            showConfirmButton: true
          });
        }
      },
      //验证码
      getCode() {

        //发送获取验证码的接口请求
        if(this.show){//倒计时内只能点一次
          getCode({
            phone:this.phone,
            module:"register"
          });
        }

        const TIME_COUNT = 60;
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

      },
      //
      back(){
        var _this=this;
        _this.$router.go(-1);
      },
      register() {
        //提交注册
        register({
          phoneNumber:this.phone,
          password:this.password,
          dynamicVerifyCode:this.code
        }).then(res=>{
          if(res.code==0){
            MessageBox({
              title: '提示',
              message: '注册成功',
              showConfirmButton: true
            });
            this.$router.push('/main');
          }

        })
      },

      showProtocolModal() {
        MessageBox({
          title: '开封府服务协议',
          message: '开封府服务协议具体内容',
          showConfirmButton: true
        });
      }
    }
  };
</script>
