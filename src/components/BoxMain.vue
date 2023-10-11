<template>
  <img :src="imgPath" alt="главное в наборе">
</template>

<script>
export default {
  name: 'BoxMain',
  props: ['imgPath']
}
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
  max-height: 891px;
  filter: drop-shadow(0 0 170px #416DF4);
}
</style>