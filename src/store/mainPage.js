export default {
  state() {
    return {
      pictures: {
        logoPath: './img/logo.png',
        boxesPath: './img/boxes.png',
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