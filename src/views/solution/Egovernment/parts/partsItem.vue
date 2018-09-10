<template>
  <div class="features">
    <div class="item">
      <div class="left">
        <img src="../../../../assets/images/egovernment-1.png">
      </div>
      <div class="right">
        <div class="title">智慧党建</div>
        <div class="desc">打造以党建大数据平台为数据与服务支撑，围绕“党员队伍教育管理，基层服务型党组织建设，扩大党组织和党的工作覆盖面，加强流动党员管理，拓宽服务党员渠道”等内容，搭建起由“信息发布、理论宣传、在线学习、交流互动、党务活动”五大类功能体系，“移动党校、智能党务、组织管理”三大类业务服务构成，面向党员、党组织，基于手机移动应用的一体化智慧党建服务平台。</div>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <div class="title">大数据政务平台</div>
        <div class="desc">大数据时代已经来临，政务部门应坚持创新、协调、绿色、开放、共享的发展理念，围绕实施国家大数据战略，以推动数据开放与共享、深化应用创新为重点，以完善发展政务部门管理能力为支撑，建设打造数据、技术、应用与安全协同发展的生态体系一体化政务平台，全面提升政务部门对大数据的资源掌控能力、技术支撑能力和价值挖掘能力，加快建设数据强国，有力支撑制造强国和网络强国建设。</div>
      </div>
      <div class="right">
        <img src="../../../../assets/images/egovernment-2.png">
      </div>
    </div>
    <div class="item">
      <div class="left">
        <img src="../../../../assets/images/egovernment-3.png">
      </div>
      <div class="right">
        <div class="title">数字化政务管理</div>
        <div class="desc">信息技术的革新改变了人们传统的工作、学习、生活和娱乐方式，同时对政府提供信息服务,公民参与政府民主决策的方式提出了挑战。传统的繁文缛节、拖泥带水的作风将被高效、快捷的办公方式取代，各种文件、档案、社会经济数据都以数字形式存贮于网络服务器中，可通过计算机检索机制快速查询、即用即调。数字化政务管理可以提高政府办公效率。</div>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <div class="title">物联网+智慧政务</div>
        <div class="desc">随着物联网、云计算、移动互联网等新一代信息技术飞速发展，电子政务必将迎来像智慧政务转变的新时代，智能政府通过在智能办公、智能监管、智能服务、智能决策四大领域的深化改革，推动新一代信息技术应用，强调以用户创新、大众创新、开放创新、共同创新为特征的创新2.0，以此实现作为平台的政府架构，并以此为基础实现政府、市场、社会多方协同的公共价值塑造，实现从生产范式向服务范式的转变。</div>
      </div>
      <div class="right">
        <img src="../../../../assets/images/egovernment-4.png">
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
  .features {
    .item {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      padding: 90px 0;
      &:after {
        content: " ";
        display: block;
        clear: both;
      }
      .left {
        width: 47.05882%;
        float: left;
        margin-right: 5.88235%;
        text-align: right;
      }
      .right {
        width: 47.05882%;
        float: right;
        margin-right: 0;
        text-align: left;
      }
      .title {
        font-size: 28px;
        margin-bottom: 6px;
      }
      .desc {
        display: inline-block;
        font-size: 18px;
        line-height: 26px;
        color: #97a1ab;
        width: 440px;
      }
    }
  }
</style>