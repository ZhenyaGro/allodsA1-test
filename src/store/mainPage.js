export default {
  state() {
    return {
      pictures: {
        logoPath: './imgs/logo.png',
        boxesPath: './imgs/boxes.png',
      },
      heading: {
        head: 'КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ',
        text: 'Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!'
      }
    }
  },
  getters: {
    getMainPageData(state) {
      return state;
    }
  }
};