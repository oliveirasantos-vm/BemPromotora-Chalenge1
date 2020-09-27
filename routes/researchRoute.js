const express = require('express');
const router = express.Router();

const researchRoute = require('../controllers/researchController');

router.get('/', researchRoute.homepage);

router.get('*', researchRoute.error404);

module.exports = router;