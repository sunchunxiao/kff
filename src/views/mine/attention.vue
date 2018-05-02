<template>
  <div>
    <!--<HeaderBar-->
      <!--:leftOptions="leftOptions"-->
      <!--v-on:leftClickHandel="leftClickHandel"-->
      <!--:title="title"-->
    <!--/>-->
    <mt-navbar v-model="selected">
      <!--<img src="../../assets/mine/zhufan.png" alt="">-->
      <mt-tab-item id="item">话题</mt-tab-item>
      <mt-tab-item id="user">用户</mt-tab-item>
    </mt-navbar>
    <!--组件切换时保存在内存缓存中-->
    <keep-alive>
      <component v-bind:is="selected" :userList="userList" :itemList="itemList" />
    </keep-alive>
  </div>
</template>

<style lang="less" scoped>
  .mint-navbar{
    width: 26%;
    margin: 0 auto;
    color:#aeaeae;
  }
  .mint-navbar .mint-tab-item.is-selected{
    margin-bottom: 0;
  }
  .mint-tab-item-label{
    font-size:17px;
    /*color:#aeaeae;*/
    letter-spacing:0;
  }
</style>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import ItemList from '@/components/attention/itemList.vue'
  import UserList from '@/components/attention/userList.vue'

  export default {
    name: 'attention',
    components: {
      HeaderBar,
      item: ItemList,
      user: UserList
    },
    data() {
      return {
        leftOptions: {
          hasLeftBtn: true,
          leftBtnText: "返回"
        },
        title: this.$route.meta.title,
        selected: "item",
        itemList: [],
        userList: []
      }
    },

    created() {
      // queryItemList();
      // queryUserList();
      //接口
      this.userList = [{
        id: 1,
        name: "Bouny1",
        descrption: "区块链投资人、创业者",
        isAttention: true
      }, {
        id: 2,
        name: "Bouny2",
        descrption: "区块链投资人、创业者",
        isAttention: true
      }, {
        id: 3,
        name: "Bouny3",
        descrption: "区块链投资人、创业者",
        isAttention: true
      }
      ]

      this.itemList = [{
        id: 1,
        name: "Bouny1",
        descrption: "区块链投资人、创业者",
        point: 7.8
      }, {
        id: 2,
        name: "Bouny2",
        descrption: "区块链投资人、创业者",
        point: 7.8
      }, {
        id: 3,
        name: "Bouny3",
        descrption: "区块链投资人、创业者",
        point: 7.8
      }
      ]
    },

    methods: {
      leftClickHandel() {
        this.$router.push('/main/mine')
      },
    }
  }
</script>
