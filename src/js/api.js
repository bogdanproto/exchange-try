import axios from 'axios';

class API {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.userPath = 'user/';
    this.sportsPath = 'sports/';
  }

  //get main User data
  async fetchUser(id) {
    try {
      const response = await axios.get(this.BASE_URL + this.userPath + id);
      return await response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  //get sport's category for select filtred by user
  async fetchUsersSportCategory(sportsId) {
    const filter = sportsId
      .map((id, idx, arr) =>
        idx !== arr.length - 1 ? `id=${id}&` : `id=${id}`
      )
      .join('');
    try {
      const response = await axios.get(
        this.BASE_URL + this.sportsPath + `?${filter}`
      );
      return await response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}

const exchangeAPI = new API('http://localhost:3000/');

export { exchangeAPI };
