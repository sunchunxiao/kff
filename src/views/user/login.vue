<style lang="less">
  .logo {
    width: 100%;
    height: 100px;
    text-align: center;
    margin: 50px 0;
    img {
      height: 100px;
    }
  }

  .otherWay {
    width: 90%;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    div {
      padding: 10px;
    }
    .userCode {
      float: left;
    }
    .gotoRegister {
      float: right;
    }
  }
</style>
<template>
  <div class="page-field">
    <HeaderBar
      :rightOptions="rightOptions"
      v-on:rightClickHandel="rightClickHandel"/>

    <div class="logo">
      <img src="../../assets/image/logo.png"/>
    </div>
    <div class="page-part">
      <mt-field label="手机号" placeholder="输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="密码" placeholder="输入长度6-16位密码" type="password" v-model="password"></mt-field>
    </div>
    <mt-button type="primary" class="longBtn" @click.native="login">登陆</mt-button>
    <div class="otherWay">
      <div class="userCode">验证码登录</div>
      <div class="gotoRegister" @click="gotoRegister">注册账号</div>
    </div>
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
        }
      }
    },

    methods: {
      login() {
        login().then(res=>{
          console.log("第一个接口调试");
        })
        this.$router.push('/main')
      },

      gotoRegister() {
        this.$router.push('/user/register')
      },

      rightClickHandel() {
        this.$router.push('/user/forgetPwd')
      }

    }
  };
</script>
