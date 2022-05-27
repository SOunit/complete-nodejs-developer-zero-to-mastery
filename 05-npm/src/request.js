const axios = require("axios");

axios
  .get("https://www.googlexxx.com/")
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then(() => {
    console.log("All done!");
  });
