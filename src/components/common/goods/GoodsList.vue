<!--  -->
<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item" @imgLoad="imgLoad" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  props:{
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      goodsImgLoad: null
    };
  },

  components: {
    GoodsListItem
  },

  computed: {},

  methods: {
    imgLoad(a){
      this.goodsImgLoad = a
      this.$emit('imgLoad',this.goodsImgLoad)
      this.goodsImgLoad = null
    }
  }
};
</script>
<style scoped>
.goods-list {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>