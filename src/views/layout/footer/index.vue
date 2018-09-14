<template>
  <div class="page-footer">
    <div class="container">
      <div class="title">安基利尔数据科技有限公司</div>
      <div class="col left">
        <div class="info"><span class="iconfont icon-dizhi"></span>苏州市张家港市杨舍镇旺西路华东大厦4F</div>
        <div class="info"><span class="iconfont icon-dianhua"></span>0512-58588922</div>
        <div class="info"><span class="iconfont icon-shijian"></span>9:00-18:00(周一至周五)</div>
      </div>
      <div class="col right">
        <p class="col-title">合作伙伴</p>
        <a class="frind-link" v-for="(item,index) in list" :href="item.url" :target="item.openType === '1' ? '_blank':'_self'">
          <img :src="item.src">
        </a>
      </div>
      <div class="col right">
        <div class="qr-info">
          <p class="col-title">微信公众号</p>
          <p class="qr-img">
            <img src="https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/qr-img.png">
          </p>
        </div>
      </div>
      <div>COPYRIFHT © 2017 苏州安基利尔数据科技有限公司 版权所有 苏ICP备1000000号-0</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: []
      }
    },
    methods: {
      getAd(){
        this.$http.post(this.$api.findDoortisement).then(res =>{
          if(res.code === 1000){
            this.list = res.data;
          }
        })
      }
    },
    created(){
      this.getAd();
    }
  }
</script>

<style lang='less' scoped>
  .page-footer {
    background: #2C2C2C;
    color: #fff;
    font-size: 14px;
    .container {
      max-width: 1170px;
      margin-left: auto;
      margin-right: auto;
      padding: 65px 0 63px;
      .title {
        font-size: 18px;
        margin-bottom: 35px;
      }
      .col {
        width: 50%;
        float: left;
        position: relative;
        .col-title{
          margin-bottom: 10px;
        }
        &.right {
          width: 25%;
        }
        .info {
          margin-bottom: 20px;
          .iconfont{
            color: #fff;
            font-size: 15px;
            margin-right: 8px;
            vertical-align: middle;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .frind-link {
        opacity: 0.6;
        display: inline-block;
        height: 40px;
        &:hover {
          opacity: 1;
        }
        img {
          height: 40px;
          display: inline-block;
          margin-right: 8px;
        }
      }
      .qr-info{
        padding-left: 20%;
      }
      .qr-img {
        img {
          width: 100px;
          height: 100px;
          margin-bottom: 5px;
          position: relative;
          vertical-align: baseline;
        }
      }
    }
  }
</style>