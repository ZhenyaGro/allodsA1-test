<template>
  <div class="box-page">
    <div class="box-page__content">
      <BoxMain :imgPath="getBoxPageData.boxMainPath" />
      <div>
        <h1 class="heading">{{ getBoxPageData.heading }}</h1>
        <BoxContents :contents="getBoxPageData.items" class="box-page__contents" />
        <BoxView :boxView="getBoxPageData.boxView" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BoxContents from '@/components/BoxContents.vue';
import BoxView from '@/components/BoxView.vue';
import BoxMain from '@/components/BoxMain.vue';

export default {
  name: 'BoxPage',
  components: {
    BoxContents,
    BoxView,
    BoxMain
  },
  computed: {
    ...mapGetters(['getBoxPageData'])
  }
}
</script>

<style lang="scss" scoped>
.box-page {
  background-image:
    url(/public/imgs/boxview__glow.png),
    url(/public/imgs/box__background-wall.jpg);
  background-repeat: no-repeat;
  background-position: bottom, center;
  background-size: auto, cover;

  &__content {
    padding-top: 58px;
    padding-bottom: 58px;
    display: flex;
    justify-content: space-around;
  }

  &__contents {
    margin-bottom: 20px;
  }
}

.heading {
  color: #416DF4;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 39px;
}
</style>