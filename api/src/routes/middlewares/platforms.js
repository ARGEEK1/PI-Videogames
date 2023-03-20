const { Router } = require("express");
const router = Router();
const { getPlatforms } = require("../controllers/getPlatforms");

router.get("/", async (req, res) => {
  try {
    const platforms = await getPlatforms();
    res.status(200).json(platforms);
  } catch (error) {
    res.status(404).json({ error: "estoy en la ruta de platforms" });
  }
});

module.exports = router;
