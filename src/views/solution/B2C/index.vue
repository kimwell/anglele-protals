<template>
  <div class="wrapper">
    <div class="container">
      <div class="unit">
        <div class="title">一站式解决方案</div>
        <div class="features three features-cell">
          <ul>
            <li>
              <div><span class="iconfont icon-jiagong"></span></div>
              <div class="stitle">商城建设</div>
              <p class="desc">根据用户需求梳理业务需求，提出可行性方案，快速搭建商城模型</p>
            </li>
            <li>
              <div><span class="iconfont icon-zhihuiwuliu2"></span></div>
              <div class="stitle">会员体系</div>
              <p class="desc">会员建档，跟踪服务，极致体验，会员之家，会员分销体系等</p>
            </li>
            <li>
              <div><span class="iconfont icon-zhihuicangchu2"></span></div>
              <div class="stitle">线上线下支付</div>
              <p class="desc">支持支付宝、微信、银联等主流线上支付业务以及拥有完备的线下支付流程体系</p>
            </li>
          </ul>
        </div>
        <div class="features">
          <ul>
            <li>
              <div><span class="iconfont icon-jiagong"></span></div>
              <div class="stitle">订单统计</div>
              <p class="desc">记录订单流转状态，物流运输状态，客户评价等，并对订单进行分类管理</p>
            </li>
            <li>
              <div><span class="iconfont icon-zhihuiwuliu2"></span></div>
              <div class="stitle">数据分析</div>
              <p class="desc">对搜集的数据进行深度挖掘和多维度分析，为管理者提供决策支持</p>
            </li>
            <li>
              <div><span class="iconfont icon-zhihuicangchu2"></span></div>
              <div class="stitle">运营支持</div>
              <p class="desc">提供商城活动以及宣传策划方案，使用微博、公众号、微信等新媒体运营工具进行吸粉引流</p>
            </li>
            <li>
              <div><span class="iconfont icon-dianzi_ht"></span></div>
              <div class="stitle">其他服务</div>
              <p class="desc">根据用户不同阶段需求，进行定制化开发，随时接入用户想要的功能模块</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="unit">
        <div class="title">我们的优势</div>
        <solutionItem></solutionItem>
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
  import solutionItem from './parts/solutionItem'
  export default {
    components: {
      solutionItem
    },
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
            color: #FE7223;
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
          color: #FE7223;
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