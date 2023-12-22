const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BatterySchema = new Schema(
  {
    id: String,
    name: String,
    postcode: String,
    isReturned: Boolean,
    wattCapacity: Number,
    AverageWattCapacity: Number,
  },
  { timestamps: true }
);

const Battery = mongoose.model('Batteries', BatterySchema);

module.exports = Battery;
