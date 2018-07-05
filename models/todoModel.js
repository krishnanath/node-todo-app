var mongoose = require('mongoose');
const { MongoClient } = require("mongodb");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
})
var Todos = mongoose.model('Todos', todoSchema);
module.exports = Todos;