import { Interface } from './js/interface';
import { exchangeAPI } from './js/api';

const interfaceMain = new Interface();

const ref = { btnProfile: '.js-profile', selectSport: '#category' };

document.addEventListener('DOMContentLoaded', toLoadMainData);

interfaceMain.setElements(ref);

function toLoadMainData() {
  exchangeAPI
    .fetchSportsCategory()
    .then(data => interfaceMain.addSportSelector(data))
    .catch(error => console.log(error));
}
