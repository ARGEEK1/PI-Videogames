const { Router } = require("express");
const router = Router();
const { getGenres } = require('../controllers/getGenres');

router.get("/", async (req,res) => {
  try {
    const genres = await getGenres();
    res.status(200).json(genres);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;