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
      padding-top: 5rem;
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
  .register{
      width: 90%;
      margin: 0 auto;
      padding: 20% 0 50%;
  }
  .see{
    padding-bottom: 15%;
  }
  .introduce{
    color: #000;
    h2{
     text-align: center;
    }

  }
</style>
<template>
  <div class="page-field">
    <a class="back" @click="back">&nbsp;</a>
    <h2 class="reg-tit">
      欢迎注册使用
    </h2>
    <div class="register">
      <div class="reg-intro">
        <input placeholder="输入手机号" type="tel" v-model="phone" id="telnum" @blur="handleCommentBlur">
        <input placeholder="输入长度6——16位密码" type="password" v-model="password" @blur="regpw">
        <!--<div class="register-tel-error" id="telnum-error" style="opacity: 0;">-->
        <!--<span>请输入正确的手机号</span>-->
        <!--</div>-->
      </div>
      <div class="reg-intro">
        <input placeholder="输入验证码" type="text" v-model="code">
        <button @click="getcode">获取验证码<span v-show="!show">({{count}}S)</span></button>
      </div>
      <mt-button type="primary" class="longBtn" @click.native="register">注册</mt-button>
    </div>
    <!--<div class="protocol">-->
      <!--<a @click="showProtocolModal">注册即同意《开封府服务协议》</a>-->
    <!--</div>-->
    <div class="see">全方位了解区块链项目，做个成熟的价值投资者</div>
    <div class="introduce">
      <h2>区分是什么</h2>
      <p>
        全球首家针对区块链项目的分布式评测平台。
      </p>
      <p>区分(Trios),是一个新型的分布式写作平台。用区块链分布式协作的理念生产评测内容，真正独立、公平地去评测区块链投资标的。</p>
      <p>
        <span>区分指数</span>

      </p>
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
        _key :'abcdefghijklmn',
        _password :'123456'
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
      //back
      back(){
        var _this=this;
        _this.$router.go(-1);
      },
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

      },
      //提交注册
      register() {
          let params ={
            phoneNumber:this.phone,
            password:this.password,
            dynamicVerifyCode:this.code
          }

          register(params).then(res=>{
            if(res.code==0){
              MessageBox({
                title: '提示',
                message: '注册成功',
                showConfirmButton: true
              });
              console.log(res.data)
              this.$router.push('/main');
            }
            console.log("第一个接口调试");
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
