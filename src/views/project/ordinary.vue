<style lang="less">
  .ordinary {
    margin-top: 20px;
    padding: 0 20px;
    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 60px;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      .range {
        width: 200px;
      }
      .rangeValue {
        font-size: 30px;
        font-weight: 600;
        margin: 20px 0 10px;
      }
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
    <div class="ordinary">
      <div class="title">
        <div>普通测评</div>
        <div>
          <router-link :to="{path: '/project/authority', query: {id}}">切换至专业测评</router-link>
        </div>
      </div>
      <div class="content">
        <div>我的评分</div>
        <div class='rangeValue'>{{rangeValue / 10}}</div>
        <mt-range class="range"
                  v-model="rangeValue"
                  :min="0"
                  :max="100"
                  :step="1"
                  :bar-height="5">
        </mt-range>
        <div>{{rangeText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import {PROJECT_ORDINARY_RANGETEXT as rangeList} from '@/utils/constant.js'

  export default {
    name: "projectOrdinary",    //普通测评
    components: {
      HeaderBar
    },
    data() {
      return {
        leftOptions: {
          hasLeftBtn: true,
          leftBtnText: "返回"
        },
        title: this.$route.meta.title,
        rangeList,
        id: "",
        rangeValue: 0,
        rangeText: "",
      }
    },
    created() {
      this.id = this.$route.query.id
    },
    watch: {
      rangeValue: function (v) {
        let arr = this.rangeList.filter((item, index) => {
          return v > item.min && v <= item.max
        })

        this.rangeText = arr[0].text
      }
    },
    methods: {
      leftClickHandel() {
        this.$router.go(-1)
      },
    }
  }
</script>
