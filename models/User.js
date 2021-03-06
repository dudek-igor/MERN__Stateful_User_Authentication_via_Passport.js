const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add a email'],
  },
  password: {
    type: String,
    require: [true, 'Please add a password'],
    minlength: 6,
    // Didn't return password
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Match user password to hashed password in DB
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(`${enteredPassword}`, this.password);
};

module.exports = mongoose.model('User', UserSchema);
