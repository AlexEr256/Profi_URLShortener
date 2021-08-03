const express = require('express');
const router = express.Router();

const UrlController = require('../Controllers/UrlController');

const UrlCtrl = new UrlController();

router.post('/', UrlCtrl.shortUrl);
router.get('/:url', UrlCtrl.redirect);



module.exports = router;