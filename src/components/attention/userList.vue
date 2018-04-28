<template>
  <div>
    <mt-cell-swipe :title="item.name" :label="item.descrption" v-for="(item,index) in userList"
                   value="已关注"
                   :key="index"
                   :right="[
                          {
                            content: '取消关注',
                            style: { background: 'red', color: '#fff' },
                            handler:()=>cancelAttion(item)
                          }
                       ]"/>
  </div>
</template>
<script>
  export default {
    props: ['userList'],
    methods: {
      cancelAttion(item, index) {
        let id = item.id;
        //接口 -- 取消关注
        console.log(id);
        this.userList.splice(index, 1)
      }
    }
  }
</script>
