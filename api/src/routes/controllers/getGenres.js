require("dotenv").config();
const axios = require("axios");
const { URL, API_KEY } = process.env;
const { Genre } = require("../../db");

const getGenres = async () => {
  let genresApi = await axios.get(`${URL}genres?key=${API_KEY}`);
  genresApi = genresApi.data.results;

  if (genresApi) {
    genresApi = genresApi.map((genr) => {
      return {
        name: genr.name,
      };
    });

    genresApi.forEach(async (genr) => {
      await Genre.findOrCreate({
        where: {
          name: genr.name,
        },
      });
    });
  };

  let genres = await Genre.findAll();

  return genres;
};

module.exports = { getGenres };
