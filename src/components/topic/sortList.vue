<style src="./common.css" lang="less"></style>

<template>
  <div>
    <template v-for="(item,index) in sortList ">
      <div :key="index" class="item">
        <div class="index">
          <span>{{index}}</span>
        </div>
        <img class="img" :src="item.imageUrl"/>
        <div class="message">
          <div>{{item.name}}</div>
          <My-Progress :rate="item.rate"></My-Progress>
        </div>
        <div class="btn">

          <mt-button @click="addAttention(item,index)" :type="item.isAttention ? 'default' : 'primary'">{{item.isAttention ? "已关注" : "+ 关注"}} </mt-button>

        </div>
      </div>
    </template>
  </div>
</template>

<script>

  import MyProgress from '@/components/common/myProgress.vue'
  export default {
    name: "sort",
    components: {
      MyProgress

    },
    props: ['sortList'],
    methods: {
      addAttention(item, index) {
        this.$emit("attentionHandel", 'sort', item, index)
      }
    }
  }

</script>
