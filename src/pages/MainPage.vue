<template>
  <main class="main">
    <MainPictures :paths="getMainPageData.pictures" />
    <MainHeading :heading="getMainPageData.heading" />
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
    ...mapGetters(['getMainPageData'])
  }
}
</script>

<style scoped lang="scss">
.main {
  padding-bottom: 47px;
  background-image:
    url(/public/img/main__glow.png),
    url(/public/img/main__left.png),
    url(/public/img/main__right.png),
    url(/public/img/main__blue-glow.png),
    url(/public/img/main__bottom.png),
    url(/public/img/main__hero-woman.png),
    url(/public/img/main__hero-man.png),
    url(/public/img/main__background.jpg);
  background-repeat: no-repeat, repeat-y, repeat-y, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: cover, auto, auto, contain, contain, auto, auto, cover;
  background-position: center, left, right, bottom, bottom, bottom 0 left, bottom 0 right, center;
  background-blend-mode: screen, normal, normal, normal, normal, normal, normal, normal;
}

@media (max-width: 1500px) {
  .main {
    padding-bottom: 47px;
    background-image:
      url(/public/img/main__glow.png),
      url(/public/img/main__left.png),
      url(/public/img/main__right.png),
      url(/public/img/main__blue-glow.png),
      url(/public/img/main__bottom.png),
      url(/public/img/main__background.jpg);

    background-repeat: no-repeat, repeat-y, repeat-y, no-repeat, no-repeat, no-repeat;
    background-size: cover, auto, auto, contain, contain, cover;
    background-position: center, left, right, bottom, bottom, center;
    background-blend-mode: screen, normal, normal, normal, normal, normal;
  }

}
</style>
