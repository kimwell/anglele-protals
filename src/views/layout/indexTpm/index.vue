<template>
  <div class="home">
    <headerTemp :colors="colors"></headerTemp>
    <router-view/>
    <footerTemp></footerTemp>
  </div>
</template>

<script>
  import footerTemp from "../footer/index";
  import headerTemp from "../header/index";
  export default {
    components: {
      footerTemp,
      headerTemp
    },
  
    data() {
      return {
        currentPage: "",
        colors: {
          start: "",
          end: "",
          cstart: "rgb(16, 199, 160)",
          cend: "rgb(1, 200, 177)"
        }
      };
    },
    watch: {
      $route(to, from) {
        this.currentPage = to.name;
      },
      currentPage(val) {
        if (val === 'index') {
          this.colors = {
            start: "",
            end: "",
            cstart: "rgba(101,237,248,1)",
            cend: "rgba(31,152,229,1)"
          }
  
        } else if (val === 'about') {
          this.colors = {
            start: "",
            end: "",
            cstart: "rgba(8,209,243,1)",
            cend: "rgba(70,74,254,1)"
          }
        } else if (val === 'news' || val === 'article') {
          this.colors = {
            start: "",
            end: "",
            cstart: "rgba(57,227,242,1)",
            cend: "rgba(32,156,230,1)"
          }
        } else if (val === 'B2B') {
          this.colors = {
            start: "",
            end: "",
            cstart: "rgba(187,94,219,1)",
            cend: "rgba(139,119,230,1)"
          }
        } else if (val === 'B2C') {
          this.colors = {
            start: "",
            end: "",
            cstart: "rgba(254,197,91,1)",
            cend: "rgba(254,112,34,1)"
          }
        } else if (val === 'sass') {
          this.colors = {
            start: "",
            end: "",
            cstart: "rgba(55,59,146,1)",
            cend: "rgba(13,91,149,1)"
          }
        } else if (val === 'E-government') {
          this.colors = {
            start: "",
            end: "",
            cstart: "rgba(16,199,160,1)",
            cend: "rgba(1,200,176,1)"
          }
        }
      }
    },
    methods: {
  
    },
    created() {
      this.currentPage = this.$route.name;
    }
  };
</script>

<style lang='less' scoped>
  
</style>