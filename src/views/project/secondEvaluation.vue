<style lang="less">
  .secondtEvaluation {
    padding: 20px 10px;
    .score {
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #DDD;
      text-align: center;
    }
  }
</style>
<template>
  <div>
    <HeaderBar
      :leftOptions="leftOptions"
      :rightOptions="rightOptions"
      v-on:leftClickHandel="leftClickHandel"
      v-on:rightClickHandel="rightClickHandel"
      :title="title"
    />
    <div class="secondtEvaluation">
      <div class="score">{{score}}</div>
      <div class="message">
        <mt-field placeholder="写几句评价" type="textarea" rows="4" v-model="message"></mt-field>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'

  export default {
    name: "secondtEvaluation",
    components: {
      HeaderBar
    },
    data() {
      return {
        leftOptions: {
          hasLeftBtn: true,
          leftBtnText: "返回"
        },
        rightOptions: {
          hasRightBtn: true,
          rightBtnText: "发表"
        },
        title: this.$route.meta.title,
        score: 0,
        message: ""
      }
    },
    created() {
      this.score = this.$route.query.average
    },
    methods: {
      leftClickHandel() {
        this.$router.go(-1)
      },

      rightClickHandel() {
        let {score, message} = this
        /* 接口*/
        console.log('发表');
      }


    }
  }
</script>
