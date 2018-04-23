<style lang="less">
  .addProject {
    .title {
      padding: 10px 5px;
    }
  }


</style>
<template>
  <div class="addProject">
    <HeaderBar
      :leftOptions="leftOptions"
      v-on:leftClickHandel="leftClickHandel"
      :title="title"
    />
    <div class="title">
      <div>未找到你寻找的项目？来帮我们完善吧！</div>
      <div>若提交内容被采纳，我们将奖励2000QTC。</div>
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
        leftOptions: {
          hasLeftBtn: true,
          leftBtnText: "返回"
        },
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
      leftClickHandel() {
        this.$router.push('/main/topic')
      },
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
