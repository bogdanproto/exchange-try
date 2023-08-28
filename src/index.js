import { Interface } from './js/interface';
import { exchangeAPI } from './js/api';

const USER = 1; // while I won't have user loginIn

const interfaceMain = new Interface();

const ref = { btnProfile: '.js-profile', selectSport: '#category' };
interfaceMain.setElements(ref);

// document.addEventListener('DOMContentLoaded', loadMainData);

function loadMainData() {
  exchangeAPI
    .fetchUser(USER)
    .then(data => {
      exchangeAPI
        .fetchUsersSportCategory(data.sports)
        .then(data => interfaceMain.addSportSelector(data))
        .catch(error => console.log(error));
      interfaceMain.changeProfileButton(data);
    })
    .catch(error => console.log(error));
}
