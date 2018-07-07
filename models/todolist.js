const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todolistSchema = new Schema({
  item: { type: String, required: true, max: 100 },
  content: { type: String },
  add_date: { type: Date },
  limit_date: { type: Date }
});


todolistSchema.static('findByItem', function (item, callback) {
  return this.find({ item: item }, callback);
 });

//Export model
module.exports = mongoose.model('ToDoList', todolistSchema);
