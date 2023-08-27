import axios from 'axios';

class API {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    // this.options = options;
  }

  async fetchSportsCategory() {
    try {
      const response = await axios.get(this.BASE_URL);
      return await response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  //   async fetchMoreImages() {
  //     this.options.params.page += 1;

  //     const response = await axios.get(this.BASE_URL, this.options);
  //     return await response.data;
  //   }
}

const exchangeAPI = new API('http://localhost:3000/sports/');

export { exchangeAPI };
