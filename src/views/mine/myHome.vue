<template>
  <div>
    <HeaderBar
      :title="title"
    />
    <Project-Item :itemList="itemList"  :isActionTop='false'  v-on:addAttention="addAttention"></Project-Item>
  </div>
</template>

<style>

</style>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import ProjectItem from '@/components/common/projectItem.vue'

  export default {
    name: 'myhome',
    components: {
      HeaderBar,
      ProjectItem,
    },
    data() {
      return {
        title: this.$route.meta.title,
        itemList: [],
      }
    },

    created() {
      // queryItemList();
      //接口
      this.itemList = [{
        id: 1,
        action: "zan",
        itemImg: require("../../assets/image/rose.png"),
        itemName: "柚子（EOS）",
        time: '2018-04-07',
        isAttention: true,
        testName: "ALL-整体评测",
        rate: 85,
        descrption: "以太坊系统自身带有一种叫做以太币（Ether）的数字货币。以太币和著名的数字货币比特币（Bitcoin）...",
        descrImg: require("../../assets/image/logo.png"),
        testerImg: require("../../assets/image/rose.png"),
        tester: "老猫",
        zanNum: 200,
        commentNum: 50,
      }, {
        id: 1,
        action: "test",
        itemImg: require("../../assets/image/rose.png"),
        itemName: "柚子（EOS）1111",
        time: '2018-05-07',
        isAttention: false,
        testName: "ALL-整体评测",
        rate: 65,
        descrption: "区块链投资人、创业者",
        descrImg: require("../../assets/image/logo.png"),
        testerImg: require("../../assets/image/rose.png"),
        tester: "老猫11",
        zanNum: 300,
        commentNum: 80,
      }]
    },

    methods: {
      addAttention(item, index) {
        let {id} = item
        //接口
        this.itemList[index].isAttention =  !this.itemList[index].isAttention
      }
    }
  }
</script>
