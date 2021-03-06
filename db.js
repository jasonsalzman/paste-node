var config = require('config');
var util = require('util');
var mongoose = require('mongoose');

module.exports = function () {
	var mongodb = process.env.MONGOLAB_URI || 'mongodb://localhost/paste';
	mongoose.connect(mongodb);

	mongoose.connection.once('open', function () {
		util.log('MongoDB connection open');
	});

	mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

	return mongoose.connection;
}
