// handle path diff of all OS
const path = require("path");

function getMessages(req, res) {
  // res.send("<h1>Messages!</h1>");
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // );

  res.render("messages.hbs", {
    title: "Messages to my friend",
    friend: "Jack",
  });
}

function postMessage(req, res) {
  res.send({ message: "update messages" });
}

module.exports = {
  getMessages,
  postMessage,
};
