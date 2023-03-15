const { Videogame } = require("../../db");

const deleteGame = async (id) => {
  const regexIdDb =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

  if (regexIdDb.test(id)) {
    await Videogame.destroy({
      where: {
        id,
      },
    });
  }
};

module.exports = { deleteGame };
