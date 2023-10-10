<template>
  <main class="main">
    <a href="index.html">
      <img :src="getData.logoPath" class="logo">
    </a>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['getData'])
  }
}
</script>

<style scoped lang="scss">
.main {
  min-height: 892px;
  background-image:
    url(/public/imgs/Layer-157-1.png),
    url(/public/imgs/Layer-157-2.png),
    url(/public/imgs/Layer-157-3.png),
    url(/public/imgs/Hue_Saturation5-1.jpg);
  background-repeat: repeat-y, repeat-y, no-repeat, no-repeat;
  background-size: contain, contain, cover, cover;
  background-position: left, right, bottom, center;
}
</style>
