const router = require('express').Router();

const clothesRouter = require('./clothes');

router.use('/clothes', clothesRouter);

module.exports = router;