<template>
  <div class="wrapper">
    <div class="container">
      <div class="unit">
        <div class="title">IoT数据平台</div>
        <div class="unit_desc">Iot数据平台是一套集云计算，终端和云端双向通信、设备管理以及数据分析等功能，运用先进的阿里云物联网套件，以智能化服务于用户为导向的物联网软件平台。</div>
        <div class="unit_img">
          <img style="margin-top: 110px;" src="https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/IoT-img0.png">
        </div>
      </div>
      <div class="unit">
        <div class="title">多应用场景</div>
        <div class="unit_img">
          <div class="unit_img_desc">GIS场景功能</div>
          <img src="https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/IoT-img1.png">
        </div><div class="unit_img">
          <div class="unit_img_desc">体征传感器场景</div>
          <img src="https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/IoT-img2.png">
          <img src="https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/IoT-img3.png">
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
      padding: 54px 35px 0;
      .title {
        font-size: 34px;
        text-align: center;
        margin-bottom: 40px;
        letter-spacing: 9px;
      }
      .unit_desc {
        text-align: center;
      }
      .unit_img{
        text-align: center;
        .unit_img_desc{
          margin: 110px 0 60px 0;
          font-size: 24px;
          color: #333;
        }
        img{
          margin-bottom: 58px;
        }
      }
    }
  }
</style>