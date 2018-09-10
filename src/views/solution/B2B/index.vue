<template>
  <div class="wrapper">
    <div class="container">
      <div class="unit">
        <div class="title">一站式解决方案</div>
        <div class="features three features-cell">
          <ul>
            <li>
              <div><span class="iconfont icon-jiagong"></span></div>
              <div class="stitle">企业信息共享</div>
              <p class="desc">客户企业通过平台实现信息共享互通，有效减少沟通成本，提高企业生产活动效率</p>
            </li>
            <li>
              <div><span class="iconfont icon-zhihuiwuliu2"></span></div>
              <div class="stitle">原材料检测</div>
              <p class="desc">采用信息化手段加强对原材料检测过程的管控，确保原料的真实可靠性</p>
            </li>
            <li>
              <div><span class="iconfont icon-jiagong"></span></div>
              <div class="stitle">原材料加工</div>
              <p class="desc">采取就近仓库加工、节约运输和时间成本的原则，快速完成加工任务</p>
            </li>
          </ul>
        </div>
        <div class="features">
          <ul>
            <li>
              <div><span class="iconfont icon-zhihuicangchu2"></span></div>
              <div class="stitle">智慧仓储</div>
              <p class="desc">以智能应用为支撑，优化整合仓储资源，共创无人管理的智慧仓储时代</p>
            </li>
            <li>
              <div><span class="iconfont icon-zhihuiwuliu2"></span></div>
              <div class="stitle">智慧物流</div>
              <p class="desc">运用智能高新技术整合现有物流网络，打造动态管控的智慧物流时代</p>
            </li>
            <li>
              <div><span class="iconfont icon-dianzi_ht"></span></div>
              <div class="stitle">电子合同</div>
              <p class="desc">通过平台网络直接完成三方电子合同签署，并报公安备案，具有法律效应</p>
            </li>
            <li>
              <div><span class="iconfont icon-zhihuicangchu2"></span></div>
              <div class="stitle">供应链金融</div>
              <p class="desc">平台达到一定规模后，与银行进行合作，为合作企业的可持续经营提供相应的资金扶持</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="unit">
        <div class="title">技术解决方案</div>
        <p class="desc">安全、可靠的为电商行业客户量身定制专属产品和服务</p>
        <div class="solution-img">
          <img src="../../../assets/images/solution-tech.png">
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
            color: #B95FDB;
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
          color: #B95FDB;
        }
      }
      &.three{
        padding: 0 100px;
        ul{
          li{
            width: 33.3333%;
          }
        }
      }
      &.features-cell{
        margin-bottom: 30px;
      }
    }
  }
</style>