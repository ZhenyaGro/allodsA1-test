<template>
  <div class="pictures">
    <a href="index.html">
      <img :src="paths.logoPath" class="logo pictures__picture" alt="logo">
    </a>
    <a href="#">
      <img :src="paths.boxesPath" class="pictures__picture" alt="boxes">
    </a>
  </div>
</template>

<script>
export default {
  name: 'MainPictures',
  props: ['paths']
}
</script>

<style lang="scss" scoped>
.pictures {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__picture {
    transition: all .5s;
  }

  &__picture:hover {
    scale: 1.05;
  }
}
</style>