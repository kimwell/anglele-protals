<template>
  <div class="wrapper">
    <div class="container">
      <div class="unit">
        <partsItem :list="listData"></partsItem>
      </div>
      <div class="unit">
        <div class="title">一站式仓储管理解决方案</div>
        <div class="sass-img">
          <img src="../../../assets/images/sass-img.png">
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
  import partsItem from './parts/partsItem'
  export default {
    components: {
      partsItem
    },
    data() {
      return {
        listData: [{
          icon: 'icon-canshushezhi',
          title: '加工管理',
          desc: '客户通过平台发布加工需求，由平台进行安排加工厂，加工监管，加工后运输等一体化服务管理。'
        }, {
          icon: 'icon-kucunguanli',
          title: '库存管理',
          desc: '平台通过对库存货物的线上线下管理，库存预警，数据分析等，为供应商对自己货物的销量、利润、补货计划等提供可靠讯息。'
        }, {
          icon: 'icon-cargo',
          title: '货品管理',
          desc: '平台建立实体仓库，通过给供应商分配库位，建立货品管控体系。'
        }, {
          icon: 'icon-caiwuguanli',
          title: '财务管理',
          desc: '大宗电商交易金额巨大，平台采用了线上线下相结合的财务管理模式，最大限度满足各方需求。'
        }, {
          icon: 'icon-tongjifenxi',
          title: '统计分析',
          desc: '主要分为货品销售统计、热门销售排行、实时仓库货品统计、客户统计、订单统计等功能模块。'
        }, {
          icon: 'icon-wuliuguanli',
          title: '物流管理',
          desc: '客户通过平台发布物流需求，平台点对点进行调度，并通过联网管理方式，实时查看物流动态。'
        }]
      }
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
      .title {
        font-size: 34px;
        text-align: center;
        margin-bottom: 40px;
        letter-spacing: 9px;
      }
      .unit_desc {
        text-align: center;
      }
    }
    .sass-img {
      text-align: center;
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
            color: #145694;
          }
          .stitle {
            font-size: 18px;
            color: #666;
            margin-bottom: 15px;
          }
          .desc {
            font-size: 12px;
            color: #999;
          }
        }
      }
      &.more {
        .iconfont {
          font-size: 97px;
          color: #145694;
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