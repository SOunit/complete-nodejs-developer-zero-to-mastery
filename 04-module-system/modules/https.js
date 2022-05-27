const internals = require("./internals");
// const send = require("./internals/request");
// const read = require("./internals/response");

function makeRequest(url, data) {
  internals.request.send(url, data);
  return internals.response.read();
}

const responseData = makeRequest("https://www.google.com/", "hello");
console.log(responseData);
