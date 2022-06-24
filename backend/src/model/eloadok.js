const mongoose = require('mongoose');
const szekciok = require('./szekciok');

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
   //   section: {
   //      type: String,
   //      require: true,
   //   },
     szekciok: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Szekciok',
     }
}, {
   timeStamps: true
});

module.exports = mongoose.model('Eloadok', EloadokSchema);