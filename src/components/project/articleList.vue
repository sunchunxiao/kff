<style lang="less">
  .articleList {
    margin-top: 20px;
    padding: 0 20px;
  }
</style>
<template>
  <div>
    <div class="articleList">
      <div>共{{total}}条</div>
      <Article-Item :itemList="artiList" $click="link"></Article-Item>
    </div>
  </div>
</template>

<script>
  import ArticleItem from '@/components/common/articleItem.vue'

  export default {
    name: "articleList",  //文章
    components: {
      ArticleItem
    },
    props: ['id'],
    data() {
      return {
        artiList: [], //文章列表
        total:0
      }
    },
    created() {
      this.queryList(this.id)
    },
    methods: {
      link(){
        this.$router.push({
          path: "/project/articleInfo",
          // query: {
          //   id,
          // }
        })
      },
      queryList() {
        /*接口*/
        this.total=1000,
        this.artiList = [{
          id: 1,
          itemImg: require("../../assets/image/rose.png"),
          itemName: "EOS",
          articleItem: "EOS，来自未来的区块链操作系统！！",
          descrption: "以太坊系统自身带有一种叫做以太币（Ether）的数字货币。以太币和著名的数字货币比特币（Bitcoin）...",
          descrImg: require("../../assets/image/logo.png"),
          zanNum: 200,
          commentNum: 50,
        }]
      },
    }
  }
</script>
