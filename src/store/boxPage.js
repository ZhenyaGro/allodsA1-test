export default {
  state() {
    return {
      heading: 'НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»',
      items: [
        {
          imgPath: './imgs/item__clock.png',
          name: 'Игровое время',
          freeInfo: '',
          subscribeInfo: '30 дней'
        },
        {
          imgPath: './imgs/item__toolbox.png',
          name: 'Запечатанный набор инструментов',
          freeInfo: '1',
          subscribeInfo: '1'
        },
        {
          imgPath: './imgs/item__rune.png',
          name: 'Хрупкая чистая руна 10-й ступени',
          freeInfo: '1',
          subscribeInfo: ''
        },
        {
          imgPath: './imgs/item__symbol.png',
          name: 'Большой символ изобилия творца',
          freeInfo: '10',
          subscribeInfo: ''
        },
        {
          imgPath: './imgs/item__mana.png',
          name: 'Мана-батарея',
          freeInfo: '',
          subscribeInfo: '20'
        },
        {
          imgPath: './imgs/item__module.png',
          name: 'Модуль памяти',
          freeInfo: '',
          subscribeInfo: '10'
        },
        {
          imgPath: './imgs/item__vito.png',
          name: 'Помощник Вито',
          freeInfo: '1',
          subscribeInfo: '1'
        },
      ],
      boxView: {
        imgPath: './imgs/boxview__img.png',
        price: 399
      }
    }
  },
  getters: {
    getBoxPageData(state) {
      return state;
    }
  }
}