<template>
  <div class="page-header" :style="headerStyle">
    <div class="cover" :style="coverStyle"></div>
    <div class="nav-header" :class="headerFixed ? 'header-fixed':''" id="header">
      <div class="container">
        <router-link class="logo" to="/index">
        </router-link>
        <div class="navs">
          <router-link class="nav" to="/index">首页</router-link>
          <div class="nav inner">
            解决方案
            <span class="arrow"></span>
            <div class="sub-navs">
              <router-link to="/solution/health"><span class="iconfont icon-yiyuan1"></span>医院大健康平台</router-link>
              <router-link to="/solution/sass"><span class="iconfont icon-cangchu1"></span>仓储管理(SASS)</router-link>
              <router-link to="/solution/E-government"><span class="iconfont icon-dianshang"></span>电子政务平台</router-link>
              <router-link to="/solution/IoT"><span class="iconfont icon-iot"></span>物联网平台</router-link>
              <router-link to="/solution/B2B"><span class="iconfont icon-lianjie"></span>B2B平台</router-link>
              <router-link to="/solution/B2C"><span class="iconfont icon-gouwudai"></span>B2C平台</router-link>
              <router-link to="/solution/O2O"><span class="iconfont icon-gouwuche"></span>O2O平台</router-link>
              <router-link to="/solution/farm"><span class="iconfont icon-nongchangjieshaosvg"></span>欢乐农场平台</router-link>
            </div>
            <div class="sub-navs-arrow"></div>
          </div>
          <router-link class="nav" to="/news">新闻中心</router-link>
          <router-link class="nav" to="/about">关于我们</router-link>
        </div>
      </div>
    </div>
    <indexBanner v-if="currentPage === 'index'"></indexBanner>
    <div class="container banner-inner" v-if="currentPage === 'index'">
      <h2 class="animated fadeInDown index-title">引领<span>行业</span>发展，衔接<span>智慧</span>未来</h2>
    </div>
    <div v-for="(item,index) in bannerList" :key="index">
      <div class="container banner-inner" v-if="currentPage === item.name">
        <div class="info">
          <div class="title animated fadeInDown">{{item.title}}</div>
          <div class="desc animated fadeInDown">{{item.desc}}</div>
          <div class="btns animated fadeInDown">
            <a class="concat " :class="item.name" href="/about">联系我们</a>
          </div>
        </div>
        <div class="icon">
          <img :src="item.img" class="animated zoomIn">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import indexBanner from './parts/indexBanner'
  export default {
    components: {
      indexBanner
    },
    props: {
      colors: Object
    },
    data() {
      return {
        headerFixed: false,
        show: false,
        bannerList: [{
          title: '了解我们',
          desc: '欢迎胸怀世界、坚韧平实、洞见新知的你，和我们一起走进智能世界',
          name: 'about',
          img: 'https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/about-baner-img.png'
        }, {
          title: 'B2B解决方案',
          desc: '七大功能支撑B2B大宗电商交易平台，整合线上线下资源，助力企业转型升级，推动行业健康发展',
          name: 'B2B',
          img: 'https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/B2B-baner-img.png'
        }, {
          title: '电商&B2C解决方案',
          desc: '建设专业的品牌、零售独立官方商城,线上线下完美融合PC，移动等多终端统一管理',
          name: 'B2C',
          img: 'https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/B2C-baner-img.png'
        }, {
          title: '新闻中心',
          desc: 'NEWS与您分享',
          name: 'news',
          img: 'https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/news-baner-img.png'
        }, {
          title: '新闻中心',
          desc: 'NEWS与您分享',
          name: 'article',
          img: 'https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/news-baner-img.png'
        }, {
          title: '仓储管理（SASS）解决方案',
          desc: '针对B2B大宗电商的智慧仓储管理平台，可复制,可定制，适用于多种大宗电商平台',
          name: 'sass',
          img: 'https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/sass-baner-img.png'
        }, {
          title: '电子政务平台解决方案',
          desc: '顺应智慧物联网时代的发展，建设智能信息化电子政务，带动国民经济和社会信息化',
          name: 'E-government',
          img: 'https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/egovernment-baner-img.png'
        }, {
          title: 'O2O平台解决方案',
          desc: '订餐系统平台的出现，顺应了时代的发展，改变了用户享受生活的方式，助力餐饮行业的转型升级',
          name: 'O2O',
          img: 'https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/O2O-banner-img.png'
        }, {
          title: '医疗大健康平台解决方案',
          desc: '享受智慧生活，诠释健康奥义',
          name: 'health',
          img: 'https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/health-baner-img.png'
        }, {
          title: '欢乐农场解决方案',
          desc: '走进农业物联网时代，打造智能、绿色的生态农场',
          name: 'farm',
          img: 'https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/farm-baner-img.png'
        }, {
          title: '物联网平台解决方案',
          desc: '把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界',
          name: 'IoT',
          img: 'https://anglele.oss-cn-shanghai.aliyuncs.com/portal/static/IoT-baner-img.png'
        }]
      };
    },
    computed: {
      headerStyle() {
        return {
          height: "620px",
          backgroundImage: `linear-gradient(312deg, ${this.colors.start} 0%, ${this.colors.end} 100%)`
        };
      },
      coverStyle() {
        return {
          opacity: "1",
          backgroundImage: `linear-gradient(312deg, ${this.colors.start} 0%, ${this.colors.end} 100%)`
        };
      },
      currentPage() {
        return this.$route.name;
      }
    },
    methods: {
      //  滚动设置导航固定
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var offsetTop = document.querySelector('#header').offsetTop
        if (scrollTop > offsetTop) {
          this.headerFixed = true
        } else {
          this.headerFixed = false
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    }
  };
</script>

<style lang='less' scoped>
  .page-header {
    height: 620px;
    position: relative;
    color: #999;
    overflow: hidden;
    .cover {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }
    .nav-header {
      width: 100%;
      height: 80px;
      position: fixed;
      color: #fff;
      font-size: 16px;
      z-index: 1000;
      transition: all .3s ease-in-out;
      &.header-fixed {
        background-color: #fff;
        color: #97a1ab;
        border-bottom: 1px solid #e1e2e4;
        .container {
          .navs {
            a {
              color: #97a1ab;
            }
            .arrow {
              &:before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                border-top: 4px solid #ccc;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
              }
            }
            .nav {
              &.inner {
                color: #97a1ab;
              }
              &:hover {
                color: #97a1ab;
              }
            }
          }
          .logo {
            background: url('../../../assets/images/logo-active.png') no-repeat;
          }
        }
      }
      .sub-navs {
        display: none;
        opacity: 0;
        position: absolute;
        left: -150px;
        top: 40px;
        width: 360px;
        height: 200px;
        background: #fff;
        border-radius: 5px;
        padding: 16px 21px;
        transition: all .2s ease-out;
        overflow: hidden;
        box-shadow: 0 0 5px 0 #e3e3e3;
        -webkit-transform: perspective(500px) rotateX(-15deg);
        transform: perspective(500px) rotateX(-15deg);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0;
        transition: all .15s ease-out;
        .iconfont {
          font-size: 15px;
          color: #1f98e5;
          margin-right: 5px;
        }
        a {
          color: #666;
          display: inline-block;
          width: 47.89898%;
          cursor: pointer;
        }
      }
      .sub-navs-arrow {
        display: none;
        opacity: 0;
        position: absolute;
        bottom: 6px;
        left: 46px;
        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          border-bottom: 6px solid #fff;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
        }
      }
      .container {
        max-width: 1170px;
        margin: 0 auto;
        .logo {
          display: inline-block;
          width: 173px;
          height: 51px;
          margin-top: 15px;
          margin-right: 130px;
          background: url('../../../assets/images/logo.png') no-repeat;
          img {
            max-width: 100%;
          }
        }
        .navs {
          position: relative;
          float: right;
          display: inline-block;
          vertical-align: top;
          margin-left: 38px;
          height: 80px;
          padding-top: 20px;
          .nav {
            color: #fff;
            position: relative;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-align: center;
            align-items: center;
            height: 40px;
            line-height: 40px;
            padding: 0 21px;
            text-decoration: none;
            cursor: pointer;
            &:hover {
              color: rgba(255, 255, 255, .7)
            }
            &.inner {
              &:hover {
                .sub-navs {
                  -webkit-transform: none;
                  transform: none;
                  opacity: 1;
                  display: block;
                }
                .sub-navs-arrow {
                  transition: all .15s ease-out;
                  opacity: 1;
                  display: block;
                }
              }
            }
          }
          .arrow {
            position: relative;
            margin-left: 3px;
            &:before {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              border-top: 4px solid #fff;
              border-left: 4px solid transparent;
              border-right: 4px solid transparent;
            }
          }
        }
      }
    }
  }
  
  .banner-inner {
    position: relative;
    height: 540px;
    margin-top: 80px;
    .index-title {
      padding-top: 120px;
      text-align: center;
      font-size: 48px;
      color: #fff;
      span {
        font-size: 60px;
      }
    }
    &.container {
      max-width: 1170px;
      margin-left: auto;
      margin-right: auto;
    }
    .info {
      width: 49.15254%;
      float: left;
      margin-right: 1.69492%;
      margin-top: 132px;
      opacity: 1;
      color: #fff;
      .concat {
        display: inline-block;
        width: 137px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        font-size: 14px;
        color: #3F59FE;
        background: rgba(255, 255, 255, 1);
        border-radius: 6px;
        cursor: pointer;
        &.sass {
          color: #145694
        }
        &.B2B {
          color: #B95FDB
        }
        &.B2C {
          color: #FE7223
        }
        &.about {
          color: #1DA3F7
        }
        &.news {
          color: #145694
        }
        &.E-government {
          color: #04C8AD
        }
        &.O2O {
          color: #0CC7F3
        }
        &.health {
          color: #FF7F7F;
        }
        &.farm {
          color: #29FFC6;
        }
        &.IoT {
          color: #9372E5;
        }
      }
      .title {
        font-size: 40px;
      }
      .desc {
        font-size: 16px;
        margin-top: 15px;
        max-width: 480px;
        line-height: 22px;
      }
      .btns {
        margin: 24px 0;
      }
    }
    .icon {
      width: 49.15254%;
      float: right;
      margin-right: 0;
      -webkit-animation-name: fadeIn-data-v-4d7ea1c6;
      animation-name: fadeIn-data-v-4d7ea1c6;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-delay: .8s;
      animation-delay: .8s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
      -webkit-transform-origin: center;
      transform-origin: center;
      text-align: right;
      height: 100%;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: center;
      justify-content: center;
      -ms-flex-align: center;
      align-items: center;
    }
    &:after {
      content: " ";
      display: block;
      clear: both;
    }
  }
</style>