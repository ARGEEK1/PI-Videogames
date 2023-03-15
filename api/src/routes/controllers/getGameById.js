const axios = require("axios");
require("dotenv").config();
const { URL, API_KEY } = process.env;
const { Videogame, Genre, Platform } = require("../../db");

const getGameById = async (id) => {
  const regexIdApi = /^\d+$/;
	const regexIdDb = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

	if (!regexIdApi.test(id) && !regexIdDb.test(id)) throw Error("Format not valid api");
	if (!regexIdDb.test(id) && !regexIdApi.test(id)) throw Error("Format not valid data base");

  if (regexIdDb.test(id)) {
    const gameDb = await Videogame.findByPk(id, {
      include: [
        {
          model: Platform,
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
        },
        {
          model: Genre,
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
          
        },
      ]
    });
    if (!gameDb) throw Error("Game not found");
    return gameDb;
  } 
  
  if (regexIdApi.test(id)) {
    const gameApi = await axios.get(`${URL}games/${id}?key=${API_KEY}`);
    return {
      id: gameApi.data.id,
      name: gameApi.data.name,
      image: gameApi.data.background_image,
      released: gameApi.data.released,
      rating: gameApi.data.rating,
      description: gameApi.data.description,
      platforms: gameApi.data.platforms.map((p) => {
        return {
          id: p.platform.id,
          name: p.platform.name,
        };
      }),
      genres: gameApi.data.genres.map((g) => {
        return {
          id: g.id,
          name: g.name,
        };
      })
    };
  };
};

module.exports = { getGameById };
