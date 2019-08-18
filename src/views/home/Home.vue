<template>
  <div id="home">
    <nva-bar class="nva-bar">
      <h3 slot="middle">购物车</h3>
    </nva-bar>
    <tab-control
      :titles="['新品', '流行', '精选']"
      class="tab-control1"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="showTabControl1"
    />

    <b-scroll
      class="b-scroll"
      :refresh-delay="200"
      ref="scroll"
      :probe-type="3"
      :listen-scroll="true"
      @scroll="scroll"
      :pullup="true"
      @scrollToEnd="scrollToEnd"
    >
      <home-swiper :banner="banner"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view class="feature-view" />
      <tab-control :titles="['新品', '流行', '精选']" class="tab-control" @tabClick="tabClick" ref="tabControl"/>
      <goods-list class="goods-list" :goods="showGoods" @imgLoad="imgLoad"></goods-list>
    </b-scroll>
    <back-top class="back-top" @click.native="backTop" v-show="showBackTop"></back-top>
  </div>
</template>
<script>
import BScroll from "../../bScroll";

import NvaBar from "components/common/nvabar/NvaBar";
import TabControl from "components/common/tabcontrol/TabControl";
import GoodsList from "components/common/goods/GoodsList";
import BackTop from "components/common/backtop/BackTop";

import HomeSwiper from "./childcomponents/HomeSwiper";
import RecommendView from "./childcomponents/RecommendView";
import FeatureView from "./childcomponents/FeatureView";

export default {
  data() {
    return {
      banner: null,
      recommend: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      tabClickIndex: "pop",
      goodsImgLoad: null,
      showBackTop: false,
      showTabControl1: false,
      tabControlHeight: 0
    };
  },
  components: {
    BScroll,

    NvaBar,
    TabControl,
    GoodsList,
    BackTop,

    HomeSwiper,
    RecommendView,
    FeatureView
  },
  watch: {
    goodsImgLoad() {
      if (this.goodsImgLoad === 1) {
        this.$refs.scroll.scroll.refresh();
        this.goodsImgLoad = 0;
      }
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.tabClickIndex].list;
    }
  },
  methods: {
    // 网络请求
    getHomeMultidata() {
      this.$http.get("/home/multidata").then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      this.$http
        .get("/home/data", {
          params: {
            type: type,
            page: page
          }
        })
        .then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
        });
    },
    // 操作方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.tabClickIndex = "pop";
          break;
        case 1:
          this.tabClickIndex = "new";
          break;
        case 2:
          this.tabClickIndex = "sell";
          break;
      }
      this.$refs.tabControl.isActive = index
      this.$refs.tabControl1.isActive = index
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    TabControlFixed() {},
    //父子传值
    scrollToEnd() {
      console.log("上拉加载更多");
      this.getHomeGoods(this.tabClickIndex);
    },
    imgLoad(a) {
      this.goodsImgLoad = a;
    },
    scroll(pos) {
      this.showBackTop = pos.y < -1000;

      this.showTabControl1 = -pos.y > this.$refs.tabControl.$el.offsetTop;
    }
  },
  created() {
    this.getHomeMultidata(),
      this.getHomeGoods("pop"),
      this.getHomeGoods("new"),
      this.getHomeGoods("sell");
  },
  mounted() {}
};
</script>
<style scoped>
.nva-bar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 999;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);

}
#home {
  padding-top: 44px;
}
.feature-view {
  margin-bottom: 20px;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 999;
}
/* .goods-list {
  margin-bottom: 49px;
} */
.b-scroll {
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.back-top {
  position: fixed;
  right: 10px;
  bottom: 55px;
}
.tab-control1 {
  position: fixed;
  top: 44px;
  width: 100%;
}
</style>

 