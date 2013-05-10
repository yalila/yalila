var crypto = require('crypto')
 , moment = require('moment')
 , config = require('../config')
 , libs = require('../libs')
 , models = require('../models');
moment.lang("es");


/**
 * Load login template form
 */
exports.loginGet = function(req, res){
	function out(  ){
		res.render('login',{ title : 'Iniciar sesion', redirect: req.query.redirect } );
	}
	return out( );
}

/**
 * Validate user and create session
 * Redirect to login or home
 */
exports.loginPost = function(req, res){
	function out(  ){
		var post = req.body;
		models.users.findOne({ email: post.email, password: crypto.createHash('md5').update(post.password).digest("hex") }, function(err,row){
			if( !err ){
				if( row ){
					req.session.user_id = row._id;
					req.session.user_name = row.name;
					req.session.user_range = row.range;
					res.redirect(post.redirect);
				}
				else{
					console.log(err);
					res.redirect('/login');
				}
			}
		});
	}
	return out( );
}

exports.logoutGet = function(req, res){
	function out(  ){
		req.session.destroy(function(){});
		res.redirect('/login');
	}
	return out( );
}

exports.homeGet = function( req, res ){
	function out(  ){
		var data = {};
		data.title = config.title;
		data.nav = libs.nav.getArray("");
		res.render('index',{ data : data } );
	}
	return out( );
}