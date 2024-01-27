const router = require('express').Router();
const { getClothes, getClothe, createClothe } = require('../controllers/clothes');

router.get('/', getClothes);
router.get('/:clotheId', getClothe);
router.post('/', createClothe);

module.exports = router;