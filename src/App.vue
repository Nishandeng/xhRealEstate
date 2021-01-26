<template>
  <div id="app">
    <router-view :key="key"></router-view>
  </div>
</template>
<script>
  export default{
    computed:{
      key(){
        return this.$route.path + Math.random();
      }
    }
  }
</script>

<style>
  @import "./assets/css/main.css";
  @import "./assets/css/color-dark.css";     /*深色主题*/
  /*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>