<template>
  <main class="main">
    <div class="pictures">
      <a href="index.html">
        <img :src="getData.logoPath" class="logo picture" alt="logo">
      </a>
      <a href="#">
        <img :src="getData.boxesPath" class="picture" alt="boxes">
      </a>
    </div>
    <header class="heading">
      <h1 class="heading__head">{{ getData.heading.head }}</h1>
      <p class="heading__text">{{ getData.heading.text }}</p>
    </header>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MainPage',
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


.pictures {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.picture {
  transition: all .5s;
}

.picture:hover {
  scale: 1.05;
}

.heading {
  color: #FFF;
  text-align: center;
  font-style: normal;
  line-height: normal;

  &__head {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 25px;
  }

  &__text {
    font-size: 20px;
    font-weight: 400;
  }
}
</style>
