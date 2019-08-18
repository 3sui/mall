<!--  -->
<template>
  <div class="goods-list-item">
    <router-link :to="'detail/' + goodsItem.iid">
      <img :src="goodsItem.show.img" @load="imgLoad" />
      
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.orgPrice}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
    imgLoad(){
      this.$emit('imgLoad',1)
    }
  },
  updated(){
    this.imgLoad()
  }
};
</script>
<style scoped>
.goods-list-item {
  position: relative;
  width: 48%;
  padding: 20px 0 40px 0;
}
.goods-list-item img {
  width: 100%;
}
.goods-list-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
  padding: 5px;
}
.goods-list-item .goods-info {
  font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}
.goods-list-item .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
.goods-list-item .collect {
  position: relative;
}

.goods-list-item .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>