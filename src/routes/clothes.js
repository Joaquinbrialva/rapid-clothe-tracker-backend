const router = require('express').Router();
const { getClothes, getClothe, registerClothe, registerClotheSale, deleteClothe } = require('../controllers/clothes');

router.get('/', getClothes);
router.get('/:clotheId', getClothe);
router.post('/', registerClothe);
router.post('/sold/:clotheId', registerClotheSale);
router.delete('/:clotheId', deleteClothe)

module.exports = router;