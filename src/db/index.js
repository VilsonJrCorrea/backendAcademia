const mongoose = require('mongoose');
function connectToDB() {
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
  console.log("DB connected with success!")
}
function createSchema(object) {
  return new mongoose.Schema(object);
}
function createModel(name, schema) {
  return new mongoose.model(name, schema);
}
module.exports = { connectToDB, createSchema, createModel };