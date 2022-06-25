const mongoose = require('mongoose');

const EloadoSchema = mongoose.Schema({
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
     presentationName: {
        type: String,
        required: true,
     },
   //   section: {
   //      type: String,
   //      required: true,
   //   },
     szekcio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Szekcio',
     }
}, {
   timeStamps: true
});

module.exports = mongoose.model('Eloado', EloadoSchema);