<style lang="less">
  .addProject {
    /*background-color:#f4f4f4;*/

    .title {
      padding: 10px 5px;
      text-align: center;
      .title-img{
        border:1px solid #dddddd;
        width:70px;
        height:70px;
        margin: 10px auto ;
        border-radius:100%;
      }
      span{
        font-size: 14px;
        color:#888888;
        letter-spacing:0.13px;
      }
    }
  }
  /*.mint-cell-wrapper{*/
    /*width: 90%;*/
    /*padding-left: 5%;*/
    /*border-bottom: 1px solid;*/
  /*}*/

</style>
<template>
  <div class="addProject">
    <HeaderBar

      :title="title"
    />
    <div class="title">
        <div class="title-img"></div>
        <span>上传代币主图</span>
    </div>
    <Step :current="current"></Step>
    <keep-alive>
      <component :is="currentStep" v-on:btn1Handel="btn1Handel" v-on:btn2Handel="btn2Handel"/>
    </keep-alive>
  </div>
</template>


<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import Step from '@/components/topic/step.vue'
  import Step1 from '@/components/topic/addStep1.vue'
  import Step2 from '@/components/topic/addStep2.vue'
  import Step3 from '@/components/topic/addStep3.vue'

  export default {
    name: "add",
    components: {
      HeaderBar,
      Step,
      step1: Step1,
      step2: Step2,
      step3: Step3,
    },
    data() {
      return {

        title: this.$route.meta.title,
        current: 1,
      }
    },
    computed: {
      currentStep() {
        return `step${this.current}`
      }
    },
    methods: {

      btn1Handel() {
        let current = this.current
        //第一时，点击按钮下一步，其他的都是上一步
        this.current = current === 1 ? ++current : --current
      },
      btn2Handel() {
        let current = this.current
        if (current == 2) {
          this.current = current + 1
        }
      }
    }
  }
</script>
