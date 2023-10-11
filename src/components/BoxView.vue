<template>
  <div class="box">
    <img :src="boxView.imgPath" class="box__view" alt="набор">
    <div class="box__info">
      <h1 class="box__price">{{ boxView.price }} ₽</h1>
      <button class="box__buy">ПРИОБРЕСТИ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxView',
  props: ['boxView']
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  gap: 30px;
  align-items: flex-end;

  &__info {
    padding-bottom: 37px;
  }

  &__price {
    color: #FFF;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }

  &__buy {
    border-radius: 7px;
    background: #FCFF00;
    padding: 12px 15px;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition: background-color .2s;

    &:hover {
      background-color: #ffd000;
    }
  }
}
</style>