var models
, websocket
, string = require('string')
, moment = require('moment');

moment.lang("es");
exports.setup = function( _models, _websocket ){
	models = _models;
	websocket = _websocket;
};

function webSocketSendData (data,type){
	websocket.sockets.emit(type,data);
}


exports.webSocketStart = function (data){
	function out(){
		data.on("new_message", webSocketSendData);
	}
  return out();
}

/**
 * Load login template form
 */
exports.questionsAdd = function(req, res){
	function out(  ){	
		var author = {};
		author.id = req.session.user_id;
		author.name = req.session.user_name;

		var row = new models.questions;
		row.title = req.body.title;
		row.text = string(req.body.text).stripTags().s;
		row.registered = new Date();
		row.author = author;
		row.active = true;
		row.save(function(err){
			if(err){
				console.log(err);
				res.send('{"status":false,"message":"'+err+'"}');
			}
			else{
				var obj = {};
				obj.id = row._id;
				obj.title = row.title;
				obj.text = row.text;
				obj.registered = moment(row.registered).fromNow();
				obj.author = row.author;
				webSocketSendData(obj,'question_add');
				res.send('{"status":true}');
			}
		});
	}
	return out( );
}