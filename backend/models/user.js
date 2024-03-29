// schéma pour les utilisateurs
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },// interdit que deux utilisateurs aient le même mail
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);