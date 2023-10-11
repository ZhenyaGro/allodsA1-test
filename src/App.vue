<template>
  <MainPage />
  <BoxPage />
</template>

<script>
import MainPage from './pages/MainPage.vue';
import BoxPage from './pages/BoxPage.vue';

export default {
  name: 'App',
  components: {
    MainPage,
    BoxPage
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

.container {
  padding-left: calc(50% - 686px);
  padding-right: calc(50% - 686px);
}
</style>
