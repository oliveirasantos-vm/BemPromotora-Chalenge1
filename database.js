const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BemPromotora-Chalenge1', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;