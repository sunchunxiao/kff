<style src="./common.css" lang="less">

</style>
<template>
  <div>
    <template v-for="(item,index) in rankList ">
      <div :key="index" class="item">
        <div class="index">
          <span>{{index}}</span>
        </div>
        <img class="img" :src="item.imageUrl"/>
        <div class="message">
          <div>{{item.name}}</div>
          <div>{{item.number}}关注</div>
        </div>
        <div class="btn">
          <mt-button @click="addAttention(item,index)" :type="item.isAttention ? 'default' : 'primary'">{{item.isAttention ? "已关注" : "+ 关注"}} </mt-button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import './common.css';
  export default {
    name: "rank",
    props: ['rankList'],
    methods: {
      addAttention(item, index) {
        this.$emit("attentionHandel", 'rank', item, index)
      }
    }
  }
</script>
