function getMessages(req, res) {
  res.send("<h1>Messages!</h1>");
}

function postMessage(req, res) {
  res.send({ message: "update messages" });
}

module.exports = {
  getMessages,
  postMessage,
};
