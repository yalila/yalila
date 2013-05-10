var mongoose;
var db;
exports.setup = function(_mongoose,_db){
  mongoose = _mongoose;
  db = _db;


  var schema = mongoose.Schema({ 
    title: String,
    text: String,
    registered: Date,
    comments: [{ author_id: mongoose.Schema.Types.ObjectId, author_name: String, text: String, registered: Date, positive: Number, negative: Number }],
    author: { id: mongoose.Schema.Types.ObjectId, name: String },
    active: Boolean
  });
  var Questions = db.model('questions', schema);
  var Data = db.model('questions');
  return Data;
};