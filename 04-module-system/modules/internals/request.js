function encrypt(data) {
  return "encrypted";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} data to ${url}`);
}

module.exports = { send };
