<style lang="less">
  .ordinary {
    margin-top: 20px;
    padding: 0 20px;
    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 60px;
    }
    .rangeInfo {
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
    .message {
      margin: 50px 0 30px;
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
      <div class="rangeInfo">
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
      <div class="message">
        <mt-field placeholder="写几句评价" type="textarea" rows="4" v-model="message"></mt-field>
      </div>
      <mt-button type="primary" class="longBtn" @click.native="submit">发布</mt-button>
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
        message: "",
      }
    },
    created() {
      this.id = this.$route.query.id
    },
    computed: {
      rangeText() {
        let rangeValue = this.rangeValue;
        let arr = this.rangeList.filter((item, index) => {
          return rangeValue >= item.min && rangeValue <= item.max
        })

        return arr[0].text
      }
    },
    methods: {
      leftClickHandel() {
        this.$router.go(-1)
      },
      submit() {
        /*接口*/
        let {rangeValue, message} = this
        let parmas = {
          rangeValue, message
        }
      }
    }
  }
</script>
