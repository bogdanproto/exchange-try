import SlimSelect from 'slim-select';
import flatpickr from 'flatpickr';

class Interface {
  constructor() {
    (this.sportCategory = new SlimSelect({
      select: '#category',
      settings: {
        showSearch: false,
      },
    })),
      (this.inputModalSpot = new SlimSelect({
        select: '#spot-select',
        settings: {
          showSearch: false,
        },
      })),
      (this.inputModalEqpt = new SlimSelect({
        select: '#equipment-select',
        settings: {
          showSearch: false,
        },
      })),
      (this.inputModalDate = flatpickr('#date-picker', {
        disableMobile: 'true',
      })),
      (this.inputModalTime = flatpickr('#time-picker', {
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

  // ------ markUp functions service --------
  addSportSelector(arr) {
    const markUp = arr.map(({ sport, id }) => {
      return {
        text: sport.toUpperCase(),
        value: id,
      };
    });
    this.sportCategory.setData(markUp);
  }

  changeProfileButton(dataUser) {
    const { name, photo } = dataUser;
    const markUp = `<img class="footer-button-img" src="${photo}" alt="" width="28" height="28">
              <span class="footer-icon-text">${name.toUpperCase()}</span>`;

    this.btnProfile.innerHTML = '';
    this.btnProfile.insertAdjacentHTML('beforeend', markUp);
  }

  addSpotsSelector(arr) {
    const markUp = arr.map(({ spot, id }) => {
      return {
        text: spot.toUpperCase(),
        value: id,
      };
    });
    this.inputModalSpot.setData(markUp);
  }

  addEqptSelectorByUser(arr) {
    const markUp = arr.map(({ item, id }) => {
      return {
        text: item,
        value: id,
      };
    });
    this.inputModalEqpt.setData(markUp);
  }

  addRequestsProposal(obj) {
    const markUp = obj.requests
      .map(({ owner }) => {
        const nameOwner = obj.owners.find(item => Number(item.id) === Number(owner));

        return `<li class="request-goride-item">
            <div class="request-goride-card">
              <div class="request-goride-about">
                <div class="request-goride-profile">
                  <img class="request-goride-profile-photo"
                    src="./img/temp/profile.jpg"
                    alt="profile"
                    width="40"
                    height="40"/>
                  <div class="request-goride-profile-info">
                    <ul class="list">
                      <li>
                        <span class="request-goride-profile-name">${nameOwner.name} ${nameOwner.surname}</span
                        >
                      </li>
                      <li>
                        <span class="request-goride-profile-friends"
                          >3 mutual friends</span
                        >
                      </li>
                      <li>
                        <span class="request-goride-profile-experience">
                          8 years experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="request-goride-date-location">
                  <span class="request-goride-date">07.09.2023 10.00</span>
                  <span class="request-goride-location">Wissant</span>
                </div>
              </div>
              <div class="request-goride-card-equipment">
                <div class="request-goride-card-equipment-title">
                  <span class="request-goride-card-equipment-text"
                    >For exchange</span
                  >
                </div>
                <span class="request-goride-card-equipment-list"
                  >Core XR 12 2022, Core Fusion 136 2021
                </span>
              </div>
            </div>
          </li>`;
      })
      .join('');
    this.proposalList.insertAdjacentHTML('beforeend', markUp);
  }
  // micro services interface

  toClearModalForm(evt) {
    evt.target.reset();
    this.inputModalEqpt.setSelected([]);
    this.inputModalSpot.setSelected('1');
  }

  isFooterButton(evt) {
    return evt.target.closest('.footer-button');
  }

  isRequestButton(evt) {
    return evt.target.closest('.request-menu-button');
  }

  isModalRequestActive() {
    return this.modalRequest.classList.contains('is-hidden');
  }

  toDisableTimeSelect() {
    this.inputModalTime.element.disabled = true;
    this.inputModalTime.element.value = 'allday';
  }

  toEnableTimeSelect() {
    interfaceApp.inputModalTime.element.disabled = false;
    interfaceApp.inputModalTime.element.value = '12:00';
  }

  toShowModalRequest() {
    this.modalRequest.classList.remove('is-hidden');
    this.requestMenu.classList.add('is-hidden');
    this.body.classList.add('off-scroll');
  }

  toCloseModalRequest() {
    this.modalRequest.classList.add('is-hidden');
    this.body.classList.remove('off-scroll');
    this.requestMenu.classList.remove('is-hidden');
    this.toSetDefaultActiveButtonFooter();
  }

  // activate button footer menu
  toActivateBtnFooter(evt) {
    const isButton = this.isFooterButton(evt);

    if (!isButton) {
      return;
    }

    const listButtons = this.footerMenu.querySelectorAll('.footer-button');
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

  // to activate section of requests by button
  toShowRequestSection(evt) {
    const isButton = evt.target.closest('.request-menu-button');

    if (!isButton) {
      return;
    }

    const listButtons = this.requestMenu.querySelectorAll('.request-menu-button');
    const listSections = document.querySelectorAll('main > .request-section-common');

    listButtons.forEach(button => {
      button.classList.remove('active-btn');
    });
    listSections.forEach(section => {
      section.classList.add('is-hidden');
    });

    isButton.classList.add('active-btn');

    if (isButton.classList.contains('js-btn-goride')) {
      this.sectionGoride.classList.remove('is-hidden');
    } else if (isButton.classList.contains('js-btn-proposal')) {
      this.sectionProposal.classList.remove('is-hidden');
    } else if (isButton.classList.contains('js-btn-pending')) {
      this.sectionPending.classList.remove('is-hidden');
    }
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

  requestMenu: '.request-menu-list',
  btnGoride: '.js-btn-goride',
  btnProposal: '.js-btn-proposal',
  btnPending: '.js-btn-pending',

  sectionGoride: '.request-goride',
  sectionProposal: '.request-proposal',
  sectionPending: '.request-pending',
  proposalList: '.js-proposal-list',

  modalRequest: '.request-modal',
  formRequest: '.request-form',
  switchAllDay: '.js-request-switch-allday',
  btnCancelRequest: '.js-request-btn-cancel',

  svgBtnFooter: '.footer-button-icons',
  textBtnFooter: '.footer-icon-text',
};

interfaceApp.setElements(ref);

export { interfaceApp };
