<template>
  <div>

    <div class="already">
      <div class="already-follow">
        <img src="../../assets/image/rose.png" alt="">
        <div class="cat">
          <span class="oldcat">老猫</span>
          <span class="follow-this">关注了这个项目</span>
        </div>
      </div>
    </div>
    <!--<Project-Item :itemList="attentionList" :isActionTop='true' v-on:addAttention="addAttention"></Project-Item>-->
  </div>
</template>

<script>
  import ProjectItem from '@/components/common/projectItem.vue'

  export default {
    name: "homeAttention",
    props: ['attentionList'],
    components: {
      ProjectItem
    },
    data() {
      return {}
    },
    created() {
    },
    methods: {
      addAttention(item, index) {
        console.log("推荐 - 关注 ");
        this.$emit("attentionHandel", 'attention', item, index)
      }
    }
  };
</script>
