var crypto = require('crypto')
 , moment = require('moment')
 , config = require('../config')
 , libs = require('../libs')
 , models = require('../models');
moment.lang("es");

exports.homeGet = function( req, res ){
	function out(  ){
		var data = {};
		data.title = "Videotutoriales -" + config.title;
		data.nav = libs.nav.getArray("video-tutorials");
		data.session = req.session;
		res.render('Videotutorials',{ data : data } );
	}
	return out( );
}