<style lang="less">
  .addModal {
    padding: 20px 10px;
    .average {
      padding: 10px;
      border-bottom: 1px solid #DDD;
    }
    .detail {
      padding: 10px;
    }
    .mt-progress {
      width: 250px;
    }
  }
</style>
<template>
  <div>
    <HeaderBar
      :leftOptions="leftOptions"
      v-on:leftClickHandel="leftClickHandel"
      :title="title"
    />
    <div class="addModal">
      <div class="average">
        <div>总体评分</div>
        <My-Progress :rate="averageScore"></My-Progress>
      </div>
      <div>
        <div>自定义纬度（最少三个）</div>
        <div>
          <mt-button type="primary" @click.native="addModel">新增</mt-button>
        </div>
      </div>
      <template v-for="item in modelInfoList">
        <div class="detail">
          <div>{{item.name}}({{item.rate}})</div>
          <My-Progress :rate="item.score"></My-Progress>
        </div>
      </template>
      <div class="btnGroup">
        <mt-button type="primary" class="longBtn" @click.native="nextStep">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import MyProgress from '@/components/common/myProgress.vue'

  export default {
    name: "addModal",
    components: {
      HeaderBar,
      MyProgress
    },
    data() {
      return {
        leftOptions: {
          hasLeftBtn: true,
          leftBtnText: "返回"
        },
        title: this.$route.meta.title,
        modelInfoList: [],
        modalVisible:false,
      }
    },
    created() {
      this.queryEvaluteInfo()
    },
    computed: {
      averageScore() {
        return this.modelInfoList.reduce((total, item, index) => {
          return total + item.score * item.rateValue
        }, 0).toFixed(1)

      }
    },
    methods: {
      leftClickHandel() {
        this.$router.go(-1)
      },

      addModel() {

      },

      okhandle() {

      },

      nextStep() {
        this.$router.push()
      }
    }
  }
</script>
