const { Router } = require("express");
const Videogame = require("../models/Videogame");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require("./middlewares/videogames");
const videogame_id = require("./middlewares/videogame_id");
const genres = require("./middlewares/genres");
const platforms = require("./middlewares/platforms");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogames);
router.use("/videogames", videogame_id);
router.use("/genres", genres);
router.use("/platforms", platforms);

module.exports = router;
