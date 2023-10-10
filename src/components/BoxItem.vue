<template>
  <div class="item">
    <figure class="item__description">
      <img class="item__img" :src="item.imgPath" alt="предмет">
      <figcaption class="item__text">{{ item.name }}</figcaption>
    </figure>
    <ul class="item__info">
      <li class="item__text">{{ item.freeInfo ? item.freeInfo : '-' }}</li>
      <li class="item__text">{{ item.subscribeInfo ? item.subscribeInfo : '-' }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BoxItem',
  props: ['item']
}
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
}

.item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 76px;
  max-width: 632px;
  padding: 6px 41px 6px 6px;
  border: 1px solid rgba(103, 29, 0, 0.48);
  background: rgba(0, 0, 0, 0.55);
  box-sizing: border-box;

  &__description {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    text-align: center;
  }

  &__text {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 229px;
  }
}
</style>