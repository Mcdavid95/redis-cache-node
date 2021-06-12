const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
  title: String,
  author: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const Article = model('Article', articleSchema);

module.exports = Article