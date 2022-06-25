const mongoose = require('mongoose');

const SzallasSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
     },
     address: {
        type: String,
        required: true,
     },
}, {
    timeStamps: true
 });

module.exports = mongoose.model('Szallas', SzallasSchema);