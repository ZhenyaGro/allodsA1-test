<template>
  <div>
    <img :src="imgPath" alt="главное в наборе">
  </div>
</template>

<script>
export default {
  name: 'BoxMain',
  props: ['imgPath']
}
</script>

<style lang="scss" scoped>
.test {
  border-radius: 686px;
  border: 1px solid #000;
  opacity: 0.2;
  background: #416DF4;
  mix-blend-mode: lighten;
  filter: blur(100px);
}
</style>