const express = require('express');
const router = express.Router();

router.use('/hello', (req, res) => res.json('HELLO WORLD'));

module.exports = router;
