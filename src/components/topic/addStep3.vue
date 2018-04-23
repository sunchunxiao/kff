<style lang="less">
  .step3 {
    .mint-radiolist {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mint-radiolist-title {
        width: 80px;
        font-size: 16px;
        line-height: 1;
        color: #2c3e50;
      }
      .mint-cell {
        min-height: 0;
        height: auto;
        .mint-cell-wrapper {
          background-image: none;
          .mint-radiolist-label {
            width: 80px;
          }
        }
      }
      .mint-cell:last-child {
        background-image: none;
      }

    }
  }
</style>
<template>
  <div class="step3">
    <mt-radio
      title="利益相关"
      v-model="checkList"
      :options="['选项A', '选项B', '选项C']">
    </mt-radio>
    <mt-field label="联系方式" v-model="tel"></mt-field>
    <mt-field label="推荐理由" v-model="reason" type="textarea" rows="4"></mt-field>
    <mt-button type="primary" @click.native="preStep">上一步</mt-button>
    <mt-button type="primary" @click.native="submit">提交</mt-button>
  </div>
</template>
<script>
  export default {
    name: "step3",
    data() {
      return {
        checkList: "",
        tel: "",
        reason: ""
      }
    },
    methods: {
      preStep() {
        this.$emit('btn1Handel')
      },
      submit() {
        //接口
        this.$router.push('/main/topic')
      },
    }

  }
</script>
