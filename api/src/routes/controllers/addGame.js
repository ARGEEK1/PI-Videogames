const { Videogame, Genre, Platform } = require("../../db");
const { Op } = require("sequelize");

const addGame = async (
  name,
  image,
  released,
  rating,
  description,
  platforms,
  genres
) => {

  if (!name || !image || !description || !platforms || !genres) {
    throw Error("Missing data");
  }

  let [newGame, boolean] = await Videogame.findOrCreate({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    defaults: {
      name,
      image,
      released,
      rating,
      description,
    },
  });

  if (!boolean) throw Error("The game already exists");

  await platforms.split(",").forEach(async (Platf) => {
    let newPlatform = await Platform.findOne({ where: { name: Platf } });
    if (!newPlatform) newPlatform = await Platform.create({ name: Platf });
    await newGame.addPlatform(newPlatform);
  });

  await genres.split(",").forEach(async (genr) => {
    let newGenre = await Genre.findOne({ where: { name: genr } });
    if (!newGenre) newGenre = await Genre.create({ name: genr });
    await newGame.addGenre(newGenre);
  });

  return { ...newGame.dataValues, platforms: platforms, genres: genres };
};

module.exports = { addGame };
