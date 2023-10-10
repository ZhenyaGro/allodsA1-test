<template>
  <main class="main">
    <MainPictures :paths="getData.pictures" />
    <MainHeading :heading="getData.heading" />
  </main>
</template>

<script>
import MainPictures from '../components/MainPictures.vue';
import MainHeading from '../components/MainHeading.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'MainPage',
  components: {
    MainPictures,
    MainHeading
  },
  computed: {
    ...mapGetters(['getData'])
  }
}
</script>

<style scoped lang="scss">
.main {
  padding-bottom: 47px;
  background-image:
    url(/public/imgs/glow1.png),
    url(/public/imgs/Layer-157-1.png),
    url(/public/imgs/Layer-157-2.png),
    url(/public/imgs/blue-glow3.png),
    url(/public/imgs/Layer-157-3.png),
    url(/public/imgs/MafiaCostume_2022-2.png),
    url(/public/imgs/MafiaCostume_2022-3.png),
    url(/public/imgs/Hue_Saturation5-1.jpg);
  background-repeat: no-repeat, repeat-y, repeat-y, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: cover, auto, auto, contain, contain, auto, auto, cover;
  background-position: center, left, right, bottom, bottom, bottom 0 left, bottom 0 right, center;
  background-blend-mode: screen, normal, normal, normal, normal, normal, normal, normal;
}
</style>
