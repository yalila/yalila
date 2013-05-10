var mongoose = require('mongoose');
var config = require('../config');

var db = mongoose.createConnection( config.mongodb.url );

exports.users = require("./users").setup( mongoose, db );
exports.sms = require("./sms").setup( mongoose, db );
exports.questions = require("./questions").setup( mongoose, db );
exports.videotutorials = require("./videotutorials").setup( mongoose, db );