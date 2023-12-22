/**
 * Get all tasks along with their subtasks
 *
 * @returns : Array of tasks containing their subtasks
 */
const getAll = async () => {
  return [
    {
      id: 'id-1',
      name: 'test-1',
      postcode: 'post-1',
      wattCapacity: '5W',
    },
    {
      id: 'id-2',
      name: 'test-2',
      postcode: 'post-2',
      wattCapacity: '5W',
    },
    {
      id: 'id-3',
      name: 'test-3',
      postcode: 'post-3',
      wattCapacity: '5W',
    },
    {
      id: 'id-4',
      name: 'test-4',
      postcode: 'post-4',
      wattCapacity: '5W',
    },
    {},
  ];
};

module.exports = {
  getAll,
};
