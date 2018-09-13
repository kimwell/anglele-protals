<template>
  <div class="wrapper">
    <div class="container">
      <div class="unit">
        <partsItem :list="listData"></partsItem>
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
  import partsItem from './parts/partsItem'
  import solutionItem from './parts/solutionItem'
  export default {
    components: {
      partsItem,
      solutionItem
    },
    data() {
      return {
        listData: [{
          icon: 'icon-tudi',
          title: '农场土地管理',
          desc: '通过租赁的方式，让用户拥有专属的土地，并管理土地上的农作物'
        }, {
          icon: 'icon-jiance',
          title: '智能监测',
          desc: '基于GIS实现对温度、湿度、气压、光照、风速、土壤水分饱和度等参数的数据收集'
        }, {
          icon: 'icon-zhibo',
          title: '视频直播',
          desc: '用户通过移动端和专属土地区域进行现场连线，让用户能实时查看土地情况及语音交流'
        }, {
          icon: 'icon-huiyuan',
          title: '会员管理',
          desc: '对会员的基本信息，以及会员充值、会员积分、会员使用农作物种子情况等功能进行管理'
        }, {
          icon: 'icon-fahuo',
          title: '配送管理',
          desc: '通过和第三方物流合作，让用户自主选择物流公司，寄出他们土地上的农作物'
        }, {
          icon: 'icon-zhishiku',
          title: '农技知识库',
          desc: '平台建立农业技术知识库，为土地管理、农作物生长等提供合理化建议'
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
            color: #29FFC6;
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
          color: #29FFC6;
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