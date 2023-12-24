const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BatterySchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    postcode: {
      type: Number,
      required: true,
    },
    isReturned: {
      type: Number,
      required: true,
    },
    wattCapacity: {
      type: Number,
      required: true,
    },
    averageWattCapacity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Battery = mongoose.model('Batteries', BatterySchema);

module.exports = Battery;
