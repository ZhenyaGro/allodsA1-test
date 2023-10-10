import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      logoPath: './imgs/logo.png'
    }
  },
  getters: {
    getData(state) {
      return state;
    }
  }
});