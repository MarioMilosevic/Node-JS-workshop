const { Router } = require("express");

const messagesRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

messagesRouter.get("/", (req, res) => {
  res.render("../views/index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

messagesRouter.get("/new", (req, res) => {
  res.render("../views/new.ejs", {});
});

messagesRouter.post("/new", (req, res) => {
  const { messageText, messageAuthor } = req.body;
  messages.push({
    text: messageText,
    user: messageAuthor,
    added: new Date(),
  });
  messages.push({ text: messageText, user: messageAuthor, added: new Date() });

  res.redirect("/");
});

module.exports = messagesRouter;
