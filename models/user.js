const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    membership: { type: Boolean }
  })
)

module.exports = User;