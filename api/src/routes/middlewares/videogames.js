const { Router } = require("express");
const router = Router();
const { getAllGames } = require("../controllers/getAllGames");
const { getGameByName } = require("../controllers/getGameByName");
const { addGame } = require('../controllers/addGame');

router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const gameName = await getGameByName(name);
      res.status(200).json(gameName);
    } else {
      const videogames = await getAllGames();
      res.status(200).json(videogames);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, image, released, rating, description, platforms, genres } = req.body;
  try {
    const newGame = await addGame(
      name,
      image,
      released,
      rating,
      description,
      platforms,
      genres
    )
    res.status(201).send(newGame);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
