const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jscode:JScode123456@cluster.7uao3.gcp.mongodb.net/database?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.Promise = global.Promise; 

module.exports = mongoose;