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

  .protocol{
    margin: 30px 0;
  }
</style>
<template>
  <div class="page-field">
    <div class="logo">
      <img src="../../assets/image/logo.png" alt=""/>
    </div>
    <div class="page-part">
      <mt-field label="手机号" placeholder="输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="密码" placeholder="输入长度6-16位密码" type="password" v-model="password"></mt-field>
    </div>
    <div class="page-part">
      <mt-field label="验证码" placeholder="输入验证码" v-model="code">
        <mt-button type="primary" size="small" @click.native="getCode">
          <span>图片验证码</span>
          <span v-show="!show">({{count}}S)</span>
        </mt-button>
      </mt-field>
    </div>
    <div class="protocol">
      <input type="checkbox" name="" id="" v-model="agree">同意
      <a @click="showProtocolModal">《开封府服务协议》</a>
    </div>
    <mt-button type="primary" class="longBtn" @click.native="register">注册</mt-button>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
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
    methods: {
      getCode() {
        console.log('获取验证码')
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

      register() {
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
