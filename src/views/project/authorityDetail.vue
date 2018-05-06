<style lang="less">
  .authorityDetail {
    padding: 20px 10px;
    .rangeInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .range {
        width: 200px;
      }
      .rangeValue {
        font-size: 18px;
        font-weight: 600;
        margin-left: 20px;
      }
    }
  }

</style>
<template>
  <div>
    <HeaderBar
      :rightOptions="rightOptions"
      v-on:rightClickHandel="rightClickHandel"
      :title="title"
    />
    <div class="authorityDetail">
      <h1>{{origin}}</h1>
      <div>说明：主要从竞争对手、市场前景、可行性等各方面进行评测</div>
      <div class='rangeInfo'>
        <label>评分</label>
        <mt-range class="range"
                  v-model="rangeValue"
                  :min="0"
                  :max="100"
                  :step="1"
                  :bar-height="5">
          <div slot="end" class="rangeValue">{{rangeValue / 10}}</div>
        </mt-range>
        <span>{{rangeText}}</span>
      </div>
      <div class="message">
        <mt-field placeholder="写几句评价" type="textarea" rows="4" v-model="message"></mt-field>
      </div>

    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import {PROJECT_ORDINARY_RANGETEXT as rangeList} from '@/utils/constant.js'

  export default {
    name: "authorityDetail",
    components: {
      HeaderBar
    },
    data() {
      return {
        rightOptions: {
          hasRightBtn: true,
          rightBtnText: "发布"
        },
        title: this.$route.meta.title,
        origin: "",
        rangeList,
        rangeValue: 0,
        rate: "",
        message: "111",
      }
    },
    created() {
      this.origin = this.$route.query.origin
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
      rightClickHandel() {
        let {rate, message, origin} = this
        let params = {
          rate, message, origin
        }

        /*接口*/
        this.$router.push({
          path: '/project/authority',
        })
      }
    }
  }
</script>
