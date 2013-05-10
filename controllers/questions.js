var crypto = require('crypto')
 , moment = require('moment')
 , config = require('../config')
 , libs = require('../libs')
 , models = require('../models');
moment.lang("es");

exports.homeGet = function( req, res ){
	function out(  ){
		var data = {};
		data.title = "Preguntas -" + config.title;
		data.nav = libs.nav.getArray("questions");
		data.questions = new Array();
		models.questions.find({ },{},{ limit: 20, sort:{ registered: -1 } }, function(err,rows){
			if( !err ){
				if( rows ){
					var items = new Array();
					rows.forEach(function(item){
						var objItem = {};
						objItem.id = item._id;
						objItem.title = item.title;
						objItem.text = item.text;
						objItem.author = item.author;
						objItem.registered = moment(item.registered).fromNow();
						objItem.comments = item.comments;
						items.push(objItem);
					});
					data.questions = items;
					res.render('questions',{ data : data } );
				}
				else{
					res.render('questions',{ data : data } );
				}
			}
			else{
				console.log(err);
			}
		});

		
	}
	return out( );
}