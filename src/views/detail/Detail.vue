<!-- 商品详情页面 -->
<template>
  <div>
    <nva-bar>
      <div class="nva-bar" slot="middle">
        <div
          class="nva-bar-item"
          :class="{active: isActive === index}"
          v-for="(item, index) in title"
          :key="index"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </nva-bar>
  </div>
</template>

<script>
import NvaBar from "components/common/nvabar/NvaBar";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      title: ["商品", "参数", "评论", "推荐"],
      isActive: 0
    };
  },

  components: {
    NvaBar
  },

  computed: {},

  created() {
    this.getIid();
  },

  methods: {
    getIid() {
      this.iid = this.$route.params.id;
    },
    itemClick(index) {
      this.isActive = index;
      console.log(this.isActive)

    }
  }
};
</script>
<style scoped>
.nva-bar {
  display: flex;
  background-color: #fff;
}
.nva-bar .nva-bar-item {
  flex: 1;
  font-size: 13px;
  color: var(--color-text);
}
.nva-bar .active {
  color: var(--color-high-text);
}
</style>