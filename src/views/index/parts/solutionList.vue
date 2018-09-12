<template>
  <div class="solution-list">
    <ul>
      <li>
        <div class="cover">
          <img src="../../../assets/images/solution-list2.png">
        </div>
        <div class="title">物联网解决方案</div>
        <div class="desc">感知世界，构建万物互联的美好世界，把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界</div>
        <div class="line left"></div>
        <div class="line right"></div>
      </li>
      <li>
        <div class="cover">
          <img src="../../../assets/images/solution-list2.png">
        </div>
        <div class="title">B2B解决方案</div>
        <div class="desc">七大功能支撑B2B大宗电商交易平台，整合线上线下资源，助力企业转型升级，推动行业健康发展</div>
        <div class="line left"></div>
        <div class="line right"></div>
      </li>
      <li>
        <div class="cover">
          <img src="../../../assets/images/solution-list3.png">
        </div>
        <div class="title">B2C解决方案</div>
        <div class="desc">建设专业的品牌、零售独立官方商城,线上线下完美融合PC，移动等多终端统一管理</div>
        <div class="line left"></div>
        <div class="line right"></div>
      </li>
      <li>
        <div class="cover">
          <img src="../../../assets/images/solution-list4.png">
        </div>
        <div class="title">O2O解决方案</div>
        <div class="desc">订餐系统平台的出现，顺应了时代的发展，改变了用户享受生活的方式，助力餐饮行业的转型升级</div>
        <div class="line left"></div>
        <div class="line right"></div>
      </li>
      <li>
        <div class="cover">
          <img src="../../../assets/images/solution-list5.png">
        </div>
        <div class="title">电子政务解决方案</div>
        <div class="desc">智慧政务，与您共进</div>
        <div class="line left"></div>
        <div class="line right"></div>
      </li>
      <li>
        <div class="cover">
          <img src="../../../assets/images/solution-list6.png">
        </div>
        <div class="title">健康平台解决方案</div>
        <div class="desc">享受智慧生活，诠释健康奥义</div>
        <div class="line left"></div>
        <div class="line right"></div>
      </li>
      <li>
        <div class="cover">
          <img src="../../../assets/images/solution-list7.png">
        </div>
        <div class="title">仓储管理解决方案</div>
        <div class="desc">针对B2B大宗电商的智慧仓储管理平台，可复制,可定制，适用于多种大宗电商平台</div>
        <div class="line left"></div>
        <div class="line right"></div>
      </li>
      <li>
        <div class="cover">
          <img src="../../../assets/images/solution-list8.png">
        </div>
        <div class="title">智慧农场解决方案</div>
        <div class="desc">走进农业物联网时代，打造智能、绿色的生态农场</div>
        <div class="line left"></div>
        <div class="line right"></div>
      </li>
    </ul>
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
  .solution-list {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    ul {
      margin: 0;
      padding: 0;
      &:after {
        content: " ";
        display: block;
        clear: both;
      }
      li {
        list-style: none;
        position: relative;
        float: left;
        width: 300px;
        height: 300px;
        font-size: 0;
        overflow: hidden;
        cursor: pointer;
        .cover {
          position: absolute;
          width: 300px;
          height: 300px;
          top: 0;
          left: 0;
          z-index: 1;
        }
        .title {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          text-align: center;
          font-size: 18px;
          color: #fff;
          z-index: 2;
        }
        .desc {
          position: absolute;
          top: 80%;
          left: 0;
          width: 100%;
          text-align: center;
          font-size: 12px;
          color: #fff;
          padding: 0 50px;
          z-index: 2;
          opacity: 0;
          transition: all .2s;
        }
        .line {
          position: absolute;
          width: 10px;
          height: 2px;
          background-color: #fff;
          top: 44%;
          z-index: 2;
          opacity: 0;
          &.left {
            left: -10px;
          }
          &.right {
            right: -10px;
          }
        }
        &:hover {
          .title {
            transition: all .2s ease-in;
            -webkit-transition: all .2s ease-in;
            -ms-transition: all .2s ease-in;
            -moz-transition: all .2s ease-in;
            top: 40%;
          }
          .desc {
            transition: all .2s ease-in;
            -webkit-transition: all .2s ease-in;
            -ms-transition: all .2s ease-in;
            -moz-transition: all .2s ease-in;
            top: 60%;
            opacity: 1;
          }
          .line {
            transition: all .2s ease-in;
            -webkit-transition: all .2s ease-in;
            -ms-transition: all .2s ease-in;
            -moz-transition: all .2s ease-in;
            opacity: 1;
            opacity: 1;
            &.left {
              left: 10px;
            }
            &.right {
              right: 10px;
            }
          }
        }
      }
    }
  }
</style>