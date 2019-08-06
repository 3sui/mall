<template>
  <div id="home">
    <nva-bar class="nva-bar">
      <h3 slot="middle">购物车</h3>
    </nva-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>
<script>
import NvaBar from "components/common/nvabar/NvaBar";
import HomeSwiper from "./childcomponents/HomeSwiper";
import RecommendView from "./childcomponents/RecommendView";
export default {
  data() {
    return {
      banner: null,
      recommend: null
    };
  },
  components: {
    NvaBar,
    HomeSwiper,
    RecommendView
  },
  methods: {
    getHomeMultidata() {
      this.$http.get("/home/multidata").then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
        console.log(this.banner);
      });
    }
  },
  created() {
    this.getHomeMultidata();
  }
};
</script>
<style scoped>
.nva-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
 