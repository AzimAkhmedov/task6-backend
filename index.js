const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Messages = require("./models");

const app = express();
app.use(express.json());
app.use(cors());
app.post("/", async (req, res) => {
  const { body, title, from, to, when } = req.body;
  let newMessage = new Messages({
    body,
    title,
    from,
    to,
    when,
  });
  await newMessage.save();
  return res.json(newMessage);
});
app.get("/:to", async (req, res) => {
  const to = req.params.to;
  const list = await Messages.find({ to });
  return res.json(list);
});
app.get("/sended/:from", async (req, res) => {
  const from = req.params.from;
  const list = await Messages.find({ from });
  return res.json(list);
});
const Start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://azahqwerty:kiUpXa5Mj14aPdHH@cluster0.ajslzdk.mongodb.net/?retryWrites=true&w=majority"
    );

    app.listen(5000, () => {
      console.log("App is running on 5000");
    });
  } catch (error) {
    console.log(error);
  }
};
Start();
