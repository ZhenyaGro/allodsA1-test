<template>
  <div class="box-page">
    <h1 class="heading">{{ getBoxPageData.heading }}</h1>
    <!-- 
      BoxPicture
      BoxContents -> includes BoxContent
      BoxView
     -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BoxPage',
  computed: {
    ...mapGetters(['getBoxPageData'])
  }
}
</script>

<style lang="scss" scoped>
.box-page {
  background-image: url(/public/imgs/background-wall.jpg);
  height: 1024px;
  width: 1000px;
}

.heading {
  color: #416DF4;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>