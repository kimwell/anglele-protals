<template>
  <div class="features clearfix">
    <div class="item" v-for="(item,index) in list" :key="index">
      <div><span class="iconfont" :class="item.icon"></span></div>
      <div class="title">{{item.title}}</div>
      <div class="desc">{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array
      }
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang='less' scoped>
  .features {
    .item {
      float: left;
      width: 33.33333%;
      margin-bottom: 1.69492%;
      text-align: center;
      padding: 18px 20px 22px;
      .iconfont {
        font-size: 38px;
        color: #29FFC6;
      }
      .title {
        font-size: 18px;
        margin: 8px 0;
        color: #333;
      }
      .desc {
        font-size: 14px;
        color: #97a1ab;
        text-align: center;
        height: 72px;
      }
      img {
        height: 31px;
      }
    }
  }
</style>