<template>
  <main class="main">
    <a href="index.html">
      <img :src="getData.logoPath" class="logo picture" alt="logo">
    </a>
    <a href="#">
      <img :src="getData.boxesPath" class="picture" alt="boxes">
    </a>
    <header class="heading">
      <h1 class="heading__head">{{ getData.heading.head }}</h1>
      <p class="heading__text">{{ getData.heading.text }}</p>
    </header>
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
  padding-bottom: 47px;
  background-image:
    url(/public/imgs/Layer-157-1.png),
    url(/public/imgs/Layer-157-2.png),
    url(/public/imgs/Layer-157-3.png),
    url(/public/imgs/Hue_Saturation5-1.jpg);
  background-repeat: repeat-y, repeat-y, no-repeat, no-repeat;
  background-size: contain, contain, cover, cover;
  background-position: left, right, bottom, center;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.heading {
  color: #FFF;
  text-align: center;
  font-style: normal;
  line-height: normal;

  &__head {
    font-size: 42px;
    font-weight: 700;
  }

  &__text {
    font-size: 20px;
    font-weight: 400;
  }
}
</style>
