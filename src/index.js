import { interfaceApp } from './js/interface';
import { serverAPI } from './js/api';

import flatpickr from 'flatpickr';

const USER = 2; // while I won't have user loginIn
const isDataLoaded = {
  ModalRequest: null,
};

document.addEventListener('DOMContentLoaded', loadMainData);
interfaceApp.footerMenu.addEventListener('click', handlerFooterMenu);
interfaceApp.requestMenu.addEventListener('click', handlerRequestMenu);

interfaceApp.formRequest.addEventListener('submit', submitRequest);
interfaceApp.switchAllDay.addEventListener('change', toChangeTimeSelect);
interfaceApp.btnCancelRequest.addEventListener('click', toCloseRequestForm);

async function loadMainData() {
  try {
    const user = await serverAPI.fetchUser(USER);
    const sportCategory = await serverAPI.fetchUsersSportCategory(user.sports);

    interfaceApp.changeProfileButton(user);
    interfaceApp.addSportSelector(sportCategory);
  } catch (err) {
    console.log(err);
  }
}

// ---------------footer menu handler----------------
async function handlerFooterMenu(evt) {
  const isButton = evt.target.closest('.footer-button');

  if (!isButton) {
    return;
  }

  if (isButton.classList.contains('js-btn-request')) {
    if (!isDataLoaded.ModalRequest) {
      try {
        interfaceApp.toShowModalRequest();
        const listSpots = await serverAPI.fetchSpots();
        const listUserEqpt = await serverAPI.fetchUserEqpt(USER);
        interfaceApp.addSpotsSelector(listSpots);
        interfaceApp.addEqptSelectorByUser(listUserEqpt);
        isDataLoaded.ModalRequest = true;
      } catch (err) {
        console.log(err);
      }
    } else {
      interfaceApp.toShowModalRequest();
    }
  } else if (isButton.classList.contains('js-btn-home')) {
    interfaceApp.toCloseModalRequest();
  }

  interfaceApp.toShowActivebtnFooter(evt);
}

// ---------------Request menu handler----------------
function handlerRequestMenu(evt) {
  interfaceApp.toShowRequestSection(evt);
}

// ---------------Form request services----------------
function toChangeTimeSelect(evt) {
  const isChecked = evt.currentTarget.checked;
  if (isChecked) {
    interfaceApp.toDisableTimeSelect();
  } else {
    interfaceApp.toEnableTimeSelect();
  }
}

function submitRequest() {}

function toCloseRequestForm() {
  interfaceApp.toCloseModalRequest();
}
