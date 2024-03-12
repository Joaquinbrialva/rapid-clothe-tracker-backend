const router = require('express').Router();
const { getClothes, getClothe, registerClothe, registerClotheSale, deleteClothe, updateClothe } = require('../controllers/clothes');

router.get('/', getClothes);
router.get('/:clotheId', getClothe);
router.post('/', registerClothe);
router.post('/sold/:clotheId', registerClotheSale);
router.patch('/:clotheId', updateClothe);
router.delete('/:clotheId', deleteClothe)

module.exports = router;