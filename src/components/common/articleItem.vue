<style lang="less">
  .artiList {
    padding: 10px 20px;
    /*border-top: 1px solid;*/
    border-bottom: 1px solid;
    margin-bottom: 8px;
    overflow: hidden;
    .action {
      justify-content: flex-start !important;
      align-items: center;
      margin-bottom: 5px;
      border-bottom: 1px solid #DDD;
    }
    .row {
      display: flex;
      justify-content: space-between;
      .btn {
        border: 1px solid #3b88f6;
        border-radius: 2px;
        width: 43px;
        height: 20px;
        position: absolute;
        right: 5%;
        .mint-button-text {
          font-size: 12px;
        }
      }
      .name {
        position: absolute;
        left: 20%;
      }
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
        color: #7e7d7e;
        line-height: 20px;
        flex: 7;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }

    }
    .row4 {
      border-bottom: 1px solid #ddd;
      padding-bottom: 5px;
      margin-bottom: 5px;
      .testerInfo {
        display: flex;
        align-items: center;
      }
    }
    .row5 {
      float: right;
      justify-content: flex-start;
      .detail {
        display: flex;
        align-items: center;
        img {
          width: 1.5rem;
          height: 1.5rem;
          padding-right: 20%;
        }
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
      <div class="artiList" :key="index">
        <div class="row row1">
          <div class="photo">
            <img slot="icon" :src="item.itemImg" @click="gotoProjectHome(item.id)">
          </div>
          <div class="name">
            <div class="projectName">{{item.itemName}}</div>
          </div>
        </div>
        <div class="row row2">
          <div class="articleItem">{{item.articleItem}}</div>
        </div>
        <div class="row row3">
          <div class="content">
            {{item.descrption}}
          </div>
        </div>
        <div class="image row row4">
          <img :src="item.descrImg">
        </div>
        <div class="row row5">
          <div class="detail zan">
            <img @click="zan(index)" src="../../assets/index/zan.png">
            <label>{{ item.zanNum}}</label>
          </div>
          <div class="detail">
            <img src="../../assets/index/review.png">
            <label>{{ item.commentNum}}</label>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>

  export default {
    name: "articleItem",
    components: {
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
    },
    methods: {
      //点赞
      zan(index) {
        /*接口*/
        this.itemList[index].zanNum += 1;
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
