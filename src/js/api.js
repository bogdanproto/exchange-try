class API {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.userPath = 'users/';
    this.sportsPath = 'sports/';
    this.spots = 'spots/';
    this.equeipment = 'equeipment/';
  }

  //get main User data
  async fetchUser(id) {
    const response = await fetch(this.BASE_URL + this.userPath + id);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }

  async fetchUsersSportCategory(sportsId) {
    const arrPromises = sportsId.map(async sportId => {
      const response = await fetch(this.BASE_URL + this.sportsPath + sportId);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });

    return await Promise.all(arrPromises);
  }

  async fetchUserEqpt(id) {
    try {
      const user = await this.fetchUser(id);
      const { equeipment } = user;

      const arrPromises = equeipment.map(async equeipmentId => {
        const response = await fetch(
          this.BASE_URL + this.equeipment + equeipmentId
        );
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

  async fetchSpots() {
    const response = await fetch(this.BASE_URL + this.spots);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }
}

const serverAPI = new API(
  'https://64f6ebac9d7754084952c5c5.mockapi.io/api/v1/'
);

export { serverAPI };

//get sport's category for select filtred by user
// async fetchUsersSportCategory(sportsId) {
//   const filter = sportsId
//     .map((id, idx, arr) =>
//       idx !== arr.length - 1 ? `id=${id}&` : `id=${id}`
//     )
//     .join('');

//   const response = await fetch(
//     this.BASE_URL + this.sportsPath + `?${filter}`
//   );

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   return await response.json();
// }
