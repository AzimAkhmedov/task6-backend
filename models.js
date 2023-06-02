const { Schema, model } = require("mongoose");

const Message = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  when: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
});
module.exports = model("Message", Message);
