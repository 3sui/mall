<template>
  <swiper>
    <swiperItem v-for="item in banner" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" :title="item.title" />
      </a>
    </swiperItem>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  props: {
    banner: {
      type: Array,
      default: null
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

