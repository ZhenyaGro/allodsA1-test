export default {
  state() {
    return {
      heading: 'НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»',
      items: [
        {
          imgPath: './img/item__clock.png',
          name: 'Игровое время',
          freeInfo: '',
          subscribeInfo: '30 дней'
        },
        {
          imgPath: './img/item__toolbox.png',
          name: 'Запечатанный набор инструментов',
          freeInfo: '1',
          subscribeInfo: '1'
        },
        {
          imgPath: './img/item__rune.png',
          name: 'Хрупкая чистая руна 10-й ступени',
          freeInfo: '1',
          subscribeInfo: ''
        },
        {
          imgPath: './img/item__symbol.png',
          name: 'Большой символ изобилия творца',
          freeInfo: '10',
          subscribeInfo: ''
        },
        {
          imgPath: './img/item__mana.png',
          name: 'Мана-батарея',
          freeInfo: '',
          subscribeInfo: '20'
        },
        {
          imgPath: './img/item__module.png',
          name: 'Модуль памяти',
          freeInfo: '',
          subscribeInfo: '10'
        },
        {
          imgPath: './img/item__vito.png',
          name: 'Помощник Вито',
          freeInfo: '1',
          subscribeInfo: '1'
        },
      ],
      boxView: {
        imgPath: './img/boxview__img.png',
        price: 399
      },
      boxMainPath: './img/boxview__vito.png'
    }
  },
  getters: {
    getBoxPageData(state) {
      return state;
    }
  }
}