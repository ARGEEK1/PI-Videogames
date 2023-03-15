const { gamesApi } = require("./fnControllers");
const { Videogame, Genre } = require("../../db");

const getAllGames = async () => {
  let games = await gamesApi();

  const gamesDb = await Videogame.findAll({
    include: [
      {
        model: Genre,
        attributes: ["id", "name"],
        through: {
          attributes: [],
        }
      }
    ]
  });

  const allGames = gamesDb.concat(games);

  if (!allGames.length) throw Error("No results found");

  return allGames;
};

module.exports = { getAllGames };
