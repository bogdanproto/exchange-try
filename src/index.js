import { interfaceApp } from './js/interface';
import { serverAPI } from './js/api';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import SlimSelect from 'slim-select';

const inputdate = document.querySelector('#datetime-picker');
console.log(inputdate);
flatpickr('#datetime-picker', {});

new SlimSelect({
  select: '#spot-select',
  settings: {
    showSearch: false,
  },
});

new SlimSelect({
  select: '#equipment-select',
  settings: {
    showSearch: false,
  },
});

const USER = 1; // while I won't have user loginIn

const ref = { btnProfile: '.js-profile', selectSport: '#category' };
interfaceApp.setElements(ref);

document.addEventListener('DOMContentLoaded', loadMainData);

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
