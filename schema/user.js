const { Schema, model } = require('mongoose');
const ObjectId = Schema.ObjectId;
const thisSchema = {};

const userAuth = new Schema({
  "_id": ObjectId,
  "id": String,
  "name": String,
  "phone": String,
  "credit": Number,
  "married": Boolean,
  "email": String
});

thisSchema.user_auth = model('user_auth', userAuth);

module.exports = thisSchema;