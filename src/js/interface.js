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
    console.log(obj);
    const { requests, unicOwners, unicEqueipments, unicSpots } = obj;
    const markUp = requests
      .map(({ owner, date, time, owner_equipment, spot }) => {
        const user = unicOwners.find(item => Number(item.id) === Number(owner));
        const userEqpts = unicEqueipments
          .filter(item => owner_equipment.includes(Number(item.id)))
          .map(id => id.item)
          .join(', ');
        const userSpots = unicSpots
          .filter(item => spot.includes(Number(item.id)))
          .map(id => id.spot)
          .join(', ');

        return ` <li class="request-proposal-item">
            <div class="request-proposal-card">
              <div class="request-proposal-about">
                <div class="request-proposal-profile">
                  <img
                    class="request-proposal-profile-photo"
                    src="${user.photo}"
                    alt="profile"
                    width="40"
                    height="40"
                  />
                  <div class="request-proposal-profile-info">
                    <ul class="list">
                      <li>
                        <span class="request-proposal-profile-name">${user.name} ${user.surname}
                        </span>
                      </li>
                      <li>
                        <span class="request-proposal-profile-friends">3 mutual friends</span>
                      </li>
                      <li>
                        <span class="request-proposal-profile-experience"> 8 years experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="request-proposal-date-location">
                  <span class="request-proposal-date">${date} ${time.toUpperCase()}</span>
                  <span class="request-proposal-location">${userSpots}</span>
                </div>
              </div>
              <div class="request-proposal-card-equipment">
                <div class="request-proposal-card-equipment-title">
                  <span class="request-proposal-card-equipment-text">For exchange</span>
                </div>
                <span class="request-proposal-card-equipment-list">${userEqpts}
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
    return !this.modalRequest.classList.contains('is-hidden');
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
    const clickButton = this.isFooterButton(evt);

    const currentButtonIcon = this.footerMenu.querySelector('.active-icon');
    const currentButtonText = this.footerMenu.querySelector('.active-text');

    currentButtonIcon.classList.remove('active-icon');
    currentButtonText.classList.remove('active-text');

    clickButton.children[0].classList.add('active-icon');
    clickButton.children[1].classList.add('active-text');
  }

  toSetDefaultActiveButtonFooter() {
    const currentButtonIcon = this.footerMenu.querySelector('.active-icon');
    const currentButtonText = this.footerMenu.querySelector('.active-text');

    currentButtonIcon.classList.remove('active-icon');
    currentButtonText.classList.remove('active-text');

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
