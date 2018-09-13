<template>
  <div class="features">
    <div class="item">
      <div class="left">
        <div class="title">新模式运营方案</div>
        <div class="desc">为用户提供不一样的生活体验，使其在娱乐中释放真我，拥抱自然，感受美好的智慧生活</div>
      </div>
      <div class="right">
        <img src="../../../../assets/images/farm-index1.png">
      </div>
    </div>
    <div class="item">
      <div class="left">
        <img src="../../../../assets/images/farm-index2.png">
      </div>
      <div class="right">
        <div class="title">智能信息化管理</div>
        <div class="desc">以高新技术为支撑，智能信息化理念为指导，提升农场管理信息化水平</div>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <div class="title">智能知识体系</div>
        <div class="desc">智能设备数据采集、数据分析、农技知识库、视频直播技术的应用等</div>
      </div>
      <div class="right">
        <img src="../../../../assets/images/farm-index3.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang='less' scoped>
  .features {
    .item {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      padding: 100px 0;
      &:after {
        content: " ";
        display: block;
        clear: both;
      }
      .left {
        width: 47.05882%;
        float: left;
        margin-right: 5.88235%;
        text-align: right;
      }
      .right {
        width: 47.05882%;
        float: right;
        margin-right: 0;
      }
      .title {
        font-size: 28px;
        margin-bottom: 6px;
      }
      .desc {
        display: inline-block;
        font-size: 18px;
        line-height: 26px;
        color: #97a1ab;
        width: 440px;
      }
    }
  }
</style>