<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {
  }
};
</script>

<style>
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  height: 49px;
  display: flex;
  box-shadow: 0 -1px 2px rgba(100, 100, 100, 0.1);
}

</style>
