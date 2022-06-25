const mongoose = require('mongoose');

const IskolaSchema = mongoose.Schema({
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

module.exports = mongoose.model('Iskola', IskolaSchema);