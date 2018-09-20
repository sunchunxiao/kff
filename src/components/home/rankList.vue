<style lang="less">
  .homeRanklist {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    .index {
      flex: 1;
      font-size: 30px;
      text-align: center;
    }
    .content {
      flex: 4;
      .row1 {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .row3{
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }

  .rank-title{
    padding: 1rem 0 1rem 2rem;
    border:1px solid #ddd;
    color: #aaa;
    .score{
      float: right;
      padding-right: 15%;
      .score-comment{
        /*padding-right: 5%;*/
      }
    }
  }

</style>

<template>
  <div>

    <div class="ranklist">
      <div class="rank-title">
        <span>排名</span>
        <div class="score">
          <span class="score-comment">评分</span>
          <span>关注数</span>
        </div>
      </div>
    </div>

    <template v-for="(item,index) in rankList">
      <div class="homeRanklist">
        <div class='index'>{{index}}</div>
        <div class="content">
          <div class="row1">
            <div>{{item.name}}</div>
            <div>
              <img src="../../assets/image/rose.png">
              <span>{{item.number}}</span>
            </div>
          </div>
          <div class="row2">{{item.description}}</div>
          <div class="row3">
            <span>总体评分：</span>
            <My-Progress :rate="item.rate"></My-Progress>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import MyProgress from '@/components/common/myProgress.vue'

  export default {
    name: "homeRanklist",
    components: {
      MyProgress
    },
    props: ['rankList'],
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  };
</script>
