<template>
  <div class="wrapper">
    <div class="container">
      <h2>{{item.title}}</h2>
      <div class="info">
        <span>时间：{{item.updateTime | dateformat}} </span>
        <span>来源：{{item.source}}</span>
      </div>
      <div v-html="item.content" class="article"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item:{}
      }
    },
    computed:{
      id(){
        return this.$route.params.id;
      }
    },
    methods: {
      getData(){
        this.$http.post(this.$api.findOne,{id: this.id}).then(res =>{
          if(res.code === 1000){
            this.item = res.data;
            document.title = res.data.title;
          }
        })
      }
    },
    created(){
      this.getData();
    }
  }
</script>

<style lang='less' scoped>
  .container{
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 0;
    h2{
      text-align: center;
    }
    .info{
      font-size: 12px;
      margin: 20px 0;
      text-align: center;
      span{
        display: inline-block;
        margin: 0 20px;
      }
    }
    .article{
      img{
        max-width: 100%;
      }
    }
  }
</style>