<template>
  <div class="features">
    <div class="item">
      <div class="left">
        <div class="title">专业定位</div>
        <div class="desc">深入了解用户企业实际业务，梳理业务需求，查找分析业务管理痛点，精确定位核心需求，给出专业解决方案</div>
      </div>
      <div class="right">
        <img src="../../../assets/images/solution-index1.png">
      </div>
    </div>
    <div class="item">
      <div class="left">
        <img src="../../../assets/images/solution-index2.png">
      </div>
      <div class="right">
        <div class="title">高效实施</div>
        <div class="desc">团队本着高效，专业，务实，求真的原则，客户至上的理念快速实施解决方案，尽可能的为客户争取一切时间</div>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <div class="title">系统延伸</div>
        <div class="desc">系统建设永远站在用户阶段性需求基础上，点对点解决问题，尽可能的增加系统的可扩展性，降低企业的成本</div>
      </div>
      <div class="right">
        <img src="../../../assets/images/solution-index3.png">
      </div>
    </div>
    <div class="item">
      <div class="left">
        <img src="../../../assets/images/solution-index4.png">
      </div>
      <div class="right">
        <div class="title">准确把握</div>
        <div class="desc">团队会委派专业人员，全程参与企业需求问题的分析，准确把握生产管理痛点，为企业决策提供合理化建议</div>
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
      margin: 120px 0;
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