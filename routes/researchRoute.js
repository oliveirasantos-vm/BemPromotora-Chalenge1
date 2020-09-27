const express = require('express');
const router = express.Router();

const researchController = require('../controllers/researchController');

router.get('/', researchController.homepage);

router.get('*', researchController.error404);

module.exports = router;