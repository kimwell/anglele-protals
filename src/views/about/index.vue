<template>
  <div class="wrapper">
    <div class="container">
      <div class="unit">
        <div class="title">关于我们</div>
        <p class="introduce">苏州安基利尔数据科技有限公司（anglele），是一个富有创新意识的张家港本土互联网科技公司。公司技术开发人员曾长期供职于一二线城市的互联网企业，并且拥有丰富的大数据，高并发，分布式软件产品开发经验。主要产品包括，B2B大宗商品供应链平台，B2C电子商务平台、企业ERP、医疗健康管理、电子政务、仓储SASS等多终端产品。未来公司会在IOT数据平台投入资源进行研发,通过大数据平台整合智能硬件设备，提供包括智能家居，智能工业等领域的安全，完善，可靠的产品解决方案。</p>
      </div>
      <div class="unit">
        <div class="title">我们的文化</div>
        <div class="culture clearfix">
          <div class="item">
            <div class="icon"><span class="iconfont icon-shiming"></span></div>
            <div class="stitle">我们的使命</div>
            <div class="content">与生活进行智能对话</div>
          </div>
          <div class="item">
            <div class="icon"><span class="iconfont icon-jiazhiguan"></span></div>
            <div class="stitle">我们的价值观</div>
            <div class="content">求真、务实、服务、奉献</div>
          </div>
          <div class="item">
            <div class="icon"><span class="iconfont icon-fuwulinian"></span></div>
            <div class="stitle">我们的理念</div>
            <div class="content">用户至上、智慧服务</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="unit">
          <div class="title">我们的环境</div>
        </div>
      </div>
    </div>
    <div class="environment"></div>
    <div class="container">
      <div class="unit">
        <div class="title">联系我们</div>
        <div class="concant">
          <ul class="clearfix">
            <li>
              <div><span class="iconfont icon-QQ1"></span></div>
              <div class="stitle">腾讯QQ</div>
              <div class="content">511653089</div>
            </li>
            <li>
              <div><span class="iconfont icon-youxiang"></span></div>
              <div class="stitle">企业邮箱</div>
              <div class="content">Anglele@qq.com</div>
            </li>
            <li>
              <div><span class="iconfont icon-dizhi1"></span></div>
              <div class="stitle">公司地址</div>
              <div class="content">苏州市张家港市杨舍镇旺西路华东大厦4F</div>
            </li>
            <li>
              <div><span class="iconfont icon-dianhua1"></span></div>
              <div class="stitle">咨询电话</div>
              <div class="content">0512-58588922</div>
            </li>
          </ul>
        </div>
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
      .title {
        font-size: 34px;
        text-align: center;
        margin-bottom: 40px;
        letter-spacing: 9px;
      }
      .introduce{
        line-height: 30px;
      }
    }
    .culture {
      .item {
        float: left;
        width: 33.33333%;
        text-align: center;
        .iconfont {
          font-size: 40px;
          color: #1DA3F7;
        }
        .stitle {
          color: #333;
          font-size: 18px;
          margin-bottom: 10px;
        }
        .content {
          color: #666;
          font-size: 14px;
        }
      }
    }
    .concant {
      ul {
        li {
          float: left;
          width: 25%;
          list-style: none;
          text-align: center;
          .iconfont {
            font-size: 40px;
            color: #1DA3F7;
          }
          .stitle {
            color: #333;
            font-size: 18px;
            margin-bottom: 10px;
          }
          .content {
            color: #666;
            font-size: 14px;
          }
        }
      }
    }
  }
  .environment{
    margin-top: -20px;
    height: 960px;
    background: top center url('https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/environment.png') no-repeat;
  }
</style>