class API {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.userPath = 'user/';
    this.sportsPath = 'sports/';
  }

  //get main User data
  async fetchUser(id) {
    const response = await fetch(this.BASE_URL + this.userPath + id);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }

  //get sport's category for select filtred by user
  async fetchUsersSportCategory(sportsId) {
    const filter = sportsId
      .map((id, idx, arr) =>
        idx !== arr.length - 1 ? `id=${id}&` : `id=${id}`
      )
      .join('');

    const response = await fetch(
      this.BASE_URL + this.sportsPath + `?${filter}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }
}

const serverAPI = new API('http://localhost:3000/');

export { serverAPI };
