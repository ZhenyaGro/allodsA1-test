import { createStore } from 'vuex';
import storeMainPage from './mainPage.js';
import storeBoxPage from './boxPage.js';

export default createStore({
  modules: {
    storeMainPage,
    storeBoxPage
  }
});