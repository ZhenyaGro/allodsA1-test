<template>
  <header class="heading">
    <h1 class="heading__head">{{ heading.head }}</h1>
    <p class="heading__text">{{ heading.text }}</p>
  </header>
</template>

<script>
export default {
  name: 'MainHeading',
  props: ['heading']
}
</script>

<style lang="scss" scoped>
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