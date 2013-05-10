var nav_array = new Array();

var obj_news = {};
obj_news.text = "Noticias";
obj_news.href = "news";
obj_news.class = "none";
nav_array.push(obj_news);

var obj_questions = {};
obj_questions.text = "Preguntas";
obj_questions.href = "questions";
obj_questions.class = "none";
nav_array.push(obj_questions);

var obj_videotutorials = {};
obj_videotutorials.text = "Videotutoriales";
obj_videotutorials.href = "video-tutorials";
obj_videotutorials.class = "none";
nav_array.push(obj_videotutorials);

var obj_profile = {};
obj_profile.text = "Perfil";
obj_profile.href = "profile";
obj_profile.class = "none";
nav_array.push(obj_profile);

exports.getArray = function( href ){
	for(i=0; i<nav_array.length;i++){
		if( nav_array[i].href == href  ){
			nav_array[i].class = "active";
		}
		else{
			nav_array[i].class = "none";
		}
	}
	return nav_array;
}