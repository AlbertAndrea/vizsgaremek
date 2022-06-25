const mongoose = require('mongoose');

const ResztvevoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
               return /^[a-űA-Ű \-\.]{5,75}$/.test(v);
               }
         }
     },
     school: {
        type: String,
        required: true,
     },
     presentation: {
        type: Boolean,
        required: true,
     }
}, {
   timeStamps: true
});

module.exports = mongoose.model('Resztvevo', ResztvevoSchema);