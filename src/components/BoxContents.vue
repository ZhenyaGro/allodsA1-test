<template>
  <div class="contents">
    <header class="contents__header">
      <p class="contents__title">Бесплатные сервера</p>
      <p class="contents__title">Подписочный сервер</p>
    </header>
    <BoxItem v-for="(item, index) in contents" :key="index" :item="item" />
  </div>
</template>

<script>
import BoxItem from './BoxItem.vue';

export default {
  name: 'BoxList',
  props: ['contents'],
  components: {
    BoxItem
  }
}
</script>

<style lang="scss" scoped>
.contents {

  &__header {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 9px;
  }

  &__title {
    color: #671D00;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 1px solid rgba(103, 29, 0, 0.48);
    background: rgba(0, 0, 0, 0.55);
    padding: 4px 10px;
    width: fit-content;
  }
}
</style>