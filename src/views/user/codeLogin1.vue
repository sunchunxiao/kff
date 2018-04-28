<style lang="less">
  input::-webkit-input-placeholder{
    color:#c2e4ff;
  }
  .page-field{
    color:#fff;
    background-image:linear-gradient(-180deg, #02b7ea 0%, #4372ff 100%);
    font-family:HiraginoSansGB-W3;
    /*position: fixed;*/
    height: 100%;
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
      padding-top: 7rem;
      text-indent:1.4rem;
      margin-bottom: 5rem;
      .code-send{
        font-size: 12px;

      }
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
        letter-spacing:0.14px;
        text-align:left;
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
        bottom:1rem;
        background-color: transparent;
        color:#fff;
      }
    }
    .longBtn{
      border-radius:0.3rem;
      background-color:#64b5f7;
      margin-top:4rem;
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
  .userCode {
    float: left;
  }
  .gotoRegister {
    float: right;
  }
  .mint-button-text{
    background-color: #63b5f7;
  }
  .otherWay {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 1rem;
  }
</style>
<template>
  <div class="page-field">
    <a class="back" @click="back">&nbsp;</a>
    <h2 class="reg-tit">
      验证码登录
      <div class="code-send" v-show="!show"><span>验证码已经发送至 {{codephone}}</span></div>
    </h2>
    <div class="reg-intro">
      <input placeholder="请输入6位数验证码" type="text" v-model="code">
      <button @click="getCode">获取验证码<span v-show="!show">({{count}}S)</span></button>
    </div>
    <mt-button type="primary" class="longBtn" @click.native="login">登录</mt-button>
    <div class="protocol">
      <a @click="showProtocolModal">登录即同意《开封府服务协议》</a>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import {getCode,phoneAvailable,login} from '@/service/user';
  // import {phoneAvailable} from '@/service/user';


  export default {
    name: 'register',
    data() {
      return {
        phone: "",
        codephone:"",
        password: "",
        code: "",
        show: true,
        count: '',
        timer: null,
        agree: false,
      }
    },
    mounted(){
        console.log(localStorage.phone)
        this.codephone= localStorage.phone;

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
      //back
      back(){
        var _this=this;
        _this.$router.go(-1);
      },
      getCode() {
        this.show = !this.show;
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
              localStorage.removeItem("phone",this.codephone);
              this.timer = null;
            }
          }, 1000)
        }

      },
      login() {
        let params ={
          userName:"111",
          password:"111"
        }
        login(params).then(res=>{
          console.log("第一个接口调试");
        })
        this.$router.push('/main')
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
