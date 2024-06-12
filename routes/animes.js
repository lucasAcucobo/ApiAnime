const express = require('express');
const router = express.Router();

const animeContoller = require('../controllers/animeController');

router.get('/', animeContoller.obtenerAnimes);
router.get('/:id', animeContoller.obtenerAnime);
router.post('/', animeContoller.crearAnime);
router.put('/:id', animeContoller.actualizarAnime);
router.delete('/:id', animeContoller.eliminarAnime);



module.exports = router;
