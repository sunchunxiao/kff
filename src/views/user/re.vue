<style lang="less">
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

  .input-val {
    width: 80px;
    margin-right: 10px;
  }

  #canvas {
    width: 79px;
    float: right;
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
  }

  .reg-code {
    position: relative;
  }

  .registerSmp .longBtn {
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
  .img-code{
  width: 100%;
  }
  .geetest_holder.geetest_wind{
  min-width:100%!important;
  }
  .geetest_holder {
  width: 100%!important
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
              <input class="phone" placeholder="输入手机号" type="tel" v-model="phone" id="telnum" @blur="handleCommentBlur">
              <div class="reg-code">
                <!--图形验证-->
                <!--<div class="code">-->
                  <!--<input class="input-val" type="text" value="" placeholder="请输入图片验证码" />-->
                  <!--<canvas id="canvas" class="code1" width="100" height="43" @click="draw1"></canvas>-->
                <!--</div>-->
                <!--极验-->
                <div class="img-code">
                <label>完成验证：</label>
                <div id="captcha">
                <p id="wait" class="show">正在加载验证码......</p>
                </div>
                </div>
                <input placeholder="输入验证码" type="text" v-model="code">
              </div>
              <button @click="getcode"  id="getcode">获取验证码<span v-show="!show">({{count}}S)</span></button>
              <input placeholder="输入密码(8-20位数字字母组合)" type="password" v-model="password">
            </div>
            <mt-button type="primary" class="longBtn" @click.native="registerSmp">立即注册</mt-button>
          </div>
          <div class="onecenter">
            <span @click="next">已有账户？下载APP</span>
          </div>
        </div>
      </div>
    </div>
    <div class="understanding">- 在这里读懂区块链项目，寻找价值币 -</div>
    <!--<div style="color: red;text-align: center;margin-top: 1rem;" >内测期间不开放注册</div>-->
    <Qf></Qf>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import { getCode, register, phoneP } from '@/service/user';
  import Qf from './qf.vue';
  import { encrypt as aes128Encod } from '../../utils/aesEncode'
  import { wechatShare } from '../../assets/js/wxshare'
  import '../../assets/js/baidu'
  import gt from "../../../static/js/gt.js"
  // import slid from "../../../static/js/slider.js";

  export default {
    name: "registerSmp",
    data() {
      return {
        phone: "",
        code: "",
        password: "",
        show: true,
        count: "",
        count1:"",
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
    //调用极验的接口
      $.ajax({ //这个地址也是需要根据自己的后台接口地址来改动
        url: "http://192.168.10.151:803/kff/startCaptcha/sendStartCaptcha?t=" + (new Date()).getTime(), // 加随机数防止缓存
        type: "get",
        dataType: "json",
        success: function(data) {
          console.log(data)
          var str = JSON.parse(data.data.resStr)
          console.log(str)
          // 调用 initGeetest 进行初始化
          // 参数1：配置参数
          // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它调用相应的接口

          initGeetest({
            // 以下 4 个配置参数为必须，不能缺少
            gt: str.gt,
            challenge: str.challenge,
            offline: !str.success, // 表示用户后台检测极验服务器是否宕机
            new_captcha: str.new_captcha, // 用于宕机时表示是新验证码的宕机

            product: "float", // 产品形式，包括：float，popup
            width: "300px"
            // 更多配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
          }, handler);
        }
      })
     //极验函数
      var handler = function(captchaObj) {
        var show = true
        var timer = null
        captchaObj.appendTo('#captcha');
        captchaObj.onReady(function() {
          $("#wait").hide();
        });

        $('#getcode').click(function () {
          var result = captchaObj.getValidate();
          console.log(result)
          if(!result){
           console.log("去验证")
          }else{
            $.ajax({
              url: 'http://192.168.10.151:803/kff/startCaptcha/checkStartCaptcha', //这里的地址是根据你的后台接口的地址
              type: 'POST',
              dataType: 'json',
              data: {
                geetest_challenge: result.geetest_challenge,
                geetest_validate: result.geetest_validate,
                geetest_seccode: result.geetest_seccode
              },
              success: function (data) {
                if (data.status === 'success') {
                  alert('登录成功');
                } else if (data.status === 'fail') {
                  alert('登录失败，请完成验证');
                  captchaObj.reset();
                }
              }
            });
          }

        })
        // 更多接口说明请参见：http://docs.geetest.com/install/client/web-front/
      };

      //图形验证码
      // this.draw1()
      //分享
      wechatShare({
        title: "做区分创世节点，领取10w注册邀请糖果包",
        content: "注册即送5w，每邀请一个好友再送2500 FIND。深度了解区块链项目，听听其他投资者的声音",
        link: window.location.href,
        logo: "https://pic.qufen.top/posts20180628204925934317",
      })
      // console.log(this.$route.query.invaUIH)
      this.invaUIH = this.$route.query.invaUIH
    },

    methods: {
      next() {
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
          //					this.draw(this.show_num);

        } else {
          alert('验证码错误！请重新输入！');
          $(".input-val").val('');
          //					this.draw(this.show_num);
        }
      },

      //提交注册
      registerSmp() {
        let aesEncode = aes128Encod(this.password)
        var a = $(".geetest_radar_tip").attr("aria-label")
        var myreg = /^1[345678]\d{9}$/;
        var pwreg = /[a-zA-Z0-9]{8,20}/;
        //输入框
        // var val = $(".input-val").val().toLowerCase();
        //图片生成的
        // var num = this.show_num.join("");
        // console.log(val, num)
        let params = {
          phoneNumber: this.phone,
          password: aesEncode,
          //图片生成的
          // checkCode: num,
          // phoneCode: val,
          //手机验证码
          dynamicVerifyCode: this.code,
          //  邀请码
          invaUIH: this.invaUIH
        }
        if(this.phone != "") {
          if(myreg.test(this.phone)) {
            if(a=="验证成功") {
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
                message: '请去验证！',
                showConfirmButton: true
              });
              //							this.draw1();//刷新验证码
              //						    $(".input-val").val('');
            }

          } else {
            MessageBox({
              title: '提示',
              message: '手机格式错误！',
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

            } else {
              alert(res.msg)

            }
          })
        }

      },

      //手机验证码
      getcode() {

        //输入框
        var val = $(".phone").val();
        var myreg = /^1[345678]\d{9}$/;
        console.log($(".geetest_radar_tip").attr("aria-label"))
        var a = $(".geetest_radar_tip").attr("aria-label")
        if(val != "") {
            if(a=="验证成功"){
            //发送获取验证码的接口请求
            if(this.show) { //倒计时内只能点一次
              console.log(111)
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
                  console.log(this.count)
                } else {
                  this.show = true;
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000)
            }

        }else{
              alert("请验证")
            }

      }else{
          alert("手机号不能为空")
        }
      }

    }
  }
</script>
