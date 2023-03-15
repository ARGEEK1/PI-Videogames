require("dotenv").config();
const axios = require("axios");
const { URL, API_KEY } = process.env;
const { Platform } = require("../../db");

const getPlatforms = async () => {
  let platformsApi = await axios.get(`${URL}platforms?key=${API_KEY}`);
  platformsApi = platformsApi.data.results;
  console.log(platformsApi)

  if (platformsApi) {
    platformsApi = platformsApi.map((plat) => {
      return {
        name: plat.name,
      };
    });

    platformsApi.forEach(async (plat) => {
      await Platform.findOrCreate({
        where: {
          name: plat.name,
        },
      });
    });
  }

  let platforms = await Platform.findAll();

  return platforms;
};

module.exports = { getPlatforms };
