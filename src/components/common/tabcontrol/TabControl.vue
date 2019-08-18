<!--  -->
<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" :class="{active: isActive===index}" @click="tabActive(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      isActive: 0
    };
  },

  components: {},

  methods: {
    tabActive(index){
      this.isActive = index
      this.$emit('tabClick', index)
    },
  }
};
</script>
<style scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  text-align: center;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
}
.tab-control .active {
  color: var(--color-high-text);
}
.tab-control span {
  padding: 5px;
}
.tab-control .active span {
  border-bottom: 2px solid var(--color-high-text);
  
}
</style>