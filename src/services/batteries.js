const Battery = require('../modals/battery');
const { v4: uuidv4 } = require('uuid');

/**
 * Get all tasks along with their subtasks
 *
 * @returns : Array of tasks containing their subtasks
 */
const getAll = async (searchName, postCodeFrom, postCodeTo) => {
  const batteries = await Battery.find(
    {
      name: { $regex: searchName ? '^' + searchName : '.*', $options: 'i' },
      postcode: { $gte: postCodeFrom ?? -1, $lte: postCodeTo ?? 1000000 },
    },

    null,
    {
      sort: { name: 1 },
    }
  );

  return batteries;
};

/**
 * Create a new battery record
 *
 * @param {object} batteryObj: Battery object
 * @returns
 */
const create = async (batteryObj) => {
  let newBatter = new Battery({ ...batteryObj, id: uuidv4() });

  const record = await newBatter.save();

  return record;
};

module.exports = {
  getAll,
  create,
};
