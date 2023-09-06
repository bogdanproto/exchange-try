import { interfaceApp } from './js/interface';
import { serverAPI } from './js/api';

const USER = 1; // while I won't have user loginIn

const isDataLoaded = {
  ModalRequest: null,
};

document.addEventListener('DOMContentLoaded', loadMainData);
interfaceApp.footerMenu.addEventListener('click', handlerFooterMenu);
interfaceApp.requestMenu.addEventListener('click', handlerRequestMenu);

// switch on kit listener for modal request form
function OnKitListnerModalRequest() {
  interfaceApp.switchAllDay.addEventListener('change', toChangeTimeSelect);
  interfaceApp.btnCancelRequest.addEventListener('click', toCloseModalRequest);
  interfaceApp.formRequest.addEventListener('submit', toSubmitRequest);
}

// switch off kit listener for modal request form
function offKitListnerModalRequest() {
  interfaceApp.switchAllDay.removeEventListener('change', toChangeTimeSelect);
  interfaceApp.btnCancelRequest.removeEventListener('click', toCloseModalRequest);
  interfaceApp.formRequest.removeEventListener('submit', toSubmitRequest);
}

// load main data to home page
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
  const isButton = interfaceApp.isFooterButton(evt);

  if (!isButton) {
    return;
  }

  // catch click on button Request
  if (isButton === interfaceApp.btnRequest && interfaceApp.isModalRequestActive()) {
    if (!isDataLoaded.ModalRequest) {
      try {
        const listSpots = await serverAPI.fetchSpots();
        const listUserEqpt = await serverAPI.fetchUserEqpt(USER);

        interfaceApp.addSpotsSelector(listSpots);
        interfaceApp.addEqptSelectorByUser(listUserEqpt);

        isDataLoaded.ModalRequest = true;
      } catch (err) {
        console.log(err);
      }
    }

    interfaceApp.toShowModalRequest();
    OnKitListnerModalRequest();

    // catch click on button Home
  } else if (isButton === interfaceApp.btnHome) {
    offKitListnerModalRequest();
    interfaceApp.toCloseModalRequest();
  }

  interfaceApp.toActivateBtnFooter(evt);
}

// ---------------Form request services----------------
function toSubmitRequest(evt) {
  evt.preventDefault();

  const { date, time, isshowphone, isautoaccept } = evt.currentTarget.elements;

  const spot = interfaceApp.inputModalSpot.getSelected().map(item => Number(item));
  const equipment = interfaceApp.inputModalEqpt.getSelected().map(item => Number(item));

  if (!equipment.length) {
    alert('Select eqpt');
    return;
  }

  const dataRequest = {
    owner: USER,
    date: date.value,
    time: time.value,
    spot: spot,
    owner_equipment: equipment,
    isshowphone: isshowphone.checked,
    isautoaccept: isautoaccept.checked,
  };

  serverAPI
    .sendRequestToServer(dataRequest)
    .then(resp => {
      console.log(resp);
      interfaceApp.toClearModalForm(evt);
      interfaceApp.toCloseModalRequest();
      offKitListnerModalRequest();
    })
    .catch(err => console.log(err));
}

function toCloseModalRequest() {
  interfaceApp.toCloseModalRequest();
  offKitListnerModalRequest();
}

function toChangeTimeSelect(evt) {
  const isChecked = evt.currentTarget.checked;
  if (isChecked) {
    interfaceApp.toDisableTimeSelect();
  } else {
    interfaceApp.toEnableTimeSelect();
  }
}

// ---------------Request menu handler----------------
async function handlerRequestMenu(evt) {
  const isButton = interfaceApp.isRequestButton(evt);

  if (!isButton) {
    return;
  }

  if (isButton === interfaceApp.btnProposal) {
    try {
      const objOfRequests = await serverAPI.getRequestsProposal();
      interfaceApp.addRequestsProposal(objOfRequests);
    } catch (err) {
      console.log(err);
    }
  }
  interfaceApp.toShowRequestSection(evt);
}
