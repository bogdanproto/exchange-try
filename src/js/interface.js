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

  changeProfileButton(dataUser) {
    const { name, photo } = dataUser;
    const markUp = ` <a class="footer-icon-link link" href="">
              <img class="footer-button-img" src="${photo}" alt="" width="36" height="36">
              <span class="footer-icon-text">${name.toUpperCase()}</span>
            </a>`;

    this.btnProfile.innerHTML = '';
    this.btnProfile.insertAdjacentHTML('beforeend', markUp);
  }
}

export { Interface };
