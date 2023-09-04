import { interfaceApp } from './js/interface';
import { serverAPI } from './js/api';

import flatpickr from 'flatpickr';

const USER = 1; // while I won't have user loginIn

document.addEventListener('DOMContentLoaded', loadMainData);

interfaceApp.switchAllDay.addEventListener('change', toChangeTimeSelect);
interfaceApp.footerMenu.addEventListener('click', handlerFooterMenu);

interfaceApp.formRequest.addEventListener('submit', submitRequest);
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

function handlerFooterMenu(evt) {
  const isButton = evt.target.closest('.footer-button');

  if (!isButton) {
    return;
  }

  if (isButton.classList.contains('js-btn-request')) {
    interfaceApp.toShowModalRequest();
  } else if (isButton.classList.contains('js-btn-home')) {
    interfaceApp.toCloseModalRequest();
  }

  interfaceApp.toShowActivebtnFooter(evt);
}

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
