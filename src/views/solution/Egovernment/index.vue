<template>
  <div class="wrapper">
    <div class="container">
      <div class="unit">
        <partsItem></partsItem>
      </div>
      <div class="unit">
        <div class="title">使用场景</div>
        <div class="features">
          <ul>
            <li>
              <div><span class="iconfont icon-haiguanbeian"></span></div>
              <div class="stitle">海关</div>
            </li>
            <li>
              <div><span class="iconfont icon-guojianbeian"></span></div>
              <div class="stitle">国检</div>
            </li>
            <li>
              <div><span class="iconfont icon-nauticalvesselfubenzhuan"></span></div>
              <div class="stitle">海事</div>
            </li>
            <li>
              <div><span class="iconfont icon-fanghu"></span></div>
              <div class="stitle">边防</div>
            </li>
            <li>
              <div><span class="iconfont icon-haiguankouan"></span></div>
              <div class="stitle">口岸委</div>
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
        width: 20%;
        padding: 0 15px;
        .iconfont {
          font-size: 38px;
          color: #04C8AD;
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
        color: #04C8AD;
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
</style>