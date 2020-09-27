const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BemPromotora-Chalenge1',{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;