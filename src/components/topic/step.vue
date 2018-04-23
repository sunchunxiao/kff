<style lang="less">
  .circleStep {
    position: relative;
    margin: 0 40px;
    .step {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .stepItem {
        list-style-type: none;
        text-align: center;
        width: 20px;
        height: 20px;
        line-height: 20px;
        border-radius: 10px;
        background-color: #ccc;
      }
      .active {
        background-color: #FF6A0F;
        color: #FFF;
      }
    }
    .line {
      position: absolute;
      background-color: #ccc;
      height: 1px;
      top: 10px;
      width: 100%;
      z-index: -1;
    }
  }

</style>
<template>
  <div class="circleStep">
    <ul class="step">
      <li class="stepItem" v-bind:class="{ active: current===1}">
        <span>1</span>
      </li>
      <li class="stepItem" v-bind:class="{ active: current===2}">
        <span>2</span>
      </li>
      <li class="stepItem" v-bind:class="{ active: current===3}">
        <span>3</span>
      </li>
    </ul>
    <div class="line"></div>
  </div>

</template>
<script>
  export default {
    name: 'step',
    props: ['current']
  }
</script>
