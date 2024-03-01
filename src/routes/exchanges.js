const router = require('express').Router();
const { getPairs, setCurrencyExchange, editPairExchange } = require('../controllers/exchanges');

router.get('/', getPairs);
router.post('/', setCurrencyExchange);
router.put('/edit/:pairId', editPairExchange);

module.exports = router;