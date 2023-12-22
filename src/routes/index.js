const { Router } = require('express');

const batteryRoutes = require('./batteries');

const router = Router();

router.use('/batteries', batteryRoutes);

// NOTE: Health check route
router.get('/', (req, res) => {
  res.status(200).send('ok!!!');
});

module.exports = router;
