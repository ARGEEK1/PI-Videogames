const { Router } = require("express");
const router = Router();
const { getGameById } = require("../controllers/getGameById");
const { deleteGame } = require("../controllers/deleteGame");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const videogame = await getGameById(id);
    res.status(200).json(videogame);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteGame(id);
    res.status(200).send("Game deleted");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
