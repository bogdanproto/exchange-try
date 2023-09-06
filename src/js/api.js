class API {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.users = 'users/';
    this.sports = 'sports/';
    this.spots = 'spots/';
    this.equeipment = 'equeipment/';
    this.requests = 'requests/';
    this.objRequest = {
      owner: null,
      date: null,
      time: null,
      spot: null,
      owner_equipment: null,
      isshowphone: null,
      isautoaccept: null,
      user: null,
      user_time: null,
      user_equipment: [],
      user_message: null,
      isaccepted: null,
    };
    this.GET = {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    };
  }

  //---------------GET block----------------
  //get main User data
  async fetchUser(id) {
    const response = await fetch(this.BASE_URL + this.users + id);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }

  //get main User Sport category
  async fetchUsersSportCategory(sportsId) {
    const arrPromises = sportsId.map(async sportId => {
      const response = await fetch(this.BASE_URL + this.sports + sportId);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });

    return await Promise.all(arrPromises);
  }

  //get main User Equeipment
  async fetchUserEqpt(id) {
    try {
      const user = await this.fetchUser(id);
      const { equeipment } = user;

      const arrPromises = equeipment.map(async equeipmentId => {
        const response = await fetch(this.BASE_URL + this.equeipment + equeipmentId);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      });

      return await Promise.all(arrPromises);
    } catch (err) {
      console.log(err);
    }
  }

  //get all Spots
  async fetchSpots() {
    const response = await fetch(this.BASE_URL + this.spots);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }

  //get all proposal requets
  async getRequestsProposal() {
    const url = new URL(this.BASE_URL + this.requests);
    url.searchParams.append('user', null);

    const response = await fetch(url, this.GET);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const arrayRequests = await response.json();

    const arrUnicUser = arrayRequests
      .map(({ owner }) => owner)
      .filter((item, idx, arr) => arr.indexOf(item) === idx);

    const arrPromicesUsers = arrUnicUser.map(async item => {
      const response = await fetch(this.BASE_URL + this.users + item);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });

    const arrOwners = await Promise.all(arrPromicesUsers);

    const arrUnicEqpt = arrayRequests
      .flatMap(({ owner_equipment }) => owner_equipment)
      .filter((item, idx, arr) => arr.indexOf(item) === idx);

    const arrPromicesEqpt = arrUnicEqpt.map(async item => {
      const response = await fetch(this.BASE_URL + this.equeipment + item);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });

    const arrEqpt = await Promise.all(arrPromicesEqpt);

    return {
      requests: arrayRequests,
      owners: arrOwners,
      equeipments: arrEqpt,
    };
  }

  //---------POST block---------------

  async sendRequestToServer(obj) {
    const arrKey = Object.keys(this.objRequest);

    arrKey.forEach(key => {
      if (obj.hasOwnProperty(key)) {
        this.objRequest[key] = obj[key];
      }
    });

    const options = {
      method: 'POST',
      body: JSON.stringify(this.objRequest),
      headers: {
        'Content-type': 'application/json',
      },
    };

    const response = await fetch(this.BASE_URL + this.requests, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }
}

const serverAPI = new API('https://64f6ebac9d7754084952c5c5.mockapi.io/api/v1/');

export { serverAPI };
