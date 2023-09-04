import SlimSelect from 'slim-select';
import flatpickr from 'flatpickr';

class Interface {
  constructor() {
    (this.slimSelect = new SlimSelect({
      select: '#category',
      settings: {
        showSearch: false,
      },
    })),
      (this.inputSpot = new SlimSelect({
        select: '#spot-select',
        settings: {
          showSearch: false,
        },
      })),
      (this.inputEqt = new SlimSelect({
        select: '#equipment-select',
        settings: {
          showSearch: false,
        },
      })),
      (this.inputDate = flatpickr('#date-picker', {
        disableMobile: 'true',
      })),
      (this.inputTime = flatpickr('#time-picker', {
        disableMobile: 'true',
        mode: 'range',
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time_24hr: true,
        allowInput: true,
      }));
  }

  setElements(obj) {
    const arrKey = Object.keys(obj);
    arrKey.forEach(key => {
      this[key] = document.querySelector(obj[key]);
    });
  }

  // ------ markUp function service --------
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
    const markUp = `<img class="footer-button-img" src="${photo}" alt="" width="28" height="28">
              <span class="footer-icon-text">${name.toUpperCase()}</span>`;

    this.btnProfile.innerHTML = '';
    this.btnProfile.insertAdjacentHTML('beforeend', markUp);
  }

  // micro service interface

  toDisableTimeSelect() {
    this.inputTime.element.disabled = true;
    this.inputTime.element.value = 'All day';
  }

  toEnableTimeSelect() {
    interfaceApp.inputTime.element.disabled = false;
    interfaceApp.inputTime.element.value = '12:00';
  }

  toShowModalRequest() {
    this.modalRequest.classList.remove('is-hidden');
    this.body.classList.add('off-scroll');
  }

  toCloseModalRequest() {
    this.modalRequest.classList.add('is-hidden');
    this.body.classList.remove('off-scroll');
    this.toSetDefaultActiveButtonFooter();
  }

  toShowActivebtnFooter(evt) {
    const isButton = evt.target.closest('.footer-button');
    if (!isButton) {
      return;
    }

    const listButtons = evt.currentTarget.querySelectorAll('.footer-button');
    listButtons.forEach(button => {
      button.children[0].classList.remove('active-icon');
      button.children[1].classList.remove('active-text');
    });

    isButton.children[0].classList.add('active-icon');
    isButton.children[1].classList.add('active-text');
  }

  toSetDefaultActiveButtonFooter() {
    const listButtons = this.footerMenu.querySelectorAll('.footer-button');
    listButtons.forEach(button => {
      button.children[0].classList.remove('active-icon');
      button.children[1].classList.remove('active-text');
    });

    this.btnHome.children[0].classList.add('active-icon');
    this.btnHome.children[1].classList.add('active-text');
  }
}

const interfaceApp = new Interface();

const ref = {
  body: 'body',

  selectSport: '#category',

  footerMenu: '.footer-menu',
  btnProfile: '.js-btn-profile',
  btnRequest: '.js-btn-request',
  btnHome: '.js-btn-home',

  modalRequest: '.request-modal',
  formRequest: '.request-form',
  switchAllDay: '.js-request-switch-allday',
  btnCancelRequest: '.js-request-btn-cancel',

  svgBtnFooter: '.footer-button-icons',
  textBtnFooter: '.footer-icon-text',
};

interfaceApp.setElements(ref);

export { interfaceApp };
