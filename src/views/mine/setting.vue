<template>
  <div class="setting">
    <!--<HeaderBar-->
      <!--:leftOptions="leftOptions"-->
      <!--v-on:leftClickHandel="leftClickHandel"-->
      <!--:title="title"-->
    <!--/>-->
    <div class="setting-title" >
      <span class="back" @click="leftClickHandel"><img src="../../assets/mine/zhufan.png" alt=""></span>
      <span class="setting">设置</span>
    </div>
    <div class="title">个人信息</div>
    <mt-cell title="头像">
      <span>
        <img :src='formData.imageUrl' alt="图像"/>
      </span>
      <label class="rightBtn" @click="changeImage"> > </label>
    </mt-cell>

    <mt-cell title="昵称">
      <span>{{formData.nickname}}</span>
      <label class="rightBtn" @click="changeName"> > </label>
    </mt-cell>

    <mt-cell title="性别">
      <span>{{formData.sexText}}</span>
      <label class="rightBtn" @click="changeSexHandle"> > </label>
    </mt-cell>
    <mt-actionsheet :actions="sexOptions.sexs" v-model="sexOptions.visible" cancel-text="取消"></mt-actionsheet>
    <!--地址-->
    <mt-cell title="所在地">
      <span>{{formData.province}} - {{formData.city}}</span>
      <label class="rightBtn" @click="changeRegionHandle"> > </label>
    </mt-cell>
    <Address :visible='regionOptions.visible' v-on:cancelRegionModal="cancelRegionModal" v-on:okRegionModal="okRegionModal"></Address>

    <mt-cell title="个人简介">
      <span class="introduction">{{formData.introduction}}</span>
      <label class="rightBtn" @click="changeIntroduction"> > </label>
    </mt-cell>

    <mt-cell title="用户类型">
      <span>{{formData.userType}}</span>
    </mt-cell>
    <!--<hr/>-->
    <div class="title">账户设置</div>
    <mt-cell title="绑定手机号">
      <span>{{formData.mobileNumber}}</span>
    </mt-cell>
  </div>
</template>

<style lang="less">
  .setting {
    .setting-title{
      width: 100%;
      text-align: center;
      height: 40px;
      line-height: 40px;
      .back{
        height: 40px;
        line-height: 50px;
        float: left;
        img{
          width: 50%;
        }
      }
      .setting{
        font-size:18px;
        color:#333333;
        letter-spacing:0;
      }
    }
    .mint-cell-title {
      flex: 0.4;
      min-width: 80px;
      .mint-cell-text{
        color: #888;
        font-size: 14px;
      }
    }

    .rightBtn {
      position: absolute;
      right: 0;
      font-size: 18px;
      color: #d0d0d0;
      padding: 0 20px;
    }

    .title {
      background:#f4f4f4;
      /*width:100%;*/
      height:30px;
      line-height: 30px;
      font-size: 12px;
      font-weight: 200;
      color:#888888;
      letter-spacing:0;
      padding-left: 2%;

    }

    .introduction {
      display: inline-block;
      max-width: 200px;
      word-break: break-all;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden
    }
  }
  .mint-cell-value{
    text-align: left;
    span{
      font-size: 14px;
      color: #333;
    }
  }

</style>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import Address from '@/components/common/address.vue'
  import {MessageBox} from 'mint-ui';

  export default {
    name: 'setting',
    components: {
      HeaderBar,
      Address,
    },
    data() {
      return {
        leftOptions: {
          hasLeftBtn: true,
          leftBtnText: "返回"
        },
        rightOptions: {
          hasRightBtn: false,
        },
        title: this.$route.meta.title,
        sexOptions: {
          sexs: [{
            name: '男',
            method: this.selectMan
          }, {
            name: '女',
            method: this.selectWoman
          }],
          visible: false,
        },
        regionOptions: {
          visible: false,
          province: "",
          city: "",
        },
        formData: {
          imageUrl: require('../../assets/image/rose.png'),
          nickname: '布尼',
          sex: "0",
          sexText: "男",
          province: "浙江",
          city: "杭州",
          introduction: "区块链创业者，早期投资人",
          userType: " 普通用户",
          mobileNumber: '13111111111'
        }
      }
    },
    created() {
      // queryList();
    },
    methods: {
      //头部 -返回
      leftClickHandel() {
        this.$router.push('/main/mine')
      },
      //更改图像
      changeImage() {
        console.log("更换图像");
      },
      //更改昵称
      changeName() {
        MessageBox.prompt(' ', '设置昵称').then(({value}) => {
          if (value) {
            //接口
            this.formData.nickname = value
          }
        }).catch(() => {
        });
      },
      //性别 -- 显示弹窗
      changeSexHandle() {
        this.sexOptions.visible = true
      },
      //选择角色
      selectMan: function () {
        //接口
        this.formData.sex = '1'
        this.formData.sexText = '男'
      },
      selectWoman: function () {
        //接口
        this.formData.sex = '0'
        this.formData.sexText = '女'
      },
      //所在地 -- 显示弹窗
      changeRegionHandle() {
        this.regionOptions.visible = true
      },
      //取消 -- 弹窗
      cancelRegionModal() {
        this.regionOptions.visible = false
      },
      //确定 -- 弹窗
      okRegionModal(values) {
        //接口
        this.regionOptions.visible = false;
        [this.formData.province, this.formData.city] = values;
      },
      //个人简介 -- 显示弹窗
      changeIntroduction() {
        MessageBox.prompt(' ', '个人简介', {inputPlaceholder: '请填写个人简介'}).then(({value}) => {
          if (value) {
            //接口
            this.formData.introduction = value
          }
        }).catch(() => {
        });
      }
    }
  }
</script>

