const mongoose = require('mongoose');

const IskolakSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        validate: {
          validator: function(v) {
            return /^[a-űA-Ű \-\.]{5,75}$/.test(v);
          }
        }
      },
     address: {
        type: String,
        require: true,
     },
}, {
   timeStamps: true
});

module.exports = mongoose.model('Iskolak', IskolakSchema);