<template>
  <div class="features">
    <div class="item">
      <div class="left">
        <img src="../../../../assets/images/b2c-1.png">
      </div>
      <div class="right">
        <div class="title">专属定制</div>
        <div class="desc">独立商城，微信商城，第三方平台等线上线下交易渠道，广泛覆盖人群，与更多消费者全方位接触</div>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <div class="title">安全稳定</div>
        <div class="desc">采用云安全系统机制，应用分布式、云计算以及多种数据库技术优化手段搭建处理高并发、大数据的稳定架构</div>
      </div>
      <div class="right">
        <img src="../../../../assets/images/b2c-2.png">
      </div>
    </div>
    <div class="item">
      <div class="left">
        <img src="../../../../assets/images/b2c-3.png">
      </div>
      <div class="right">
        <div class="title">综合配套</div>
        <div class="desc">商城管理，仓储管理，物流监管，营销多样化，会员管理，金融支持</div>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <div class="title">快速建模</div>
        <div class="desc">独立商城、微信商城、线上线下分销、跨境直购等各类电商平台，都能快速建模，高效投产</div>
      </div>
      <div class="right">
        <img src="../../../../assets/images/b2c-4.png">
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
      margin: 120px 0;
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
        text-align: left;
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