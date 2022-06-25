const mongoose = require('mongoose');

const SzekcioSchema = mongoose.Schema({
    sectionName: {
         type: String,
         required: true,
         validate: {
            validator: function(v) {
               return /^[a-űA-Ű \-\.]{5,25}$/.test(v);
            }
         }
     },
     section_leader: {
        type: String,
        required: true,
     },
}, {
   timeStamps: true
});

module.exports = mongoose.model('Szekcio', SzekcioSchema);