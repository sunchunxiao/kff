<style lang="less">
  input::-webkit-input-placeholder{
    color:#fff;
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
      padding-top: 8rem;
      margin-bottom: 5rem;
      text-indent:1.4rem;
    }
    .reg-intro{
      width:90%;
      margin-left:5%;
      position: relative;
      margin-top: 1rem;
      input{
        height:2.8rem;
        width:100%;
        font-size:1.4rem;
        font-weight: lighter;
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

  }
  .userCode {
    color: #d5eafb;
    float: left;
  }
  .gotoRegister {
    color: #d5eafb;
    float: right;
  }
  /*.mint-button-text{*/
    /*background-color: #63b5f7;*/
  /*}*/
  .otherWay {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 1rem;
  }


</style>


<template>
  <div class="page-field">
    <a class="back">&nbsp;</a>
    <h2 class="reg-tit">
      欢迎回来!
    </h2>
    <div class="reg-intro">
      <input placeholder="输入手机号" type="tel" v-model="phone" id="telnum" @blur="handleCommentBlur">
      <input placeholder="输入密码" type="password" v-model="password" @blur="regpw">
      <div class="otherWay">
        <div class="userCode" @click="codeLogin">验证码登录</div>
        <div class="gotoRegister" @click="forgetPwd">忘记密码</div>
      </div>
    </div>

    <mt-button type="primary" class="longBtn" @click.native="login">登录</mt-button>

  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import {login} from '@/service/user'

  export default {
    name: 'login',
    components: {
      HeaderBar,
    },
    data() {
      return {
        phone: "13111111111",
        password: "123456",
        rightOptions: {
          hasRightBtn: true,
          rightBtnText: "忘记密码"
        },
        imgurl:"../static/nVisiblepasswords.png"
      }
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
      //验证码登登录
      codeLogin(){
        this.$router.push('/user/codeLogin1');
      },

      //忘记密码
      forgetPwd() {
        this.$router.push('/user/forgetPwd')
      },

      rightClickHandel() {
        this.$router.push('/user/forgetPwd')
      },

      //密码是否可见
      hideShowPsw() {
        if(passwords.type == "text") {
          passwords.type = "password";
          Visiblepasswords.src = "../static/nVisiblepasswords.png";
        } else {
          passwords.type = "text";
          Visiblepasswords.src = "../static/Visiblepasswords.png";
        }
      }

    }
  };
</script>
