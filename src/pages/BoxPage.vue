<template>
  <div class="box-page">
    <h1 class="heading">{{ getBoxPageData.heading }}</h1>
    <BoxContents :contents="getBoxPageData.items" />
    <BoxView :boxView="getBoxPageData.boxView" />
    <!-- 
      BoxPicture
      BoxContents -> includes BoxContent
      BoxView
     -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BoxContents from '@/components/BoxContents.vue';
import BoxView from '@/components/BoxView.vue';

export default {
  name: 'BoxPage',
  components: {
    BoxContents,
    BoxView
  },
  computed: {
    ...mapGetters(['getBoxPageData'])
  }
}
</script>

<style lang="scss" scoped>
.box-page {
  background-image: url(/public/imgs/box__background-wall.jpg);
  height: 1024px;
  width: 100vw;
}

.heading {
  color: #416DF4;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>