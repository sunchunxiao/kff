<style lang="less">
  .projectItem {
    padding: 10px 20px;
    /*border-top: 1px solid;*/
    border-bottom: 1px solid;
    margin-bottom: 8px;
    .action {
      justify-content: flex-start !important;
      align-items: center;
      margin-bottom: 5px;
      border-bottom: 1px solid #DDD;
    }
    .row {
      display: flex;
      justify-content: space-between;
    }
    .row1 {
      align-items: center;
      margin-bottom: 10px;
    }
    .row2 {
      margin-bottom: 5px;
      .mt-range {
        height: 20px;
      }
      .mt-range-thumb {
        width: 20px;
        height: 20px;
      }
    }
    .row3 {
      margin-bottom: 5px;
      .content {
        flex: 7;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
      .image {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    .row4 {
      border-bottom: 1px solid;
      padding-bottom: 5px;
      margin-bottom: 5px;
      .testerInfo {
        display: flex;
        align-items: center;
      }
    }
    .row5 {
      justify-content: flex-start;
      .detail {
        display: flex;
        align-items: center;
      }
      .zan {
        margin-right: 20px;
      }
    }
  }

</style>
<template>
  <div>
    <template v-for="(item,index) in itemList">
      <div class="projectItem" :key="index">
        <div class="row action" v-if="isActionTop">
          <img slot="icon" :src="item.operatorImg"/>
          <span v-if="item.action=='zan'">{{item.operator}}赞同了评测</span>
          <span v-if="item.action=='test'">{{item.operator}}评论了文章</span>
        </div>
        <div class="row row1">
          <div class="photo">
            <img slot="icon" :src="item.itemImg" @click="gotoProjectHome(item.id)">
          </div>
          <div class="name">
            <div class="projectName">{{item.itemName}}</div>
            <div class="time">{{item.time}}</div>
          </div>
          <div class="btn">
            <mt-button @click="addAttention(item,index)" :type="item.isAttention ? 'default' : 'primary'">{{item.isAttention ? "已关注" : "+ 关注"}} </mt-button>
          </div>
        </div>
        <div class="row row2">
          <div class="test">{{item.testName}}</div>
          <My-Progress :rate="item.rate"></My-Progress>
        </div>
        <div class="row row3">
          <div class="content">
            {{item.descrption}}
          </div>
          <div class="image">
            <img :src="item.descrImg">
          </div>
        </div>
        <div class="row4" v-if="!isActionTop">
          <div class="testerInfo">
            <img :src="item.testerImg">
            <span style="margin-right: 20px" v-if="item.action=='zan'">{{item.tester}}赞同了评测</span>
            <span style="margin-right: 20px" v-if="item.action=='test'">{{item.tester}}评论了文章</span>
          </div>
        </div>
        <div class="row row5">
          <div class="detail zan">
            <img src="../../assets/image/rose.png">
            <label>{{ item.zanNum}}</label>
          </div>
          <div class="detail">
            <img src="../../assets/image/rose.png">
            <label>{{ item.commentNum}}</label>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
  import MyProgress from '@/components/common/myProgress.vue'

  export default {
    name: "projectItem",
    components: {
      MyProgress
    },
    data() {
      return {
        value: 5
      }
    },
    props: {
      'itemList': {
        type: Array,
        default: function () {
          return []
        }
      },
      "isActionTop": {
        type: Boolean,
        default: function () {
          return true
        }
      }
    },
    methods: {
      addAttention(item, index) {
        this.$emit('addAttention', item, index)
      },

      gotoProjectHome(id) {
        this.$router.push({
          path: "/project/home",
          query: {
            id,
          }
        })
      }
    }
  }
</script>
