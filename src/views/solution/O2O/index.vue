<template>
  <div class="wrapper">
    <div class="container">
      <div class="unit">
        <div class="title">一站式解决方案</div>
        <div class="features">
          <ul>
            <li>
              <div><span class="iconfont icon-beijing"></span></div>
              <div class="stitle">行业背景</div>
              <p class="desc">随着餐饮行业的高速发展，许多餐饮的管理更趋于信息化，同时消费者对于就餐形式的需求更是趋于多样化</p>
            </li>
            <li>
              <div><span class="iconfont icon-jingzhunsousuo"></span></div>
              <div class="stitle">模式定位</div>
              <p class="desc">用户通过餐饮机构的外卖系统和店内订餐系统进行点菜、店家通过引进点餐管理系统满足信息化管理需求</p>
            </li>
            <li>
              <div><span class="iconfont icon-jishuzhicheng"></span></div>
              <div class="stitle">技术支撑</div>
              <p class="desc">商城建设、扫码管理、多终端应用、线上支付、小程序应用、无线打印、配送管理、自动调度等</p>
            </li>
            <li>
              <div><span class="iconfont icon-yingyong"></span></div>
              <div class="stitle">行业应用</div>
              <p class="desc">餐饮实体店、外卖订餐系统、政府机关食堂、公司食堂，网红餐厅等互联网应用餐饮行业</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="unit">
        <div class="title">餐饮行业O2O解决方案模式图</div>
        <div class="solution-img">
          <img src="../../../assets/images/solution-o2o.png">
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
            color: #0CC7F3;
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
          color: #0CC7F3;
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