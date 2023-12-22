const { Router } = require('express');

const batteryServices = require('../controllers/batteries');

const router = Router();

/**
 * GET /api/batteries
 */
router.get('/', batteryServices.fetchAll);

module.exports = router;
