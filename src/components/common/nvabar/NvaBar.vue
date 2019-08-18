<template>
  <div class="nva-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nva-bar {
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.nva-bar .left,
.nva-bar .right {
  width: 60px;
  /* background-color: pink; */
}

.nva-bar .middle {
  flex: 1;
  /* background-color: red; */
}
</style>
