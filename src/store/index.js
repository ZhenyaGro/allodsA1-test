import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      logoPath: './imgs/logo.png',
      boxesPath: './imgs/boxes.png',
      heading: {
        head: 'КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ',
        text: 'Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!'
      }
    }
  },
  getters: {
    getData(state) {
      return state;
    }
  }
});