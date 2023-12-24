const HttpStatus = require('http-status-codes');

const batteryServices = require('../services/batteries');

/**
 * Get all batteries
 */
function fetchAll(req, res, next) {
  const { searchName, postCodeFrom, postCodeTo } = req.query;

  batteryServices
    .getAll(searchName, postCodeFrom, postCodeTo)
    .then((data) => {
      res.status(HttpStatus.StatusCodes.OK);
      res.json({ data });
    })
    .catch((err) => next(err));
}

/**
 * Create a new battery record
 */
function create(req, res, next) {
  const batteryObj = req.body;

  batteryServices
    .create(batteryObj)
    .then((data) => {
      res.status(HttpStatus.StatusCodes.OK);
      res.json({ data });
    })
    .catch((err) => next(err));
}

module.exports = {
  fetchAll,
  create,
};
