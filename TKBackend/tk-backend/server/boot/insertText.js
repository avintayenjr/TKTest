module.exports = function(app) {

	var jsonArr = require('../questions.json');

	var Question = app.models.Questions;

	Question.destroyAll();
		Question.upsert(jsonArr, function(err, object){
			if (err){
				return console.log(err);
			}	
		});
	console.log("Questions inserted successfully");
};

