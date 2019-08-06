<template>
  <div class="recommend">
    <a :href="item.link" v-for="item in recommend" :key="item.acm">
      <img :src="item.image" alt />
      <div>{{item.title}}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default: null
    }
  }
};
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: 10px solid #eee;
}
.recommend img {
  flex: 1;
  width: 60px;
}
</style>
