const router = require('express').Router();
const { getPairs, setPairExchange, editPairExchange } = require('../controllers/exchanges');

router.post('/', setPairExchange);
router.get('/', getPairs);
router.put('/edit/:pairId', editPairExchange);

module.exports = router;