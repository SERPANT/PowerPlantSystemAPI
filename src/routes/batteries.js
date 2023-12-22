const { Router } = require('express');

const batteryServices = require('../controllers/batteries');

const router = Router();

/**
 * GET /api/batteries
 */
router.get('/', batteryServices.fetchAll);

/**
 * POST /api/batteries
 */
router.post('/', batteryServices.create);

module.exports = router;
