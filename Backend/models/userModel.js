const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { // ✅ should be "email", not "emailAddress"
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});
module.exports = mongoose.model('User', userSchema);
