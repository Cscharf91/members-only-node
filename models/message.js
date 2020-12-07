const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = mongoose.model(
  "Message",
  new Schema({
    username: { type: String, required: true },
    title: { type: String, required: true, maxlength: 40 },
    message: { type: String, required: true },
    date: { type: Date, requred: true }
  })
)

module.exports = Message;