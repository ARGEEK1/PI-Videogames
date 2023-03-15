const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;
const { Videogame } = require("../../db");
const { Op } = require("sequelize");

const getGameByName = async (name) => {
  const gameDb = await Videogame.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });

  const gameApi = await axios.get(
    `${URL}games?key=${API_KEY}&search=${name}`
  );

  const games = gameApi.data.results.map((game) => {
    return {
      id: game.id,
      name: game.name,
      image: game.background_image,
      released: game.released,
      rating: game.rating,
      genres: game.genres.map((g) => {
        return {
          id: g.id,
          name: g.name,
        };
      }),
    };
  })

  const allGames = [...gameDb, ...games];

  if (!allGames.length) throw Error("Games not found");

  return allGames;
};

module.exports = { getGameByName };
