<template>
  <div class="wrapper">
    <div class="container">
      <div class="unit">
        <div class="features">
          <ul>
            <li>
              <div><span class="iconfont icon-beijing"></span></div>
              <div class="stitle">智慧养老</div>
              <p class="desc">随着科技进步，新型养老方式日趋流行，智慧养老越来越受居家老人、社区及养老机构的青睐，它以构建实时、快捷、高效、低成本的，物联化、互联化、智能化的养老服务为核心，让老人充分享受物联网带来的便捷和舒适</p>
            </li>
            <li>
              <div><span class="iconfont icon-jingzhunsousuo"></span></div>
              <div class="stitle">智慧医疗</div>
              <p class="desc">采用物联网、云计算、传感技术等高新技术，构建以病患数据为中心的医疗服务模式，整合优化医疗资源</p>
            </li>
            <li>
              <div><span class="iconfont icon-dianzi_ht"></span></div>
              <div class="stitle">智慧健康</div>
              <p class="desc">在人工智能即将兴起的时代，依托自我学习和深度学习的服务型产业，以人体感知数据为中心，全方位提升人们的心理健康和生理健康</p>
            </li>
            <li>
              <div><span class="iconfont icon-yingyong"></span></div>
              <div class="stitle">智慧理念</div>
              <p class="desc">面向未来，我们一直致力于追求以人为中心，提升生命质量为企业理念，致力于推进医疗大健康管理，运用智能技术让医疗大健康产业蓬勃发展</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="unit">
        <div class="title">餐饮行业O2O解决方案模式图</div>
        <div class="solution-img">
          <img src="../../../assets/images/solution-health.png">
        </div>
      </div>
      <div class="unit">
        <div class="title">更多解决方案</div>
        <div class="features more">
          <ul>
            <li>
              <div><span class="iconfont icon-shouji"></span></div>
              <div class="stitle">移动APP</div>
            </li>
            <li>
              <div><span class="iconfont icon-weixinxiaochengxu"></span></div>
              <div class="stitle">小程序</div>
            </li>
            <li>
              <div><span class="iconfont icon-gouwu"></span></div>
              <div class="stitle">电商</div>
            </li>
            <li>
              <div><span class="iconfont icon-cangkupandian"></span></div>
              <div class="stitle">仓储管理</div>
            </li>
          </ul>
        </div>
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
  .container {
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    .unit {
      padding: 54px 35px;
      .desc {
        text-align: center;
      }
      .title {
        font-size: 34px;
        text-align: center;
        margin-bottom: 40px;
        letter-spacing: 9px;
      }
      .solution-img {
        text-align: center;
        margin-top: 87px;
      }
    }
    .features {
      text-align: center;
      ul {
        &::after {
          content: " ";
          display: block;
          clear: both;
        }
        li {
          list-style: none;
          float: left;
          width: 25%;
          padding: 0 15px;
          .iconfont {
            font-size: 38px;
            color: #FF7F7F;
          }
          .stitle {
            font-size: 18px;
            color: #333;
            margin-bottom: 15px;
          }
          .desc {
            font-size: 14px;
            color: #999;
            height: 72px;
          }
        }
      }
      &.more {
        .iconfont {
          font-size: 97px;
          color: #FF7F7F;
        }
      }
      &.three {
        padding: 0 100px;
        ul {
          li {
            width: 33.3333%;
          }
        }
      }
      &.features-cell {
        margin-bottom: 30px;
      }
    }
  }
</style>