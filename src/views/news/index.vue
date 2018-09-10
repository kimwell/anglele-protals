<template>
  <div class="wrapper">
    <div class="container">
      <div class="news-container">
        <div class="article-list">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <a class="article-inner" :href="`/news/article/${item.id}`" target="_blank">
                <div class="img-box">
                  <img :src="item.coverImg">
                </div>
                <div class="intro">
                  <h3>
                    {{item.title}}
                  </h3>
                  <div class="abstract">
                    {{item.shortContent}}
                  </div>
                </div>
                <div class="info">
                  <span class="label">{{item.category}}</span>
                  <span>来源：{{item.source}}</span>
                  <span>发布时间：{{item.deployTime | dateformat}}</span>
                </div>
              </a>
            </li>
          </ul>
          <div v-show="list.length === 0">
            暂无数据
          </div>
        </div>
      </div>
      <div class="news-categray">
        <ul>
          <li v-for="(item,index) in category" :key="index" @click="getCategray(item)">
            <span>{{item.num}}</span> {{item.category}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pageApi: {
          pageIndex: 1,
          pageSize: 10,
          category: ''
        },
        list: [],
        totalCount: 0,
        category: []
      }
    },
    computed: {
      handleFilter() {
        return {
          pageIndex: this.pageApi.pageIndex,
          pageSize: this.pageApi.pageSize,
          category: this.pageApi.category
        }
      }
    },
    methods: {
      //  获取列表
      getList(params) {
        this.$http.post(this.$api.findArticleList, params).then(res => {
          if (res.code === 1000) {
            this.list = res.data.data.data;
            this.category = res.data.index;
            this.totalCount = res.data.data.totalCount;
          }
        })
      },
      // 切换分类
      getCategray(item) {
        if (item.category === '全部新闻') {
          this.pageApi.category = '';
        } else {
          this.pageApi.category = item.category;
        }
        this.getList(this.handleFilter)
      }
    },
    created() {
      this.getList(this.handleFilter);
    }
  }
</script>

<style lang='less' scoped>
  .container {
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 0;
    position: relative;
    .news-container {
      padding-right: 210px;
      .article-list {
        ul {
          li {
            list-style: none;
            margin-top: -1px;
            padding-right: 90px;
          }
        }
        .article-inner {
          position: relative;
          padding: 30px 0;
          border-bottom: 1px solid #e6e8eb;
          display: block;
          cursor: pointer;
          &:before {
            content: '';
            display: table;
          }
          &:after {
            content: '';
            display: table;
            clear: both;
          }
          .img-box {
            float: left;
            width: 320px;
            height: 240px;
            position: relative;
            overflow: hidden;
            background-color: #c3c3c3;
            img {
              width: 320px;
              height: 240px;
            }
          }
          .intro {
            margin-left: 342px;
            font-size: 14px;
            line-height: 1.5;
            word-break: break-all;
            color: #828a92;
            height: 100%;
            position: relative;
            h3 {
              margin-bottom: 10px;
            }
            .abstract {
              position: relative;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              overflow: hidden;
            }
          }
          .info {
            position: absolute;
            bottom: 30px;
            left: 342px;
            span{
              margin-right: 20px;
              color: #666;
              font-size: 12px;
              &.label{
                display: inline-block;
                border: 1px solid #999;
                border-radius: 3px;
                padding: 2px 5px;
              }
            }
          }
        }
      }
    }
    .news-categray {
      position: absolute;
      right: 0;
      top: 60px;
      width: 210px;
      background-color: #fff;
      box-shadow: 0 2px 5px 0 rgba(1, 2, 3, .1);
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        line-height: 40px;
        border-bottom: 1px solid #e6e6e6;
        padding: 0 15px;
        cursor: pointer;
        &:last-child {
          border-bottom: 0;
        }
        span {
          float: right;
        }
      }
    }
  }
</style>