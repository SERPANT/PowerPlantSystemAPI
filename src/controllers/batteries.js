const HttpStatus = require('http-status-codes');

const batteryServices = require('../services/batteries');

/**
 * Get all tasks
 */
function fetchAll(_, res, next) {
  batteryServices
    .getAll()
    .then((data) => {
      res.status(HttpStatus.StatusCodes.OK);
      res.json({ data });
    })
    .catch((err) => next(err));
}

module.exports = {
  fetchAll,
};
