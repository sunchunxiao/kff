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
</style>

<template>
  <div>
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
  import myProgress from '@/components/common/myProgress.vue'

  export default {
    name: "homeRanklist",
    components: {
      myProgress
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
