const Battery = require('../modals/battery');

/**
 * Get all tasks along with their subtasks
 *
 * @returns : Array of tasks containing their subtasks
 */
const getAll = async () => {
  const batteries = await Battery.find({}, null, { sort: { name: 1 } });

  return batteries;
};

const create = async (batteryObj) => {
  let newBatter = new Battery(batteryObj);

  const record = await newBatter.save();

  return record;
};

module.exports = {
  getAll,
  create,
};
