import SlimSelect from 'slim-select';

class Interface {
  constructor() {
    this.slimSelect = new SlimSelect({
      select: '#category',
      settings: {
        showSearch: false,
      },
    });
  }

  setElements(obj) {
    const arrKey = Object.keys(obj);
    arrKey.forEach(key => {
      this[key] = document.querySelector(obj[key]);
    });
  }

  addSportSelector(arr) {
    const markUp = arr.map(({ sport }) => {
      return {
        text: sport.toUpperCase(),
        value: sport,
      };
    });
    this.slimSelect.setData(markUp);
  }
}

export { Interface };
