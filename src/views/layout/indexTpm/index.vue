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
          start: "rgb(16, 199, 160)",
          end: "rgb(1, 200, 177)"
        }
      };
    },
    watch: {
      $route(to, from) {
        this.currentPage = to.name;
        document.title = to.meta.seo.title;
      },
      currentPage(val) {
        if (val === 'index') {
          this.colors = {
            start: "",
            end: "",
            start: "rgba(101,237,248,1)",
            end: "rgba(31,152,229,1)"
          }
  
        } else if (val === 'about') {
          this.colors = {
            start: "rgba(8,209,243,1)",
            end: "rgba(70,74,254,1)"
          }
        } else if (val === 'news' || val === 'article') {
          this.colors = {
            start: "rgba(57,227,242,1)",
            end: "rgba(32,156,230,1)"
          }
        } else if (val === 'B2B') {
          this.colors = {
            start: "rgba(187,94,219,1)",
            end: "rgba(139,119,230,1)"
          }
        } else if (val === 'B2C') {
          this.colors = {
            start: "rgba(254,197,91,1)",
            end: "rgba(254,112,34,1)"
          }
        } else if (val === 'sass') {
          this.colors = {
            start: "rgba(55,59,146,1)",
            end: "rgba(13,91,149,1)"
          }
        } else if (val === 'E-government') {
          this.colors = {
            start: "rgba(16,199,160,1)",
            end: "rgba(1,200,176,1)"
          }
        } else if (val === 'O2O') {
          this.colors = {
            start: "rgba(10,204,243,1)",
            end: "rgba(72,70,255,1)"
          }
        } else if (val === 'farm') {
          this.colors = {
            start: "rgba(41,255,198,1)",
            end: "rgba(30,204,158,1)"
          }
        } else if (val === 'health') {
          this.colors = {
            start: "rgba(255,161,84,1)",
            end: "rgba(255,118,139,1)"
          }
        } else if (val === 'IoT') {
          this.colors = {
            start: "rgba(187,94,219,1)",
            end: "rgba(129,123,234,1)"
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