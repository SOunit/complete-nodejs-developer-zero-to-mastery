const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  { id: 0, name: "Jack" },
  { id: 1, name: "Bec" },
  { id: 2, name: "Kevin" },
];

server.on("request", (req, res) => {
  // /friends/0 => ['', "friends", "0"]
  const items = req.url.split("/");
  console.log(items);

  if (items[1] === "friends") {
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (items.length === 3) {
      const friendIndex = +items[2];
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");

    res.write("<h1>Messages</h1>");
    res.write("<p>message</p>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

// 127.0.0.1 => localhost
server.listen(PORT, () => {
  console.log(`listen on ${PORT}`);
});
