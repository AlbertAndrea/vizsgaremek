const mongoose = require('mongoose');

const EloadokSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        validate: {
            validator: function(v) {
            return /^[a-űA-Ű \-\.]{5,75}$/.test(v);
         }
     }
     },
     school: {
        type: String,
        require: true,
     },
     presentationName: {
        type: String,
        require: true,
     },
     section: {
        type: String,
        require: true,
     },
}, {
   timeStamps: true
});

module.exports = mongoose.model('Eloadok', EloadokSchema);