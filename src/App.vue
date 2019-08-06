<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template> 


<script>
import MainTabBar from "./components/common/tabbar/MainTabBar";

export default {
  components: {
    MainTabBar
  }
};
</script> 

<style>
@import "../src/assets/css/base.css";
</style>
