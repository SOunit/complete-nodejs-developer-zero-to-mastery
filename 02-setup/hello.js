// node hello.js test
// 0 = path to node
// 1 = hello.js
// 2 = test
const mission = process.argv[2];

if (mission === "learn") {
  console.log("learn");
} else {
  console.log(`not learn ${mission}`);
}
