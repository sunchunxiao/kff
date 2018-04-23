<style lang="less">
  .flexLayout {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .rateInfo {
    padding: 10px 20px;
    .mt-progress {
      width: 200px;
    }
    .img {
      width: 80px;
    }
    .tagLabel {
      padding: 7px 14px;
      height: 20px;
      border-radius: 14px;
      border: 1px solid #ddd;
      margin: 5px;
    }
    .tagList {
      border-bottom: 1px solid #DDD;
    }
  }
  .commentInfo {
    padding: 20px 0;
    .commentList {
      justify-content: space-between;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px dotted #ddd;
      .commentLayout {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
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
    <div class="rateInfo">
      <div class="baseInfo">
        <div class="flexLayout">
          <img class="img" :src="rateInfo.imageUrl" alt="">
        </div>
        <div class="flexLayout">
          <span>{{rateInfo.name}}</span>
        </div>
        <div class="flexLayout">
          <span>{{rateInfo.rate / 100}}</span><span>分</span>
        </div>
        <div class="flexLayout">
          <mt-progress :value="rateInfo.rate" :bar-height="5">
            <div slot="end" style="margin-left: 5px">{{rateInfo.joinNum}}参与</div>
          </mt-progress>
        </div>
        <template v-for="(value,key) in rateInfo.scoreMap">
          <div v-if="value != 0" class="flexLayout" :key="key">
            <div style="margin-right: 10px">{{rateLabel[key]}}</div>
            <mt-progress :value="value" :bar-height="5">
              <span slot="end" style="margin-left: 20px">{{value}}%</span>
            </mt-progress>
          </div>
        </template>
        <div class="flexLayout tagList">
          <template v-for="(item,index) in rateInfo.tagList">
            <div class="tagLabel" :key="index">{{item}}</div>
          </template>
        </div>
      </div>
      <div class="commentInfo">
        <div>短评</div>
        <template v-for="(item,index) in rateInfo.commentList">
          <div :key="index" class="flexLayout commentList">
            <div>
              <img :src="item.imageUrl" alt="">
            </div>
            <div>
              <div class="commentLayout">
                <div>
                  <div>{{item.name}}</div>
                  <div>{{item.rate / 10}}</div>
                </div>
                <div>
                  <img src="" alt="zan"/>
                  <span>{{item.zanNum}}</span>
                </div>
              </div>
              <div>{{item.comment}}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import {PROJECT_RATE_LABEL as rateLabel} from '@/utils/constant.js'

  export default {
    name: "projectRate",
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
        rateLabel,
        rateInfo: {}
      }
    },
    created() {
      this.queryRateInfo()
    },
    methods: {
      leftClickHandel() {
        this.$router.go(-1)
      },
      queryRateInfo() {
        //接口
        this.rateInfo = {
          id: 1,
          name: 'BTC (比特币)',
          imageUrl: require("../../assets/image/logo.png"),
          rate: 86,
          joinNum: 421,
          scoreMap: {
            one: 3,
            two: 0,
            three: 8,
            four: 0,
            five: 10,
            six: 0,
            seven: 40,
            eight: 0,
            nine: 39
          },
          tagList: ['非常棒', '技术牛', '应用前景好', '赞', '握握手', '可以的'],
          commentList: [{
            imageUrl: require("../../assets/image/rose.png"),
            name: 'Bazaar',
            rate: 82,
            zanNum: 100,
            comment: '这个项目相当牛逼了，我相信涨到200。'
          }, {
            imageUrl: require("../../assets/image/rose.png"),
            name: 'Bazaar',
            rate: 82,
            zanNum: 100,
            comment: '这个项目相当牛逼了，我相信涨到200。'
          }
          ]
        }
      }
    }
  }
</script>
