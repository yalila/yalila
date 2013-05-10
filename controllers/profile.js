var crypto = require('crypto')
 , moment = require('moment')
 , config = require('../config')
 , libs = require('../libs')
 , models = require('../models');
moment.lang("es");

exports.homeGet = function( req, res ){
	function out(  ){
		var data = {};
		data.title = "Perfil -" + config.title;
		data.nav = libs.nav.getArray("profile");
		data.session = req.session;
		res.render('profile',{ data : data } );
	}
	return out( );
}