<template>
  <div class="wrapper">
    <div class="container">
      <div class="unit">
        <div class="title">我们的服务</div>
        <serverItem :list="serverData"></serverItem>
      </div>
      <div class="unit">
        <div class="title">多行业一站式解决方案
          <p class="unit_desc">我们拥有最专业的团队，通过对企业痛点的准确定位，形成高效的系统解决方案，让企业冲破传统行业模式的束缚，提升核心竞争力</p>
        </div>
        <solutionList></solutionList>
      </div>
      <div class="unit">
        <div class="title">我们的优势</div>
        <solutionItem></solutionItem>
      </div>
    </div>
  </div>
</template>

<script>
  import serverItem from './parts/serverItem';
  import solutionItem from './parts/solutionItem'
  import solutionList from './parts/solutionList'
  export default {
    components: {
      serverItem,
      solutionItem,
      solutionList
    },
    data() {
      return {
        serverData: [{
          icon: 'icon-dashuju_',
          title: '大数据',
          desc: '收集海量系统数据，建立数据黏性，形成稠密的数据网络'
        }, {
          icon: 'icon-yunjisuan',
          title: '云计算',
          desc: '对数据进行深度挖掘、多维度分析，为运营和决策提供可靠依据'
        }, {
          icon: 'icon-fenbushijiqun',
          title: '分布式集群',
          desc: '采用分布式系统布局和边缘计算方式来处理万亿级数据，保证数据的实时性有效性'
        }, {
          icon: 'icon-youhua',
          title: '数据库优化',
          desc: '运用分表、表结构优化、索引优化、设计高效查询语法等多种数据库优化手段保证数据库安全高效运转'
        }, {
          icon: 'icon-anquan',
          title: '云安全',
          desc: '结合阿里云相应的组件建立完备的安全机制，保证数据的机密性、安全性、不可篡改性'
        }, {
          icon: 'icon-chanpindiedaikuai',
          title: '产品迭代',
          desc: '产品根据企业需求的变化而进行迭代开发，从而满足企业基于成本考量和需求阶段性差异化的诉求'
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
      padding: 54px 35px 0;
      .title {
        font-size: 34px;
        text-align: center;
        margin-bottom: 40px;
        letter-spacing: 9px;
        .unit_desc {
          font-size: 14px;
          letter-spacing: 0px;
          margin-top: 15px;
        }
      }
    }
  }
</style>