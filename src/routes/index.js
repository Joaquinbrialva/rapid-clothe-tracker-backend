const router = require('express').Router();

const clothesRouter = require('./clothes');
const exchangesRouter = require('./exchanges');

router.use('/clothes', clothesRouter);
router.use('/currency', exchangesRouter);

module.exports = router;