const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;

const gamesApi = async () => {
  let games = [];

  let apiGames = await axios.get(`${URL}games?key=${API_KEY}&page_size=40`);

  for (let i = 0; i < 3; i++) {
    games.push(...apiGames.data.results);
    apiGames = await axios(apiGames.data.next);
  }

  let dataApi = games.map((game) => {
    return {
      id: game.id,
      name: game.name,
      image: game.background_image,
      released: game.released,
      rating: game.rating,
      genres: game.genres.map((g) => {
        return {
          id: g.id,
          name: g.name
        };
      })
    };
  });

  return dataApi;
};

module.exports = { gamesApi };
